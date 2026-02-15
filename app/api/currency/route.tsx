export async function GET() {
  const res = await fetch(
    "https://api.exchangerate.host/latest?base=INR",
    { next: { revalidate: 86400 } } // cache 24 hours
  );

  const data = await res.json();
  return Response.json(data);
}
