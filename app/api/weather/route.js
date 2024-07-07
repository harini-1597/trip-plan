import { NextRequest, NextResponse } from "next/server";
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

//localhost:3000/api/weather
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  let url = "";
  if (address) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${WEATHER_API_KEY}`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
  }
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  return NextResponse.json({ data });
}