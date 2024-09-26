"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateReferenceModal from "./create-reference-modal";
import Link from "next/link";

interface ReferenceData {
  code: string;
  description: string;
  referenceType: "individual" | "set";
  file: File | null;
}

export function ReferenceManagementComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLotesLink, setShowLotesLink] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateReference = (data: ReferenceData) => {
    console.log("Nueva referencia creada:", data);
    setShowLotesLink(true);
  };

  return (
    <div className="p-4">
      <Button onClick={handleOpenModal}>Crear referencia</Button>
      {showLotesLink && (
        <div className="mt-4">
          <Link href="/listado-lotes" className="text-blue-600 hover:underline">
            Ver listado de lotes
          </Link>
        </div>
      )}
      <CreateReferenceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreateReference={(data) => handleCreateReference(data)}
      />
    </div>
  );
}
