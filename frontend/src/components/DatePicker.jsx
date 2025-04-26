import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl } from "./ui/form";

export function DatePicker({ field }) {
  // React.useEffect(() => {
  //   console.log(field);
  //   return () => {};
  // }, [field]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            type="button"
            variant={"outline"}
            className={cn(
              "w-full pl-3 text-left font-normal cursor-pointer",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(date) => {
            if (date) {
              const formattedDate = format(date, "yyyy-MM-dd");
              field.onChange(formattedDate);
            }
          }}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
