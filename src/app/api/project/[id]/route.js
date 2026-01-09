import { NextResponse } from "next/server";
import { Client, Databases, ID, Query } from "appwrite";
import { success, error } from "@/utils/response";

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);



const databases = new Databases(client);
const DB_ID = process.env.NEXT_PUBLIC_DB_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_DB_PROJECT_ID;

// GET single
export async function GET(req, { params }) {
  let vvra = await params;
  try {
    const doc = await databases.getDocument(DB_ID, COLLECTION_ID, vvra?.id);
    return NextResponse.json(success(doc, "Project fetched"));
  } catch (err) {
    return NextResponse.json(error(err.message), { status: 404 });
  }
}

export async function PUT(req, { params }) {
  const vvra = await params;
  try {
    const body = await req.json();

    const updatePayload = {
      ...body,
      toolsUsed: body.toolsUsed ? JSON.stringify(body.toolsUsed) : undefined,
      features: body.features ? JSON.stringify(body.features) : undefined,
      upComingFeat: body.upComingFeat ? JSON.stringify(body.upComingFeat) : undefined,
      aspects: body.aspects ? JSON.stringify(body.aspects) : undefined,
    };
    
    const doc = await databases.updateDocument(
      DB_ID,
      COLLECTION_ID,
      vvra?.id,
      updatePayload
    );

    return NextResponse.json(success(doc, "Project updated"));
  } catch (err) {
    return NextResponse.json(error(err.message), { status: 400 });
  }
}

// DELETE
export async function DELETE(req, { params }) {
  try {
    await databases.deleteDocument(DB_ID, COLLECTION_ID, params.id);
    return NextResponse.json(success(null, "Project deleted"));
  } catch (err) {
    return NextResponse.json(error(err.message), { status: 400 });
  }
}
