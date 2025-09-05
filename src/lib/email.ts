"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  // Validate environment variables
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  if (!process.env.RESEND_FROM_EMAIL) {
    throw new Error("RESEND_FROM_EMAIL environment variable is not set");
  }
  if (!process.env.YOUR_EMAIL) {
    throw new Error("YOUR_EMAIL environment variable is not set");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.YOUR_EMAIL],
      subject: `New Contact Form Submission from ${emailFormData.firstName} ${emailFormData.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${emailFormData.firstName} ${emailFormData.lastName}</p>
        <p><strong>Email:</strong> ${emailFormData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${emailFormData.message}</p>
      `
    });

    if (error) {
      // Log the detailed error on the server
      console.error("Resend API error:", error);
      // Throw a more generic error to the client
      throw new Error("Failed to send email. Please try again later.");
    }
    
    return data;

  } catch (e) {
    // Catch any other exceptions during the process
    console.error("An unexpected error occurred:", e);
    throw new Error("An unexpected error occurred while sending the email.");
  }
};