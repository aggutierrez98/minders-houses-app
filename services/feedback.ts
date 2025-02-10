"use server"
import { z } from "zod"

const feedbackSchema = z.object({
    feedbackType: z.enum(["General", "Bug", "DataError", "Suggestion"]),
    feedback: z.string().min(1, "Feedback is required").max(1000, "Feedback must be less than 1000 characters"),
    entityId: z.string().uuid().nullable(),
})

export async function submitFeedback(formData: FormData) {
    const { success, error, data } = feedbackSchema.safeParse({
        feedbackType: formData.get("feedbackType"),
        feedback: formData.get("feedback"),
        entityId: formData.get("entityId") || null,
    })

    if (!success) return { success, errors: error.flatten().fieldErrors }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WIZARD_API_URL}/feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) throw new Error("Failed to submit feedback")
        return { success: true }
    } catch (error) {
        console.error("Error submitting feedback:", error)
        return { success: false, error: "Failed to submit feedback. Please try again." }
    }
}

