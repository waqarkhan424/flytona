import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Typography from "./ui/typography";
import { quickLinks, branchList, contactDetails } from "@/lib/siteData";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-10 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10">
        {/* Logo */}
        <div>
          <Image
            src="/flytona-white.png"
            alt="Flytona"
            width={140}
            height={50}
            priority
          />
        </div>

        {/* Quick Links */}
        <div>
          <Typography variant="h3" className="mb-2">
            QUICK LINKS
          </Typography>
          <ul className="space-y-2 text-sm md:text-base">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link
                  href="/"
                  className="hover:underline text-white/90 hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div>
          <Typography variant="h3" className="mb-2">
            OUR BRANCHES
          </Typography>
          <ul className="space-y-2 text-sm md:text-base">
            {branchList.map((branch) => (
              <li key={branch}>{branch}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <Typography variant="h3" className="mb-2">
            CONTACT US
          </Typography>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <FaPhone size={16} className="mt-1 flex-shrink-0" />
              {contactDetails.phone}
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope size={16} className="mt-1 flex-shrink-0" />
              {contactDetails.email}
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt size={16} className="mt-1 flex-shrink-0" />
              {contactDetails.address}
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary border-t border-white/20 py-4 text-sm text-center">
        <TooltipProvider>
          <div className="flex justify-center gap-4 mb-2">
            {[
              { icon: <FaFacebookF size={16} />, label: "Facebook" },
              { icon: <FaTwitter size={16} />, label: "Twitter" },
              { icon: <FaInstagram size={16} />, label: "Instagram" },
              { icon: <FaPinterest size={16} />, label: "Pinterest" },
              { icon: <FaYoutube size={16} />, label: "YouTube" },
            ].map(({ icon, label }, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer hover:text-muted-foreground">
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
        &copy; {new Date().getFullYear()} Exalted System™. All Rights Reserved.
      </div>
    </footer>
  );
}
