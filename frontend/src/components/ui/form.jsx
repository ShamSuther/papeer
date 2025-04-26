import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";

const Form = FormProvider;

const FormFieldContext = React.createContext({});

const FormField = ({ ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export const experienceFields = [
  {
    name: "job_title",
    label: "Title",
    placeholder: "Sales Manager",
    type: "text",
  },
  {
    name: "employment_type",
    label: "Employment Type",
    placeholder: "Employment Type",
    type: "text",
  },
  {
    name: "company",
    label: "Company",
    placeholder: "Google",
    type: "text",
  },
  { name: "start_date", label: "Start Date", type: "date" },
  { name: "end_date", label: "End Date", type: "date" },
  {
    name: "description",
    label: "Description",
    placeholder: "Tell us about...",
    type: "textarea",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "e.g., Address, Karachi, Sindh, Pakistan",
    type: "text",
  },
  {
    name: "location_type",
    label: "Location Type",
    placeholder: "Location Type",
    type: "text",
  },
];


const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItemContext = React.createContext({});

function FormItem({ className, ...props }) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <motion.div
        // layout
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  return (
    <>
      {body && (
        <motion.p
          key={body}
          data-slot="form-message"
          id={formMessageId}
          className={cn("text-destructive text-sm", className)}
          {...props}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {body}
        </motion.p>
      )}
    </>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
