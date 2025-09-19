"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"

export function ConditionalHeader() {
  const pathname = usePathname()
  
  // Don't show the default header on the about page since it has its own custom header
  if (pathname === "/about") {
    return null
  }
  
  return <Header />
}
