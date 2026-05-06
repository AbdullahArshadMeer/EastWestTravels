"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pkgOpen, setPkgOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPkgOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    pathname === path ? "text-brand-700" : "text-ink hover:text-brand-700";

  const waLink = "https://wa.me/447886857459";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur border-b border-ink-line/60" : "bg-cream-50/80 backdrop-blur-sm"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="relative w-[150px] h-[200px]  -mt-[00px] -mb-[50px] ml-6">
            <Image src="/images/logo.png" alt="East West Travels" fill className="object-contain scale-150" />
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            <Link href="/" className={`text-sm font-semibold transition-colors ${isActive("/")}`}>Home</Link>
            <Link href="/about" className={`text-sm font-semibold transition-colors ${isActive("/about")}`}>About Us</Link>
            <div className="relative" onMouseEnter={() => setPkgOpen(true)} onMouseLeave={() => setPkgOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${pathname.startsWith("/packages") ? "text-brand-700" : "text-ink hover:text-brand-700"}`}>
                Packages <ChevronDown className="w-4 h-4" />
              </button>
              {pkgOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56">
                  <div className="bg-white rounded-2xl shadow-lift border border-ink-line/60 overflow-hidden">
                    <Link href="/packages/umrah" className="block px-5 py-3 text-sm font-medium text-ink hover:bg-cream-50 hover:text-brand-700">Umrah Packages</Link>
                    <Link href="/packages/hajj" className="block px-5 py-3 text-sm font-medium text-ink hover:bg-cream-50 hover:text-brand-700">Hajj Packages</Link>
                    <Link href="/packages/global" className="block px-5 py-3 text-sm font-medium text-ink hover:bg-cream-50 hover:text-brand-700">Global Tours</Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" className={`text-sm font-semibold transition-colors ${isActive("/contact")}`}>Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-700 transition-colors">
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={25} height={25} />
              WhatsApp
            </a>
            <Link href="/contact" className="btn-primary !py-2.5 !px-5">Get a Quote</Link>
          </div>

          <button className="lg:hidden p-2 text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 border-t border-ink-line/60">
            <div className="flex flex-col gap-1">
              <Link href="/" className="px-3 py-2.5 text-base font-semibold text-ink hover:bg-cream-50 rounded-lg">Home</Link>
              <Link href="/about" className="px-3 py-2.5 text-base font-semibold text-ink hover:bg-cream-50 rounded-lg">About Us</Link>
              <div className="px-3 pt-3 pb-1 text-[11px] font-bold tracking-[0.15em] uppercase text-ink-muted">Packages</div>
              <Link href="/packages/umrah" className="px-3 py-2.5 text-base text-ink hover:bg-cream-50 rounded-lg">Umrah Packages</Link>
              <Link href="/packages/hajj" className="px-3 py-2.5 text-base text-ink hover:bg-cream-50 rounded-lg">Hajj Packages</Link>
              <Link href="/packages/global" className="px-3 py-2.5 text-base text-ink hover:bg-cream-50 rounded-lg">Global Tours</Link>
              <Link href="/contact" className="px-3 py-2.5 text-base font-semibold text-ink hover:bg-cream-50 rounded-lg">Contact</Link>
              <Link href="/contact" className="btn-primary mt-4 mx-3">Get a Quote</Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}