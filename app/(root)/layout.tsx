'use client'

import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();  
  return (
    <div className="flex h-screen flex-col">
      <Header currentPath={pathname} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
