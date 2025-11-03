import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="px-6 py-8 md:px-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 md:mb-12 leading-tight">
              CONTACT US
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              For any enquiries, or just to say hello, get in touch and contact
              us.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8 md:space-y-12">
            {/* Contact Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* General Inquiries */}
              <div>
                <h3 className="text-xl font-semibold mb-6">General Inquires</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="text-lg">ofa@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="text-lg">098455 37772</span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Address</h3>
                <p className="text-lg leading-relaxed">
                  934, 3rd Cross Rd, HRBR Layout
                  <br />
                  1st Block, HRBR Layout, Kalyan
                  <br />
                  Nagar, Bengaluru, Karnataka
                  <br />
                  560043
                </p>
              </div>
            </div>

            {/* Social Media Section */}
            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex gap-6">
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-70"
                >
                  <Facebook className="w-6 h-6" />
                </Link>

                <Link
                  href="https://www.instagram.com/officeofarchitecture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-70"
                >
                  <Instagram className="w-6 h-6" />
                </Link>

                <Link
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="hover:opacity-70"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>

                <Link
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:opacity-70"
                >
                  <Youtube className="w-6 h-6" />
                </Link>

                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-70"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Building Image */}
            <div className="mt-8 relative w-full h-64">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt="Modern architecture building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 md:mt-24 text-center text-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Designed and developed by{" "}
            <Link
              href="https://www.solvs.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors"
            >
              Solvs.co
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
