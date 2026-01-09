import { NextResponse } from "next/server";
import { Client, Databases, ID, Query } from "appwrite";
import { success, error } from "@/utils/response";

const client = new Client()
     .setEndpoint('https://fra.cloud.appwrite.io/v1')
     .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);
     
 

const databases = new Databases(client);
const DB_ID = process.env.NEXT_PUBLIC_DB_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_DB_PROJECT_ID;

// CREATE
export async function POST(req) {
     try {
          const body = await req.json();
          const { title, subTitle, order } = body;

          const doc = await databases.createDocument(
               DB_ID,
               COLLECTION_ID,
               ID.unique(),
               {
                    title,
                    slug: title.toLowerCase().replace(/\s+/g, "-"),
                    subTitle: subTitle || null,
                    order: order ? Number(order) : 0,
               }
          );

          return NextResponse.json(success(doc, "Project created"), { status: 201 });
     } catch (err) {
          return NextResponse.json(error(err.message), { status: 500 });
     }
}

// LIST
export async function GET() {
     try {
          const docs = await databases.listDocuments(DB_ID, COLLECTION_ID, [
               Query.orderDesc("order"),
          ]);

          return NextResponse.json(success(docs.documents, "Projects fetched"));
     } catch (err) {
          return NextResponse.json(error(err.message), { status: 500 });
     }
}
