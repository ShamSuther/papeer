import {
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export default function FormInput({
  control,
  name,
  label,
  placeholder,
  type = "text",
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-1 m-0 mb-4">
          <FormLabel className="text-neutral-600 mb-0.75">{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
