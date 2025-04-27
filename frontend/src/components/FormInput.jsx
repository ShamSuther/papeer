import {
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export default function FormInput({
  id,
  form,
  fieldName,
  fieldConfig,
  controlled,
}) {
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
              {...(controlled ? form.register(fieldName) : {})}
              type={fieldConfig.type}
              value={field.value ?? ""}
              placeholder={fieldConfig.placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
