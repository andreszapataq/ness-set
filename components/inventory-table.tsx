import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2 } from "lucide-react";

interface InventoryItem {
  id: string;
  reference: string;
  description: string;
  quantity: number;
  section: string;
}

const initialData: InventoryItem[] = [
  {
    id: "1",
    reference: "LCPM25",
    description: "MEDIDOR DE PROFUNDIDAD",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "2",
    reference: "LCPM56",
    description: "DISECTORES",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "3",
    reference: "LCPM27",
    description: "MINI HOMMANS ANGOSTO",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "4",
    reference: "LCPM14",
    description: "TARRAJA 2,0 DE ANCLAJE RAPIDO",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "5",
    reference: "LCPM13",
    description: "TARRAJA 2,5 DE ANCLAJE RAPIDO",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "6",
    reference: "LCPM05",
    description: "BROCA DE 1,5 SIN ACOPLE",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "7",
    reference: "LCPM04",
    description: "BROCA DE 1,8 SIN ACOPLE",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "8",
    reference: "LCPM03",
    description: "BROCA DE 2,0 SIN ACOPLE",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "9",
    reference: "LCPS44",
    description: "BROCA DE 2.5 SIN ACOPLE",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "10",
    reference: "LCPM16",
    description: "MANGO EN T ANCLAJE RAPIDO",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "11",
    reference: "LCPM10",
    description: "GUIA DOBLE 1,8/2,5",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "12",
    reference: "LCPM11",
    description: "GUIA DOBLE 1,5/2,0",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "13",
    reference: "LCPM19",
    description:
      "ATORNILLADOR ESTRIADO PARA TORNILLOS STAR DRIVE ACOPLE RAPIDO + CAMISA",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "14",
    reference: "LCPM09",
    description: "GUIA DE BLOQUEO 1,5",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "15",
    reference: "LCPM07",
    description: "GUIA DE BLOQUEO 2,0",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "16",
    reference: "LCPM08",
    description: "GUIA ROSCADA 1,8",
    quantity: 2,
    section: "RADIO DISTAL #318",
  },
  {
    id: "17",
    reference: "LCPM30",
    description: "PINZA REDUCTORA DE PUNTAS",
    quantity: 1,
    section: "RADIO DISTAL #318",
  },
  {
    id: "18",
    reference: "",
    description: "MEDIDOR DE PROFUNDIDAD CON PROTECTOR",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "19",
    reference: "LCPM59",
    description: "PINZA REDUCTORA ESPAÑOLA",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "20",
    reference: "LCPM29",
    description: "PINZA REDUCTORA CON PUNTA",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "21",
    reference: "LCPM18",
    description: "TORQUIMETRO 0.8",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "22",
    reference: "LCPM26",
    description: "DOBLADORES DE PLACA",
    quantity: 2,
    section: "BASE",
  },
  {
    id: "23",
    reference: "LCPM24",
    description: "PINZA PORTA TORNILLO",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "24",
    reference: "LCPM44",
    description: "GUIA ANGULO FIJO Y/O VARIABLE 1.5",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "25",
    reference: "LCPS31",
    description: "GUIA ANGULO FIJO Y/O VARIABLE 2.0",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "26",
    reference: "PM38/LCPM",
    description: "BANDEJA+TAPA",
    quantity: 1,
    section: "BASE",
  },
  {
    id: "27",
    reference: "247.0102510.25",
    description: "TORNILLO CORTICAL DE 2.5X10MM STAR DRIVE",
    quantity: 4,
    section: "IMPLANTES",
  },
];

export default function InventoryTable() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = (
    id: string,
    field: keyof InventoryItem,
    value: string | number
  ) => {
    setInventory(
      inventory.map((item) =>
        item.id === id
          ? { ...item, [field]: field === "quantity" ? Number(value) : value }
          : item
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const groupedInventory = inventory.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, InventoryItem[]>);

  const calculateSectionTotal = (items: InventoryItem[]) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      {Object.entries(groupedInventory).map(([section, items]) => (
        <div key={section} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section}</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Referencia</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.reference}</TableCell>
                  <TableCell>
                    {editingId === item.id ? (
                      <Input
                        value={item.description}
                        onChange={(e) =>
                          handleSave(item.id, "description", e.target.value)
                        }
                        onBlur={() => setEditingId(null)}
                        autoFocus
                      />
                    ) : (
                      item.description
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === item.id ? (
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleSave(item.id, "quantity", e.target.value)
                        }
                        onBlur={() => setEditingId(null)}
                        autoFocus
                      />
                    ) : (
                      item.quantity
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(item.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} className="font-bold text-right">
                  Total {section}:
                </TableCell>
                <TableCell className="font-bold">
                  {calculateSectionTotal(items)}
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
