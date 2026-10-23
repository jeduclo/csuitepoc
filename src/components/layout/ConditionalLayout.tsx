// src/components/layout/ConditionalLayout.tsx
// Every page is a dashboard page now, so the sidebar is always shown.
import { Sidebar } from "./Sidebar";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8 max-w-7xl">
        {children}
      </main>
    </div>
  );
}
