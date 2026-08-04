export const siteUrl = "https://www.momiji-travel.com";

export const locales = {
  en: { code: "en", htmlLang: "en-MY", label: "EN", mobileLabel: "English", path: "/en/" },
  ms: { code: "ms", htmlLang: "ms-MY", label: "BM", mobileLabel: "Bahasa Melayu", path: "/ms/" },
};

export const localeRoutes = {
  home: {
    en: "/en/",
    ms: "/ms/",
  },
};

export const whatsappNumber = "60172145298";
export const companyAddress = "No 52-1, Jalan Niaga Enggang 1, Taman Enggang, Kampong Gangsa, Malaysia, 76100";
export const companyName = "Momiji Travel & Tours Sdn Bhd";
export const motacLicense = "MOTAC License: L/N 12842";
export const email = "hello@momiji-travel.com";
export const phoneDisplay = "+60 17-214 5298";

const sharedImages = {
  hero: "/images/hero-lyg.jpg",
  logo: "/images/momiji-logo.jpg",
  teamDesktop: "/images/momiji-team-desktop.jpg",
  teamMobile: "/images/momiji-team-mobile.jpg",
};

const basePackages = [
  {
    id: "tokyo-fuji",
    regionKey: "japan",
    category: "japan private",
    duration: "5D4N / Custom",
    price: "From RM3,999/pax",
    image: "/images/package-japan-tokyo-fuji.jpg",
  },
  {
    id: "osaka-kyoto-nara",
    regionKey: "japan",
    category: "japan private",
    duration: "5D4N / Custom",
    price: "From RM4,299/pax",
    image: "/images/package-osaka-kyoto-nara.jpg",
  },
  {
    id: "fukuoka",
    regionKey: "japan",
    category: "japan private",
    duration: "4D3N / Custom",
    price: "From RM3,699/pax",
    image: "/images/package-fukuoka.jpg",
  },
  {
    id: "sapporo-hokkaido",
    regionKey: "japan",
    category: "japan private",
    duration: "5D4N / Custom",
    price: "From RM4,999/pax",
    image: "/images/package-sapporo-hokkaido.jpg",
  },
  {
    id: "yunnan",
    regionKey: "china",
    category: "china private",
    duration: "9D7N",
    price: "From RM4,990/pax",
    image: "/images/package-yunnan.jpg",
  },
  {
    id: "zhangjiajie",
    regionKey: "china",
    category: "china private",
    duration: "7D5N",
    price: "From RM3,990/pax",
    image: "/images/package-zhangjiajie.jpg",
  },
  {
    id: "sichuan",
    regionKey: "china",
    category: "china private",
    duration: "9D7N",
    price: "From RM4,990/pax",
    image: "/images/package-sichuan.jfif",
  },
  {
    id: "harbin",
    regionKey: "china",
    category: "china private",
    duration: "7D5N",
    price: "From RM7,690/pax",
    image: "/images/package-harbin.jfif",
  },
  {
    id: "northern-xinjiang",
    regionKey: "china",
    category: "china private",
    duration: "9D7N",
    price: "From RM8,790/pax",
    image: "/images/package-northern-xinjiang.jpg",
  },
  {
    id: "padang-bukittinggi",
    regionKey: "indonesia",
    category: "indonesia private",
    duration: "4D3N",
    price: "From RM1,299/pax",
    image: "/images/package-padang.jpg",
  },
  {
    id: "bandung",
    regionKey: "indonesia",
    category: "indonesia private",
    duration: "4D3N",
    price: "From RM1,199/pax",
    image: "/images/package-bandung.jpg",
  },
  {
    id: "bromo-malang",
    regionKey: "indonesia",
    category: "indonesia private",
    duration: "4D3N",
    price: "From RM1,599/pax",
    image: "/images/package-bromo.jpg",
  },
  {
    id: "melaka-education",
    regionKey: "education",
    category: "education private",
    duration: "1D / 3D2N",
    price: "Custom quotation",
    image: "/images/package-melaka-education.jpg",
  },
];

const galleryImages = [
  { src: "/images/gallery/customer-trip-universal.jpg", layout: "feature" },
  { src: "/images/gallery/customer-trip-snow.jpg", layout: "tall" },
  { src: "/images/gallery/customer-trip-nagoya-mosque.jpg", layout: "tall" },
  { src: "/images/gallery/customer-trip-airport.jpg", layout: "tall" },
  { src: "/images/gallery/customer-trip-05.jfif", layout: "standard" },
  { src: "/images/gallery/customer-trip-06.jfif", layout: "standard" },
  { src: "/images/gallery/customer-trip-07.jfif", layout: "standard" },
  { src: "/images/gallery/customer-trip-08.jfif", layout: "standard" },
  { src: "/images/gallery/customer-trip-09.jfif", layout: "standard" },
];

const enPackageText = {
  "tokyo-fuji": {
    title: "Japan Tokyo & Fuji",
    badge: "Muslim-Friendly",
    alt: "Tokyo and Mount Fuji travel package",
    description:
      "A relaxed Japan package for families and groups covering Tokyo, Mount Fuji, shopping, Japanese culture and Muslim-friendly dining experiences.",
    highlights: ["Tokyo city tour", "Mount Fuji experience", "Shopping and cultural spots", "Halal / Muslim-friendly meals"],
  },
  "osaka-kyoto-nara": {
    title: "Osaka, Kyoto & Nara",
    badge: "Culture & Heritage",
    alt: "Osaka Kyoto and Nara Muslim-friendly travel package",
    description:
      "A Kansai journey combining modern Osaka, traditional Kyoto and a calm Nara experience for family and private group travel.",
    highlights: ["Osaka city experience", "Kyoto heritage walk", "Nara deer park", "Muslim-friendly arrangement"],
  },
  fukuoka: {
    title: "Fukuoka Muslim-Friendly Tour",
    badge: "Easy Japan Escape",
    alt: "Fukuoka Muslim-friendly tour package",
    description:
      "A smoother Japan escape for first-time travellers who prefer a relaxed pace, easy city access and practical Muslim-friendly planning.",
    highlights: ["Fukuoka city tour", "Canal City / shopping area", "Dazaifu experience", "Halal / Muslim-friendly meals"],
  },
  "sapporo-hokkaido": {
    title: "Sapporo & Hokkaido",
    badge: "Nature & Snow",
    alt: "Sapporo and Hokkaido nature and snow package",
    description:
      "A premium Hokkaido package for Japan nature, seasonal snow attractions, Sapporo city highlights and private group comfort.",
    highlights: ["Sapporo city tour", "Hokkaido nature experience", "Snow / seasonal attractions", "Private group arrangement"],
  },
  yunnan: {
    title: "Yunnan: Kunming, Dali, Lijiang & Shangri-La",
    badge: "Group Package + Flights",
    alt: "Yunnan Kunming Dali Lijiang and Shangri-La package",
    description:
      "A China group departure with flights, featuring Yunnan's scenic cities, old towns, highland views and Muslim-friendly travel arrangements.",
    highlights: ["Flights included", "Kunming and Dali", "Lijiang ancient town", "Shangri-La highland scenery"],
  },
  zhangjiajie: {
    title: "Fantasia Zhangjiajie, Hunan, China",
    badge: "Group Package + Flights",
    alt: "Zhangjiajie Hunan China group package with flights",
    description:
      "A scenic Hunan group package inspired by Zhangjiajie's dramatic mountain landscapes, glass bridges and memorable nature experiences.",
    highlights: ["Flights included", "Zhangjiajie scenery", "Hunan sightseeing", "Muslim-friendly arrangement"],
  },
  sichuan: {
    title: "Sichuan, China",
    badge: "Group Package + Flights",
    alt: "Sichuan China group package with flights",
    description:
      "A China group departure with flights for travellers who want culture, nature, city highlights and a comfortable Muslim-friendly arrangement.",
    highlights: ["Flights included", "Sichuan sightseeing", "Cultural experience", "Muslim-friendly arrangement"],
  },
  harbin: {
    title: "Harbin, China",
    badge: "Winter Group Package",
    alt: "Harbin China winter group package with flights",
    description:
      "A winter-focused China group package with flights, suitable for travellers who want snow scenery, seasonal attractions and a unique northern China experience.",
    highlights: ["Flights included", "Harbin city experience", "Winter attractions", "Muslim-friendly arrangement"],
  },
  "northern-xinjiang": {
    title: "Northern Xinjiang, China",
    badge: "Peak Season Group Package",
    alt: "Northern Xinjiang China group package with flights",
    description:
      "A premium scenic China group departure with flights, planned around Northern Xinjiang's wide landscapes, seasonal views and long-distance comfort.",
    highlights: ["Flights included", "Northern Xinjiang route", "Scenic landscapes", "Group departure arrangement"],
  },
  "padang-bukittinggi": {
    title: "Padang & Bukittinggi",
    badge: "Family Favourite",
    alt: "Padang and Bukittinggi family travel package",
    description:
      "Enjoy Minangkabau landscapes, local culture, halal cuisine and a comfortable pace suitable for families and senior travellers.",
    highlights: ["Jam Gadang", "Lembah Harau", "Ngarai Sianok", "Local halal cuisine"],
  },
  bandung: {
    title: "Bandung Shopping Trip",
    badge: "Best Value",
    alt: "Bandung shopping trip package",
    description:
      "A relaxed Bandung package for shopping, dining, sightseeing and cool-weather moments with family or friends.",
    highlights: ["Factory outlet", "Floating Market", "Tangkuban Perahu", "Private transport"],
  },
  "bromo-malang": {
    title: "Bromo & Malang",
    badge: "Adventure",
    alt: "Bromo and Malang sunrise adventure package",
    description:
      "A memorable East Java experience featuring Bromo sunrise, jeep rides, nature views and interesting places around Malang.",
    highlights: ["Bromo sunrise", "Jeep experience", "Malang city tour", "Muslim-friendly arrangement"],
  },
  "melaka-education": {
    title: "Melaka Educational Trip",
    badge: "School Programme",
    alt: "Melaka educational trip for schools and homeschool groups",
    description:
      "An educational travel programme for schools, international schools and homeschool groups based on nature, heritage and community learning.",
    highlights: ["Heritage learning", "River ecology", "Kampung life", "Workbook and certificate"],
  },
};

const msPackageText = {
  "tokyo-fuji": {
    title: "Japan Tokyo & Fuji",
    badge: "Mesra Muslim",
    alt: "Pakej percutian Tokyo dan Gunung Fuji",
    description:
      "Pakej Jepun yang santai untuk keluarga dan rombongan, merangkumi Tokyo, Gunung Fuji, aktiviti membeli-belah, budaya Jepun dan pengalaman makanan mesra Muslim.",
    highlights: ["Lawatan bandar Tokyo", "Pengalaman Gunung Fuji", "Lokasi membeli-belah dan budaya", "Makanan halal / mesra Muslim"],
  },
  "osaka-kyoto-nara": {
    title: "Osaka, Kyoto & Nara",
    badge: "Budaya & Warisan",
    alt: "Pakej percutian mesra Muslim Osaka Kyoto dan Nara",
    description:
      "Pakej Kansai yang menggabungkan suasana moden Osaka, keindahan tradisi Kyoto dan pengalaman santai di Nara untuk keluarga dan group private.",
    highlights: ["Pengalaman bandar Osaka", "Jalan-jalan warisan Kyoto", "Nara deer park", "Susunan mesra Muslim"],
  },
  fukuoka: {
    title: "Fukuoka Muslim-Friendly Tour",
    badge: "Percutian Jepun Santai",
    alt: "Pakej percutian mesra Muslim Fukuoka",
    description:
      "Percutian Jepun yang lebih mudah untuk first-time traveller yang mahukan tempo santai, akses bandar yang praktikal dan perancangan mesra Muslim.",
    highlights: ["Lawatan bandar Fukuoka", "Canal City / kawasan membeli-belah", "Pengalaman Dazaifu", "Makanan halal / mesra Muslim"],
  },
  "sapporo-hokkaido": {
    title: "Sapporo & Hokkaido",
    badge: "Nature & Snow",
    alt: "Pakej Sapporo dan Hokkaido alam semula jadi dan salji",
    description:
      "Pakej Hokkaido premium untuk menikmati alam Jepun, tarikan salji mengikut musim, bandar Sapporo dan keselesaan group private.",
    highlights: ["Lawatan bandar Sapporo", "Pengalaman alam Hokkaido", "Tarikan salji / bermusim", "Susunan group private"],
  },
  yunnan: {
    title: "Yunnan: Kunming, Dali, Lijiang & Shangri-La",
    badge: "Group Package + Flight",
    alt: "Pakej Yunnan Kunming Dali Lijiang dan Shangri-La",
    description:
      "Pakej China berkumpulan termasuk flight, menampilkan bandar indah Yunnan, pekan lama, pemandangan tanah tinggi dan susunan perjalanan mesra Muslim.",
    highlights: ["Flight termasuk", "Kunming dan Dali", "Lijiang ancient town", "Pemandangan tanah tinggi Shangri-La"],
  },
  zhangjiajie: {
    title: "Fantasia Zhangjiajie, Hunan, China",
    badge: "Group Package + Flight",
    alt: "Pakej Zhangjiajie Hunan China berkumpulan termasuk flight",
    description:
      "Pakej Hunan berkumpulan dengan landskap gunung dramatik Zhangjiajie, jambatan kaca dan pengalaman alam yang sukar dilupakan.",
    highlights: ["Flight termasuk", "Pemandangan Zhangjiajie", "Lawatan sekitar Hunan", "Susunan mesra Muslim"],
  },
  sichuan: {
    title: "Sichuan, China",
    badge: "Group Package + Flight",
    alt: "Pakej Sichuan China berkumpulan termasuk flight",
    description:
      "Pakej China berkumpulan termasuk flight untuk pelanggan yang mahukan budaya, alam semula jadi, tarikan bandar dan susunan mesra Muslim yang selesa.",
    highlights: ["Flight termasuk", "Lawatan sekitar Sichuan", "Pengalaman budaya", "Susunan mesra Muslim"],
  },
  harbin: {
    title: "Harbin, China",
    badge: "Pakej Musim Sejuk",
    alt: "Pakej musim sejuk Harbin China berkumpulan termasuk flight",
    description:
      "Pakej China berkumpulan bertema musim sejuk termasuk flight, sesuai untuk pelanggan yang mahu menikmati suasana salji, tarikan bermusim dan pengalaman unik di utara China.",
    highlights: ["Flight termasuk", "Pengalaman bandar Harbin", "Tarikan musim sejuk", "Susunan mesra Muslim"],
  },
  "northern-xinjiang": {
    title: "Northern Xinjiang, China",
    badge: "Pakej Peak Season",
    alt: "Pakej Northern Xinjiang China berkumpulan termasuk flight",
    description:
      "Pakej China berkumpulan premium termasuk flight, disusun untuk menikmati landskap luas Northern Xinjiang, pemandangan bermusim dan keselesaan perjalanan jarak jauh.",
    highlights: ["Flight termasuk", "Laluan Northern Xinjiang", "Landskap indah", "Susunan group departure"],
  },
  "padang-bukittinggi": {
    title: "Padang & Bukittinggi",
    badge: "Pilihan Keluarga",
    alt: "Pakej keluarga Padang dan Bukittinggi",
    description:
      "Nikmati landskap Minangkabau, budaya tempatan, makanan halal dan tempo perjalanan yang selesa untuk keluarga serta warga emas.",
    highlights: ["Jam Gadang", "Lembah Harau", "Ngarai Sianok", "Makanan halal tempatan"],
  },
  bandung: {
    title: "Bandung Shopping Trip",
    badge: "Nilai Terbaik",
    alt: "Pakej shopping Bandung",
    description:
      "Pakej Bandung santai untuk membeli-belah, makan-makan, jalan-jalan dan menikmati suasana sejuk bersama keluarga atau rakan-rakan.",
    highlights: ["Factory outlet", "Floating Market", "Tangkuban Perahu", "Pengangkutan private"],
  },
  "bromo-malang": {
    title: "Bromo & Malang",
    badge: "Adventure",
    alt: "Pakej sunrise Bromo dan Malang",
    description:
      "Pengalaman Jawa Timur yang menarik dengan sunrise Bromo, jeep ride, pemandangan alam dan tempat menarik sekitar Malang.",
    highlights: ["Sunrise Bromo", "Pengalaman jeep", "Lawatan bandar Malang", "Susunan mesra Muslim"],
  },
  "melaka-education": {
    title: "Melaka Educational Trip",
    badge: "Program Sekolah",
    alt: "Program lawatan pendidikan Melaka untuk sekolah dan homeschool group",
    description:
      "Program lawatan pendidikan untuk sekolah, international school dan homeschool group berasaskan nature, heritage dan community learning.",
    highlights: ["Pembelajaran warisan", "Ekologi sungai", "Kehidupan kampung", "Workbook dan sijil"],
  },
};

function localizePackages(text) {
  return basePackages.map((item) => ({ ...item, ...text[item.id] }));
}

export const content = {
  en: {
    locale: "en",
    routeKey: "home",
    images: sharedImages,
    metadata: {
      title: "Momiji Travel & Tours | Muslim-Friendly Travel Packages",
      description:
        "Momiji Travel & Tours Sdn Bhd offers Muslim-friendly travel packages from Malaysia for families, private groups, schools and companies. Licensed MOTAC L/N 12842.",
      ogLocale: "en_MY",
    },
    generalMessage:
      "Hi Momiji, I would like to ask about your travel packages. Destination: ____. Date: ____. Number of pax: ____. Estimated budget: ____. ",
    nav: [
      ["home", "Home"],
      ["packages", "Packages"],
      ["why", "Why Momiji"],
      ["booking", "Booking"],
      ["gallery", "Gallery"],
      ["faq", "FAQ"],
      ["contact", "Contact"],
    ],
    ui: {
      brandSubtitle: "Muslim-Friendly Travel",
      whatsappUs: "WhatsApp Us",
      menuLabel: "Toggle menu",
      languageLabel: "Change language",
      packageButton: "Ask About This Package",
      floatingWhatsapp: "WhatsApp",
      footerLinksLabel: "Footer links",
      socials: { facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok" },
      copyright: "© 2026 Momiji Travel & Tours Sdn Bhd. All rights reserved.",
    },
    packageMessage: {
      prefix: "Hi Momiji, I am interested in the ",
      suffix: " package. Can you share the latest details and price?",
    },
    trustItems: [
      ["MOTAC Licensed", "L/N 12842", "ML"],
      ["Muslim-Friendly", "Halal and prayer-conscious arrangements", "MF"],
      ["Private Groups", "Family, company and school trips", "PG"],
      ["Melaka Based", "Serving customers across Malaysia", "MY"],
    ],
    hero: {
      eyebrow: companyName,
      title: "Muslim-Friendly Holidays for Families, Groups & Private Tours",
      copy:
        "Explore domestic and international destinations with thoughtful itineraries, halal-conscious meals, prayer-friendly planning and warm support from Momiji Travel.",
      primaryCta: "Check Packages on WhatsApp",
      secondaryCta: "View Popular Packages",
      badges: ["MOTAC L/N 12842", "Muslim-Friendly Travel", "Private & Group Tours", "Based in Melaka"],
      cardLabel: "Plan your trip",
      cardNumber: "01",
      cardTitle: "Plan your trip with less stress",
      cardCopy:
        "Tell us your destination, dates, number of travellers and budget. Our team will suggest a package that fits your travel style.",
      cardCta: "Chat Now",
    },
    team: {
      eyebrow: "Meet Momiji",
      title: "Professional, Friendly Support for Every Journey",
      copy:
        "Our team is ready to help you plan a smoother Muslim-friendly trip, from the first WhatsApp enquiry to the final travel details before departure.",
      points: ["Personal package consultation", "Family, group and school trip planning", "Clear communication before you travel"],
      cta: "Talk to Our Team",
      alt: "Momiji Travel professional and friendly team",
    },
    packagesSection: {
      eyebrow: "Popular choices",
      title: "Popular Momiji Travel Packages",
      copy:
        "Choose by destination, budget and travel style. We can plan relaxed trips for families, private groups, schools and companies.",
      filtersLabel: "Package categories",
      filters: [
        ["all", "All"],
        ["japan", "Japan"],
        ["china", "China"],
        ["indonesia", "Indonesia"],
        ["education", "Educational Trip"],
        ["private", "Private Group"],
      ],
      regions: {
        japan: "Japan",
        china: "China",
        indonesia: "Indonesia",
        education: "Educational Trip",
      },
      regionSuffix: "Packages",
    },
    packages: localizePackages(enPackageText),
    why: {
      eyebrow: "Comfort in every detail",
      title: "Why Choose Momiji Travel?",
      copy:
        "We do more than arrange transport and hotels. We help customers enjoy trips that feel organised, considerate and suitable for Muslim travellers.",
      features: [
        ["Muslim-Friendly Arrangements", "Travel plans consider halal food, prayer time and comfort for Muslim families.", "MF"],
        ["Licensed Travel Agency", "Momiji Travel & Tours Sdn Bhd is licensed by MOTAC under L/N 12842.", "LC"],
        ["Family & Senior Friendly", "Itineraries can be paced gently for families, senior citizens and private groups.", "FS"],
        ["Flexible Private Groups", "Ideal for family trips, company trips, school trips, honeymooners and small or large groups.", "FG"],
        ["Local & International Network", "We work with destination partners to keep your journey smoother and better coordinated.", "NT"],
        ["WhatsApp Consultation", "Discuss destination, dates, budget and travel style before deciding on a package.", "WA"],
      ],
    },
    booking: {
      eyebrow: "Simple booking",
      title: "How Booking Works",
      copy: "From the first enquiry to departure day, the process is designed to be clear and easy.",
      steps: [
        ["01", "Contact Us on WhatsApp", "Share your destination, dates, number of travellers and estimated budget."],
        ["02", "Receive a Package Proposal", "We recommend an itinerary and pricing that suits your needs."],
        ["03", "Confirm With Deposit", "Secure your booking through payment to the official company account."],
        ["04", "Get Ready to Travel", "We help organise key travel information before departure."],
      ],
    },
    styles: {
      eyebrow: "Travel styles",
      title: "Trips for Every Travel Style",
      items: [
        ["Family Trip", "Relaxed itineraries for children, parents and grandparents."],
        ["Senior-Friendly Trip", "A gentler pace with more comfort and less rushing."],
        ["Company Trip", "Suitable for team building, reward trips and corporate groups."],
        ["School & Educational Trip", "Outdoor learning through nature, heritage and community experiences."],
        ["Private Group", "Exclusive trips for families, friends or small communities."],
        ["Muslim-Friendly Overseas Trip", "Halal-conscious meals, prayer time consideration and suitable activities."],
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Moments With Momiji",
      copy: "A glimpse of customer travel experiences across selected domestic and international destinations.",
      images: galleryImages.map((item, index) => ({
        ...item,
        alt:
          [
            "Momiji Travel customers at Universal Studios",
            "Customers enjoying a snowy Japan trip",
            "Momiji Travel customers visiting Nagoya Mosque",
            "Family customers at the airport with Momiji Travel",
            "Momiji Travel customer trip moment",
            "Momiji Travel group travel experience",
            "Customer travel moment with Momiji Travel",
            "Family-friendly customer trip with Momiji Travel",
            "Previous trip moment arranged by Momiji Travel",
          ][index],
      })),
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What Customers Say",
      items: [
        ["The trip was well organised and easy for our family. Halal meals were convenient and the itinerary was not too rushed.", "Puan Farah, Melaka"],
        ["The Momiji team helped from the beginning until the end of the trip. Very suitable for a family group.", "Encik Hafiz, Selangor"],
        ["Clear packages, easy WhatsApp communication and the whole journey went smoothly.", "Cik Aina, Negeri Sembilan"],
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        ["Are flights included in the price?", "It depends on the package. Some packages include flights, while private group packages can be arranged according to your request."],
        ["Can Momiji arrange a private group?", "Yes. We can arrange private groups for families, companies, schools and communities."],
        ["Are halal meals provided?", "We prioritise halal or Muslim-friendly meal arrangements according to the destination and availability."],
        ["How much is the booking deposit?", "The deposit amount depends on the package and travel date. Please contact us for the latest details."],
        ["Can the itinerary be customised?", "Yes. Itineraries can be adjusted based on budget, dates, number of travellers and preferred travel pace."],
        ["Is Momiji licensed by MOTAC?", "Yes. Momiji Travel & Tours Sdn Bhd is a licensed travel agency under MOTAC L/N 12842."],
        ["Are packages suitable for senior travellers?", "Yes. We can recommend a more relaxed itinerary with fewer rushed activities for senior comfort."],
        ["Can you arrange school or international school trips?", "Yes. We offer educational trips such as the Melaka Educational Trip, which can be customised for schools, international schools and homeschool groups."],
      ],
    },
    finalCta: {
      eyebrow: "Ready to plan?",
      title: "Already Have a Destination in Mind?",
      copy:
        "Click WhatsApp and tell us your destination, travel date, number of travellers and estimated budget. The Momiji team will help suggest a suitable package.",
      cta: "WhatsApp Momiji Now",
      checklist: ["Preferred destination", "Travel date", "Number of travellers", "Estimated budget"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Momiji Travel",
      copy: "For package enquiries, private groups, school trips or company trips, contact us on WhatsApp.",
      cta: "Chat on WhatsApp",
    },
  },
  ms: {
    locale: "ms",
    routeKey: "home",
    images: sharedImages,
    metadata: {
      title: "Momiji Travel & Tours | Pakej Percutian Mesra Muslim",
      description:
        "Momiji Travel & Tours Sdn Bhd menawarkan pakej percutian mesra Muslim dari Malaysia untuk keluarga, group private, sekolah dan syarikat. Berlesen MOTAC L/N 12842.",
      ogLocale: "ms_MY",
    },
    generalMessage:
      "Hi Momiji, saya nak tanya pakej percutian. Destinasi: ____. Tarikh: ____. Jumlah pax: ____. Bajet anggaran: ____. ",
    nav: [
      ["home", "Utama"],
      ["packages", "Pakej"],
      ["why", "Kenapa Momiji"],
      ["booking", "Cara Booking"],
      ["gallery", "Galeri"],
      ["faq", "FAQ"],
      ["contact", "Hubungi"],
    ],
    ui: {
      brandSubtitle: "Travel Mesra Muslim",
      whatsappUs: "WhatsApp Kami",
      menuLabel: "Buka menu",
      languageLabel: "Tukar bahasa",
      packageButton: "Tanya Pakej Ini",
      floatingWhatsapp: "WhatsApp",
      footerLinksLabel: "Pautan footer",
      socials: { facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok" },
      copyright: "© 2026 Momiji Travel & Tours Sdn Bhd. Hak cipta terpelihara.",
    },
    packageMessage: {
      prefix: "Hi Momiji, saya berminat dengan pakej ",
      suffix: ". Boleh share detail dan harga terkini?",
    },
    trustItems: [
      ["Berlesen MOTAC", "L/N 12842", "ML"],
      ["Mesra Muslim", "Susunan halal dan waktu solat diambil kira", "MF"],
      ["Group Private", "Family, company dan school trip", "PG"],
      ["Berpusat di Melaka", "Membantu pelanggan seluruh Malaysia", "MY"],
    ],
    hero: {
      eyebrow: companyName,
      title: "Percutian Mesra Muslim Untuk Keluarga, Group & Private Tour",
      copy:
        "Terokai destinasi dalam dan luar negara dengan jadual perjalanan tersusun, makanan halal atau mesra Muslim, waktu solat yang diambil kira dan sokongan mesra daripada Momiji Travel.",
      primaryCta: "Semak Pakej di WhatsApp",
      secondaryCta: "Lihat Pakej Popular",
      badges: ["MOTAC L/N 12842", "Travel Mesra Muslim", "Private & Group Tour", "Berpusat di Melaka"],
      cardLabel: "Rancang trip anda",
      cardNumber: "01",
      cardTitle: "Rancang trip dengan lebih mudah",
      cardCopy:
        "Beritahu kami destinasi, tarikh, jumlah peserta dan bajet. Team Momiji akan bantu cadangkan pakej yang sesuai dengan gaya perjalanan anda.",
      cardCta: "Chat Sekarang",
    },
    team: {
      eyebrow: "Kenali Momiji",
      title: "Team Profesional & Mesra Sedia Membantu Anda",
      copy:
        "Team kami sedia membantu anda merancang trip mesra Muslim yang lebih lancar, daripada pertanyaan pertama di WhatsApp hingga persediaan akhir sebelum tarikh berlepas.",
      points: ["Konsultasi pakej secara personal", "Perancangan family, group dan school trip", "Komunikasi jelas sebelum anda travel"],
      cta: "Bercakap Dengan Team Kami",
      alt: "Team Momiji Travel yang profesional dan mesra",
    },
    packagesSection: {
      eyebrow: "Pakej popular",
      title: "Pakej Popular Momiji Travel",
      copy:
        "Pilih pakej mengikut destinasi, bajet dan gaya perjalanan. Kami boleh susun trip santai untuk keluarga, group private, sekolah dan syarikat.",
      filtersLabel: "Kategori pakej",
      filters: [
        ["all", "Semua"],
        ["japan", "Jepun"],
        ["china", "China"],
        ["indonesia", "Indonesia"],
        ["education", "Educational Trip"],
        ["private", "Private Group"],
      ],
      regions: {
        japan: "Jepun",
        china: "China",
        indonesia: "Indonesia",
        education: "Educational Trip",
      },
      regionSuffix: "Packages",
    },
    packages: localizePackages(msPackageText),
    why: {
      eyebrow: "Selesa dalam setiap susunan",
      title: "Kenapa Pilih Momiji Travel?",
      copy:
        "Kami bukan sekadar mengurus pengangkutan dan hotel. Kami bantu pelanggan menikmati trip yang lebih teratur, selesa dan sesuai untuk Muslim traveller.",
      features: [
        ["Susunan Mesra Muslim", "Perjalanan disusun dengan mengambil kira makanan halal, waktu solat dan keselesaan keluarga Muslim.", "MF"],
        ["Agensi Travel Berlesen", "Momiji Travel & Tours Sdn Bhd berlesen MOTAC dengan nombor L/N 12842.", "LC"],
        ["Sesuai Untuk Keluarga & Warga Emas", "Jadual perjalanan boleh disusun lebih santai untuk keluarga, warga emas dan group private.", "FS"],
        ["Fleksibel Untuk Group Private", "Sesuai untuk family trip, company trip, school trip, honeymoon dan group kecil atau besar.", "FG"],
        ["Rangkaian Tempatan & Antarabangsa", "Kami bekerjasama dengan rakan destinasi untuk memastikan perjalanan lebih lancar dan tersusun.", "NT"],
        ["Konsultasi WhatsApp", "Bincang destinasi, tarikh, bajet dan gaya perjalanan sebelum membuat keputusan.", "WA"],
      ],
    },
    booking: {
      eyebrow: "Booking mudah",
      title: "Cara Mudah Booking Dengan Kami",
      copy: "Daripada pertanyaan pertama hingga hari berlepas, proses booking dibuat jelas dan mudah.",
      steps: [
        ["01", "Hubungi WhatsApp", "Beritahu destinasi, tarikh, jumlah peserta dan bajet anggaran."],
        ["02", "Terima Cadangan Pakej", "Kami cadangkan jadual perjalanan dan harga yang sesuai dengan keperluan anda."],
        ["03", "Sahkan Dengan Deposit", "Sahkan booking melalui bayaran deposit ke akaun rasmi syarikat."],
        ["04", "Bersedia Untuk Travel", "Kami bantu susun maklumat perjalanan penting sebelum tarikh berlepas."],
      ],
    },
    styles: {
      eyebrow: "Gaya perjalanan",
      title: "Trip Untuk Setiap Gaya Perjalanan",
      items: [
        ["Family Trip", "Jadual perjalanan santai untuk anak-anak, ibu bapa dan datuk nenek."],
        ["Senior-Friendly Trip", "Tempo perjalanan lebih relaks, selesa dan tidak terlalu rushing."],
        ["Company Trip", "Sesuai untuk team building, reward trip dan group korporat."],
        ["School & Educational Trip", "Pembelajaran luar bilik darjah melalui nature, heritage dan community experience."],
        ["Private Group", "Trip eksklusif untuk keluarga, rakan atau komuniti kecil."],
        ["Muslim-Friendly Overseas Trip", "Makanan halal atau mesra Muslim, waktu solat dan aktiviti sesuai diambil kira."],
      ],
    },
    gallery: {
      eyebrow: "Galeri",
      title: "Momen Perjalanan Bersama Momiji",
      copy: "Sebahagian pengalaman pelanggan kami menjelajah destinasi pilihan dalam dan luar negara.",
      images: galleryImages.map((item, index) => ({
        ...item,
        alt:
          [
            "Pelanggan Momiji Travel di Universal Studios",
            "Pelanggan menikmati trip salji di Jepun",
            "Pelanggan Momiji Travel melawat Nagoya Mosque",
            "Keluarga pelanggan di lapangan terbang bersama Momiji Travel",
            "Momen pelanggan bersama Momiji Travel",
            "Pengalaman group travel bersama Momiji Travel",
            "Momen perjalanan pelanggan Momiji Travel",
            "Trip keluarga mesra pelanggan bersama Momiji Travel",
            "Momen trip terdahulu yang disusun oleh Momiji Travel",
          ][index],
      })),
    },
    testimonials: {
      eyebrow: "Testimoni",
      title: "Apa Kata Pelanggan",
      items: [
        ["Trip sangat tersusun dan mudah untuk keluarga. Makanan halal senang, itinerary pun tidak terlalu rushing.", "Puan Farah, Melaka"],
        ["Team Momiji banyak membantu dari awal sampai habis trip. Memang sesuai untuk group family.", "Encik Hafiz, Selangor"],
        ["Pakej jelas, komunikasi mudah melalui WhatsApp dan perjalanan berjalan lancar.", "Cik Aina, Negeri Sembilan"],
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Soalan Lazim",
      items: [
        ["Adakah harga termasuk tiket flight?", "Bergantung kepada pakej. Sesetengah pakej termasuk flight, manakala pakej private group boleh disusun mengikut permintaan."],
        ["Boleh buat private group?", "Ya. Kami boleh susun private group untuk keluarga, syarikat, sekolah atau komuniti."],
        ["Adakah makanan halal disediakan?", "Kami utamakan susunan makanan halal atau mesra Muslim mengikut kesesuaian destinasi dan ketersediaan."],
        ["Berapa deposit untuk booking?", "Jumlah deposit bergantung kepada pakej dan tarikh perjalanan. Sila hubungi kami untuk maklumat terkini."],
        ["Boleh custom jadual perjalanan?", "Ya. Jadual perjalanan boleh disesuaikan mengikut bajet, tarikh, jumlah peserta dan gaya perjalanan."],
        ["Momiji berlesen MOTAC?", "Ya. Momiji Travel & Tours Sdn Bhd adalah agensi pelancongan berlesen MOTAC L/N 12842."],
        ["Pakej sesuai untuk warga emas?", "Ya. Kami boleh cadangkan jadual perjalanan yang lebih santai dan tidak terlalu padat untuk keselesaan warga emas."],
        ["Boleh buat trip untuk sekolah atau international school?", "Ya. Kami menawarkan program lawatan pendidikan seperti Melaka Educational Trip yang boleh disesuaikan untuk sekolah, international school dan homeschool group."],
      ],
    },
    finalCta: {
      eyebrow: "Sedia merancang?",
      title: "Dah Ada Destinasi Dalam Fikiran?",
      copy:
        "Klik WhatsApp dan beritahu destinasi, tarikh travel, jumlah peserta dan bajet anggaran. Team Momiji akan bantu cadangkan pakej yang sesuai.",
      cta: "WhatsApp Momiji Sekarang",
      checklist: ["Destinasi pilihan", "Tarikh travel", "Jumlah peserta", "Bajet anggaran"],
    },
    contact: {
      eyebrow: "Hubungi",
      title: "Hubungi Momiji Travel",
      copy: "Untuk pertanyaan pakej, private group, school trip atau company trip, hubungi kami melalui WhatsApp.",
      cta: "Chat di WhatsApp",
    },
  },
};

export function getLocalizedContent(locale) {
  return content[locale] || content.ms;
}

export function absoluteUrl(path) {
  return new URL(path, siteUrl).toString();
}
