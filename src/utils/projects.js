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
      "/Balehonnuru exterior/FRONT.png",
    title: "Balehonnur Residence Exteriors",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Balehonnur"),
    description:
      "Nestled in the hilly forests of western Karnataka, the Balehonnur Residence is a four-bedroom weekend retreat designed for family gatherings.",
    details:
      " Its façade features four sloping roofs with clearstorey glazing, brick cladding, and expansive wooden openings, while the interiors enjoy generous floor-to-ceiling volumes that rise to dramatic heights beneath the sloped roofs. The design blends traditional elements—wood and stone columns, tiled roofs, and brickwork—with contemporary features like large decks, wading pools, and a striking glass waffle skylight. Large openings frame views of the surrounding hills and bathe the home in natural light, complemented by the soothing sounds of rain, breeze, and water. Key highlights include a sweeping west-facing deck, a vast central courtyard, an intimate open-to-sky garden, and an ancillary block for staff and utilities.",
    images: [
      "/Balehonnuru exterior/FRONT.png",
      "/Balehonnuru exterior/Scene 21.png",
      "/Balehonnuru exterior/option2Scene 20.png",
      "/Balehonnuru exterior/stoneScene 24_1.png"
    ],
    area: "5800 Sq.Ft",
    status: "Ongoing",
    architects: " Balehonnur, Karnataka",
  },
  {
    id: "2",
    imageUrl:
      "/bagmane/V2.webp",
    title: "Sierra Tech Park",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Sierra Tech Park"),
    description:
      "Sierra Tech Park is planned as a contemporary, pedestrian-centric tech campus that thoughtfully balances large-scale functionality with a landscape-driven design approach. The development accommodates an impressive workforce while maintaining a calm, cohesive environment shaped by movement, greenery, and climate-responsive planning. ",
    details:
      " A defining feature of the masterplan is the sweeping east–west green spine, which anchors the site and visually links the campus to its surrounding natural context. This linear landscape not only maximises lake views but also draws prevailing winds into the interior courtyards, creating comfortable outdoor spaces throughout the year. The layout prioritises user experience from the moment of arrival. With most employees accessing the campus through bus transit, the circulation system is designed for efficiency and clarity. A car-free central connector enhances walkability, while buildings positioned along a north–south axis allow abundant natural light with reduced heat gain. Extensive climate and wind studies, informed the placement and massing of buildings to eliminate dead zones and improve microclimate performance.  Architecturally, the buildings feature clean, contemporary massing expressed through sleek vertical fins, deep façade recesses, and high-performance glazing. These elements provide both visual rhythm and solar shading, creating a distinct identity across the campus. The result is a high-performance tech campus that blends thoughtful planning, environmental sensitivity, and a strong architectural identity—creating a setting that elevates both work and everyday experience. ",
    images: [
      "/bagmane/V2.webp",
      "/bagmane/V-Aerial.webp",
      "/bagmane/V3.webp",
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
    area: "7500 Sq.Ft",
    status: "Ongoing",
    architects: "John Doe, Jane Smith",
  },
  {
    id: "3",
    imageUrl:
      "/landingPage/BaliaBusStand.png",
    title: "Ballia Bus Stand",
    location: "Bengaluru",
    category: "Public",
    slug: generateSlug("Ballia Bus Stand"),
    description:
      "The Ballia Bus Terminal is envisioned as a transformative public landmark that blends the town’s cultural heritage with contemporary architecture. ",
    details:
      "Located close to Varanasi one of India’s oldest cultural centres Ballia inherits a rich legacy of festivals, crafts, and rituals, all of which subtly inform the terminal’s architectural character. Designed as a vibrant hub of movement and community life, the terminal integrates functionality, comfort, and aesthetics, creating a destination in its own right. The masterplan features a spacious arrival and waiting hall, an efficient concourse, public commercial areas for retail and F&B, and dedicated administrative and ancillary spaces to ensure seamless operations.Two distinctive design concepts were proposed: Kite and Parasol.The Kite concept draws from the region’s festive kite flying traditions, translating them into ornamental forms. The kites are made of metal jali screens, laid along the length of the facade as a form of protective shading panels.The Parasol option references the iconic umbrellas that line the Varanasi ghats. This option features flat umbrella-like structures that double as structural pillars for the roof. Some of the disks light up, creating a striking visual in the evenings/ nights.Beyond its architectural identity, the terminal will boost Ballia’s micro-economy by creating jobs, supporting small businesses, and setting a new benchmark for transport infrastructure in emerging cities.",
    images: [
      "/landingPage/BaliaBusStand.png",
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "/landingPage/Balehonnur.png",
      "/landingPage/BagmanneSierra.png",
    ],
    area: "10000 Sq.Ft",
    status: "Proposed",
    architects: "Balia, Uttar Pradesh",
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
      "/jay_desai/ak-3 copy.webp",
      "/jay_desai/ak-5.webp",
      "/jay_desai/ak-10.webp",
      "/jay_desai/ak-8.webp",
      "/jay_desai/ak-4.webp",
      "/jay_desai/ak-20.webp",
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
      "/rajeev_guptha/ARJ8380.webp",
      "/rajeev_guptha/ARJ8342.webp",
      "/rajeev_guptha/ARJ8457.webp",
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
      "This commercial complex, designed as a Basement + Ground + 3 storey structure, combines efficient engineering with a clean, contemporary architectural expression. The basement was constructed using secant piling to ensure stability in the tight urban context, while the superstructure employs post-tensioned slabs and beams, enabling large, uninterrupted interior floor plates with minimal columns ideal for flexible commercial planning.",
    details:
      "The façade is defined by four bold ACP portals that frame the building and give it a strong rhythmic identity along the streetscape. Within these portals, expansive glazing and neatly aligned spandrel panels conceal structural beams, creating a seamless, vertical visual flow. The result is a modern, high performance commercial building that balances structural clarity, spatial efficiency, and an elegant, minimal aesthetic suited to a premium urban address.",
    images: [
      "/sri_durga/Final 2.webp",
      "/sri_durga/Final View 2.webp",
      "/sri_durga/Final View 1.webp",
      "/sri_durga/Final 01.webp",
    ],
    area: "7500 Sq.Ft",
    status: "Completed",
    architects: " Koramangala, Bangalore",
  },
  {
    id: "9",
    imageUrl:
      "/pine_labs/2.RECEPTION.webp",
    title: "Pine Labs Interior",
    location: "Bengaluru",
    category: "Renovation",
    slug: generateSlug("Pine Labs Interior"),
    description:
      "The interior renovation of Indian fintech company Pine Labs was developed in close collaboration with the leadership team to realise their vision for the Bangalore headquarters. The goal was to create not only a functional workspace but also an experiential environment for hosting clients, vendors, and stakeholders. The ground floor, designed as the “executive floor,” needed to reflect luxury, sophistication, and practicality.",
    details:
      "The level is divided into two zones: the office space and the innovation centre. The office opens with a spacious reception featuring a baffled wall inspired by the new façade and a prominent static LED display visible from the main road. Work areas include open workstations, 4- and 6-seater cabins, and private 1- and 2-seater pods for confidential discussions. The innovation centre serves as an immersive showcase, equipped with a curved display screen, a dedicated “swag store,” and a POS device display area. It culminates in a grand executive boardroom with a 17-seater marble table, side seating, and elegant chandeliers. Supporting spaces include a dry pantry with high-top seating, a resting room for employees, and a curved wooden partition that separates the two zones.",
    images: [
      "/pine_labs/2.RECEPTION.webp",
      "/pine_labs/19.BREAKOUT.webp",
      "/pine_labs/14.PB.webp",
      "/pine_labs/1.RECEPTION.webp",
      "/pine_labs/10.COLLAB.webp",
      "/pine_labs/13.CABIN.webp",
      "/pine_labs/15.COLLLAB.webp",
      "/pine_labs/8.WS.webp",
      "/pine_labs/4.EXP.webp",
      "/pine_labs/5.EXP.webp",
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
    area: "7500 Sq.Ft",
    status: "Completed",
    architects: "Koramangala, Bangalore",
  },
  {
    id: "10",
    imageUrl:
      "/pine_labs_exterior/Scene1_1.webp",
    title: "Pine Labs",
    location: "Bengaluru",
    category: "Renovation",
    slug: generateSlug("Pine Labs"),
    description:
      "Located in the heart of India’s tech hub, the Pine Labs headquarters recently underwent a complete façade transformation to reflect the company’s renewed brand identity. The original early-2000s façade—defined by coloured ACP panels, heavy glazing, and oversized canopies—felt outdated despite the building’s prominent corner location along a major city corridor.",
    details:
      "The new design introduces a bold contemporary language through three layers of vertical fins that form two smooth, continuous curves across both elevations. Deeper, darker fins at the top and bottom frame a lighter recessed central band, creating space for concealed lighting that accentuates the curves dramatically at night. Below, a sculptural canopy snakes along the façade, varying in depth and seamlessly extending into a curved-roof parking structure.The landscape has been completely reimagined, transforming a purely functional area into a lush, welcoming foreground. Granite-clad benches, tall planter boxes, new greenery, and a serene marble sculpture backed by a granite water wall create an inviting entrance sequence. Upgraded parking surfaces and coordinated finishes ensure the exterior aligns cohesively with the refreshed architectural identity.",
    images: [
      "/pine_labs_exterior/Scene 1_1.webp",
      "/pine_labs_exterior/Scene 11_1.webp",
      "/pine_labs_exterior/Scene 7_1.webp",
      "/pine_labs_exterior/Scene 9_1.webp",
      "/pine_labs_exterior/Scene 10_1.webp",
      "/pine_labs_exterior/Scene 12_1.webp",
      "/pine_labs_exterior/Scene 8_1.webp",
      "/pine_labs_exterior/Scene 5.webp",
      "/pine_labs_exterior/Scene 4.webp",
    ],
    area: "7500 Sq.Ft",
    status: "Completed",
    architects: "Koramangala, Bangalore",
  },
  {
    id: "11",
    imageUrl:
      "/one_health/7.webp",
    title: "One Health",
    location: "Bengaluru",
    category: "Commercial",
    slug: generateSlug("Pine Labs"),
    description:
      "A modern residential complex with thoughtfully designed apartments, offering a perfect blend of comfort and convenience.",
    details:
      "Gymnasium, children's play area, landscaped gardens, and proximity to IT parks. Ideal for urban families.",
    images: [
      "/one_health/7.webp",
      "/one_health/15.webp",
      "/one_health/5.webp",
      "/one_health/19.webp",
      "/one_health/9.webp",
      "/one_health/8.webp",
      "/one_health/18.webp",
      "/one_health/4.webp",
      "/one_health/14.webp",
      "/one_health/13.webp",
      "/one_health/3.webp",
      "/one_health/2.webp",
      "/one_health/12.webp",
      "/one_health/1.webp",
      "/one_health/11.webp",
      "/one_health/10.webp",
      "/one_health/17.webp",
      "/one_health/20.webp",
      "/one_health/16.webp",
      "/one_health/6.webp",
    ],
    area: "6000 Sq.Ft",
    status: "Completed",
    architects: "Henry Green, Ivy Blue",
  },
  {
    id: "12",
    imageUrl:
      "/Balehonnuru interior/4.jpg",
    title: "Balehonnuru Residence Interiors",
    location: "Bengaluru",
    category: "Residential",
    slug: generateSlug("Balehonnur Interiors"),
    description:
      "The interior design of the Balehonnur Residence explores a refined interplay between traditional South Indian architecture and contemporary elements.",
    details:
      "Carved teak cornices, Kota and Athangudi flooring, and classic wooden furniture evoke the charm of 1800s South Indian homes. In contrast, modern touches appear through wooden rafters along the sloped roofs, a sweeping glass staircase, and subtle metal accents in the door knobs, railings, and beadings. A key feature is the dramatic view into the double-height courtyard upon entry, filled with lush greenery and a sculpture placed at the brahmastana. The stone-carved pooja room, inspired by temple architecture, is encircled by a water-filled stepping-stone pradakshina path. Generous floor-to-ceiling heights and openings on all sides bring abundant natural light into the living and dining areas, with the bedrooms following the same warm, cohesive design language.",
    images: [
      "/Balehonnuru interior/4.jpg",
      "/Balehonnuru interior/1.jpg",
      "/Balehonnuru interior/10.jpg",
      "/Balehonnuru interior/2a.jpg",
      "/Balehonnuru interior/2b.jpg",
      "/Balehonnuru interior/3.jpg",
      "/Balehonnuru interior/5.jpg",
      "/Balehonnuru interior/7.jpg",
      "/Balehonnuru interior/8.jpg",
      "/Balehonnuru interior/9.png"
    ],
    area: "8000 Sq.Ft",
    status: "Ongoing",
    architects: " Balehonnur, Karnataka",
  },
  {
    id: "13",
    imageUrl:
      "/Hifi/AK-1-10.jpg",
    title: "Hifi Homethreatre Automation",
    location: "Bangalore",
    category: "Commercial",
    slug: generateSlug("Hifi Homethreatre Automation"),
    description:
      "An innovative master plan for sustainable urban development, integrating green spaces, smart infrastructure, and community living.",
    details:
      "Eco-friendly design, rainwater harvesting, solar power integration, and dedicated cycling tracks. A vision for future cities.",
    images: [
      "/Hifi/AK-1-10.jpg",
      "/Hifi/AK-1-11.jpg",
      "/Hifi/AK-1-13.jpg",
      "/Hifi/AK-1-14.jpg",
      "/Hifi/AK-1-15.jpg",
      "/Hifi/AK-1-16.jpg",
      "/Hifi/AK-1-17.jpg",
      "/Hifi/AK-1-2.jpg",
      "/Hifi/AK-1-20.jpg",
      "/Hifi/AK-1-21.jpg",
      "/Hifi/AK-1-4.jpg",
      "/Hifi/AK-1.jpg"
    ],
    area: "12000 Sq.Ft",
    status: "Completed",
    architects: "Office Of Architecture, Lucy Van Pelt",
  },
  {
    id: "14",
    imageUrl:
      "/Maruthi Ceramics/_ARJ7902.jpg",
    title: "Maruthi Ceramics",
    location: "Bangalore",
    category: "Commercial",
    slug: generateSlug("Maruthi Ceramics"),
    description:
      "An innovative master plan for sustainable urban development, integrating green spaces, smart infrastructure, and community living.",
    details:
      "Eco-friendly design, rainwater harvesting, solar power integration, and dedicated cycling tracks. A vision for future cities.",
    images: [
      "/Maruthi Ceramics/_ARJ7902.jpg",
      "/Maruthi Ceramics/_ARJ7807.jpg",
      "/Maruthi Ceramics/_ARJ7816(2).jpg",
      "/Maruthi Ceramics/_ARJ7873.jpg",
      "/Maruthi Ceramics/_ARJ7897.jpg",
      "/Maruthi Ceramics/_ARJ7912.jpg",
      "/Maruthi Ceramics/_ARJ7918.jpg",
      "/Maruthi Ceramics/_ARJ7923.jpg",
      "/Maruthi Ceramics/_ARJ7968.jpg",
      "/Maruthi Ceramics/_ARJ7974.jpg",
      "/Maruthi Ceramics/_ARJ7980.jpg",
      "/Maruthi Ceramics/_ARJ7984.jpg",
      "/Maruthi Ceramics/_ARJ8009.jpg"
    ],
    area: "12000 Sq.Ft",
    status: "Completed",
    architects: "Office Of Architecture, Lucy Van Pelt",
  },
  {
    id: "15",
    imageUrl: "/air_harinagar_patna/Scene 57.webp",
    title: "AIR Harinagar",
    location: "Patna",
    category: "Master Planning",
    slug: generateSlug("AIR Harinagar"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A large-scale master planning proposal focused on creating a cohesive and sustainable urban environment.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. The design integrates residential clusters, green corridors, and civic infrastructure to create a balanced and efficient layout. Vehicular and pedestrian movement are carefully separated, while landscape elements enhance the overall spatial experience. Strategic zoning ensures optimal land use, environmental responsiveness, and long-term adaptability.",
    images: [
      "/air_harinagar_patna/Scene 57.webp",
      "/air_harinagar_patna/NEW 11_2.webp",
      "/air_harinagar_patna/NEW 10_2.webp",
      "/air_harinagar_patna/Image_1.webp",
      "/air_harinagar_patna/NEW 8_1.webp",
      "/air_harinagar_patna/Scene 52_1.webp",
      "/air_harinagar_patna/Scene 53_1.webp"
    ],
    area: "25 Acres",
    status: "Ongoing",
    architects: "Office Of Architecture, Ipsum Associates",
  },

  {
    id: "16",
    imageUrl: "/reqya_boutique/WhatsApp Image 2026-03-05 at 17.18.59.webp",
    title: "Reya Boutique",
    location: "Bangalore",
    category: "Commercial",
    slug: generateSlug("Reya Boutique"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A boutique retail space designed to create an immersive and elegant shopping experience.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The interiors feature curated lighting, textured finishes, and flexible display systems that adapt to seasonal collections. Spatial planning emphasizes customer flow, visual merchandising, and a refined brand identity, resulting in a compact yet impactful retail environment.",
    images: [
      "/reqya_boutique/WhatsApp Image 2026-03-05 at 17.18.59.webp",
      "/reqya_boutique/REYA BOUTIQUE - 01122025_Page_1_Image_0002.webp",
      "/reqya_boutique/REYA BOUTIQUE - 01122025_Page_3_Image_0002.webp",
      "/reqya_boutique/WhatsApp Image 2026-03-05 at 17.18.59 (1).webp",
      "/reqya_boutique/REYA BOUTIQUE - 01122025_Page_2_Image_0002.webp",
      "/reqya_boutique/WhatsApp Image 2026-03-05 at 17.19.01.webp",
      "/reqya_boutique/WhatsApp Image 2026-03-05 at 17.18.56.webp"
    ],
    area: "1500 Sq.Ft",
    status: "Completed",
    architects: "Office Of Architecture, Design Collective",
  },

  {
    id: "17",
    imageUrl: "/ORR/north wesr view day.webp",
    title: "ORR Kempapura",
    location: "Bangalore",
    category: "Commercial",
    slug: generateSlug("ORR Kempapura"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A contemporary commercial development positioned along a key urban corridor.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The project focuses on maximizing frontage and visibility while maintaining efficient floor plates. Architectural expression is defined by clean lines, shaded glazing, and material contrast. The development integrates parking, retail interfaces, and office spaces into a cohesive urban block.",
    images: [
      "/ORR/north wesr view day.webp",
      "/ORR/r7.webp",
      "/ORR/front view night.webp",
      "/ORR/r3_1.webp",
      "/ORR/22.webp",
      "/ORR/4.webp",
      "/ORR/r2_2.webp",
      "/ORR/6.webp",
      "/ORR/1.webp",
      "/ORR/Image.webp"
    ],
    area: "9000 Sq.Ft",
    status: "Ongoing",
    architects: "Office Of Architecture, Studio Grid",
  },

  {
    id: "18",
    imageUrl: "/uniflex/c7593700-4172-4b28-b305-77e062ca995d.webp",
    title: "Uniflex",
    location: "Bangalore",
    category: "Commercial",
    slug: generateSlug("Uniflex"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A flexible commercial workspace designed to accommodate evolving business needs.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The project emphasizes modular planning, allowing spaces to adapt between office, showroom, and collaborative environments. Material palettes are kept minimal and modern, while lighting and acoustics are carefully designed to enhance productivity and comfort.",
    images: [
      "/uniflex/c7593700-4172-4b28-b305-77e062ca995d.webp",
      "/uniflex/0793892a-0e35-4852-8665-ba3b9dd7da45.webp",
      "/uniflex/WhatsApp Image 2025-03-12 at 15.31.36.webp",
      "/uniflex/1dd1ed58-e7c3-4dd0-ba93-37d550280743.webp",
      "/uniflex/Scene 23_2.webp",
      "/uniflex/QQQQQ.webp",
      "/uniflex/QQQQQ_AO.webp",
      "/uniflex/Scene 26.webp",
      "/uniflex/Scene 29_1.webp",
      "/uniflex/Scene 16_2.webp"
    ],
    area: "11000 Sq.Ft",
    status: "Completed",
    architects: "Office Of Architecture, Lorem Group",
  },
  {
    id: "19",
    imageUrl: "/ecity/a98e277d-ff55-47ec-b101-bf27352c6adb.webp",
    title: "E City",
    location: "bangalore",
    category: "Commercial",
    slug: generateSlug("E City"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A flexible commercial workspace designed to accommodate evolving business needs.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The project emphasizes modular planning, allowing spaces to adapt between office, showroom, and collaborative environments. Material palettes are kept minimal and modern, while lighting and acoustics are carefully designed to enhance productivity and comfort.",
    images: [
      "/ecity/a98e277d-ff55-47ec-b101-bf27352c6adb.webp",
      "/ecity/c1756e9b-ddf8-4395-8e05-406a8f0e19d0.webp",
      "/ecity/28948731-1ed5-42a6-82df-a264f2c0000b.webp",
      "/ecity/b4acb6a5-c06c-460b-8824-c892855b77b4.webp",
      "/ecity/5c3983bb-9637-4567-8a2d-ddf0692c774b.webp",
      "/ecity/724815ea-b205-45d6-99c5-10fa7d0f3077.webp",
      "/ecity/c18b687e-efca-4e2f-95ad-9d94a33397b8.webp"
    ],
    area: "11000 Sq.Ft",
    status: "Completed",
    architects: "Office Of Architecture, Lorem Group",
  },
  {
    id: "20",
    imageUrl: "/Bothra Residence/SSP0170.webp",
    title: "Bothra Residence",
    location: "Bangalore",
    category: "Residential",
    slug: generateSlug("Bothra Residence"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A contemporary residence designed to balance comfort, spatial openness, and refined material expression.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The design emphasizes natural light, ventilation, and seamless indoor-outdoor connections. Carefully selected materials and textures create a warm and cohesive living environment tailored for modern lifestyles.",
    images: [
      "/Bothra Residence/SSP0170.webp",
      "/Bothra Residence/SSP9960-Edit.webp",
      "/Bothra Residence/SSP0163.webp",
      "/Bothra Residence/SSP0177.webp",
      "/Bothra Residence/SSP0215.webp",
      "/Bothra Residence/SSP0027-Edit.webp",
      "/Bothra Residence/SSP0018-Edit.webp",
      "/Bothra Residence/SSP0137.webp",
      "/Bothra Residence/SSP9972-Edit.webp",
      "/Bothra Residence/SSP9997-Edit.webp",
      "/Bothra Residence/SSP0011-Edit.webp",
      "/Bothra Residence/SSP0196.webp",
      "/Bothra Residence/SSP9926-Edit.webp"
    ],
    area: "8500 Sq.Ft",
    status: "Ongoing",
    architects: "Office Of Architecture, Lorem Associates",
  },
  {
    id: "21",
    imageUrl: "/Hosur SCT/5.webp",
    title: "Hosur SCT",
    location: "Bangalore",
    category: "Commercial",
    slug: generateSlug("Hosur SCT"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A contemporary commercial development designed to enhance visibility, efficiency, and user experience.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The project focuses on flexible planning, efficient circulation, and a strong architectural identity. Façade articulation and material contrast create a dynamic presence within the urban context.",
    images: [
      "/Hosur SCT/5.webp",
      "/Hosur SCT/7.webp",
      "/Hosur SCT/6.webp",
      "/Hosur SCT/2.webp",
      "/Hosur SCT/3.webp",
      "/Hosur SCT/1.webp"
    ],
    area: "9000 Sq.Ft",
    status: "Proposed",
    architects: "Office Of Architecture, Ipsum Associates",
  },
  {
    id: "22",
    imageUrl: "/nspira Tree of Life/JA2.webp",
    title: "Inspira Tree of Life",
    location: "Bangalore",
    category: "Residential",
    slug: generateSlug("Inspira Tree of Life"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A residential development inspired by nature, emphasizing wellness, community, and sustainable living.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The design integrates landscaped open spaces, natural materials, and climate-responsive planning to create a serene and balanced living environment.",
    images: [
      "/nspira Tree of Life/JA2.webp",
      "/nspira Tree of Life/VA2.webp",
      "/nspira Tree of Life/S2.webp",
      "/nspira Tree of Life/VB2.webp",
      "/nspira Tree of Life/JB2.webp"
    ],
    area: "10000 Sq.Ft",
    status: "Ongoing",
    architects: "Office Of Architecture, Green Studio",
  },
  {
    id: "23",
    imageUrl: "/Koushik Residence and Interiors/MB-2_1.webp",
    title: "Koushik Residence and Interiors",
    location: "Bangalore",
    category: "Residential",
    slug: generateSlug("Koushik Residence and Interiors"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A holistic residential and interior design project combining architectural clarity with refined interior detailing.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The project seamlessly blends structure and interiors, with a focus on spatial continuity, material harmony, and a warm, inviting ambiance.",
    images: [
      "/Koushik Residence and Interiors/MB-2_1.webp",
      "/Koushik Residence and Interiors/F1_1.webp",
      "/Koushik Residence and Interiors/L6(1).webp",
      "/Koushik Residence and Interiors/DB-4_1.webp",
      "/Koushik Residence and Interiors/D4.webp",
      "/Koushik Residence and Interiors/D3.webp",
      "/Koushik Residence and Interiors/F7_1.webp",
      "/Koushik Residence and Interiors/ele.webp",
      "/Koushik Residence and Interiors/D6_1.webp",
      "/Koushik Residence and Interiors/1 NIGHT.webp",
      "/Koushik Residence and Interiors/DB-1_1.webp",
      "/Koushik Residence and Interiors/F4_1.webp"
    ],
    area: "7500 Sq.Ft",
    status: "Completed",
    architects: "Office Of Architecture, Design Collective",
  }
];