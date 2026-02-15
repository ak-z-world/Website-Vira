export async function GET() {
  const res = await fetch("https://ipwho.is/");
  const data = await res.json();

  return Response.json({
    country: data.country_code,
  });
}
