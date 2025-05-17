export async function getEvents() {
  const url = import.meta.env.VITE_BOOKINGS_URL ?? 'ABAN';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
