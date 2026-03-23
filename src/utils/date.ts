const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long"
});

const timeFormatter = new Intl.DateTimeFormat("ko-KR", {
  hour: "numeric",
  minute: "2-digit"
});

export function formatWeddingDate(datetime: string) {
  return dateFormatter.format(new Date(datetime));
}

export function formatWeddingTime(datetime: string) {
  return timeFormatter.format(new Date(datetime));
}

export function formatDateTimeLine(datetime: string) {
  return `${formatWeddingDate(datetime)} · ${formatWeddingTime(datetime)}`;
}

export function getCountdownDays(datetime: string) {
  const today = new Date();
  const target = new Date(datetime);

  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const targetStart = new Date(
    target.getFullYear(),
    target.getMonth(),
    target.getDate()
  );

  const difference = targetStart.getTime() - todayStart.getTime();
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

