import React from "react";
import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";

const AddFormBtn = ({ text, action }) => {
  return (
    <Button
      type="button"
      variant={"outline"}
      className={"bg-neutral-200 w-full py-6 px-4 cursor-pointer rounded-lg"}
      onClick={action}
    >
      <CirclePlus /> {text}
    </Button>
  );
};

export default AddFormBtn;
