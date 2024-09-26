"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateReferenceModal from "./create-reference-modal";

interface ReferenceData {
  code: string;
  description: string;
  referenceType: "individual" | "set";
  file: File | null;
}

export function ReferenceManagementComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateReference = (data: ReferenceData) => {
    // Aquí normalmente enviarías estos datos a tu backend o sistema de gestión de estado
    console.log("Nueva referencia creada:", data);
  };

  return (
    <div className="p-4">
      <Button onClick={handleOpenModal}>Crear referencia</Button>
      <CreateReferenceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreateReference={(data) => handleCreateReference(data)}
      />
    </div>
  );
}
