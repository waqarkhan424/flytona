import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { contactDetails, navLinks, navDropdownItems } from "@/lib/siteData";

export default function Header() {
  return (
    <header className="bg-background shadow-md sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        {/* Logo + Contacts */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            href="/"
            className="text-xl font-bold text-primary flex items-center gap-2"
          >
            <Image
              src="/flytona.png"
              alt="Flytona"
              width={120}
              height={40}
              priority
            />
          </Link>
          <div className="text-sm mt-2 md:mt-0 md:ml-6 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <FaPhone className="text-primary" /> {contactDetails.phone}
            </div>
            <div className="flex items-center gap-1">
              <FaWhatsapp className="text-whatsapp" />
              {contactDetails.whatsapp}
            </div>
          </div>
        </div>

        {/* Social & Currency */}
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaFacebookF className="hover:text-primary cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>Facebook</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaTwitter className="hover:text-primary cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>Instagram</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaPinterest className="hover:text-red-500 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>Pinterest</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaYoutube className="hover:text-red-600 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>YouTube</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Currency Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 ml-3 font-semibold cursor-pointer">
              <Image
                src="/usd.webp"
                alt="US Flag"
                width={16}
                height={16}
                className="object-cover"
              />
              USD
              <IoMdArrowDropdown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>USD</DropdownMenuItem>
              <DropdownMenuItem>PKR</DropdownMenuItem>
              <DropdownMenuItem>GBP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground text-sm font-semibold">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center flex-wrap gap-6 items-center">
          {navLinks.map((item) => {
            const hasDropdown = navDropdownItems.includes(item);

            return hasDropdown ? (
              <DropdownMenu key={item}>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:underline cursor-pointer">
                  {item} <IoMdArrowDropdown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>{item} Info</DropdownMenuItem>
                  <DropdownMenuItem>{item} Packages</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item}
                href="/"
                className="hover:underline flex items-center gap-1"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
