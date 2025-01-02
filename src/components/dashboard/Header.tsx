'use client';

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Expense Tracker</h1>
      <Button 
        variant="outline" 
        onClick={() => signOut({ callbackUrl: '/login' })}
      >
        Sign Out
      </Button>
    </header>
  );
}