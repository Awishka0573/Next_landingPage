import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, email } = await req.json();
    if (!username || !email) {
      return NextResponse.json({ message: "username and email required" }, { status: 400 });
    }

    // Fake persistence: in a real app, insert into DB and hash password.
    return NextResponse.json({ ok: true, message: "Account created" }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
