import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwindmerge";

export const cn = (...classLists: ClassValue[]) => twMerge(clsx(classLists));