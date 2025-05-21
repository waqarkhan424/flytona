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
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-y-3 md:gap-x-6">
        {/* Logo + Contact */}
        <div className="flex items-center justify-between w-full md:w-auto gap-x-6">
          <Link
            href="/"
            className="text-xl font-bold text-primary flex items-center gap-2"
          >
            <Image
              src="/flytona.png"
              alt="Flytona"
              width={150}
              height={50}
              priority
            />
          </Link>

          <div className="text-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <FaPhone size={16} className="text-primary" />
              {contactDetails.phone}
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp size={16} className="text-whatsapp" />
              {contactDetails.whatsapp}
            </div>
          </div>
        </div>

        {/* Social Icons + Currency */}
        <div className="flex items-center space-x-4">
          <TooltipProvider>
            {[
              { icon: <FaFacebookF size={16} />, label: "Facebook" },
              { icon: <FaTwitter size={16} />, label: "Twitter" },
              { icon: <FaInstagram size={16} />, label: "Instagram" },
              { icon: <FaPinterest size={16} />, label: "Pinterest" },
              { icon: <FaYoutube size={16} />, label: "YouTube" },
            ].map(({ icon, label }, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer hover:text-primary">
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
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

      {/* Navigation Bar */}
      <nav className="bg-primary text-white text-sm md:text-base font-semibold">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center flex-wrap gap-6">
          {navLinks.map((item) => {
            const hasDropdown = navDropdownItems.includes(item);

            return hasDropdown ? (
              <DropdownMenu key={item}>
                <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 transition">
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
                className="hover:text-white/80 transition-colors"
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
