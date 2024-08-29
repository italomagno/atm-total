import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function yearSotBuilder(year:number){
  const months = monthBuilder()
  const newMonths = months.map(month=>{
      const daysInMonth = new Date(year, month-1, 0).getDate();
      const daysOfMonth = [];
      for (let i = 1; i <= daysInMonth; i++) {
      //@ts-ignore
      daysOfMonth.push({
          day:i,
          files:["flights.csv","sect","config.csv"]
      })
      }
      return {month,
              days:daysOfMonth};
  })
  return newMonths
}


export function daysMonthBuilder(year:number,month:number){
  const daysInMonth = new Date(year, month-1, 0).getDate();
  const daysOfMonth = [];
  for (let i = 1; i <= daysInMonth; i++) {
      //@ts-ignore
      daysOfMonth.push(parseInt(i))
  }
  return daysOfMonth;
}
export function monthBuilder(){

  const month = [];
  for (let i = 1; i <= 12; i++) {
      //@ts-ignore
      month.push(parseInt(i))
  }
  return month;
}