"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";

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
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "./ui/card";
import { useEffect } from "react";
import { DatePicker } from "./DatePicker";
import { Separator } from "./ui/separator";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextArea";

import AddFormBtn from "./AddFormBtn";
import RemFormBtn from "./RemFormBtn";

import { formSchema } from "@/schemas/formSchema";

import {
  initials,
  personalInfoInputs,
  educationInputs,
  experienceInputs,
  skillInputs,
  projectInputs,
  certInputs,
} from "@/constants";
import { ScrollArea } from "./ui/scroll-area";

export function MainForm({ defaults, setData }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaults,
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

  // skills fields
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control: form.control,
    name: "skills",
  });

  // experience fields
  const {
    fields: expFields,
    append: appendExp,
    remove: removeExp,
  } = useFieldArray({
    control: form.control,
    name: "experience",
    rules: { maxLength: 4 },
  });

  // project fields
  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control: form.control,
    name: "projects",
    rules: { maxLength: 4 },
  });

  // certification fields
  const {
    fields: certFields,
    append: appendCert,
    remove: removeCert,
  } = useFieldArray({
    control: form.control,
    name: "certifications",
  });

  const { clearErrors, formState } = form;
  const { errors } = formState;

  // errors
  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      const timer = setTimeout(() => {
        clearErrors();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [clearErrors, errors, eduFields]);

  // form inputs
  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      // const result = formSchema.safeParse(value);
      if (!name) return;
      setData((prev) => ({ ...prev, [name]: value[name] }));
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [form, setData]);

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Card className={"rounded-3xl py-0"}>
      <ScrollArea className={"h-[500px]"}>
        <CardHeader className={"gap-y-2 mt-6"}>
          <CardTitle>User info</CardTitle>
          <CardDescription>Enter your resume details</CardDescription>
        </CardHeader>
        <CardContent className={"mb-6"}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* personal information */}
              <div className="personal_info">
                {personalInfoInputs.map((field, i) => {
                  const key = `${field.name}-${i}`;

                  if (field.type === "textarea") {
                    return (
                      <FormTextarea
                        key={key}
                        id={field.name}
                        form={form}
                        fieldName={field.name}
                        fieldConfig={field}
                        controlled={false}
                      />
                    );
                  }

                  return (
                    <FormInput
                      key={key}
                      id={field.name}
                      form={form}
                      fieldName={field.name}
                      fieldConfig={field}
                      controlled={false}
                    />
                  );
                })}
              </div>

              {/* education */}
              {eduFields.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  className="education"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Separator className="mb-4" />
                  <CardTitle className="mb-4">Education</CardTitle>

                  {educationInputs.map((fieldConfig, _) => {
                    const key = `${item.id}-${fieldConfig.name}`;
                    const fieldName = `education.${i}.${fieldConfig.name}`;

                    if (fieldConfig.type === "date") {
                      return (
                        <FormField
                          key={key}
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
                        <FormTextarea
                          key={key}
                          id={fieldName}
                          form={form}
                          fieldName={fieldName}
                          fieldConfig={fieldConfig}
                        />
                      );
                    }

                    return (
                      <FormInput
                        key={key}
                        id={fieldName}
                        form={form}
                        fieldName={fieldName}
                        fieldConfig={fieldConfig}
                      />
                    );
                  })}

                  {/* Remove Education Button */}
                  <RemFormBtn
                    text={"Remove Education"}
                    action={() => removeEdu(i)}
                  />
                </motion.div>
              ))}

              {/* skills */}

              {skillFields.map((item, i) => (
                <div className="skills" key={item.id}>
                  <Separator className="mb-4" />
                  <CardTitle className="mb-4">Skill</CardTitle>

                  {skillInputs.map((fieldConfig, id) => {
                    const key = `${item.id}-${fieldConfig.name}`;
                    const fieldName = `skills.${i}.${fieldConfig.name}`;

                    if (fieldConfig.type === "select") {
                      return (
                        <FormSelect
                          key={key}
                          id={fieldName}
                          form={form}
                          fieldName={fieldName}
                          fieldConfig={fieldConfig}
                        />
                      );
                    }

                    return (
                      <FormInput
                        key={key}
                        id={fieldName}
                        form={form}
                        fieldName={fieldName}
                        fieldConfig={fieldConfig}
                      />
                    );
                  })}

                  {/* Remove Skills Button */}
                  <RemFormBtn
                    text={"Remove Skill"}
                    action={() => removeSkill(i)}
                  />
                </div>
              ))}

              {/* experience */}

              {expFields.map((item, i) => (
                <div className="experience" key={item.id}>
                  <Separator className="mb-4" />
                  <CardTitle className="mb-4">Experience</CardTitle>

                  {experienceInputs.map((fieldConfig, id) => {
                    const key = `${fieldConfig.name}-${id}`;

                    const fieldName = `experience.${i}.${fieldConfig.name}`;

                    if (fieldConfig.type === "date") {
                      return (
                        <FormField
                          key={key}
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
                        <FormTextarea
                          key={key}
                          id={fieldName}
                          form={form}
                          fieldName={fieldName}
                          fieldConfig={fieldConfig}
                        />
                      );
                    }

                    return (
                      <FormInput
                        key={key}
                        id={fieldName}
                        form={form}
                        fieldName={fieldName}
                        fieldConfig={fieldConfig}
                      />
                    );
                  })}

                  {/* Remove Experience Button */}
                  <RemFormBtn
                    text={"Remove Experience"}
                    action={() => removeExp(i)}
                  />
                </div>
              ))}

              {/* projects */}

              {projectFields.map((item, i) => (
                <div className="project" key={item.id}>
                  <Separator className="mb-4" />
                  <CardTitle className="mb-4">Project</CardTitle>

                  {projectInputs.map((fieldConfig, id) => {
                    const key = `${fieldConfig.name}-${id}`;

                    const fieldName = `projects.${i}.${fieldConfig.name}`;

                    if (fieldConfig.type === "textarea") {
                      return (
                        <FormTextarea
                          key={key}
                          id={fieldName}
                          form={form}
                          fieldName={fieldName}
                          fieldConfig={fieldConfig}
                        />
                      );
                    }

                    return (
                      <FormInput
                        key={key}
                        id={fieldName}
                        form={form}
                        fieldName={fieldName}
                        fieldConfig={fieldConfig}
                      />
                    );
                  })}

                  {/* Remove Project Button */}
                  <RemFormBtn
                    text={"Remove Project"}
                    action={() => removeProject(i)}
                  />
                </div>
              ))}

              {/* certifications */}

              {certFields.map((item, i) => (
                <div className="certification" key={`skill-${i}`}>
                  <Separator className="mb-4" />
                  <CardTitle className="mb-4">Certification</CardTitle>

                  {certInputs.map((fieldConfig, id) => {
                    const fieldName = `certifications.${i}.${fieldConfig.name}`;
                    return (
                      <FormInput
                        key={id}
                        id={fieldName}
                        form={form}
                        fieldName={fieldName}
                        fieldConfig={fieldConfig}
                      />
                    );
                  })}

                  {/* Remove Project Button */}
                  <RemFormBtn
                    text={"Remove Certification"}
                    action={() => removeCert(i)}
                  />
                </div>
              ))}

              <div className="btn_group space-y-4">
                {/* add education */}
                <AddFormBtn
                  text={"Add Education"}
                  action={() => appendEdu(initials.education[0])}
                />
                {/* add skills */}
                <AddFormBtn
                  text={"Add Skills"}
                  action={() => appendSkill(initials.skills[0])}
                />
                {/* add experience */}
                <AddFormBtn
                  text={"Add Experience"}
                  action={() => appendExp(initials.experience[0])}
                />
                {/* add project */}
                <AddFormBtn
                  text={"Add Project"}
                  action={() => appendProject(initials.projects[0])}
                />
                {/* add certification */}
                <AddFormBtn
                  text={"Add Certification"}
                  action={() => appendCert(initials.certifications[0])}
                />
                {/* submit */}
                <Button
                  className={"w-full py-6 px-4 cursor-pointer rounded-lg"}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
