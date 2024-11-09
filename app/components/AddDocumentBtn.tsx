'use client';

import React from "react";
import { FaPlus } from "react-icons/fa";
import { createDocument } from "../lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <button onClick={addDocumentHandler} className="p-2 rounded bg-secondary flex items-center">
        <FaPlus className="mr-2" /> Start a blank document
      </button>
  );
};

export default AddDocumentBtn;
