import Link from "next/link";
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
            <img src="/flytona.png" alt="Flytona" className="h-8" />
          </Link>
          <div className="text-sm mt-2 md:mt-0 md:ml-6 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <FaPhone className="text-primary" /> +92 51 111 786 785
            </div>
            <div className="flex items-center gap-1">
              <FaWhatsapp className="text-whatsapp" /> +92 311 786 785
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
              <img
                src="/usd.webp"
                alt="US Flag"
                className="w-4 h-4 object-cover"
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
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-4 items-center">
          {[
            "Home",
            "Flights",
            "Hajj",
            "Umrah",
            "Study",
            "Visa",
            "World Tours",
            "Pakistan Tours",
            "About Us",
            "Contact Us",
          ].map((item) => {
            const hasDropdown = [
              "Hajj",
              "Umrah",
              "Study",
              "Visa",
              "World Tours",
              "Pakistan Tours",
              "About Us",
            ].includes(item);

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
