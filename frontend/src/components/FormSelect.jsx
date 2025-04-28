import {
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function FormSelect({
  id,
  form,
  fieldName,
  fieldConfig,
  controlled,
}) {
  function onSubmit({ value }) {
    if (value) {
      toast(value);
    }
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
          <Select
            {...(controlled ? form.register(fieldName) : {})}
            onValueChange={field.onChange}
            onOpenChange={() => onSubmit(field)}
            defaultValue={field.value ?? ""}
            {...field}
          >
            <FormControl>
              <SelectTrigger className={"w-full"}>
                <SelectValue placeholder={fieldConfig.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {fieldConfig.data.map((item, i) => {
                const capitalized =
                  item.charAt(0).toUpperCase() + item.slice(1);
                return (
                  <SelectItem key={`level-${i}`} value={item}>
                    {capitalized}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {/* <FormControl>
            <Input
              {...(controlled ? form.register(fieldName) : {})}
              type={fieldConfig.type}
              value={field.value ?? ""}
              placeholder={fieldConfig.placeholder}
              {...field}
            />
          </FormControl> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
