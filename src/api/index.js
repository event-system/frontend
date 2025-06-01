export async function getEvents() {
  const url = import.meta.env.VITE_EVENTS_URL ?? "ABAN-EVENTS-URL";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
