"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, get, set } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import { debounce } from "lodash";
import { Button } from "@/components/ui/button";
import {
  Form,
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
import { FileDown } from "lucide-react";
import { toast } from "sonner";
import AddFormSelect from "./AddFormSelect";

export function MainForm({ defaults, setData }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaults,
  });
  const { watch } = form;

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

  const addButtons = [
    {
      text: "Add Education",
      action: () => appendEdu(initials.education[0]),
    },
    {
      text: "Add Skills",
      action: () => appendSkill(initials.skills[0]),
    },
    {
      text: "Add Experience",
      action: () => appendExp(initials.experience[0]),
    },
    {
      text: "Add Project",
      action: () => appendProject(initials.projects[0]),
    },
    {
      text: "Add Certification",
      action: () => appendCert(initials.certifications[0]),
    },
  ];

  const initial = { opacity: 0, height: 0 };
  const animate = { opacity: 1, height: "auto" };
  const transition = { duration: 0.3, ease: "easeInOut" };

  const { clearErrors, formState } = form;
  const { errors } = formState;

  // errors
  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      for (const key in errors) {
        const title = key.charAt(0).toUpperCase() + key.slice(1);
        toast(title, {
          description: errors[key]?.message,
          position: "bottom-center",
          descriptionClassName: "toast_d",
        });
        console.log(key, errors[key]);
      }
      const timer = setTimeout(() => {
        clearErrors();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [clearErrors, errors, eduFields]);

  // form inputs
  useEffect(() => {
    const updateData = debounce((value, { name }) => {
      if (!name) return;
      setData((prev) => {
        const updated = structuredClone(prev);
        set(updated, name, get(value, name));
        return updated;
      });
    }, 350);

    const subscription = watch(updateData);

    return () => {
      subscription.unsubscribe();
    };
  }, [form, setData, watch]);

  const onSubmit = async (values) => {
    try {
      const request = await fetch("http://localhost:5000/api/resume", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (request.ok && request.status == 200) {
        const result = await request.json();
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={"rounded-3xl py-0 overflow-hidden"}>
      <ScrollArea className={"h-[500px]"}>
        <div className="space-y-4">
          <CardHeader className={"gap-y-2 mt-6"}>
            <CardTitle>User info</CardTitle>
            <CardDescription>Enter your resume details</CardDescription>
          </CardHeader>
          <CardContent className={"mb-6"}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                      />
                    );
                  })}
                </div>

                {/* education */}
                {eduFields.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className="education"
                    initial={initial}
                    animate={animate}
                    transition={transition}
                  >
                    <Separator className="mb-4" />
                    <CardTitle className="mb-4">Education</CardTitle>

                    {educationInputs.map((fieldConfig, _) => {
                      const key = `${item.id}-${fieldConfig.name}`;
                      const fieldName = `education.${i}.${fieldConfig.name}`;

                      // if (fieldConfig.type === "date") {
                      //   return (
                      //     <FormField
                      //       key={key}
                      //       control={form.control}
                      //       name={fieldName}
                      //       render={({ field }) => (
                      //         <FormItem className="gap-1 m-0 mb-4 w-full">
                      //           <FormLabel className="text-neutral-600 mb-0.75">
                      //             {fieldConfig.label}
                      //           </FormLabel>
                      //           <DatePicker
                      //             {...form.register(fieldName)}
                      //             field={field}
                      //           />
                      //           <FormMessage />
                      //         </FormItem>
                      //       )}
                      //     />
                      //   );
                      // }

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
                  <motion.div
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    className="skills"
                    key={item.id}
                  >
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
                  </motion.div>
                ))}

                {/* experience */}

                {expFields.map((item, i) => (
                  <motion.div
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    className="experience"
                    key={item.id}
                  >
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
                  </motion.div>
                ))}

                {/* projects */}

                {projectFields.map((item, i) => (
                  <motion.div
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    className="project"
                    key={item.id}
                  >
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
                  </motion.div>
                ))}

                {/* certifications */}

                {certFields.map((item, i) => (
                  <motion.div
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    className="certification"
                    key={`skill-${i}`}
                  >
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
                  </motion.div>
                ))}

                <div className="btn_group space-y-4">
                  {/* add education */}
                  <AddFormSelect data={addButtons} />
                  {/* submit */}
                  <Button
                    className={"w-full py-6 px-4 cursor-pointer rounded-lg"}
                    type="submit"
                  >
                    <FileDown /> Download Resume
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </div>
      </ScrollArea>
    </Card>
  );
}
