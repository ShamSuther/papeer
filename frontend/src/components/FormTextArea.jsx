import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

export default function FormTextarea({
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
            <Textarea
              {...(controlled ? form.register(fieldName) : {})}
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
