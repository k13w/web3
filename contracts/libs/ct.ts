import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "a";

export const cn = (...classLists: ClassValue[]) => twMerge(clsx(classLists));
