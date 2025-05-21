import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const PackageCard = ({ title, price, image, badge }) => (
  <div className="rounded-xl overflow-hidden shadow-lg border bg-white">
    <Image
      src={image}
      alt={title}
      width={400}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm">{title}</h3>
        {badge && (
          <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm">Starting from</p>
      <p className="text-green-600 font-bold">${price}*</p>
      <Button variant="link" className="text-primary p-0 text-sm mt-2">
        View Details <FaArrowRight className="ml-1" />
      </Button>
    </div>
  </div>
);

export default function PackageSection({ title, color, packages }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-xl font-bold mb-6">
        Explore <span className="text-primary">✔ {title}</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
}
