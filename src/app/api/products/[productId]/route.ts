import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {

  const productId = (await params).productId;

  try {
    const results = (await getCloudflareContext()).env.DB.prepare(
      "SELECT id, name, description, price, rating, imageUrl FROM products WHERE id = ?;"
    )
      .bind(productId)
      .run();

    if (!results) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
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
