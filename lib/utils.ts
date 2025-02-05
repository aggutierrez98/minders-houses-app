import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// const nameOf = (f: unknown) => (String(f)).replace(/[ |\(\)=>]/g, '');


export function shouldBeDefined<T>(
  value: T | undefined,
  valueName: string = 'value',
): T {
  if (value === undefined) {
    throw new Error(`${valueName} is undefined`)
  }

  return value
}