"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Helper function to generate a slug (replicated from page.jsx for consistency)
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

// Replicate the projects array here for now. In a real app, this would come from a centralized data source or API.
const projects = [
  {
    id: "1",
    imageUrl:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Balehonnur",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Balehonnur"),
    description: "A beautiful residential project located in the heart of Bengaluru, offering modern amenities and serene living spaces.",
    details: "Spacious 3BHK apartments, rooftop garden, swimming pool, and 24/7 security. Close to schools and hospitals."
  },
  {
    id: "2",
    imageUrl:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Urban Edge",
    location: "Hyderabad",
    category: "Commercial",
    slug: generateSlug("Urban Edge"),
    description: "A state-of-the-art commercial complex designed for modern businesses, featuring flexible office spaces and retail outlets.",
    details: "Grade A office spaces, high-speed internet, ample parking, and a vibrant food court. Located in a prime business district."
  },
  {
    id: "3",
    imageUrl:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Palm Court",
    location: "Goa",
    category: "Residential",
    slug: generateSlug("Palm Court"),
    description: "Luxurious villas nestled amidst lush greenery, offering a tranquil escape with private pools and stunning views.",
    details: "Private beach access, concierge services, fully furnished villas, and proximity to popular tourist attractions."
  },
  {
    id: "4",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Green Axis",
    location: "Chennai",
    category: "Master Planning",
    slug: generateSlug("Green Axis"),
    description: "An innovative master plan for sustainable urban development, integrating green spaces, smart infrastructure, and community living.",
    details: "Eco-friendly design, rainwater harvesting, solar power integration, and dedicated cycling tracks. A vision for future cities."
  },
  {
    id: "5",
    imageUrl:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Civic Pavilion",
    location: "Pune",
    category: "Public",
    slug: generateSlug("Civic Pavilion"),
    description: "A contemporary civic center designed to foster community engagement, hosting cultural events, workshops, and public gatherings.",
    details: "Multi-purpose halls, art galleries, open-air amphitheater, and a public library. A hub for community activities."
  },
  {
    id: "6",
    imageUrl:
      "https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Azure Villa",
    location: "Kochi",
    category: "Villas",
    slug: generateSlug("Azure Villa"),
    description: "Elegant waterfront villas offering panoramic views of the backwaters, combining traditional architecture with modern comforts.",
    details: "Private jetties, infinity pools, gourmet kitchens, and personalized butler service. Experience luxury by the water."
  },
  {
    id: "7",
    imageUrl:
      "https://images.pexels.com/photos/2611875/pexels-photo-2611875.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Haven Rise",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Haven Rise"),
    description: "A modern residential complex with thoughtfully designed apartments, offering a perfect blend of comfort and convenience.",
    details: "Gymnasium, children's play area, landscaped gardens, and proximity to IT parks. Ideal for urban families."
  },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link href="/work" className="text-blue-500 hover:underline ml-4">
          Go back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="text-blue-500 hover:underline mb-8 block">
          &larr; Back to Work
        </Link>
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-700 mb-6">{project.location} | {project.category}</p>

        <div className="mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg mb-4">{project.description}</p>
        <p className="text-md text-gray-800">{project.details}</p>
      </div>
    </div>
  );
}
