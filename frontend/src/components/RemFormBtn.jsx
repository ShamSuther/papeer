import React from "react";
import { Button } from "./ui/button";
import { CircleMinus } from "lucide-react";

// Remove Form Button
const RemFormBtn = ({ text, action }) => {
  return (
    <Button
      type="button"
      variant="outline"
      className="hover:text-red-500 hover:bg-red-100 hover:border-red-200 w-full py-6 px-4 cursor-pointer rounded-lg"
      onClick={action}
    >
      <CircleMinus /> {text}
    </Button>
  );
};

export default RemFormBtn;
