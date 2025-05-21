import SearchBox from "@/components/search-box";
import PackageSection from "@/components/package-section";

const hajjPackages = [
  {
    title: "Hajj Packages 2025",
    price: 5360,
    image: "/hajj-images/pic1.png",
    badge: true,
  },
  {
    title: "Ibadat Packages",
    price: 9350,
    image: "/hajj-images/pic2.png",
    badge: true,
  },
  {
    title: "Executive Hajj Packages",
    price: 11100,
    image: "/hajj-images/pic3.png",
    badge: true,
  },
  {
    title: "Platinum Hajj Packages",
    price: 13100,
    image: "/hajj-images/pic4.png",
    badge: true,
  },
];

const umrahPackages = [
  {
    title: "Economy Umrah Packages",
    price: 713,
    image: "/umrah-images/pic1.png",
  },
  {
    title: "Best Umrah Packages",
    price: 1266,
    image: "/umrah-images/pic2.png",
  },
  {
    title: "Ramzan Umrah Packages",
    price: 1231,
    image: "/umrah-images/pic3.png",
  },
  {
    title: "Executive Umrah Packages",
    price: 1231,
    image: "/umrah-images/pic4.png",
  },
];

const visaPackages = [
  { title: "Dubai Visit Visa", price: 160, image: "/visa-images/pic1.png" },
  { title: "Malaysia Visit Visa", price: 55, image: "/visa-images/pic2.png" },
  { title: "Cambodia Visit Visa", price: 70, image: "/visa-images/pic3.png" },
  { title: "Vietnam Visit Visa", price: 100, image: "/visa-images/pic4.png" },
];

export default function Home() {
  return (
    <div>
      <SearchBox />
      <PackageSection title="Hajj Best Packages" packages={hajjPackages} />
      <PackageSection title="Umrah Best Packages" packages={umrahPackages} />
      <PackageSection
        title="These Welcoming Visit Visa Destinations"
        packages={visaPackages}
      />
    </div>
  );
}
