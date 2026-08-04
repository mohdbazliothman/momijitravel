"use client";

import { useEffect, useMemo, useState } from "react";

const whatsappNumber = "60172145298";
const companyAddress = "No 52-1, Jalan Niaga Enggang 1, Taman Enggang, Kampong Gangsa, Malaysia, 76100";
const generalMessage =
  "Hi Momiji, I would like to ask about your travel packages. Destination: ____. Date: ____. Number of pax: ____. Estimated budget: ____. ";

const trustItems = [
  ["MOTAC Licensed", "L/N 12842", "ML"],
  ["Muslim-Friendly", "Halal and prayer-conscious arrangements", "MF"],
  ["Private Groups", "Family, company and school trips", "PG"],
  ["Melaka Based", "Serving customers across Malaysia", "MY"],
];

const packages = [
  {
    region: "Japan",
    category: "japan private",
    title: "Japan Tokyo & Fuji",
    duration: "5D4N / Custom",
    price: "From RM3,999/pax",
    badge: "Muslim-Friendly",
    image: "/images/package-japan-tokyo-fuji.jpg",
    alt: "Tokyo and Mount Fuji travel package",
    description:
      "A relaxed Japan package for families and groups covering Tokyo, Mount Fuji, shopping, Japanese culture and Muslim-friendly dining experiences.",
    highlights: ["Tokyo city tour", "Mount Fuji experience", "Shopping and cultural spots", "Halal / Muslim-friendly meals"],
  },
  {
    region: "Japan",
    category: "japan private",
    title: "Osaka, Kyoto & Nara",
    duration: "5D4N / Custom",
    price: "From RM4,299/pax",
    badge: "Culture & Heritage",
    image: "/images/package-osaka-kyoto-nara.jpg",
    alt: "Osaka Kyoto and Nara Muslim-friendly travel package",
    description:
      "A Kansai journey combining modern Osaka, traditional Kyoto and a calm Nara experience for family and private group travel.",
    highlights: ["Osaka city experience", "Kyoto heritage walk", "Nara deer park", "Muslim-friendly arrangement"],
  },
  {
    region: "Japan",
    category: "japan private",
    title: "Fukuoka Muslim-Friendly Tour",
    duration: "4D3N / Custom",
    price: "From RM3,699/pax",
    badge: "Easy Japan Escape",
    image: "/images/package-fukuoka.jpg",
    alt: "Fukuoka Muslim-friendly tour package",
    description:
      "A smoother Japan escape for first-time travellers who prefer a relaxed pace, easy city access and practical Muslim-friendly planning.",
    highlights: ["Fukuoka city tour", "Canal City / shopping area", "Dazaifu experience", "Halal / Muslim-friendly meals"],
  },
  {
    region: "Japan",
    category: "japan private",
    title: "Sapporo & Hokkaido",
    duration: "5D4N / Custom",
    price: "From RM4,999/pax",
    badge: "Nature & Snow",
    image: "/images/package-sapporo-hokkaido.jpg",
    alt: "Sapporo and Hokkaido nature and snow package",
    description:
      "A premium Hokkaido package for Japan nature, seasonal snow attractions, Sapporo city highlights and private group comfort.",
    highlights: ["Sapporo city tour", "Hokkaido nature experience", "Snow / seasonal attractions", "Private group arrangement"],
  },
  {
    region: "China",
    category: "china private",
    title: "Yunnan: Kunming, Dali, Lijiang & Shangri-La",
    duration: "9D7N",
    price: "From RM4,990/pax",
    badge: "Group Package + Flights",
    image: "/images/package-yunnan.jpg",
    alt: "Yunnan Kunming Dali Lijiang and Shangri-La package",
    description:
      "A China group departure with flights, featuring Yunnan's scenic cities, old towns, highland views and Muslim-friendly travel arrangements.",
    highlights: ["Flights included", "Kunming and Dali", "Lijiang ancient town", "Shangri-La highland scenery"],
  },
  {
    region: "China",
    category: "china private",
    title: "Fantasia Zhangjiajie, Hunan, China",
    duration: "7D5N",
    price: "From RM3,990/pax",
    badge: "Group Package + Flights",
    image: "/images/package-zhangjiajie.jpg",
    alt: "Zhangjiajie Hunan China group package with flights",
    description:
      "A scenic Hunan group package inspired by Zhangjiajie's dramatic mountain landscapes, glass bridges and memorable nature experiences.",
    highlights: ["Flights included", "Zhangjiajie scenery", "Hunan sightseeing", "Muslim-friendly arrangement"],
  },
  {
    region: "China",
    category: "china private",
    title: "Sichuan, China",
    duration: "9D7N",
    price: "From RM4,990/pax",
    badge: "Group Package + Flights",
    image: "/images/package-sichuan.jfif",
    alt: "Sichuan China group package with flights",
    description:
      "A China group departure with flights for travellers who want culture, nature, city highlights and a comfortable Muslim-friendly arrangement.",
    highlights: ["Flights included", "Sichuan sightseeing", "Cultural experience", "Muslim-friendly arrangement"],
  },
  {
    region: "China",
    category: "china private",
    title: "Harbin, China",
    duration: "7D5N",
    price: "From RM7,690/pax",
    badge: "Winter Group Package",
    image: "/images/package-harbin.jfif",
    alt: "Harbin China winter group package with flights",
    description:
      "A winter-focused China group package with flights, suitable for travellers who want snow scenery, seasonal attractions and a unique northern China experience.",
    highlights: ["Flights included", "Harbin city experience", "Winter attractions", "Muslim-friendly arrangement"],
  },
  {
    region: "China",
    category: "china private",
    title: "Northern Xinjiang, China",
    duration: "9D7N",
    price: "From RM8,790/pax",
    badge: "Peak Season Group Package",
    image: "/images/package-northern-xinjiang.jpg",
    alt: "Northern Xinjiang China group package with flights",
    description:
      "A premium scenic China group departure with flights, planned around Northern Xinjiang's wide landscapes, seasonal views and long-distance comfort.",
    highlights: ["Flights included", "Northern Xinjiang route", "Scenic landscapes", "Group departure arrangement"],
  },
  {
    region: "Indonesia",
    category: "indonesia private",
    title: "Padang & Bukittinggi",
    duration: "4D3N",
    price: "From RM1,299/pax",
    badge: "Family Favourite",
    image: "/images/package-padang.jpg",
    alt: "Padang and Bukittinggi family travel package",
    description:
      "Enjoy Minangkabau landscapes, local culture, halal cuisine and a comfortable pace suitable for families and senior travellers.",
    highlights: ["Jam Gadang", "Lembah Harau", "Ngarai Sianok", "Local halal cuisine"],
  },
  {
    region: "Indonesia",
    category: "indonesia private",
    title: "Bandung Shopping Trip",
    duration: "4D3N",
    price: "From RM1,199/pax",
    badge: "Best Value",
    image: "/images/package-bandung.jpg",
    alt: "Bandung shopping trip package",
    description:
      "A relaxed Bandung package for shopping, dining, sightseeing and cool-weather moments with family or friends.",
    highlights: ["Factory outlet", "Floating Market", "Tangkuban Perahu", "Private transport"],
  },
  {
    region: "Indonesia",
    category: "indonesia private",
    title: "Bromo & Malang",
    duration: "4D3N",
    price: "From RM1,599/pax",
    badge: "Adventure",
    image: "/images/package-bromo.jpg",
    alt: "Bromo and Malang sunrise adventure package",
    description:
      "A memorable East Java experience featuring Bromo sunrise, jeep rides, nature views and interesting places around Malang.",
    highlights: ["Bromo sunrise", "Jeep experience", "Malang city tour", "Muslim-friendly arrangement"],
  },
  {
    region: "Educational Trip",
    category: "education private",
    title: "Melaka Educational Trip",
    duration: "1D / 3D2N",
    price: "Custom quotation",
    badge: "School Programme",
    image: "/images/package-melaka-education.jpg",
    alt: "Melaka educational trip for schools and homeschool groups",
    description:
      "An educational travel programme for schools, international schools and homeschool groups based on nature, heritage and community learning.",
    highlights: ["Heritage learning", "River ecology", "Kampung life", "Workbook and certificate"],
  },
];

const features = [
  ["Muslim-Friendly Arrangements", "Travel plans consider halal food, prayer time and comfort for Muslim families.", "MF"],
  ["Licensed Travel Agency", "Momiji Travel & Tours Sdn Bhd is licensed by MOTAC under L/N 12842.", "LC"],
  ["Family & Senior Friendly", "Itineraries can be paced gently for families, senior citizens and private groups.", "FS"],
  ["Flexible Private Groups", "Ideal for family trips, company trips, school trips, honeymooners and small or large groups.", "FG"],
  ["Local & International Network", "We work with destination partners to keep your journey smoother and better coordinated.", "NT"],
  ["WhatsApp Consultation", "Discuss destination, dates, budget and travel style before deciding on a package.", "WA"],
];

const faqs = [
  ["Are flights included in the price?", "It depends on the package. Some packages include flights, while private group packages can be arranged according to your request."],
  ["Can Momiji arrange a private group?", "Yes. We can arrange private groups for families, companies, schools and communities."],
  ["Are halal meals provided?", "We prioritise halal or Muslim-friendly meal arrangements according to the destination and availability."],
  ["How much is the booking deposit?", "The deposit amount depends on the package and travel date. Please contact us for the latest details."],
  ["Can the itinerary be customised?", "Yes. Itineraries can be adjusted based on budget, dates, number of travellers and preferred travel pace."],
  ["Is Momiji licensed by MOTAC?", "Yes. Momiji Travel & Tours Sdn Bhd is a licensed travel agency under MOTAC L/N 12842."],
  ["Are packages suitable for senior travellers?", "Yes. We can recommend a more relaxed itinerary with fewer rushed activities for senior comfort."],
  ["Can you arrange school or international school trips?", "Yes. We offer educational trips such as the Melaka Educational Trip, which can be customised for schools, international schools and homeschool groups."],
];

const gallery = [
  { src: "/images/gallery/customer-trip-universal.jpg", alt: "Momiji Travel customers at Universal Studios", layout: "feature" },
  { src: "/images/gallery/customer-trip-snow.jpg", alt: "Customers enjoying a snowy Japan trip", layout: "tall" },
  { src: "/images/gallery/customer-trip-nagoya-mosque.jpg", alt: "Momiji Travel customers visiting Nagoya Mosque", layout: "tall" },
  { src: "/images/gallery/customer-trip-airport.jpg", alt: "Family customers at the airport with Momiji Travel", layout: "tall" },
  { src: "/images/gallery/customer-trip-05.jfif", alt: "Momiji Travel customer trip moment", layout: "standard" },
  { src: "/images/gallery/customer-trip-06.jfif", alt: "Momiji Travel group travel experience", layout: "standard" },
  { src: "/images/gallery/customer-trip-07.jfif", alt: "Customer travel moment with Momiji Travel", layout: "standard" },
  { src: "/images/gallery/customer-trip-08.jfif", alt: "Family-friendly customer trip with Momiji Travel", layout: "standard" },
  { src: "/images/gallery/customer-trip-09.jfif", alt: "Previous trip moment arranged by Momiji Travel", layout: "standard" },
];

function waLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function PackageCard({ item }) {
  const message = `Hi Momiji, I am interested in the ${item.title} package. Can you share the latest details and price?`;
  return (
    <article className="package-card reveal" data-category={item.category}>
      <div className="package-image">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <span>{item.badge}</span>
      </div>
      <div className="package-body">
        <h3>{item.title}</h3>
        <div className="package-meta">
          <strong>{item.duration}</strong>
          <b>{item.price}</b>
        </div>
        <p>{item.description}</p>
        <ul>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <a className="btn btn-primary btn-full" href={waLink(message)} target="_blank" rel="noopener noreferrer">
          Ask About This Package
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const groupedPackages = useMemo(() => {
    return ["Japan", "China", "Indonesia", "Educational Trip"].map((region) => ({
      region,
      packages: packages.filter(
        (item) => item.region === region && (filter === "all" || item.category.split(" ").includes(filter))
      ),
    }));
  }, [filter]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 90, 360)}ms`);
    });

    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <>
        <header className="site-header">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Momiji Travel home">
            <img className="brand-logo" src="/images/momiji-logo.jpg" alt="Momiji Travel logo" />
            <span>
              <strong>Momiji Travel</strong>
              <small>Muslim-Friendly Travel</small>
          </span>
        </a>
        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {["Home", "Packages", "Why Momiji", "Booking", "Gallery", "FAQ", "Contact"].map((label) => (
            <a key={label} href={`#${label === "Home" ? "home" : label === "Packages" ? "packages" : label === "Why Momiji" ? "why" : label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer">
          WhatsApp Us
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>
          <span></span><span></span><span></span>
        </button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow reveal">Momiji Travel & Tours Sdn Bhd</span>
              <h1 className="reveal">Muslim-Friendly Holidays for Families, Groups & Private Tours</h1>
              <p className="reveal">Explore domestic and international destinations with thoughtful itineraries, halal-conscious meals, prayer-friendly planning and warm support from Momiji Travel.</p>
              <div className="hero-actions reveal">
                <a className="btn btn-primary" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer">Check Packages on WhatsApp</a>
                <a className="btn btn-light" href="#packages">View Popular Packages</a>
              </div>
              <ul className="trust-badges reveal">
                <li>MOTAC L/N 12842</li>
                <li>Muslim-Friendly Travel</li>
                <li>Private & Group Tours</li>
              <li>Based in Melaka</li>
              </ul>
            </div>
            <aside className="hero-card reveal" aria-label="Plan your trip">
              <span className="card-icon">01</span>
              <h2>Plan your trip with less stress</h2>
              <p>Tell us your destination, dates, number of travellers and budget. Our team will suggest a package that fits your travel style.</p>
              <a className="btn btn-primary" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer">Chat Now</a>
            </aside>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container strip-grid">
            {trustItems.map(([title, copy, icon]) => (
              <div className="reveal" key={title}><span>{icon}</span><strong>{title}</strong><small>{copy}</small></div>
            ))}
          </div>
        </section>

        <section className="section team-section">
          <div className="container team-grid">
            <div className="team-copy reveal">
              <span className="eyebrow">Meet Momiji</span>
              <h2>Professional, Friendly Support for Every Journey</h2>
              <p>Our team is ready to help you plan a smoother Muslim-friendly trip, from the first WhatsApp enquiry to the final travel details before departure.</p>
              <div className="team-points">
                <span>Personal package consultation</span>
                <span>Family, group and school trip planning</span>
                <span>Clear communication before you travel</span>
              </div>
              <a className="btn btn-primary" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer">Talk to Our Team</a>
            </div>
            <figure className="team-photo reveal">
              <picture>
                <source media="(min-width: 768px)" srcSet="/images/momiji-team-desktop.jpg" />
                <img src="/images/momiji-team-mobile.jpg" alt="Momiji Travel professional and friendly team" loading="lazy" />
              </picture>
            </figure>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Popular choices</span>
              <h2>Popular Momiji Travel Packages</h2>
              <p>Choose by destination, budget and travel style. We can plan relaxed trips for families, private groups, schools and companies.</p>
            </div>
            <div className="filter-tabs reveal" aria-label="Package categories">
              {[
                ["all", "All"],
                ["japan", "Japan"],
                ["china", "China"],
                ["indonesia", "Indonesia"],
                ["education", "Educational Trip"],
                ["private", "Private Group"],
              ].map(([value, label]) => (
                <button className={filter === value ? "active" : ""} type="button" data-filter={value} onClick={() => setFilter(value)} key={value}>{label}</button>
              ))}
            </div>

            {groupedPackages.map(({ region, packages: regionPackages }) => (
              regionPackages.length > 0 && (
                <div className="package-region" key={region}>
                  <div className="region-head reveal">
                    <span>{region}</span>
                    <h3>{region} Packages</h3>
                  </div>
                  <div className="package-grid">
                    {regionPackages.map((item) => <PackageCard item={item} key={item.title} />)}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        <section className="section section-soft" id="why">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Comfort in every detail</span>
              <h2>Why Choose Momiji Travel?</h2>
              <p>We do more than arrange transport and hotels. We help customers enjoy trips that feel organised, considerate and suitable for Muslim travellers.</p>
            </div>
            <div className="feature-grid">
              {features.map(([title, copy, icon]) => (
                <article className="feature-card reveal" key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="booking">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Simple booking</span>
              <h2>How Booking Works</h2>
              <p>From the first enquiry to departure day, the process is designed to be clear and easy.</p>
            </div>
            <div className="steps-grid">
              {[
                ["01", "Contact Us on WhatsApp", "Share your destination, dates, number of travellers and estimated budget."],
                ["02", "Receive a Package Proposal", "We recommend an itinerary and pricing that suits your needs."],
                ["03", "Confirm With Deposit", "Secure your booking through payment to the official company account."],
                ["04", "Get Ready to Travel", "We help organise key travel information before departure."],
              ].map(([num, title, copy]) => <article className="reveal" key={num}><b>{num}</b><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section section-red-tint">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Travel styles</span>
              <h2>Trips for Every Travel Style</h2>
            </div>
            <div className="style-grid">
              {["Family Trip", "Senior-Friendly Trip", "Company Trip", "School & Educational Trip", "Private Group", "Muslim-Friendly Overseas Trip"].map((title) => (
                <article className="reveal" key={title}><h3>{title}</h3><p>{title === "Family Trip" ? "Relaxed itineraries for children, parents and grandparents." : title === "Senior-Friendly Trip" ? "A gentler pace with more comfort and less rushing." : title === "Company Trip" ? "Suitable for team building, reward trips and corporate groups." : title === "School & Educational Trip" ? "Outdoor learning through nature, heritage and community experiences." : title === "Private Group" ? "Exclusive trips for families, friends or small communities." : "Halal-conscious meals, prayer time consideration and suitable activities."}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Gallery</span>
              <h2>Moments With Momiji</h2>
              <p>A glimpse of customer travel experiences across selected domestic and international destinations.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item) => (
                <figure className={`gallery-item gallery-${item.layout} reveal`} key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Testimonials</span>
              <h2>What Customers Say</h2>
            </div>
            <div className="testimonial-grid">
              {[
                ["The trip was well organised and easy for our family. Halal meals were convenient and the itinerary was not too rushed.", "Puan Farah, Melaka"],
                ["The Momiji team helped from the beginning until the end of the trip. Very suitable for a family group.", "Encik Hafiz, Selangor"],
                ["Clear packages, easy WhatsApp communication and the whole journey went smoothly.", "Cik Aina, Negeri Sembilan"],
              ].map(([quote, name]) => <article className="reveal" key={name}><div className="stars">★★★★★</div><p>&ldquo;{quote}&rdquo;</p><strong>{name}</strong></article>)}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-wrap">
            <div className="section-head reveal">
              <span className="eyebrow">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <article className={`faq-item reveal ${openFaq === index ? "open" : ""}`} key={question}>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}</button>
                  <div><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container cta-grid">
            <div className="reveal">
              <span className="eyebrow">Ready to plan?</span>
              <h2>Already Have a Destination in Mind?</h2>
              <p>Click WhatsApp and tell us your destination, travel date, number of travellers and estimated budget. The Momiji team will help suggest a suitable package.</p>
              <a className="btn btn-light" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer">WhatsApp Momiji Now</a>
            </div>
            <ul className="reveal">
              <li>Preferred destination</li>
              <li>Travel date</li>
              <li>Number of travellers</li>
              <li>Estimated budget</li>
            </ul>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div className="section-head contact-head reveal">
              <span className="eyebrow">Contact</span>
              <h2>Contact Momiji Travel</h2>
              <p>For package enquiries, private groups, school trips or company trips, contact us on WhatsApp.</p>
              <a className="btn btn-primary" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
            <address className="contact-card reveal">
              <strong>Momiji Travel & Tours Sdn Bhd</strong>
              <span>MOTAC License: L/N 12842</span>
              <span>{companyAddress}</span>
              <span>WhatsApp: +60 17-214 5298</span>
              <span>Email: hello@momiji-travel.com</span>
            </address>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/images/momiji-logo.jpg" alt="Momiji Travel logo" />
            <div><strong>Momiji Travel & Tours Sdn Bhd</strong><p>Muslim-Friendly Travel<br />MOTAC License: L/N 12842<br />{companyAddress}</p></div>
          </div>
          <nav aria-label="Footer links"><a href="#home">Home</a><a href="#packages">Packages</a><a href="#why">Why Momiji</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></nav>
          <div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="TikTok">tt</a></div>
        </div>
        <div className="container footer-bottom">© 2026 Momiji Travel & Tours Sdn Bhd. All rights reserved.</div>
      </footer>

      <a className="floating-wa" href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Momiji">WhatsApp</a>
    </>
  );
}
