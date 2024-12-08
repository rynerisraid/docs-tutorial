import Image from "next/image";
import Link from "next/link";
import { FileIcon } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DocumentInput } from "./document-input";
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={36} height={36}></Image>
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent className="print:hidden">
                <MenubarItem>
                  <FileIcon className="size-4 mr-2" />
                  Save
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounder-sm hover:bg-muted">
                Edit
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounder-sm hover:bg-muted">
                Insert
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounder-sm hover:bg-muted">
                Format
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
};
