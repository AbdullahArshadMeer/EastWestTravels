"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { X, CheckCircle, User, FileText, Phone, Mail, ArrowRight, Camera, AlertTriangle } from "lucide-react";

export default function HajjPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const allowedPaths = ["/", "/packages/hajj"];
    if (!allowedPaths.includes(pathname)) return;
    const alreadyShown = sessionStorage.getItem("hajj_popup_shown");
    if (alreadyShown) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hajj_popup_shown", "true");
    }, 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — top right, semi-transparent */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white border border-gray-200 flex items-center justify-center text-gray-800 hover:text-green-700 transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with logos — East West left, IATA + Hajj Ministry right */}
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-gray-200 gap-3">
          {/* Left: East West logo (BIG — no text) */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image src="/images/logo.png" alt="East West Travels" fill sizes="128px" className="object-contain" />
          </div>

          {/* Right: IATA + Hajj Ministry logos */}
          <div className="flex items-center gap-3">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/images/IATA.png"
                alt="IATA"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/images/MH.png"
                alt="Hajj Ministry"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center px-6 pt-6 pb-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-700 mb-2">Registrations Open</div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
            <span className="text-green-700">HAJJ</span>{" "}
            <span style={{ color: "#d4a017" }}>2027</span>
          </h2>
          <div className="text-[13px] font-bold tracking-[0.2em] uppercase text-gray-800 mb-3">Has Started</div>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Contact us to begin your Hajj spiritual journey. Send required documents via WhatsApp or Email.
          </p>
        </div>

        {/* Requirements section */}
        <div className="px-6 pb-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Required documents */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h3 className="flex items-center gap-2 text-[13px] font-bold text-green-800 mb-3 uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                Required Documents
              </h3>
              <ul className="space-y-2">
                {["CNIC — Front and Back", "Scanned Passport (Photo Page)", "Marital Status", "Educational Qualification", "Mobile Number", "Email Address", "Residential Address"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo requirements */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h3 className="flex items-center gap-2 text-[13px] font-bold text-amber-800 mb-3 uppercase tracking-wider">
                <Camera className="w-4 h-4" />
                Passport Size Photo
              </h3>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start gap-2 text-[12px] text-gray-700">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>White background is mandatory</span>
                </li>
                <li className="flex items-start gap-2 text-[12px] text-gray-700">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Face clearly visible (70-80%)</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-amber-200">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800 mb-2 uppercase tracking-wider">
                  <AlertTriangle className="w-3 h-3" />
                  Important
                </div>
                <div className="space-y-2 text-[11px] text-gray-700">
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-gray-900 mb-0.5">
                      <User className="w-3 h-3 text-green-700" /> Male:
                    </div>
                    <p className="pl-4">No glasses, cap, or head cover.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 font-semibold text-gray-900 mb-0.5">
                      <User className="w-3 h-3 text-green-700" /> Female:
                    </div>
                    <p className="pl-4">Abaya or Scarf/Hijab, face clearly visible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact + CTA footer */}
        <div className="bg-gradient-to-br from-green-700 to-green-800 text-white px-6 py-5 rounded-b-3xl">
          <div className="text-center mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 mb-2">For More Information</div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
              <a href="tel:01782860407" className="flex items-center gap-1.5 hover:text-amber-300">
                <Phone className="w-3.5 h-3.5" /> 01782 860407
              </a>
              <a href="https://wa.me/447886857459" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-amber-300">
                <Phone className="w-3.5 h-3.5" /> 07886 857 459
              </a>
              <a href="mailto:info@eastweststoke.co.uk" className="flex items-center gap-1.5 hover:text-amber-300">
                <Mail className="w-3.5 h-3.5" /> info@eastweststoke.co.uk
              </a>
            </div>
          </div>

          <Link
            href="/packages/hajj"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-green-900 text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
          >
            View Hajj Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}