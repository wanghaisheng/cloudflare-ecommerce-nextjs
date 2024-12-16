import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";


export async function GET(request: Request) {
  try {
    console.log("I AM IN THIS LOG");

    
    const results = await (await getCloudflareContext()).env.DB.prepare(
      "SELECT id, name, description, price, imageUrl FROM Products"
    ).run();

    console.log("RESULTS:    ", results);

    if (!results) {
      return NextResponse.json(
        { error: "Products not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product details" },
      { status: 500 }
    );
  }
}
