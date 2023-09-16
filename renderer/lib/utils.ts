import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const isAppealing = (message : string | null) => {
  if (!message) return "Appealing 24/7";
  const text = message!.toLocaleLowerCase();
  if (text === 'error.blocked' || text === 'error.locked' || text === 'error.security'){
    return "Appealing 24/7";
  }
  if (text === 'error.confirm'){
    return "Confirm Locked"
  }
  if (text === 'error.permed'){
    return "Permed"
  }
  if (text ==="active"){
    return "Unbanned"
  }
  if (text ==="error.thirty"){
    return "30 Days Ban (DM Admin)"
  }
}

export function getGreetingBasedOnTime(localTime: Date): string {
  const hour = localTime.getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good Morning';
  } else if (hour >= 12 && hour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}