"use client";

import { Mail, MapPin, Clock, Briefcase } from "lucide-react";

export function CareerCard({
  id,
  title,
  department,
  location,
  type,
  description,
  email,
}) {
  const handleApply = () => {
    const subject = encodeURIComponent(`Application for ${title}`);
    const body = encodeURIComponent(
      `Dear Hiring Manager,\n\nI am writing to express my interest in the ${title} position.\n\nBest regards,`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="border border-gray-200 p-8 transition-shadow hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-2">{title}</h2>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {department}
          </p>
        </div>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin size={16} strokeWidth={1.5} />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} strokeWidth={1.5} />
          <span>{type}</span>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={16} strokeWidth={1.5} />
          <span>{department}</span>
        </div>
      </div>

      <button
        onClick={handleApply}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-colors"
      >
        <Mail size={16} strokeWidth={1.5} />
        Apply via Email
      </button>
    </div>
  );
}
