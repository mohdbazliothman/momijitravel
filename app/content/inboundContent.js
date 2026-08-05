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
  bookPlanningCall: "/int/book-planning-call/",
  travelEnquiry: "/int/travel-enquiry/",
  malaysiaTours: "/int/malaysia-tours/",
  essentialMalaysia: "/int/malaysia-tours/essential-malaysia/",
  malaysiaHeritageJourney: "/int/malaysia-tours/malaysia-heritage-journey/",
  familyTour: "/int/malaysia-tours/family-tour/",
  multiCountryTours: "/int/multi-country-tours/",
  malaysiaSingapore: "/int/multi-country-tours/malaysia-singapore/",
  malaysiaSingaporeThailand: "/int/multi-country-tours/malaysia-singapore-thailand/",
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
  "bookPlanningCall",
  "travelEnquiry",
  "malaysiaSingaporeThailand",
];

export const plannedInboundRoutes = Object.keys(inboundRoutes).filter((key) => !publishedInboundRoutes.includes(key));

export const inboundNav = [
  ["malaysia", "Malaysia Tours", "/int/#malaysia-tours"],
  ["multi", "Multi-Country Tours", "/int/#signature-tour"],
  ["destinations", "Destinations", "/int/#destinations"],
  ["experiences", "Experiences", "/int/#experiences"],
  ["private", "Private Tours", "/int/#travel-options"],
  ["guide", "Travel Guide", "/int/#travel-guide"],
  ["about", "About Momiji", "/int/#why-momiji"],
  ["contact", "Contact", "/int/#enquiry"],
];

export const inboundContent = {
  home: {
    route: inboundRoutes.home,
    title: "Malaysia Tour Packages & Southeast Asia Tours | Momiji Travel",
    description:
      "Discover private and group tours across Malaysia, Singapore and Thailand. Explore Kuala Lumpur, Melaka, Penang and more with Momiji Travel.",
    h1: "Discover Malaysia and Southeast Asia",
    hero: {
      eyebrow: "International inbound tours",
      title: "Discover Malaysia, the Heart of Southeast Asia",
      copy:
        "Experience vibrant cities, UNESCO heritage, tropical landscapes and unforgettable local hospitality through carefully planned private and group tours.",
      primaryCta: "Explore Malaysia Tours",
      secondaryCta: "Plan Your Private Tour",
      featureTitle: "Malaysia - Singapore - Thailand",
      featureCopy: "Three Countries, One Unforgettable Journey",
    },
    whyVisit: {
      eyebrow: "Why Malaysia",
      title: "A Warm, Diverse Gateway to Southeast Asia",
      copy:
        "Malaysia gives international travellers a rare combination of modern comfort, living heritage, tropical nature, welcoming communities and easy regional access.",
      items: [
        {
          title: "Culture & Heritage",
          copy: "Historic cities, UNESCO-linked places, mosques, temples, museums and living neighbourhoods.",
          image: "/images/international/why-malaysia-culture.jpg",
          alt: "Traditional cultural performance in Malaysia",
        },
        {
          title: "Food & Local Life",
          copy: "A rich mix of Malay, Chinese, Indian and regional flavours, with Muslim-friendly options widely available.",
          image: "/images/international/why-malaysia-food-street.jpg",
          alt: "Malaysian street food vendor grilling satay",
        },
        {
          title: "Nature & Islands",
          copy: "Highlands, rainforest, beaches, mangroves and island escapes for relaxed or active travellers.",
          image: "/images/international/why-malaysia-nature-island.png",
          alt: "Family boat tour at Kilim Geoforest Park in Langkawi Malaysia",
        },
        {
          title: "Regional Access",
          copy: "Malaysia works naturally as the main entry point for journeys onward to Singapore and Thailand.",
          image: "/images/international/why-malaysia-regional.jpg",
          alt: "International travellers collecting luggage at a Malaysia airport",
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
      iframeTitle: "Surreal Experiences – Visit Malaysia 2026",
      thumbnailAlt: "Visit Malaysia 2026 destination video thumbnail showing Malaysia travel experiences",
      attribution: "Destination inspiration video: Visit Malaysia 2026.",
    },
    signature: {
      eyebrow: "Signature regional journey",
      title: "Malaysia, Singapore and Thailand Tour",
      copy:
        "A customisable three-country journey where Malaysia remains the main destination, largest itinerary component and principal entry point before selected cross-border extensions.",
      route: "Malaysia as the main base, with Singapore and Thailand added as regional highlights.",
      cta: "View Signature Tour",
    },
    featuredPackages: {
      eyebrow: "Customisable Malaysia Tours",
      title: "Explore Malaysia Your Way",
      copy:
        "Discover Malaysia through journeys designed for different travel styles. Explore vibrant cities, UNESCO heritage towns, tropical landscapes, family attractions and authentic local experiences. Every itinerary can be tailored to your schedule, interests and preferred pace.",
      secondaryCopy:
        "Whether you are visiting Malaysia for the first time, travelling with family or planning a longer Southeast Asian journey, Momiji can customise an itinerary around your travel dates, group size and interests.",
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
          cta: "View Malaysia Essentials",
          slug: "/int/malaysia-tours/malaysia-essentials/",
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
          cta: "Discover Malaysia's Heritage",
          slug: "/int/malaysia-tours/heritage-and-culture/",
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
          cta: "Plan a Family Holiday",
          slug: "/int/malaysia-tours/family-discovery/",
        },
        {
          badge: "Island & Beach",
          title: "Tropical Malaysia Escape",
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
          cta: "Explore Island Holidays",
          slug: "/int/malaysia-tours/tropical-malaysia-escape/",
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
          cta: "Discover Malaysia's Nature",
          slug: "/int/malaysia-tours/nature-and-highlands/",
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
          cta: "Explore the 3-Country Journey",
          slug: "/int/multi-country-tours/malaysia-singapore-thailand/",
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
      eyebrow: "Travel experiences",
      title: "Choose the Experience That Fits Your Group",
      items: [
        ["Culture & Heritage", "Historic neighbourhoods, museums, architecture and hands-on cultural encounters."],
        ["Food Tours", "Local flavours, market visits and Muslim-friendly food planning where required."],
        ["Nature & Wildlife", "Highlands, rainforest, river ecology, mangroves and island nature."],
        ["Muslim-Friendly Travel", "Prayer-aware planning, halal-conscious meals and family comfort."],
        ["Family Holidays", "Balanced sightseeing with space for children, seniors and private family needs."],
      ],
    },
    options: {
      eyebrow: "Private and group travel",
      title: "Flexible Travel Planning for Different Groups",
      items: [
        ["Private Tours", "Custom pacing, private vehicle options and flexible sightseeing priorities."],
        ["Group Tours", "Suitable for travel agencies, associations, communities and larger families."],
        ["Educational Tours", "Learning-focused programmes for schools, international schools and student groups."],
        ["Corporate Incentive Travel", "Reward trips, company visits and team travel concepts can be scoped around your group profile."],
      ],
    },
    whyMomiji: {
      eyebrow: "Why travel with Momiji",
      title: "A Malaysia-Based Team With Local Understanding",
      copy:
        "Momiji Travel & Tours Sdn Bhd is based in Melaka, Malaysia and holds MOTAC License L/N 12842. We help international travellers plan practical, comfortable Malaysia-first journeys.",
      items: [
        "Malaysia-based travel support",
        "MOTAC License L/N 12842",
        "Muslim-friendly planning available",
        "Private, group, school and corporate enquiries",
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
      title: "Helpful Planning Notes",
      items: [
        ["Best Entry Point", "Kuala Lumpur is usually the easiest international gateway. Final airport advice depends on flight access and itinerary."],
        ["Trip Duration", "Malaysia can work as a short city-and-heritage trip or as a longer journey with islands, highlands and regional extensions."],
        ["Muslim-Friendly Travel", "Halal-conscious meals and prayer-aware routing can be included where suitable."],
      ],
    },
    enquiry: {
      eyebrow: "Plan your journey with us",
      title: "Book a Free Trip Planning Call",
      copy:
        "Speak with our Malaysia-based travel team over a private video call. Share your preferred dates, group size, interests and budget, and we will help shape a suitable itinerary for your journey.",
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
        en: canonical,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: companyName,
      locale: "en",
      images: [
        {
          url: absoluteUrl("/images/hero-lyg.jpg"),
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
      images: [absoluteUrl("/images/hero-lyg.jpg")],
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
