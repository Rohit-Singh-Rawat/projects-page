export type ProjectStatus = "ready-to-move" | "under-construction" | "completed";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  configurations: string;
  locality: string;
  city: string;
  status: ProjectStatus;
  /** Exact display string for the timeline row, e.g. "Possession Dec 2025" or "Handover Mar 2028" */
  timeline: string;
  /** Project scale facts (towers/acreage/open space), omitted when not publicly confirmed */
  scale?: string;
  image: string;
  thumbnail?: string;
  imageAlt: string;
  websiteUrl: string;
}

export const projects: Project[] = [
  {
    id: "asbl-broadway",
    name: "ASBL Broadway",
    tagline: "How do we bring you the Pulse of Life?",
    description:
      "Step into exclusive 3 BHK residences that don't just offer space—they offer energy. At ASBL Broadway, life comes alive with vibrance, connection, and rhythm. Set in the heart of the Financial District, this is where everyday moments meet elevated experiences. From expansive balconies to thoughtfully designed living spaces, every detail is built to inspire your social side while still giving you room to breathe. Live where the vibe is high, and life is full.",
    configurations: "Exclusive 3 BHK",
    locality: "Financial District, Gachibowli",
    city: "Hyderabad",
    status: "under-construction",
    timeline: "Handover Dec 2029",
    image: "https://cdn.asbl.in/asbl.in/web/our-projects/Broadway-thumb.webp",
    thumbnail: "https://cdn.asbl.in/asbl.in/web/our-projects/Broadway-thumb.webp",
    imageAlt: "ASBL Broadway exterior",
    websiteUrl: "https://asbl.in/broadway",
  },
  {
    id: "asbl-landmark",
    name: "ASBL Landmark",
    tagline: "How do we deliver The Great Upgrade?",
    description:
      "Discover premium 3, 3.5, & 4 BHKs that redefine luxury and elevate your lifestyle. At ASBL Landmark, every detail is crafted to offer you an unparalleled living experience. Experience the perfect blend of elegance and practicality in the heart of Kukatpally, where every aspect of living is taken to the next level.",
    configurations: "Premium 3, 3.5 & 4 BHKs",
    locality: "Kukatpally Y Jn",
    city: "Hyderabad",
    status: "under-construction",
    timeline: "Handover Mar 2028",
    image: "https://cdn.asbl.in/asbl.in/web/our-projects/Landmark-thumb.webp",
    thumbnail: "https://cdn.asbl.in/asbl.in/web/our-projects/Landmark-thumb.webp",
    imageAlt: "ASBL Landmark exterior",
    websiteUrl: "https://asbl.in/landmark",
  },
  {
    id: "asbl-loft",
    name: "ASBL Loft",
    tagline: "How do we build the epitome of ease of living?",
    description:
      "Premium 3BHKs with tailored amenities, from childcare to fitness, WFH to social living, that too in the heart of Financial District. ASBL Loft, truly the key to envy!",
    configurations: "Premium 3BHK's",
    locality: "Financial District, Gachibowli",
    city: "Hyderabad",
    status: "under-construction",
    timeline: "Handover Dec 2026",
    image: "https://cdn.asbl.in/asbl.in/web/our-projects/Loft-thumb-new.webp",
    thumbnail: "https://cdn.asbl.in/asbl.in/web/our-projects/Loft-thumb-new.webp",
    imageAlt: "ASBL Loft exterior",
    websiteUrl: "https://asbl.in/loft",
  },
  {
    id: "asbl-spectra",
    name: "ASBL Spectra",
    tagline: "How do we provide the perfect downtown life at our project?",
    description:
      "Premium 3BHK with Outdoor Living balconies. Great location of Gachibowli. 18+ exciting amenities, EV charging for every parking. Discover an exceptional lifestyle at ASBL Spectra, where luxury meets convenience and innovation",
    configurations: "Exclusive 3BHK",
    locality: "Gachibowli",
    city: "Hyderabad",
    status: "under-construction",
    timeline: "Handover Dec 2025",
    image: "https://cdn.asbl.in/asbl.in/web/our-projects/Spectra-thumb.webp",
    thumbnail: "https://cdn.asbl.in/asbl.in/web/our-projects/Spectra-thumb.webp",
    imageAlt: "ASBL Spectra exterior",
    websiteUrl: "https://asbl.in/spectra",
  },
  {
    id: "asbl-springs",
    name: "ASBL Springs",
    tagline: "How do we 'elevate' the residential landscape of East Hyderabad?",
    description:
      "ASBL Springs is the first of its kind high rise gated community in Pocharam, Uppal. Premium 2 & 3 BHKs which are sure to provide a holistic living experience, as the project would offer state-of-the-art amenities for one and all.",
    configurations: "Premium 2 & 3BHK",
    locality: "Pocharam, Uppal",
    city: "Hyderabad",
    status: "ready-to-move",
    timeline: "Handover Feb 2025",
    image: "https://cdn.asbl.in/asbl.in/web/our-projects/Springs-thumb.webp",
    thumbnail: "https://cdn.asbl.in/asbl.in/web/our-projects/Springs-thumb.webp",
    imageAlt: "ASBL Springs exterior",
    websiteUrl: "https://asbl.in/springs",
  },
  {
    id: "asbl-spire",
    name: "ASBL Spire",
    tagline: "How do we bring in outdoors, indoors?",
    description:
      "ASBL Spire, nestled in Kokapet, redefines the concept of indoor-outdoor living. Our innovative unit plans features room-sized balconies, seamlessly blending the beauty of nature with contemporary living. Experience of the serenity and tranquility of bringing the outdoors, indoors at ASBL Spire",
    configurations: "Exclusive 3BHK",
    locality: "Kokapet",
    city: "Hyderabad",
    status: "completed",
    timeline: "Handover Completed",
    image: "https://cdn.asbl.in/asbl.in/web/our-projects/Spire-thumb.webp",
    thumbnail: "https://cdn.asbl.in/asbl.in/web/our-projects/Spire-thumb.webp",
    imageAlt: "ASBL Spire exterior",
    websiteUrl: "https://asbl.in/spire",
  },
  {
    id: "asbl-lakeside",
    name: "ASBL Lakeside",
    tagline: "How do we infuse elements of the serene lake into our project?",
    description:
      "Situated beside the serene Khajaguda lake, ASBL Lakeside is a sprawling 2 & 3BHK community. What sets it apart is its exceptional clubhouse, meticulously designed with stone and wood. With its tranquil surroundings, remarkable amenities, ASBL Lakeside has become a cherished destination for homeowners seeking a harmonious living experience.",
    configurations: "Premium 2 & 3BHK",
    locality: "Khajaguda",
    city: "Hyderabad",
    status: "completed",
    timeline: "Handover Completed",
    image: "https://cdn.asbl.in/asbl.in/web/our-projects/Lakeside-thumb.webp",
    thumbnail: "https://cdn.asbl.in/asbl.in/web/our-projects/Lakeside-thumb.webp",
    imageAlt: "ASBL Lakeside exterior",
    websiteUrl: "https://asbl.in/lakeside",
  },
];
