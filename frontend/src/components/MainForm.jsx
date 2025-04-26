"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
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
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { DatePicker } from "./DatePicker";
import { Separator } from "./ui/separator";
import FormTextarea from "./FromTextArea";
import FormInput from "./FormInput";

import {
  personalInfoInputs,
  educationInputs,
  experienceInputs,
} from "@/constants";

/* 
name: "",
      email: "",
      mobile_number: "",
      location: "",
      summary: "",
      education: {
        name: "",
        start_date: "",
        end_date: "",
      },
      experience: {
        job_title: "",
        description: "",
        company: "",
        start_date: "",
        end_date: "",
      },
      skills: [],
*/

const formSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: "Name must be at least 4 characters.",
    })
    .trim(),
  email: z
    .string()
    .email()
    .min(5, {
      message: "Email must be at least 5 characters.",
    })
    .trim(),
  mobile_number: z
    .string()
    .min(10, {
      message: "Mobile number must be at least 10 digits.",
    })
    .max(15, {
      message: "Mobile number must be at maximum 15 digits.",
    })
    .refine((val) => /^[0-9+]*$/.test(val), {
      message: "Mobile number can only contain digits and the '+' sign.",
    }),
  location: z
    .string()
    .min(10, {
      message: "Location must be at least 10 characters.",
    })
    .trim(),
  summary: z
    .string()
    .min(100, {
      message: "Summary must be at least 100 characters.",
    })
    .trim(),
});

export function MainForm() {
  const [edu, setEdu] = useState(false);
  const initial = {
    name: "",
    email: "",
    mobile_number: "",
    location: "",
    summary: "",
    education: [
      {
        school: "",
        degree: "",
        field_of_study: "",
        start_date: null,
        end_date: null,
        description: "",
      },
    ],
    experience: [
      {
        job_title: "",
        employment_type: "",
        company: "",
        start_date: null,
        end_date: null,
        description: "",
        location: "",
        location_type: "",
      },
    ],
  };
  const [resume, setResume] = useState();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: resume,
  });

  // education fields
  const {
    fields: eduFields,
    append: appendEdu,
    remove: removeEdu,
  } = useFieldArray({
    control: form.control,
    name: "education",
  });

  // experience fields
  const {
    fields: expFields,
    append: appendExp,
    remove: removeExp,
  } = useFieldArray({
    control: form.control,
    name: "experience",
  });

  const { clearErrors, formState } = form;
  const { errors } = formState;

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [clearErrors, errors]);

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Card className={"rounded-3xl"}>
      <CardHeader className={"gap-y-2"}>
        <CardTitle>User info</CardTitle>
        <CardDescription>Enter your resume details</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <motion.div layout>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* personal information */}
              <div className="personal_info">
                {personalInfoInputs.map((field, id) => {
                  if (field.type === "textarea") {
                    return (
                      <FormTextarea
                        key={id}
                        control={form.control}
                        name={field.name}
                        label={field.label}
                        placeholder={field.placeholder}
                      />
                    );
                  }

                  return (
                    <FormInput
                      key={id}
                      control={form.control}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                    />
                  );
                })}
              </div>

              {/* education */}
              {eduFields.map((item, i) => (
                <div className="education" key={`education-${i}`}>
                  <Separator className="mb-4" />
                  <CardTitle className="mb-4">Education</CardTitle>

                  {educationInputs.map((fieldConfig, id) => {
                    const fieldName = `education.${i}.${fieldConfig.name}`;

                    if (fieldConfig.type === "date") {
                      return (
                        <FormField
                          key={id}
                          control={form.control}
                          name={fieldName}
                          render={({ field }) => (
                            <FormItem className="gap-1 m-0 mb-4 w-full">
                              <FormLabel className="text-neutral-600 mb-0.75">
                                {fieldConfig.label}
                              </FormLabel>
                              <DatePicker
                                {...form.register(fieldName)}
                                field={field}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      );
                    }

                    if (fieldConfig.type === "textarea") {
                      return (
                        <FormField
                          key={id}
                          control={form.control}
                          name={fieldName}
                          render={({ field }) => (
                            <FormItem className="gap-1 m-0 mb-4">
                              <FormLabel className="text-neutral-600 mb-0.75">
                                {fieldConfig.label}
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  {...form.register(fieldName)}
                                  placeholder={fieldConfig.placeholder}
                                  className="h-[6rem] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      );
                    }

                    return (
                      <FormField
                        key={id}
                        control={form.control}
                        name={fieldName}
                        render={({ field }) => (
                          <FormItem className="gap-1 m-0 mb-4">
                            <FormLabel className="text-neutral-600 mb-0.75">
                              {fieldConfig.label}
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...form.register(fieldName)}
                                type={fieldConfig.type}
                                placeholder={fieldConfig.placeholder}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  })}

                  {/* Remove Education Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="hover:text-red-500 hover:bg-red-100 hover:border-red-200 w-full py-6 px-4 cursor-pointer rounded-lg"
                    onClick={() => removeEdu(i)}
                  >
                    <CircleMinus /> Remove Education
                  </Button>
                </div>
              ))}

              {/* experience */}

              {expFields.map((item, i) => (
                <div className="experience" key={`experience-${i}`}>
                  <Separator className="mb-4" />
                  <CardTitle className="mb-4">Experience</CardTitle>

                  {experienceInputs.map((fieldConfig, id) => {
                    const fieldName = `experience.${i}.${fieldConfig.name}`;

                    if (fieldConfig.type === "date") {
                      return (
                        <FormField
                          key={id}
                          control={form.control}
                          name={fieldName}
                          render={({ field }) => (
                            <FormItem className="gap-1 m-0 mb-4 w-full">
                              <FormLabel className="text-neutral-600 mb-0.75">
                                {fieldConfig.label}
                              </FormLabel>
                              <DatePicker
                                {...form.register(fieldName)}
                                field={field}
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      );
                    }

                    if (fieldConfig.type === "textarea") {
                      return (
                        <FormField
                          key={id}
                          control={form.control}
                          name={fieldName}
                          render={({ field }) => (
                            <FormItem className="gap-1 m-0 mb-4">
                              <FormLabel className="text-neutral-600 mb-0.75">
                                {fieldConfig.label}
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  {...form.register(fieldName)}
                                  placeholder={fieldConfig.placeholder}
                                  className="h-[6rem] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      );
                    }

                    return (
                      <FormField
                        key={id}
                        control={form.control}
                        name={fieldName}
                        render={({ field }) => (
                          <FormItem className="gap-1 m-0 mb-4">
                            <FormLabel className="text-neutral-600 mb-0.75">
                              {fieldConfig.label}
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...form.register(fieldName)}
                                type={fieldConfig.type}
                                placeholder={fieldConfig.placeholder}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  })}

                  {/* Remove Experience Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="hover:text-red-500 hover:bg-red-100 hover:border-red-200 w-full py-6 px-4 cursor-pointer rounded-lg"
                    onClick={() => removeExp(i)}
                  >
                    <CircleMinus /> Remove Experience
                  </Button>
                </div>
              ))}

              <div className="btn_group space-y-4">
                <Button
                  type="button"
                  variant={"outline"}
                  className={
                    "bg-neutral-200 w-full py-6 px-4 cursor-pointer rounded-lg"
                  }
                  onClick={() => {
                    appendEdu(initial.education[0]);
                  }}
                >
                  <CirclePlus /> Add Skills
                </Button>
                <Button
                  type="button"
                  variant={"outline"}
                  className={
                    "bg-neutral-200 w-full py-6 px-4 cursor-pointer rounded-lg"
                  }
                  onClick={() => {
                    appendEdu(initial.education[0]);
                  }}
                >
                  <CirclePlus /> Add Education
                </Button>
                <Button
                  type="button"
                  variant={"outline"}
                  className={
                    "bg-neutral-200 w-full py-6 px-4 cursor-pointer rounded-lg"
                  }
                  onClick={() => appendExp(initial.experience[0])}
                >
                  <CirclePlus /> Add Experience
                </Button>
                <Button
                  className={"w-full py-6 px-4 cursor-pointer rounded-lg"}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        </Form>
      </CardContent>
    </Card>
  );
}
