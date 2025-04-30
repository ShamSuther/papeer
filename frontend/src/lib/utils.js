import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}

export const stripArrayDefaults = (object) => {
  const cleaned = {};

  for (const key in object) {
    if (Array.isArray(object[key])) {
      cleaned[key] = [];
    } else {
      cleaned[key] = object[key];
    }
  }

  return cleaned;
};