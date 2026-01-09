import { ID, STORAGE } from "../appwrite";
 
const bucketId = process.env.NEXT_PUBLIC_STORAGE_ID;
export function getImageUrl(id) {
     try {
          return STORAGE.getFileView(bucketId, id);
     } catch (e) {
          console.error("❌ Failed to generate preview:", e);
          return null;
     }
}

export async function uploadImage(file) {
     try {
          // Upload
          const response = await STORAGE.createFile(bucketId, ID.unique(), file);

          // Get Preview/URL
          const url = STORAGE.getFilePreview(bucketId, response.$id).href;

          return {
               id: response.$id,
               url,
          };
     } catch (error) {
          console.error("❌ Upload failed:", error.message);
          throw error;
     }
}

export async function deleteImage(fileId) {
     try {
          await STORAGE.deleteFile(bucketId, fileId);
          return true;
     } catch (error) {
          console.error("❌ Delete failed:", error.message);
          return false;
     }
}
