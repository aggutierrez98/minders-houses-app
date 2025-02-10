import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { submitFeedback } from "@/services/feedback";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAmplitude from "./useAmplitude";

const feedbackSchema = z.object({
  feedbackType: z.enum(["General", "Bug", "DataError", "Suggestion"], {
    required_error: "Please select a feedback type.",
  }),
  feedback: z
    .string()
    .min(1, "Feedback is required")
    .max(1000, "Feedback must be less than 1000 characters"),
  entityId: z.string().uuid().nullable(),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export const useFeedback = () => {
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedbackType: undefined,
      feedback: "",
      entityId: null,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackAmplitudeEvent } = useAmplitude();

  async function onSubmit(data: FeedbackFormValues) {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });

    const result = await submitFeedback(formData);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback!",
      });

      trackAmplitudeEvent({
        event_type: `Feedback sent`,
        event_properties: {
          feedbackType: data.feedbackType,
          entityId: data.entityId,
        },
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description:
          result.error || "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    }
  }

  return {
    onSubmit,
    isSubmitting,
    form,
  };
};
