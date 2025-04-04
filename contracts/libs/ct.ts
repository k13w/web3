import type { ClassValue } from "clsx";
import clsx from "clsx";

export const cn = (...classLists: ClassValue[]) => twMerge(clsx(classLists));
