export async function getEvents() {
  const url = `https://localhost:7070/bookings`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
