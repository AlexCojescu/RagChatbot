"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
    <Card className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-xl border-2 border-gray-800 sm:border-gray-800 bg-white/95 sm:bg-white/90 backdrop-blur-sm shadow-md sm:shadow-sm">
      <CardHeader className="text-center px-4 sm:px-6 py-4 sm:py-6">
        <CardTitle className="text-2xl sm:text-3xl text-black">Contact Us</CardTitle>
        <CardDescription className="mx-auto text-sm sm:text-base text-gray-700">
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
                    <FormLabel className="text-sm font-medium text-black">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your first name" 
                        {...field} 
                        disabled={isPending}
                        className="h-10 sm:h-11 border-2 border-gray-600 text-black placeholder:text-gray-500"
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
                    <FormLabel className="text-sm font-medium text-black">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your last name" 
                        {...field} 
                        disabled={isPending}
                        className="h-10 sm:h-11 border-2 border-gray-600 text-black placeholder:text-gray-500"
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
                  <FormLabel className="text-sm font-medium text-black">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Email" 
                        {...field} 
                        disabled={isPending}
                        className="h-10 sm:h-11 border-2 border-gray-600 text-black placeholder:text-gray-500"
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
                    <FormLabel className="text-sm font-medium text-black">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here"
                        className="min-h-[120px] sm:min-h-[160px] resize-none border-2 border-gray-600 text-black placeholder:text-gray-500"
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
                    ? 'text-green-700 bg-green-50 border-2 border-green-300' 
                    : 'text-red-700 bg-red-50 border-2 border-red-300'
                }`}>
                  {submissionStatus.message}
                </div>
              )}
              <div className="flex justify-center pt-2">
                <Button 
                  type="submit" 
                  className="w-full sm:w-1/2 h-11 font-medium bg-gray-800 text-white hover:bg-gray-900 border-2 border-gray-800" 
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
