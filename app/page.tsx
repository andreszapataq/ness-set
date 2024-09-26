import { ReferenceManagementComponent } from "@/components/reference-management";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Ingreso de lotes</h1>
      <ReferenceManagementComponent />
    </div>
  );
}
