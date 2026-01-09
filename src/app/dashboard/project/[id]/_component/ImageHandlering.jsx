"use client"

import { deleteImage, uploadImage } from "@/utils/appwrite/ImageHandler";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function ImageHandlering({images, setImages}) {
     
 
     const onChange = async (e) => {

          // only save images
          let temp = {
               file: e.target.files[0],
               data_url: URL.createObjectURL(e.target.files[0]),
               fileId: null
          }
          await uploadImage(temp.file).then((data) => {
               
               temp.fileId = data.id;
               setImages([...images, temp]);

          }).catch(() => {
               console.log("upload failed");
          });


     };

     const onDelete = async (image, deletedIndex) => {

          console.log("delete");
         
          await deleteImage(image?.fileId).then(() => {

               setImages(images.filter((i, index) => index !== deletedIndex));

          }).catch(() => {
               console.log("delete failed");
          })
     };

     return (
          <div>

               <input type="file"
                    onChange={onChange}
                    className=" border border-black/40 rounded-lg size-[150px]"
               />

               <div className="  mt-5   gap-4 flex flex-wrap">
                    {images.map((image, index) => (
                         <div key={index} className="image-item w-fit relative ">
                              <div className=" relative aspect-[4/3] outline-offset-4 outline outline-black/50 border-black/40 w-[140px]  overflow-hidden rounded-lg">
                                   <Image src={image.data_url} alt="" fill className=" object-cover  w-full h-full" />
                              </div>

                              <div className="image-item__btn-wrapper  bg-red-500  p-1 rounded-lg absolute top-[0px] right-[0px]">
                                   <Trash2 onClick={() => { onDelete(image, index) }} size={20} className=" text-white" />
                              </div>
                         </div>
                    ))}
               </div>



          </div>
     )
}
