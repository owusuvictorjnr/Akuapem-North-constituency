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
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import Donation from "../Donation/Donation";

export default function Header() {
  return (
    <>
      {/* <div className="h-10 w-full bg-black/30">
        <div className="flex justify-between items-center pt-3 px-10">
          <div className="flex items-center space-x-10 lg:px-32">
            <Link href="" className="hover:text-red-500">
              <FaFacebookF color="white" className="hover:text-red-500" />
            </Link>

            <Link href="">
              <FaTwitter color="white" />
            </Link>

            <Link href="">
              <FaInstagram color="white" />
            </Link>

            <Link href="">
              <FaTiktok color="white" />
            </Link>
          </div>
          <div className="flex space-x-10 lg:px-32 hover:text-red-500">
            <div className="flex text-white">
              <MdPhone color="white" className="mt-1" /> : +233 xxx-xxx-xxx
            </div>

            <MdEmail color="white" />
          </div>
        </div>
      </div> */}
      {/* Main bar */}
      <div className="flex w-full flex-col">
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
                  <h1 className="flex capitalize text-white">
                    akuapem north constituency
                  </h1>
                </Link>
              </div>

              <ul className="flex justify-center items-center space-x-5">
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
                    href="/about"
                    className="text-muted-foreground capitalize hover:text-foreground"
                  >
                    about
                  </Link>
                </li>

                <li className="">
                  <Link
                    href="/news/events"
                    className="text-muted-foreground capitalize hover:text-foreground"
                  >
                    news & events
                  </Link>
                </li>

                <li className="">
                  <Link
                    href="/projects"
                    className="text-muted-foreground capitalize hover:text-foreground"
                  >
                    projects
                  </Link>
                </li>

                <li className="">
                  <Link
                    href="/community-resources"
                    className="text-muted-foreground capitalize hover:text-foreground"
                  >
                    community resources
                  </Link>
                </li>

                <li className="">
                  <Link
                    href="/contact-us"
                    className="text-muted-foreground capitalize hover:text-foreground"
                  >
                    contact us
                  </Link>
                </li>

                <li className="/constituent-service">
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
                        href="about"
                        className="text-blue-600 capitalize hover:text-foreground"
                      >
                        about
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        href="/news/events"
                        className="text-blue-600 capitalize hover:text-foreground"
                      >
                        news & events
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        href="/projects"
                        className="text-blue-600 capitalize hover:text-foreground"
                      >
                        projects
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        href="community-resources"
                        className="text-blue-600 capitalize hover:text-foreground"
                      >
                        community resources
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        href="contact-us"
                        className="text-blue-600 capitalize hover:text-foreground"
                      >
                        contact us
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        href="/constituent-service"
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
            {/* Donation */}

            <div className="flex justify-center items-center mt-5 font-bold px-10 mb-5">
              <Button className="w-full bg-rose-500 uppercase ">
                donate now
              </Button>
            </div>

            {/* User */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </header>
      </div>
    </>
  );
}
