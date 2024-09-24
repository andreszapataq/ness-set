"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateReferenceModal from "./create-reference-modal";

interface ReferenceData {
  code: string;
  description: string;
  referenceType: "individual" | "set";
  file: File | null;
  // Añade más campos según sea necesario
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
      <h1 className="text-2xl font-bold mb-4">Ingreso de lotes</h1>
      <Button onClick={handleOpenModal}>Crear referencia</Button>
      <CreateReferenceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreateReference={(data) => handleCreateReference(data)}
      />
    </div>
  );
}
