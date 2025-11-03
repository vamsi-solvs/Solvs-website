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
        "/bagmane/V2.webp",
    title: "Bagmanne Sierra",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Bagmanne-Sierra"),
    description:
      "A state-of-the-art commercial complex designed for modern businesses, featuring flexible office spaces and retail outlets.",
    details:
      "Grade A office spaces, high-speed internet, ample parking, and a vibrant food court. Located in a prime business district.",
    images: [
  "/bagmane/V-Aerial.webp",
  "/bagmane/V3.webp",
  "/bagmane/V2.webp",
  "/bagmane/V3 (2).webp",
  "/bagmane/V5.webp",
  "/bagmane/V4 (2).webp",
  "/bagmane/V9.webp",
  "/bagmane/V8.webp",
  "/bagmane/V4.webp",
  "/bagmane/V7.webp",
  "/bagmane/V1 (2).webp",
  "/bagmane/Masterplan Render_GF.webp",
  "/bagmane/V2_Render copy.webp",
  "/bagmane/V6.webp",
  "/bagmane/Masterplan Render_Roof.webp",
  "/bagmane/V1.webp",
  "/bagmane/V-Lake 1B.webp",
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
    category: "Public",
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
       "/sushanth/MMH5555.webp",
    title: "Sushanth AS",
    location: "Bangalore",
    category: "Residential",
    slug: generateSlug("Sushanth AS"),
    description:
      "An innovative master plan for sustainable urban development, integrating green spaces, smart infrastructure, and community living.",
    details:
      "Eco-friendly design, rainwater harvesting, solar power integration, and dedicated cycling tracks. A vision for future cities.",
    images: [
       "/sushanth/MMH5555.webp",
  "/sushanth/MMH5445.webp",
  "/sushanth/MMH5740.webp",
  "/sushanth/MMH6024-Edit.webp",
  "/sushanth/MMH5649.webp",
  "/sushanth/MMH5836-Edit.webp",
  "/sushanth/MMH5750.webp",
  "/sushanth/MMH5511.webp",
  "/sushanth/MMH5955-Edit-1.webp",
  "/sushanth/MMH6051-Edit.webp",
  "/sushanth/MMH5902-Edit.webp",
  "/sushanth/MMH5688.webp",
  "/sushanth/MMH5768-Edit.webp",
  "/sushanth/MMH5979-Edit.webp",
  "/sushanth/MMH5578.webp",
],
    year: "2023",
    area: "12000 Sq.Ft",
    status: "Completed",
    architects: "Charlie Brown, Lucy Van Pelt",
  },
  {
    id: "5",
    imageUrl:
      "/hemal_desai/ak-19.webp",
    title: "Hemal Desai",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Hemal Desai"),
    description:
      "A contemporary civic center designed to foster community engagement, hosting cultural events, workshops, and public gatherings.",
    details:
      "Multi-purpose halls, art galleries, open-air amphitheater, and a public library. A hub for community activities.",
    images: [
      "/hemal_desai/ak-19.webp",
  "/hemal_desai/ak-9.webp",
  "/hemal_desai/ak-26.webp",
  "/hemal_desai/ak-31.webp",
  "/hemal_desai/ak-36.webp",
  "/hemal_desai/ak-37.webp",
  "/hemal_desai/ak-22.webp",
  "/hemal_desai/ak-23.webp",
  "/hemal_desai/ak-35.webp",
  "/hemal_desai/ak-28.webp",
  "/hemal_desai/ak-32.webp",
  "/hemal_desai/ak-24.webp",
  "/hemal_desai/ak-25.webp",
  "/hemal_desai/ak-33.webp",
  "/hemal_desai/ak-29.webp",
  "/hemal_desai/ak-13.webp",
],
    year: "2022",
    area: "8000 Sq.Ft",
    status: "Ongoing",
    architects: "David Lee, Emily Chen",
  },
  {
    id: "6",
    imageUrl:
        "/jay_desai/ak-3 copy.webp",
    title: "Jay Desai",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Jay Desai"),
    description:
      "Elegant waterfront villas offering panoramic views of the backwaters, combining traditional architecture with modern comforts.",
    details:
      "Private jetties, infinity pools, gourmet kitchens, and personalized butler service. Experience luxury by the water.",
    images: [
  "/jay_desai/ak-5.webp",
  "/jay_desai/ak-10.webp",
  "/jay_desai/ak-8.webp",
  "/jay_desai/ak-4.webp",
  "/jay_desai/ak-20.webp",
  "/jay_desai/ak-3 copy.webp",
  "/jay_desai/ak-16.webp",
  "/jay_desai/ak-1-2.webp",
  "/jay_desai/ak-2.webp",
  "/jay_desai/ak-14.webp",
  "/jay_desai/ak-1.webp",
  "/jay_desai/ak-15.webp",
  "/jay_desai/ak-12.webp",
  "/jay_desai/ak-7.webp",
  "/jay_desai/ak-6.webp",
],
    year: "2024",
    area: "15000 Sq.Ft",
    status: "Proposed",
    architects: "Frank White, Grace Black",
  },
  {
    id: "7",
    imageUrl:
      "/rajeev_guptha/ARJ8380.webp",
    title: "Rajeev Guptha",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Rajeev Guptha"),
    description:
      "A modern residential complex with thoughtfully designed apartments, offering a perfect blend of comfort and convenience.",
    details:
      "Gymnasium, children's play area, landscaped gardens, and proximity to IT parks. Ideal for urban families.",
    images: [
  "/rajeev_guptha/ARJ8342.webp",
  "/rajeev_guptha/ARJ8457.webp",
  "/rajeev_guptha/ARJ8380.webp",
  "/rajeev_guptha/ARJ8431.webp",
  "/rajeev_guptha/ARJ8369(1).webp",
  "/rajeev_guptha/ARJ8313.webp",
  "/rajeev_guptha/ARJ8410.webp",
  "/rajeev_guptha/ARJ8373.webp",
  "/rajeev_guptha/ARJ8471.webp",
  "/rajeev_guptha/ARJ8452.webp",
  "/rajeev_guptha/ARJ8347.webp",
  "/rajeev_guptha/ARJ8395 copy.webp",
  "/rajeev_guptha/ARJ8465.webp",
  "/rajeev_guptha/ARJ8454.webp",
  "/rajeev_guptha/ARJ8479.webp",
],
    year: "2023",
    area: "6000 Sq.Ft",
    status: "Completed",
    architects: "Henry Green, Ivy Blue",
  },
  {
    id: "8",
    imageUrl:
      "/sri_durga/Final 2.webp",
    title: "Sri Durga",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Sri Durga"),
    description:
      "A modern residential complex with thoughtfully designed apartments, offering a perfect blend of comfort and convenience.",
    details:
      "Gymnasium, children's play area, landscaped gardens, and proximity to IT parks. Ideal for urban families.",
    images: 
[
  "/sri_durga/Final 2.webp",
  "/sri_durga/Final View 2.webp",
  "/sri_durga/Final View 1.webp",
  "/sri_durga/Final 01.webp",
],
    year: "2023",
    area: "6000 Sq.Ft",
    status: "Completed",
    architects: "Henry Green, Ivy Blue",
  },
  {
    id: "9",
    imageUrl:
        "/pine_labs/2.RECEPTION.webp",
    title: "Pine Labs Interior",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Pine Labs Interior"),
    description:
      "A modern residential complex with thoughtfully designed apartments, offering a perfect blend of comfort and convenience.",
    details:
      "Gymnasium, children's play area, landscaped gardens, and proximity to IT parks. Ideal for urban families.",
    images: 
[
  "/pine_labs/19.BREAKOUT.webp",
  "/pine_labs/14.PB.webp",
  "/pine_labs/1.RECEPTION.webp",
  "/pine_labs/10.COLLAB.webp",
  "/pine_labs/13.CABIN.webp",
  "/pine_labs/15.COLLLAB.webp",
  "/pine_labs/8.WS.webp",
  "/pine_labs/4.EXP.webp",
  "/pine_labs/5.EXP.webp",
  "/pine_labs/2.RECEPTION.webp",
  "/pine_labs/3.RECEPTION.webp",
  "/pine_labs/11.CABIN.webp",
  "/pine_labs/21.BOARD.webp",
  "/pine_labs/17.BREAKOUT.webp",
  "/pine_labs/9.WS.webp",
  "/pine_labs/12.CABIN.webp",
  "/pine_labs/16.BREAKOUT.webp",
  "/pine_labs/22.BOARD.webp",
  "/pine_labs/20.BOARD.webp",
  "/pine_labs/6.EXP.webp",
  "/pine_labs/18.BREAKOUT.webp",
  "/pine_labs/7.WS.webp",
],
    year: "2023",
    area: "6000 Sq.Ft",
    status: "Completed",
    architects: "Henry Green, Ivy Blue",
  },
  {
    id: "10",
    imageUrl:
       "/pine_labs_exterior/Scene1_1.webp",
    title: "Pine Labs",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Pine Labs"),
    description:
      "A modern residential complex with thoughtfully designed apartments, offering a perfect blend of comfort and convenience.",
    details:
      "Gymnasium, children's play area, landscaped gardens, and proximity to IT parks. Ideal for urban families.",
    images: 
[
  "/pine_labs_exterior/Scene 11_1.webp",
  "/pine_labs_exterior/Scene 7_1.webp",
  "/pine_labs_exterior/Scene 9_1.webp",
  "/pine_labs_exterior/Scene 1_1.webp",
  "/pine_labs_exterior/Scene 10_1.webp",
  "/pine_labs_exterior/Scene 12_1.webp",
  "/pine_labs_exterior/Scene 8_1.webp",
  "/pine_labs_exterior/Scene 5.webp",
  "/pine_labs_exterior/Scene 4.webp",
],
    year: "2023",
    area: "6000 Sq.Ft",
    status: "Completed",
    architects: "Henry Green, Ivy Blue",
  },
];