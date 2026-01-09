import { NextResponse } from "next/server";
import { Client, Databases, Query } from "appwrite";
import { success, error } from "@/utils/response";

const client = new Client()
     .setEndpoint("https://fra.cloud.appwrite.io/v1")
     .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

const databases = new Databases(client);

const DB_ID = process.env.NEXT_PUBLIC_DB_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_DB_PROJECT_ID;

/**
 * GET Project by slug
 */
export async function GET(_req, { params }) {
     try {
          if (!params?.slug) {
               return NextResponse.json(error("Missing project slug"), { status: 400 });
          }

          const doc = await databases.listDocuments(DB_ID, COLLECTION_ID, [
               Query.equal("slug", params?.slug),
          ]);

          return NextResponse.json(success(doc, "✅ Project fetched successfully"));
     } catch (err ) {
          console.error("❌ Project fetch error:", err);
          return NextResponse.json(error(err?.message || "Failed to fetch project"), {
               status: 404,
          });
     }
}
