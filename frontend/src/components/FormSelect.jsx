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

export default function FormSelect({ id, form, fieldName, fieldConfig }) {
  return (
    <FormField
      key={id}
      control={form.control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem className="gap-1 m-0 mb-4">
            <FormLabel className="text-neutral-600 mb-0.75">
              {fieldConfig.label}
            </FormLabel>
            <Select
              onValueChange={field.onChange}
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
        );
      }}
    />
  );
}
