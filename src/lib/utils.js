import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* cn means CLASSNAME */
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
