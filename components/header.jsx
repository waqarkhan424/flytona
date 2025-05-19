import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Flytona
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/search">Search</Link>
          <Link href="/visa">Visit Visa</Link>
          <Link href="/umrah">Umrah Packages</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
