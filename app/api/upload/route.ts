import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: "dkqv3vqlb",
  api_key: "523841123888554",
  api_secret: "A_cC8SrXV1KeWirbwSs6Pr77Rz8"
})

export async function POST(request: Request) {
  const { path } = await request.json()

  if (!path) {
    return NextResponse.json(
      { message: "Image path is required" },
      { status: 400 }
    )
  }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overWrite: true,
      transformation: [{ width: 1000, height: 752, crop: "scale" }]
    }
  } catch (error) {}
}
