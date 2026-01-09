import { create } from "zustand";


export const useEditorStore = create((set) => ({
     toolsUsed: JSON.stringify({
          "show": true,
          "Frontend": ["Next.js"],
          "Backend": ["Node.js"],
          "Deployment": ["Render"],
     }, null, 2), // formatted JSON

     setTools: (newCode) => set({ toolsUsed: newCode }),

     features: JSON.stringify(
          {
               "show": true,
               "Features":
                    [
                         "Some feature",
                    ]
          }
          , null, 2), // formatted JSON

     setFeatures: (newCode) => set({ features: newCode }),


     upComingFeat: JSON.stringify({
          "show": true,
          "UpcomingFeatures":
               [
                    "Some feature",
               ]
     }, null, 2), // formatted JSON

     setupComingFeat: (newCode) => set({ upComingFeat: newCode }),


     aspects: JSON.stringify({
          "show": true,
          "Positive": ["this is the positive aspect"],
          "Negative": ["this is the negative aspect"],
     }, null, 2), // formatted JSON

     setAspects: (newCode) => set({ aspects: newCode }),



}));
