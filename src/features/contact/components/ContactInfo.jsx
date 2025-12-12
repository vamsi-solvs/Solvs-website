import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  X,
  Youtube,
  Linkedin,
} from "lucide-react";

const InfoSection = ({ title, children }) => (
  <div>
    <h3 className="text-gray-500 mb-3 text-sm tracking-wide">{title}</h3>
    <div className="space-y-2 text-base">{children}</div>
  </div>
);

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
      <InfoSection title="New Projects">
        <p>Inspira</p>
        <p>Narayana One Health</p>
      </InfoSection>

      <InfoSection title="General Inquiries">
        <a href="mailto:ofa@gmail.com" className="flex items-center gap-3 group">
          <Mail className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
          <span className="group-hover:underline">ofa@gmail.com</span>
        </a>
        <a href="tel:09845537772" className="flex items-center gap-3 group">
          <Phone className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
          <span className="group-hover:underline">098455 37772</span>
        </a>
      </InfoSection>

      <InfoSection title="Address">
        <p>
          934, 3rd Cross Rd, HRBR Layout
          <br />
          1st Block, HRBR Layout, Kalyan
          <br />
          Nagar, Bengaluru, Karnataka 560043
        </p>
      </InfoSection>

      <InfoSection title="Follow Us">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/officeofarchitecture/"
            aria-label="Instagram"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="X"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </InfoSection>
    </div>
  );
}