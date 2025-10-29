"use client";

import { Button } from "@/components/contactui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/contactui/card";
import { Input } from "@/components/contactui/input";
import { Textarea } from "@/components/contactui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/contactui/form";
import { z } from 'zod';
import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";
import { useState, useTransition } from "react";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmissionStatus(null);
    startTransition(async () => {
      try {
        await send(values);
        setSubmissionStatus({ success: true, message: "Your message has been sent successfully!" });
        form.reset(); 
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmissionStatus({ success: false, message: "Failed to send message. Please try again later." });
      }
    });
  }

  return (
    <Card className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-xl border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-shadow">
      <CardHeader className="text-center px-4 sm:px-6 py-4 sm:py-6">
        <CardTitle className="text-2xl sm:text-3xl text-gray-800">Contact Us</CardTitle>
        <CardDescription className="mx-auto text-sm sm:text-base text-gray-600">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your first name" 
                        {...field} 
                        disabled={isPending}
                        className="h-10 sm:h-11 bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-200 placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your last name" 
                        {...field} 
                        disabled={isPending}
                        className="h-10 sm:h-11 bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-200 placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Email" 
                        {...field} 
                        disabled={isPending}
                        className="h-10 sm:h-11 bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-200 placeholder-gray-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here"
                        className="min-h-[120px] sm:min-h-[160px] resize-none bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-200 placeholder-gray-500"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               {submissionStatus && (
                <div className={`text-sm p-3 rounded-md ${
                  submissionStatus.success 
                    ? 'text-emerald-800 bg-emerald-50 border border-emerald-100' 
                    : 'text-rose-800 bg-rose-50 border border-rose-100'
                }`}>
                  {submissionStatus.message}
                </div>
              )}
              <div className="flex justify-center pt-2">
                <Button 
                  type="submit" 
                  className="w-full sm:w-1/2 h-11 font-medium bg-gray-800 hover:bg-gray-700 text-white border-0 shadow-sm" 
                  disabled={isPending}
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  }