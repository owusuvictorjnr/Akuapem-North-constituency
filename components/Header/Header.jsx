import Link from "next/link";
import { CircleUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 bg-gradient-to-r from-red-400 via-white to-blue-500 flex justify-between lg:justify-center gap-10 h-16 items-center border-b px-4 md:px-">
        <div className="hidden md:block">
          <nav className="flex font-medium space-x-5 ">
            <div className="flex items-center justify-start gap-5">
              <div className="">
                <Image
                  src="/assets/logo/npp-4.png"
                  alt="NPP logo"
                  height={500}
                  width={500}
                  className="rounded-md h-10 w-14"
                />
              </div>
              <Link href="/" className=" hover:text-foreground">
                <h1 className="flex capitalize text-white">akuapem north constituency</h1>
              </Link>
            </div>

            <ul className="flex justify-center items-center space-x-10">
              <li className="">
                <Link
                  href="/"
                  className="text-muted-foreground capitalize hover:text-foreground"
                >
                  home
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="text-muted-foreground capitalize hover:text-foreground"
                >
                  about
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="text-muted-foreground capitalize hover:text-foreground"
                >
                  news & events
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="text-muted-foreground capitalize hover:text-foreground"
                >
                  projects
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="text-muted-foreground capitalize hover:text-foreground"
                >
                  community resources
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="text-muted-foreground capitalize hover:text-foreground"
                >
                  contact us
                </Link>
              </li>

              <li className="">
                <Link
                  href="#"
                  className="text-muted-foreground capitalize hover:text-foreground"
                >
                  constituent services
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar */}
        <Sheet>
          <div className="bg-blue-400 space-y-10">
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden flex"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid space-y-5">
                <div className="bg-white mt-10 py-2 ">
                  <Link href="/" className=" hover:text-foreground">
                    <h1 className="text-center capitalize">
                      akuapem north constituency
                    </h1>
                  </Link>
                </div>

                <ul className="flex flex-col px-5 space-y-5">
                  <li className="">
                    <Link
                      href="/"
                      className="text-blue-600 capitalize hover:text-foreground"
                    >
                      home
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="#"
                      className="text-blue-600 capitalize hover:text-foreground"
                    >
                      about
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="#"
                      className="text-blue-600 capitalize hover:text-foreground"
                    >
                      news & events
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="#"
                      className="text-blue-600 capitalize hover:text-foreground"
                    >
                      projects
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="#"
                      className="text-blue-600 capitalize hover:text-foreground"
                    >
                      community resources
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="#"
                      className="text-blue-600 capitalize hover:text-foreground"
                    >
                      contact us
                    </Link>
                  </li>

                  <li className="">
                    <Link
                      href="#"
                      className="text-blue-600 capitalize hover:text-foreground"
                    >
                      constituent services
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </div>
        </Sheet>
        <div className="">
          {/* User */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
