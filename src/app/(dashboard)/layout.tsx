import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
}