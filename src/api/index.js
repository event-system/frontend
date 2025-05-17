export async function getEvents() {
  const url = process.env.bookings_url ?? 'zibby';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
