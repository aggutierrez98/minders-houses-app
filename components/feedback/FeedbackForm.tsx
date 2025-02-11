import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useFeedback } from "@/hooks/useFeedback";
export default function FeedbackForm() {
  const { isSubmitting, onSubmit, form } = useFeedback();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="feedbackType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a feedback type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="General">General</SelectItem>
                  <SelectItem value="Bug">Bug</SelectItem>
                  <SelectItem value="DataError">Data Error</SelectItem>
                  <SelectItem value="Suggestion">Suggestion</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select the type of feedback you&apos;d like to provide.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Feedback</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what you think..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please provide your feedback in detail. Max 1000 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="entityId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entity ID (Optional)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter entity ID if applicable"
                />
              </FormControl>
              <FormDescription>
                If your feedback is about a specific item, enter its ID here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </Form>
  );
}
