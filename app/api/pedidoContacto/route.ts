import { NextResponse } from "next/server";
import { callMariaDB } from "@/lib/mariadb";

export async function POST(req: Request) {
  try {
    const { nome, email, telemovel } = await req.json(); // Parse the JSON body

    if (!nome || !email || !telemovel) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const query = `INSERT INTO pedidos_contacto (nome, email, telemovel, idcentros) VALUES (?, ?, ?, ?)`;
    const result = await callMariaDB(query, [nome, email, telemovel, 1]);

    // If result contains BigInt, convert it to a string or other serializable format
    const serializedResult = JSON.parse(
      JSON.stringify(result, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    return NextResponse.json(
      { message: "Data inserted successfully", result: serializedResult },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
