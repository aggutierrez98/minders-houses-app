"use client";

import FeedbackForm from "@/components/feedback/FeedbackForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>
            We value your input! Please share your thoughts about the
            application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FeedbackForm />
        </CardContent>
      </Card>
    </div>
  );
}
