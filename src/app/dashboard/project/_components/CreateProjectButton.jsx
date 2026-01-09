"use client";

import Button from "@/app/(main)/_components/ui/Button";
import Modal from "@/app/(main)/_components/ui/Model";
import { useState } from "react";

export default function CreateProjectButton({ onCreated }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [order, setOrder] = useState(0);

  async function handleCreate() {
    try {
      setLoading(true);

      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, subTitle, order }),
      });

      const result = await res.json();

      if (result.status) {
        // ✅ success
        alert(result.message || "Project created successfully");
        onCreated?.(); // let parent refresh SWR data
      } else {
        // ❌ failed
        alert(result.message || "Failed to create project");
      }
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    } finally {
      // reset form + close modal
      setTitle("");
      setSubTitle("");
      setOrder(0);
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="text-md font-inter text-green-600"
      >
        New Project
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Create Project">
        <div className="pt-3 space-y-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Project Title"
          />

          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Sub Title"
          />

          <input
            type="number"
            value={order}
            onChange={(e) =>
              setOrder(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Order"
          />
        </div>

        <div className="flex justify-end pt-9 gap-4">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button
            w="100px"
            variant="primary"
            disabled={loading}
            loading={loading}
            onClick={handleCreate}
          >
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
}
