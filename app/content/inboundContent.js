import {
  absoluteUrl,
  companyAddress,
  companyName,
  email,
  motacLicense,
  phoneDisplay,
  siteUrl,
  whatsappNumber,
} from "./siteContent";

export const inboundRoutes = {
  home: "/int/",
  thankYou: "/int/thank-you/",
  bookPlanningCall: "/int/book-planning-call/",
  travelEnquiry: "/int/travel-enquiry/",
  malaysiaTours: "/int/malaysia-tours/",
  essentialMalaysia: "/int/malaysia-tours/essential-malaysia/",
  malaysiaHeritageJourney: "/int/malaysia-tours/malaysia-heritage-journey/",
  familyTour: "/int/malaysia-tours/family-tour/",
  multiCountryTours: "/int/multi-country-tours/",
  malaysiaSingapore: "/int/multi-country-tours/malaysia-singapore/",
  malaysiaSingaporeThailand: "/int/malaysia-singapore-thailand/",
  legacyMalaysiaSingaporeThailand: "/int/multi-country-tours/malaysia-singapore-thailand/",
  destinations: "/int/destinations/",
  kualaLumpur: "/int/destinations/kuala-lumpur/",
  melaka: "/int/destinations/melaka/",
  penang: "/int/destinations/penang/",
  langkawi: "/int/destinations/langkawi/",
  cameronHighlands: "/int/destinations/cameron-highlands/",
  gentingHighlands: "/int/destinations/genting-highlands/",
  experiences: "/int/experiences/",
  cultureHeritage: "/int/experiences/culture-and-heritage/",
  foodTours: "/int/experiences/food-tours/",
  natureWildlife: "/int/experiences/nature-and-wildlife/",
  muslimFriendlyTravel: "/int/experiences/muslim-friendly-travel/",
  familyHolidays: "/int/experiences/family-holidays/",
  privateTours: "/int/private-tours/",
  groupTours: "/int/group-tours/",
  educationalTours: "/int/educational-tours/",
  corporateIncentiveTravel: "/int/corporate-incentive-travel/",
  travelGuide: "/int/travel-guide/",
  about: "/int/about/",
  contact: "/int/contact/",
};

export const publishedInboundRoutes = [
  "home",
  "thankYou",
  "bookPlanningCall",
  "travelEnquiry",
  "malaysiaSingaporeThailand",
];

export const plannedInboundRoutes = Object.keys(inboundRoutes).filter((key) => !publishedInboundRoutes.includes(key));

export const inboundNav = [
  ["malaysia", "Malaysia Tours", "/int/#malaysia-tours"],
  ["styles", "Travel Styles", "/int/#travel-styles"],
  ["destinations", "Destinations", "/int/#destinations"],
  ["experiences", "Experiences", "/int/#travel-styles"],
  ["multi", "Malaysia + Southeast Asia", inboundRoutes.malaysiaSingaporeThailand],
  ["guide", "Travel Guide", "/int/#travel-guide"],
  ["about", "About Momiji", "/int/#why-momiji"],
];

export const inboundContent = {
  home: {
    route: inboundRoutes.home,
    title: "Private Malaysia Tours & Inbound Travel | Momiji Travel",
    description:
      "Plan private Malaysia journeys, group tours and Southeast Asia extensions with Momiji Travel, a Malaysia-based inbound travel specialist in Melaka.",
    h1: "Private Malaysia Journeys, Crafted Around You",
    hero: {
      eyebrow: "Malaysia-Based Inbound Travel Specialist",
      title: "Experience Malaysia with a local team who plans around your pace, interests and group needs.",
      copy:
        "Experience Malaysia through thoughtfully planned private tours, living heritage, local food, tropical nature and warm hospitality. Extend your journey to Singapore or Thailand when it suits your plans.",
      primaryCta: "Plan My Malaysia Journey",
      secondaryCta: "Explore Malaysia Tours",
      featureTitle: "Malaysia - Singapore - Thailand",
      featureCopy: "Three Countries, One Unforgettable Journey",
    },
    trustStrip: [
      ["Malaysia-Based Team", "Local support from Melaka, Malaysia"],
      ["MOTAC Licensed", "Licence L/N 12842"],
      ["Private and Group Planning", "Flexible pacing for different travellers"],
      ["Muslim-Friendly Options", "Halal-conscious and prayer-aware planning"],
      ["English-Speaking Support", "Clear communication before you travel"],
    ],
    whyVisit: {
      eyebrow: "Why Malaysia",
      title: "One Country, Many Ways to Experience Asia",
      copy:
        "Malaysia brings together city life, heritage towns, island scenery, rainforest, highlands, food culture and Muslim-friendly convenience in one comfortable destination.",
      items: [
        {
          title: "Culture and Living Heritage",
          copy: "Historic streets, multicultural neighbourhoods, mosques, temples, museums and daily traditions that still feel alive.",
          image: "/images/international/why-malaysia-culture.jpg",
          alt: "Traditional cultural performance in Malaysia",
          href: "/int/#destinations",
        },
        {
          title: "Food and Local Life",
          copy: "A welcoming mix of Malay, Chinese, Indian and regional flavours, with halal-conscious options widely available.",
          image: "/images/international/why-malaysia-food-street.jpg",
          alt: "Malaysian street food vendor grilling satay",
          href: "/int/#travel-styles",
        },
        {
          title: "Nature and Islands",
          copy: "Highlands, rainforest, beaches, mangroves and island escapes for relaxed travellers or active explorers.",
          image: "/images/international/why-malaysia-nature-island.png",
          alt: "Family boat tour at Kilim Geoforest Park in Langkawi Malaysia",
          href: "/int/#destinations",
        },
        {
          title: "Family-Friendly Travel",
          copy: "Balanced sightseeing, private transport options and flexible pacing for families, children and senior travellers.",
          image: "/images/international/tour-family-discovery-genting.jpg",
          alt: "Genting Highlands family attractions in Malaysia",
          href: "/int/#travel-styles",
        },
        {
          title: "Muslim-Friendly Convenience",
          copy: "Halal food, prayer facilities and Muslim-friendly arrangements can be planned naturally across many routes.",
          image: "/images/international/why-malaysia-prayer.jpg",
          alt: "Prayer mats prepared in a quiet Muslim-friendly space",
          href: "/int/#travel-styles",
        },
        {
          title: "Easy Regional Connections",
          copy: "Malaysia is a practical entry point for journeys that continue to Singapore, Thailand or wider Southeast Asia.",
          image: "/images/international/why-malaysia-regional.jpg",
          alt: "International travellers collecting luggage at a Malaysia airport",
          href: inboundRoutes.malaysiaSingaporeThailand,
        },
      ],
    },
    destinationVideo: {
      eyebrow: "Welcome to Malaysia",
      title: "A Journey Beyond the Ordinary",
      copy:
        "Discover a country where vibrant cities, living heritage, tropical landscapes and diverse cultures come together. Watch a glimpse of the experiences awaiting you in Malaysia.",
      cta: "Explore Malaysia Tours",
      href: "/int/#malaysia-tours",
      videoId: "7sQN3kMNUGo",
      iframeTitle: "Surreal Experiences - Visit Malaysia 2026",
      thumbnailAlt: "Visit Malaysia 2026 destination video thumbnail showing Malaysia travel experiences",
      attribution: "Destination inspiration video: Visit Malaysia 2026.",
    },
    signature: {
      eyebrow: "Signature regional journey",
      title: "Malaysia, Singapore and Thailand Grand Journey",
      copy:
        "A longer regional itinerary for travellers who want Malaysia as the heart of the journey, with carefully selected extensions to Singapore and Thailand. The route can be shaped around arrival city, travel style, pace and group profile.",
      route: "Malaysia as the main base, with Singapore and Thailand added as regional highlights.",
      cta: "Explore the Three-Country Journey",
    },
    featuredPackages: {
      eyebrow: "Journey collections",
      title: "Customisable Malaysia Tours",
      copy:
        "Start with a journey style, then let our team shape the route around your dates, group size, pace and interests.",
      secondaryCopy:
        "These collections are not rigid off-the-shelf tours. They are planning starting points for private travellers, families, schools, companies and international groups.",
      items: [
        {
          badge: "First-Time Visitors",
          title: "Malaysia Essentials",
          duration: "5 Days / 4 Nights",
          route: "Kuala Lumpur - Putrajaya - Genting Highlands - Melaka",
          image: "/images/international/why-malaysia-regional-access.jpg",
          alt: "Kuala Lumpur skyline for Malaysia Essentials tour",
          description:
            "A well-balanced introduction to Malaysia featuring modern landmarks, cultural neighbourhoods, scenic highlands and the historic streets of Melaka.",
          highlights: [
            "Kuala Lumpur city icons and cultural districts",
            "Putrajaya architecture and lakeside views",
            "Genting Highlands day experience",
            "UNESCO-listed Melaka heritage",
            "Private transport and flexible pacing",
          ],
          idealFor: "First-time visitors, couples, families and small groups.",
          cta: "Request This Journey",
          slug: inboundRoutes.travelEnquiry,
        },
        {
          badge: "Culture & Heritage",
          title: "Heritage and Culture of Malaysia",
          duration: "7 Days / 6 Nights",
          route: "Kuala Lumpur - Melaka - Ipoh - Penang",
          image: "/images/international/tour-heritage-culture-melaka.webp",
          alt: "Welcome to Melaka World Heritage City mural for Malaysia heritage tour",
          description:
            "Discover Malaysia through its historic streets, multicultural communities, traditional food, architecture and living heritage.",
          highlights: [
            "Melaka's UNESCO heritage quarter",
            "Local craft and community experiences",
            "Ipoh's old town and culinary heritage",
            "George Town culture and street art",
            "Guided cultural storytelling",
          ],
          idealFor: "Cultural travellers, educators, students, senior groups and heritage enthusiasts.",
          cta: "Request This Journey",
          slug: inboundRoutes.travelEnquiry,
        },
        {
          badge: "Family Friendly",
          title: "Malaysia Family Discovery",
          duration: "6 Days / 5 Nights",
          route: "Kuala Lumpur - Genting Highlands - Melaka - Family Attractions",
          image: "/images/international/tour-family-discovery-genting.jpg",
          alt: "Genting Highlands family attractions in Malaysia",
          description:
            "A comfortable family holiday combining sightseeing, interactive attractions, food, shopping and plenty of time to enjoy the journey together.",
          highlights: [
            "Relaxed, family-friendly itinerary",
            "Attractions suitable for different age groups",
            "Private vehicle options",
            "Flexible meal and rest arrangements",
            "Child-friendly and senior-friendly pacing",
          ],
          idealFor: "Families with children, multi-generational groups and private family holidays.",
          cta: "Request This Journey",
          slug: inboundRoutes.travelEnquiry,
        },
        {
          badge: "Island & Beach",
          title: "Island Escape",
          duration: "7 Days / 6 Nights",
          route: "Kuala Lumpur - Langkawi",
          image: "/images/international/why-malaysia-nature.jpg",
          alt: "Tropical Malaysia island scenery for Langkawi escape",
          description:
            "Combine Malaysia's vibrant capital with tropical beaches, island scenery and a slower coastal escape.",
          highlights: [
            "City and island combination",
            "Beachfront accommodation options",
            "Island-hopping or leisure activities",
            "Couple and family-friendly arrangements",
            "Customisable balance of activities and relaxation",
          ],
          idealFor: "Couples, honeymooners, families and travellers seeking a tropical holiday.",
          cta: "Request This Journey",
          slug: inboundRoutes.travelEnquiry,
          internalNote: "Final island routing must be confirmed by the business team before publishing a dedicated page.",
        },
        {
          badge: "Nature & Highlands",
          title: "Nature and Highlands Journey",
          duration: "8 Days / 7 Nights",
          route: "Kuala Lumpur - Taman Negara - Cameron Highlands - Penang",
          image: "/images/international/tour-nature-highlands.avif",
          alt: "Malaysia nature and highlands scenery for a scenic journey",
          description:
            "Experience Malaysia beyond the cities through ancient rainforest, cool highlands, tea plantations and scenic countryside.",
          highlights: [
            "Rainforest and river experiences",
            "Cameron Highlands tea country",
            "Nature walks and scenic viewpoints",
            "Local farms and countryside stops",
            "Flexible activity levels",
          ],
          idealFor: "Nature lovers, photographers, active families and small adventure groups.",
          cta: "Request This Journey",
          slug: inboundRoutes.travelEnquiry,
        },
        {
          badge: "Signature Regional Tour",
          title: "Malaysia, Singapore and Thailand Grand Journey",
          duration: "10-12 Days",
          route: "Kuala Lumpur - Melaka - Penang - Singapore - Southern Thailand",
          image: "/images/international/tour-grand-journey.png",
          alt: "Malaysia Singapore and Thailand grand journey collage",
          description:
            "Begin in Malaysia and continue across three of Southeast Asia's most exciting destinations in one carefully coordinated regional journey.",
          highlights: [
            "Malaysia as the heart of the journey",
            "Three countries in one itinerary",
            "Major cities, heritage and local culture",
            "Cross-border travel coordination",
            "Private and group arrangements",
          ],
          idealFor: "Long-haul travellers, families, private groups and visitors seeking a wider Southeast Asian experience.",
          cta: "Explore the Three-Country Journey",
          slug: inboundRoutes.malaysiaSingaporeThailand,
          featured: true,
        },
      ],
    },
    destinations: {
      eyebrow: "Destination Discovery",
      title: "Postcards from Malaysia",
      copy:
        "From iconic city skylines and UNESCO heritage streets to tropical islands and mist-covered highlands, every destination reveals a different side of Malaysia.",
      items: [
        {
          title: "Kuala Lumpur",
          descriptor: "Malaysia's vibrant capital",
          copy: "Iconic landmarks, multicultural neighbourhoods and modern city energy.",
          image: "/images/international/destination-kuala-lumpur.png",
          alt: "Watercolour travel illustration of Kuala Lumpur Malaysia",
        },
        {
          title: "Melaka",
          descriptor: "A living heritage city",
          copy: "Historic streets, riverside charm and centuries of multicultural influence.",
          image: "/images/international/destination-melaka.png",
          alt: "Watercolour travel illustration of Melaka Malaysia",
        },
        {
          title: "Penang",
          descriptor: "Heritage, food and island character",
          copy: "Creative streets, celebrated cuisine and the distinctive charm of George Town.",
          image: "/images/international/destination-penang.png",
          alt: "Watercolour travel illustration of Penang Malaysia",
        },
        {
          title: "Langkawi",
          descriptor: "A tropical island escape",
          copy: "Turquoise waters, scenic beaches and dramatic natural landscapes.",
          image: "/images/international/destination-langkawi.png",
          alt: "Watercolour travel illustration of Langkawi Malaysia",
        },
        {
          title: "Cameron Highlands",
          descriptor: "Malaysia's tea country",
          copy: "Rolling plantations, misty hills and cool countryside air.",
          image: "/images/international/destination-cameron-highlands.png",
          alt: "Watercolour travel illustration of Cameron Highlands Malaysia",
        },
        {
          title: "Genting Highlands",
          descriptor: "A mountain leisure escape",
          copy: "Cable-car views, cooler weather and entertainment above the clouds.",
          image: "/images/international/destination-genting-highlands.png",
          alt: "Watercolour travel illustration of Genting Highlands Malaysia",
        },
      ],
    },
    experiences: {
      eyebrow: "Travel by interest",
      title: "Choose the Experience That Fits Your Group",
      items: [
        ["Culture and Heritage", "Historic neighbourhoods, museums, architecture and hands-on cultural encounters."],
        ["Food and Local Life", "Markets, local flavours, neighbourhood stops and Muslim-friendly meal planning where required."],
        ["Nature and Wildlife", "Highlands, rainforest, river ecology, mangroves and island nature."],
        ["Family Holidays", "Balanced sightseeing with space for children, parents and senior family members."],
        ["Muslim-Friendly Travel", "Prayer-aware planning, halal-conscious meals and family comfort."],
        ["Educational Journeys", "Learning-led programmes for schools, international schools and student groups."],
      ],
    },
    melakaSpecialist: {
      eyebrow: "Melaka specialist",
      title: "Discover Malaysia Through Melaka",
      copy:
        "Momiji is based in Melaka, a UNESCO World Heritage city with deep multicultural roots. That local base helps us design Malaysia journeys with real ground knowledge, practical routing and stronger heritage storytelling.",
      points: [
        "Melaka heritage walks and riverside experiences",
        "Local food, craft and community-based activities",
        "Useful base for Kuala Lumpur, Johor and wider Malaysia routes",
      ],
      cta: "View Melaka in the Destination Collection",
      href: "/int/#destinations",
      image: "/images/international/tour-heritage-culture-melaka.webp",
      alt: "Welcome to Melaka World Heritage City mural in Malaysia",
    },
    options: {
      eyebrow: "How custom planning works",
      title: "From First Idea to Confirmed Journey",
      items: [
        ["01", "Share your dates, group profile, preferred pace and destinations."],
        ["02", "We suggest a practical route, itinerary flow and travel style."],
        ["03", "Your itinerary is refined around comfort, logistics, meals and budget."],
        ["04", "Once confirmed, our team coordinates the details before arrival."],
      ],
    },
    whyMomiji: {
      eyebrow: "Why travel with Momiji",
      title: "A Malaysia-Based Team With Practical Local Understanding",
      copy:
        "Momiji Travel & Tours Sdn Bhd is based in Melaka, Malaysia and holds MOTAC License L/N 12842. We help international travellers plan Malaysia-first journeys that are comfortable, realistic and easy to discuss before arrival.",
      items: [
        "Malaysia-based planning and travel support",
        "MOTAC License L/N 12842",
        "Muslim-friendly planning available",
        "Private, family, school, corporate and agency enquiries",
        "Flexible routing for Malaysia and selected regional extensions",
      ],
    },
    testimonials: {
      eyebrow: "Traveller proof",
      title: "Testimonials",
      copy:
        "Verified inbound traveller testimonials can be added once available. For now, this section avoids invented reviews or ratings.",
    },
    guides: {
      eyebrow: "Malaysia travel guides",
      title: "Helpful Planning Notes for International Travellers",
      items: [
        {
          title: "Best Entry Point",
          copy: "Kuala Lumpur is usually the easiest international gateway. Final airport advice depends on flight access and itinerary.",
          href: "/int/#enquiry",
        },
        {
          title: "Trip Duration",
          copy: "Malaysia can work as a short city-and-heritage trip or as a longer journey with islands, highlands and regional extensions.",
          href: "/int/#malaysia-tours",
        },
        {
          title: "Muslim-Friendly Travel",
          copy: "Halal-conscious meals and prayer-aware routing can be included where suitable.",
          href: "/int/#travel-styles",
        },
        {
          title: "Multi-Country Planning",
          copy: "Malaysia can anchor a wider journey that continues to Singapore or Thailand when the schedule allows.",
          href: inboundRoutes.malaysiaSingaporeThailand,
        },
      ],
    },
    enquiry: {
      eyebrow: "Plan your journey with us",
      title: "Let's Design Your Malaysia Journey",
      copy:
        "Tell us where you want to go, who is travelling and what kind of experience you want. We will help shape a Malaysia itinerary that feels practical, comfortable and memorable.",
      primary: {
        title: "Free Trip Planning Call",
        points: [
          "Complimentary 20-minute video consultation",
          "Discuss your preferred dates, group size and interests",
          "Ideal for private, family and multi-country journeys",
        ],
        cta: "Book Your Free Call",
        href: inboundRoutes.bookPlanningCall,
        reassurance: "No obligation to book",
      },
      secondary: {
        title: "Prefer to send your details instead?",
        copy:
          "Complete a simple travel enquiry form and our team will follow up with recommendations and next steps.",
        cta: "Send Travel Details",
        href: inboundRoutes.travelEnquiry,
        chips: ["Travel dates", "Number of travellers", "Destination interest", "Budget range"],
      },
      reassurance:
        "Choose the option that suits you best - talk to us live or send your details at your own pace.",
    },
  },
  planningCall: {
    route: inboundRoutes.bookPlanningCall,
    title: "Book a Free Trip Planning Call | Momiji Travel",
    description:
      "Request a complimentary 20-minute Malaysia or Southeast Asia trip-planning video consultation with Momiji Travel.",
    h1: "Book a Free Trip Planning Call",
    eyebrow: "Planning consultation",
    intro:
      "Plan your Malaysia or Southeast Asia journey with our travel team during a complimentary 20-minute video consultation.",
    copy:
      "Tell us about your preferred dates, destinations, group size, travel style and budget. We will use the call to understand your requirements and discuss the most suitable next steps.",
    note:
      "Submitting this request does not automatically confirm an appointment. Our team will review your preferred schedule and send the confirmed meeting details by email.",
    submitLabel: "Request My Free Planning Call",
    success:
      "Thank you for requesting a free trip-planning call. Our team will review your preferred schedule and contact you by email or WhatsApp with the confirmed meeting details.",
    nextStep: "Please check your inbox, including your spam or promotions folder.",
    consent:
      "I agree that Momiji Travel may use the information provided to respond to my consultation request.",
  },
  travelEnquiry: {
    route: inboundRoutes.travelEnquiry,
    title: "Tell Us About Your Journey | Momiji Travel",
    description:
      "Send your Malaysia or Southeast Asia travel details to Momiji Travel for private, family, group and multi-country tour planning.",
    h1: "Tell Us About Your Journey",
    eyebrow: "Travel enquiry",
    intro:
      "Prefer to share your plans in writing? Complete the form below and our travel team will review your requirements and recommend the most suitable next steps.",
    submitLabel: "Send My Travel Enquiry",
    success:
      "Thank you for sharing your travel details. Our team will review your requirements and contact you by email or WhatsApp with the next steps.",
    consent:
      "I agree that Momiji Travel may use the information provided to respond to my enquiry.",
  },
  signatureTour: {
    route: inboundRoutes.malaysiaSingaporeThailand,
    title: "Malaysia, Singapore and Thailand Tour | Momiji Travel",
    description:
      "Plan a custom Malaysia, Singapore and Thailand tour with Malaysia as the main destination and gateway to Southeast Asia.",
    h1: "Malaysia, Singapore and Thailand Tour",
    eyebrow: "Signature multi-country journey",
    heroCopy:
      "A destination-led Southeast Asia journey built around Malaysia first, with selected extensions to Singapore and Thailand for travellers who want a broader regional experience.",
    overview:
      "This page is a planning framework for an inbound regional tour. Final duration, city order, hotel class, transport mode and price must be confirmed after consultation.",
    duration: "TODO: Confirm final number of days",
    route: ["Malaysia", "Singapore", "Thailand"],
    cityRoute: "TODO: Confirm exact cities and sequence. Malaysia should remain the longest and most detailed component.",
    malaysiaHighlights: ["Kuala Lumpur city highlights", "Melaka heritage and local culture", "Penang, Langkawi, highlands or other Malaysia extensions to be confirmed"],
    singaporeHighlights: ["City icons and modern urban experience", "Family-friendly attractions where suitable", "Cross-border extension from Malaysia to be confirmed"],
    thailandHighlights: ["Selected Thailand city or leisure extension", "Cultural, shopping or relaxation focus to be confirmed", "Final routing depends on flight and group preference"],
    inclusions: [
      "TODO: Confirm accommodation inclusions",
      "TODO: Confirm transport inclusions",
      "TODO: Confirm guide and entrance arrangements",
      "TODO: Confirm meal plan and Muslim-friendly requirements",
    ],
    exclusions: [
      "TODO: Confirm international flight policy",
      "TODO: Confirm personal expenses and optional activities",
      "TODO: Confirm visa or travel document responsibility",
      "TODO: Confirm travel insurance policy",
    ],
    accommodation: "Accommodation category, room type and hotel names are not finalised. These must be confirmed according to budget and availability.",
    transport: "Transport may include private vehicle, coach, domestic flight, train or cross-border transfer depending on final route and group size.",
    suitableFor: ["International families", "Private groups", "Travel agency groups", "Senior-friendly groups with adjusted pacing", "Educational or community groups"],
    customisation: ["Trip duration", "Hotel category", "Malaysia city selection", "Singapore and Thailand extension scope", "Meal and Muslim-friendly arrangements", "Pacing for seniors, children or special interests"],
    faqs: [
      ["Is the duration confirmed?", "Not yet. The number of days is a planning placeholder and will be confirmed after route and city choices are agreed."],
      ["Is Malaysia the main destination?", "Yes. Malaysia is intended to be the primary entry point and largest component of the journey."],
      ["Can the tour be private?", "Yes. The journey can be planned for private groups, families, schools, companies or travel agency groups."],
      ["Are prices available?", "Prices are not published yet because final pricing depends on dates, hotels, group size and confirmed inclusions."],
      ["Can Muslim-friendly arrangements be included?", "Yes. Halal-conscious meals and prayer-aware planning can be included where suitable."],
    ],
    related: ["Essential Malaysia", "Malaysia Heritage Journey", "Malaysia Family Tour"],
  },
};

export function inboundWhatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function inboundMetadata(page) {
  const canonical = absoluteUrl(page.route);

  return {
    metadataBase: new URL(siteUrl),
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        "en-MY": canonical,
        "x-default": absoluteUrl(inboundRoutes.home),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: companyName,
      locale: "en_MY",
      images: [
        {
          url: absoluteUrl("/images/international/hero-malaysia.avif"),
          width: 1920,
          height: 1080,
          alt: "Malaysia and Southeast Asia tour planning by Momiji Travel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [absoluteUrl("/images/international/hero-malaysia.avif")],
    },
  };
}

export function inboundOrganizationSchema(description) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteUrl}/#organization`,
    name: companyName,
    url: siteUrl,
    logo: absoluteUrl("/images/momiji-logo.jpg"),
    image: absoluteUrl("/images/momiji-team-desktop.jpg"),
    description,
    telephone: phoneDisplay,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 52-1, Jalan Niaga Enggang 1, Taman Enggang",
      addressLocality: "Kampong Gangsa",
      postalCode: "76100",
      addressCountry: "MY",
    },
    identifier: motacLicense,
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqSchema(page) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(page.route)}#faq`,
    url: absoluteUrl(page.route),
    inLanguage: "en",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function touristTripSchema(page) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${absoluteUrl(page.route)}#tour`,
    name: page.h1,
    description: page.description,
    url: absoluteUrl(page.route),
    touristType: page.suitableFor,
    itinerary: page.route.map((country) => ({
      "@type": "Place",
      name: country,
    })),
  };
}

export const inboundBusiness = {
  companyName,
  companyAddress,
  motacLicense,
  phoneDisplay,
  email,
};
