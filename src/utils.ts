export function formatDate(newDate: Date){
  const months: { [key: number]: string} = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  }
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = newDate;
    const year = d.getFullYear();
    const date = d.getDate();
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    const dayName = days[d.getDay()];

    const formatted = `${dayName}, ${date} ${monthName} ${year}`;
    return formatted.toString();
}

export interface Todos {
  task: string;
  id: number;
  date: Date ;
  completed: boolean;
}

export const initialTodos: Todos[] = [
  {
    task: 'just some todo example',
    id: 1,
    completed: false,
    date: new Date()
  },
  {
    task: 'just some todo example2',
    id: 2,
    completed: false,
    date: new Date()
  },
  {
    task: 'just some todo example3',
    id: 3,
    completed: false,
    date: new Date()
  },
]