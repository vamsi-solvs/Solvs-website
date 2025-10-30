"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors px-6 md:px-12 py-24 grid md:grid-cols-2 gap-16">
      {/* Left Section */}
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold mb-6">CONTACT US</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-md">
            For any enquiries, or just to say hello, get in touch and contact us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-16 gap-10 mt-10">
          {/* New Projects */}
          <div>
            <h3 className="text-gray-500 mb-3 text-sm tracking-wide uppercase">
              New Projects
            </h3>
            <div className="space-y-1 text-base">
              <p>Inspira</p>
              <p>Narayana One Health</p>
            </div>
          </div>

          {/* General Inquiries */}
          <div>
            <h3 className="text-gray-500 mb-3 text-sm tracking-wide uppercase">
              General Inquiries
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:ofa@gmail.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors dark:text-gray-300 dark:group-hover:text-white" />
                <span className="group-hover:underline">ofa@gmail.com</span>
              </a>
              <a
                href="tel:09845537772"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors dark:text-gray-300 dark:group-hover:text-white" />
                <span className="group-hover:underline">098455 37772</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-10">
        {/* Address */}
        <div>
          <h3 className="text-gray-500 mb-3 text-sm tracking-wide uppercase">
            Address
          </h3>
          <p className="leading-relaxed text-base">
            934, 3rd Cross Rd, HRBR Layout
            <br />
            1st Block, HRBR Layout, Kalyan Nagar,
            <br />
            Bengaluru, Karnataka 560043
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-gray-500 mb-3 text-sm tracking-wide uppercase">
            Follow Us
          </h3>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="X"
              className="text-gray-600 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-600 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8">
          <Image
            src="https://images.pexels.com/photos/210552/pexels-photo-210552.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Architectural Building"
            width={800}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}