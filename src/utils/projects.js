// utils/projects.js

// Helper function to generate a URL-friendly slug from a title
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric chars
    .replace(/\s+/g, "-")         // Replace spaces with hyphens
    .replace(/-+/g, "-");         // Collapse multiple hyphens
};

// Projects data (can later come from an API or CMS)
export const projects = [
  {
    id: "1",
    imageUrl:
      "/landingPage/Balehonnur.png",
    title: "Balehonnur",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Balehonnur"),
    description:
      "A beautiful residential project located in the heart of Bengaluru, offering modern amenities and serene living spaces.",
    details:
      "Spacious 3BHK apartments, rooftop garden, swimming pool, and 24/7 security. Close to schools and hospitals.",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/BaliaBusStand.png",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    year: "2023",
    area: "5000 Sq.Ft",
    status: "Completed",
    architects: "Siva, Nakshatra Parek",
  },
  {
    id: "2",
    imageUrl:
      "/landingPage/BagmanneSierra.png",
    title: "Bagmanne Sierra",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Bagmanne-Sierra"),
    description:
      "A state-of-the-art commercial complex designed for modern businesses, featuring flexible office spaces and retail outlets.",
    details:
      "Grade A office spaces, high-speed internet, ample parking, and a vibrant food court. Located in a prime business district.",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/BaliaBusStand.png",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    year: "2022",
    area: "7500 Sq.Ft",
    status: "Ongoing",
    architects: "John Doe, Jane Smith",
  },
  {
    id: "3",
    imageUrl:
      "/landingPage/BaliaBusStand.png",
    title: "Balia Bus Stand",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Balia Bus Stand"),
    description:
      "Luxurious villas nestled amidst lush greenery, offering a tranquil escape with private pools and stunning views.",
    details:
      "Private beach access, concierge services, fully furnished villas, and proximity to popular tourist attractions.",
    images: [
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/BaliaBusStand.png",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    year: "2024",
    area: "10000 Sq.Ft",
    status: "Proposed",
    architects: "Alice Johnson, Bob Williams",
  },
  {
    id: "4",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Green Axis",
    location: "Chennai",
    category: "Master Planning",
    slug: generateSlug("Green Axis"),
    description:
      "An innovative master plan for sustainable urban development, integrating green spaces, smart infrastructure, and community living.",
    details:
      "Eco-friendly design, rainwater harvesting, solar power integration, and dedicated cycling tracks. A vision for future cities.",
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/BaliaBusStand.png",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    year: "2023",
    area: "12000 Sq.Ft",
    status: "Completed",
    architects: "Charlie Brown, Lucy Van Pelt",
  },
  {
    id: "5",
    imageUrl:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Civic Pavilion",
    location: "Pune",
    category: "Public",
    slug: generateSlug("Civic Pavilion"),
    description:
      "A contemporary civic center designed to foster community engagement, hosting cultural events, workshops, and public gatherings.",
    details:
      "Multi-purpose halls, art galleries, open-air amphitheater, and a public library. A hub for community activities.",
    images: [
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/BaliaBusStand.png",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    year: "2022",
    area: "8000 Sq.Ft",
    status: "Ongoing",
    architects: "David Lee, Emily Chen",
  },
  {
    id: "6",
    imageUrl:
      "https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Azure Villa",
    location: "Kochi",
    category: "Villas",
    slug: generateSlug("Azure Villa"),
    description:
      "Elegant waterfront villas offering panoramic views of the backwaters, combining traditional architecture with modern comforts.",
    details:
      "Private jetties, infinity pools, gourmet kitchens, and personalized butler service. Experience luxury by the water.",
    images: [
      "https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/BaliaBusStand.png",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    year: "2024",
    area: "15000 Sq.Ft",
    status: "Proposed",
    architects: "Frank White, Grace Black",
  },
  {
    id: "7",
    imageUrl:
      "https://images.pexels.com/photos/2611875/pexels-photo-2611875.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Haven Rise",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Haven Rise"),
    description:
      "A modern residential complex with thoughtfully designed apartments, offering a perfect blend of comfort and convenience.",
    details:
      "Gymnasium, children's play area, landscaped gardens, and proximity to IT parks. Ideal for urban families.",
    images: [
      "https://images.pexels.com/photos/2611875/pexels-photo-2611875.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/BaliaBusStand.png",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    year: "2023",
    area: "6000 Sq.Ft",
    status: "Completed",
    architects: "Henry Green, Ivy Blue",
  },
];