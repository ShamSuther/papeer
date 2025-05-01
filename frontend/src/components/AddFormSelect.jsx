import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";

const AddFormSelect = ({ data }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={
            "bg-neutral-200 w-full py-6 px-4 cursor-pointer rounded-lg"
          }
          variant="outline"
        >
          <CirclePlus /> Add Section
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data && data.length > 0
          ? data.map((item, i) => (
              <DropdownMenuItem key={`item-${i}`} onClick={item.action}>
                {item.text}
              </DropdownMenuItem>
            ))
          : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddFormSelect;
