"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ShieldCheck, Phone } from "lucide-react";

const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>;

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-20 w-20 relative flex-shrink-0">
                <Image src="/icon2.png" alt="East West Travels" fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#3d6e2a' }} className="text-[26px] font-semibold italic">East West</div>
                <div style={{ color: '#3d6e2a' }} className="text-[11px] font-semibold mt-0.5">Travels (Stoke on Trent) Ltd</div>
              </div>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed mb-6">
              Your trusted partner for Hajj, Umrah, and global travel experiences since 2015. Based in Stoke-On-Trent, United Kingdom.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-200 text-brand-700 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" /> ATOL Protected
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/eastweststoke" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white border border-ink-line flex items-center justify-center text-ink-soft hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"><FacebookIcon /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-ink mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/packages/hajj" className="text-sm text-ink-soft hover:text-brand-700">Hajj Packages</Link></li>
              <li><Link href="/packages/umrah" className="text-sm text-ink-soft hover:text-brand-700">Umrah Packages</Link></li>
              <li><Link href="/packages/global" className="text-sm text-ink-soft hover:text-brand-700">Global Tours</Link></li>
              <li><Link href="/about" className="text-sm text-ink-soft hover:text-brand-700">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-ink mb-5">More Links</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-ink-soft hover:text-brand-700">Contact Us</Link></li>
              <li><a href="#" className="text-sm text-ink-soft hover:text-brand-700">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-ink-soft hover:text-brand-700">Terms &amp; Conditions</a></li>
              <li><a href="#" className="text-sm text-ink-soft hover:text-brand-700">ATOL Protection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-ink mb-5">Stay in Touch</h4>
            <form className="flex gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="flex-1 px-4 py-2.5 rounded-full bg-white border border-ink-line text-sm focus:outline-none focus:border-brand-600" />
              <button className="px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors">Join</button>
            </form>
            <ul className="space-y-3">
              {/* Office landline */}
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <Phone className="w-4 h-4 mt-0.5 text-brand-700 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">Office</div>
                  <a href="tel:01782860407" className="block hover:text-brand-700">01782 860407</a>
                </div>
              </li>

              {/* WhatsApp numbers */}
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={18} height={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">WhatsApp</div>
                  <a href="https://wa.me/447886857459" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-700">07886 857 459</a>
                  <a href="https://wa.me/447969076913" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-700 mt-0.5">07969 076 913</a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <Mail className="w-4 h-4 mt-0.5 text-brand-700 flex-shrink-0" />
                <a href="mailto:info@eastweststoke.co.uk" className="hover:text-brand-700">info@eastweststoke.co.uk</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-soft">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-700 flex-shrink-0" />
                <span>1 Beresford Street Stoke On Trent, United Kingdom St4 2EX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">© 2026 East West Travels (Stoke-On-Trent) Ltd. All rights reserved.</p>
          <p className="text-xs text-ink-muted">Registered in England &amp; Wales · ATOL Protected</p>
        </div>
      </div>
    </footer>
  );
}