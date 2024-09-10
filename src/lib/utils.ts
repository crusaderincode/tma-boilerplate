import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const log = {
	i: (...args: unknown[]) => {
		if (process.env.NEXT_PUBLIC_ENV === 'development') console.info(...args)
	},
	l: (...args: unknown[]) => {
		if (process.env.NEXT_PUBLIC_ENV === 'development') console.log(...args)
	},
	e: (...args: unknown[]) => {
		if (process.env.NEXT_PUBLIC_ENV === 'development') console.error(...args)
	},
}
