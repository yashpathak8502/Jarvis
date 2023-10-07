"use client";

import { Button } from '@/components/ui/button'
import { useState } from 'react';
import { useEffect } from 'react';
import { Sidebar } from "@/components/sidebar";

import { Sheet,SheetTrigger,SheetContent  } from '@/components/ui/sheet';
import {Menu}  from 'lucide-react'

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
        <SheetTrigger>

        <div className="md:hidden">
          <Menu />
        </div>

      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isPro={true} apiLimitCount={1} />
      </SheetContent>
      </Sheet>
  )
}

export default MobileSidebar