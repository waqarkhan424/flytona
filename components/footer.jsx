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

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-10 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 pb-10">
        {/* Logo */}
        <div>
          <img
            src="/rgt-logo_footer.webp"
            alt="Flytona"
            className="h-10 mb-4"
          />
        </div>

        {/* Quick Links */}
        <div>
          <Typography variant="h3" className="mb-2">
            QUICK LINKS
          </Typography>
          <ul className="space-y-1 text-sm">
            {[
              "Home",
              "Flights",
              "About Us",
              "Travel Agency",
              "Privacy Policy",
              "Refund Policy",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a href="/" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Branches */}
        <div>
          <Typography variant="h3" className="mb-2">
            OUR BRANCHES
          </Typography>
          <ul className="space-y-1 text-sm">
            {[
              "Islamabad",
              "Peshawar",
              "Lahore",
              "Dubai (UAE)",
              "United Kingdom",
            ].map((branch) => (
              <li key={branch}>
                <span>{branch}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <Typography variant="h3" className="mb-2">
            CONTACT US
          </Typography>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> +92 51 111 786 785
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@rehmantravel.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt />
              <Typography variant="p" className="leading-snug">
                Rehman Travels Office No 3 Ground Floor, Office Tower 44 East
                Fazal E Haq Road Blue Area, G 6/2, Islamabad, 44000, Pakistan
              </Typography>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-primary border-t border-primary-foreground/20 py-4 text-sm text-center text-primary-foreground">
        <TooltipProvider>
          <div className="flex justify-center gap-4 mb-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <FaFacebookF className="cursor-pointer hover:text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>Facebook</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaTwitter className="cursor-pointer hover:text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaInstagram className="cursor-pointer hover:text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>Instagram</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaPinterest className="cursor-pointer hover:text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>Pinterest</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaYoutube className="cursor-pointer hover:text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>YouTube</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
        &copy; {new Date().getFullYear()} Exalted System™. All Rights Reserved.
      </div>
    </footer>
  );
}
