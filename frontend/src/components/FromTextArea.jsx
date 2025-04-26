import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

export default function FormTextarea({ control, name, label, placeholder }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-1 m-0 mb-4">
          <FormLabel className="text-neutral-600 mb-0.75">{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
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
