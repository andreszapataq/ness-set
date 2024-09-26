"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateReferenceModal from "./create-reference-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InventoryTable from "./inventory-table";

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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-blue-600 hover:underline">
                Ver listado de lotes
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Listado de Lotes</DialogTitle>
              </DialogHeader>
              <InventoryTable />
            </DialogContent>
          </Dialog>
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
