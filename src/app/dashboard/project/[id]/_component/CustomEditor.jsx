"use client"
import React from 'react'
import Editor from "@monaco-editor/react";


export default function CustomEditor({ data, on_change, title }) {
     return (
          <div className=" space-y-1">
               <p className=" font-inter  text-md">{title}</p>
               <div className="w-full h-[300px] overflow-hidden     rounded-lg">
                    <Editor
                         height="100%"
                         defaultLanguage="json"
                         value={data}
                         theme="vs-dark"
                         options={{
                              minimap: { enabled: false },
                              fontSize: 16,
                              formatOnPaste: true,
                              formatOnType: true,
                         }}
                         onChange={on_change}
                    />
               </div>
          </div>

     )
}
