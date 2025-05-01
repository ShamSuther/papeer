import React, { useRef } from "react";
import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";

const AddFormBtn = ({ text, action }) => {
  const isThrottled = useRef(false);

  const handleClick = () => {
    if (isThrottled.current) return;

    isThrottled.current = true;
    action();

    setTimeout(() => {
      isThrottled.current = false;
    }, 500);
  };

  return (
    <Button
      type="button"
      variant={"outline"}
      className={"bg-neutral-200 w-full py-6 px-4 cursor-pointer rounded-lg"}
      onClick={handleClick}
    >
       {text}
    </Button>
  );
};

export default AddFormBtn;
