import clsx, { ClassValue } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export const formatDateFromMs = (ms: number) => dayjs(ms).format('YYYY-MM-DD HH:mm:ss')

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
