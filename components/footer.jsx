export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Flytona. All rights reserved.
      </div>
    </footer>
  );
}
