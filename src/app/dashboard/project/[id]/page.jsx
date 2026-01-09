"use client";

import { useEffect, useState } from "react";
import { useEditorStore } from "@/utils/zustand/editorStore";
import CustomEditor from "./_component/CustomEditor";
import { useParams } from "next/navigation";
import Button from "@/app/(main)/_components/ui/Button";

import ImageHandlering from "./_component/ImageHandlering";
import { getImageUrl } from "@/utils/appwrite/ImageHandler";
export default function Page() {
     const {
          toolsUsed,
          setTools,
          features,
          setFeatures,
          upComingFeat,
          setupComingFeat,
          aspects,
          setAspects,
     } = useEditorStore();

     const [images, setImages] = useState([]);
     const [loading, setLoading] = useState(true);
     const [updateLoading, setUpdateLoading] = useState(false);
     const params = useParams();

     async function fetchProject() {
          try {
               setLoading(true);
               const res = await fetch(`/api/project/${params?.id}`);
               const result = await res.json();

               if (result.status && result.data) {
                    const project = await result?.data;

                    if (project.toolsUsed) setTools(JSON.parse(project.toolsUsed));
                    if (project.features) setFeatures(JSON.parse(project.features));
                    if (project.upComingFeat) setupComingFeat(JSON.parse(project.upComingFeat));
                    if (project.aspects) setAspects(JSON.parse(project.aspects));



                    const resolved = await Promise.all(
                         project?.images.map((imageId) => {
                              const url = getImageUrl(imageId);
                              return {
                                   data_url: url, // for ImageUploading preview
                                   fileId: imageId, // appwrite file id
                              };
                         })
                    ).then((resolved) => {
                         console.log(resolved);
                         setImages(resolved);

                    });

 
               } else {
                    console.error(result.message);
               }
          } catch (error) {
               console.error("Failed to fetch project:", error);
          } finally {
               setLoading(false);
          }
     }


     useEffect(() => {
          fetchProject();
     }, []);

     if (loading) return <p>Loading...</p>;



     return (
          <div className="space-y-6">

               <ImageHandlering images={images} setImages={setImages} />
               <div className=" flex  justify-end">

                    <Button
                         onClick={async () => {
                              setUpdateLoading(true);
                              try {
                                   const res = await fetch(`/api/project/${params?.id}`, {
                                        method: "PUT",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({

                                             toolsUsed: toolsUsed,
                                             features: features,
                                             upcomingFeatures: upComingFeat,
                                             aspects: aspects,
                                             images: images.map((image) => { if (image.fileId !== null) return image.fileId }),

                                        }),
                                   });

                                   const result = await res.json();

                                   if (result.status) {
                                        console.log("✅ Project updated:", result.data);
                                   } else {
                                        console.error("❌ Update failed:", result.message);
                                   }
                              } catch (err) {
                                   console.error("Update error:", err);
                              } finally {
                                   setUpdateLoading(false);
                              }



                         }}
                         loading={updateLoading}
                         disabled={updateLoading}

                    >
                         Update Data
                    </Button>

               </div>
               <CustomEditor
                    data={toolsUsed}
                    on_change={(value) => setTools(value)}
                    title="Tools Used"
               />

               <CustomEditor
                    data={features}
                    on_change={(value) => setFeatures(value)}
                    title="Features"
               />

               <CustomEditor
                    data={upComingFeat}
                    on_change={(value) => setupComingFeat(value)}
                    title="Upcoming Features"
               />

               <CustomEditor
                    data={aspects}
                    on_change={(value) => setAspects(value)}
                    title="Aspects"
               />
          </div >
     );
}
