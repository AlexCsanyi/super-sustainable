import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return <time className="text-accent" dateTime={dateString}>{format(date, "d LLLL, yyyy")}</time>;
}
