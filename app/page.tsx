"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Cake,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeaderNav } from "@/components/HeaderNav";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

const heroImages = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=600&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&h=600&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&h=600&q=80",
];

const dishes = [
  {
    name: "Grilled Beef with Potatoes",
    description: "Charred ribeye • Potato fondant • Berbere jus",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=320&h=320&q=80",
  },
  {
    name: "Coastal Prawns",
    description: "Coconut tamarind glaze • Wild rice",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&h=320&q=80",
  },
  {
    name: "Heritage Grain Bowl",
    description: "Teff • Roasted roots • Cucumber labneh",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=320&h=320&q=80",
  },
  {
    name: "Golden Crêpe",
    description: "Cardamom cream • Spiced honey",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=320&h=320&q=80",
  },
  {
    name: "Smoked Lamb Shoulder",
    description: "Rosemary smoke • Fermented chili • Citrus peel",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=320&h=320&q=80",
  },
  {
    name: "Sunset Cocktail",
    description: "Passionfruit • Ginger • Sparkling honey",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&h=320&q=80",
  },
];

const menuItems = [
  {
    name: "Grilled Beef with Potatoes",
    description: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Grilled Beef with Potatoes",
    description: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Grilled Beef with Potatoes",
    description: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Grilled Beef with Potatoes",
    description: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Grilled Beef with Potatoes",
    description: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    name: "Grilled Beef with Potatoes",
    description: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Transparent */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <TopBar variant="dark" />
          <HeaderNav variant="dark" />
        </div>
      </div>

      {/* Hero Section with Carousel */}
      <div className="relative isolate overflow-hidden bg-zinc-900 pt-32 md:pt-40">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        <div className="relative z-10 flex w-full flex-col px-4 pb-24 pt-4 md:px-6 md:pb-20 md:pt-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <Hero />
          </div>
        </div>
      </div>
      <DishRow />
      <MenuSection />
      <AboutSection />
      <CateringServices />
      <ReservationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}



function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);

  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
        <Image
              src={image}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover blur-sm md:blur-none"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      {/* Carousel navigation arrows - on sides for both mobile and desktop */}
      <div className="absolute left-2 top-1/2 z-20 -translate-y-1/2 md:left-4">
        <ArrowButton onClick={goPrev} icon={<ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />} />
      </div>
      <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2 md:right-4">
        <ArrowButton onClick={goNext} icon={<ChevronRight className="h-5 w-5 md:h-6 md:w-6" />} />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center text-center md:min-h-[calc(100vh-180px)] lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 lg:py-16 lg:text-left">
      <div className="flex flex-col items-center lg:items-start">
        <div className="relative mb-6 text-center lg:text-left">
          <h1 className="relative z-10 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            <span
              className="absolute -left-2 -top-4 text-4xl font-normal italic text-amber-600/90 md:-left-6 md:-top-10 md:text-7xl lg:-left-8 lg:-top-12 lg:text-8xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Best
            </span>
            <span className="block pt-8 md:pt-16 lg:pt-20">Loomii</span>
            <span className="block">Restaurant</span>
          </h1>
        </div>
        <p className="mt-6 max-w-xl px-4 text-base leading-relaxed text-white/80 md:mt-8 md:px-0 md:text-lg lg:mt-10">
          A refined culinary story celebrating the spice routes linking East
          Africa and the globe. Flame-kissed meats, seasonal vegetables, artisan
          breads and sunset cocktails – now serving nightly tastings.
        </p>

        <div className="mt-8 flex flex-col gap-3 px-4 sm:flex-row sm:items-center md:mt-10 md:px-0 lg:justify-start">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Reserve a table
          </Button>
          <button className="text-base font-medium text-white underline-offset-4 hover:underline md:text-lg">
            View tasting menu
          </button>
        </div>
      </div>

      <div className="hidden rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur lg:block">
        <h3 className="text-xl font-semibold tracking-wide">Chef&apos;s Note</h3>
        <p className="mt-4 text-white/80">
          &ldquo;We&apos;re glazing heritage beef with tamarind caramel, charring coastal
          prawns over coffee wood, and layering cardamom cream over sorghum
          crêpes. We can&apos;t wait to plate this story for you.&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=120&h=120&q=80"
            alt="Chef portrait"
            width={64}
            height={64}
            className="rounded-full border border-white/40 object-cover"
          />
          <div>
            <p className="font-semibold">Chef Loomii</p>
            <p className="text-sm text-white/60">Creative Director</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-5 text-sm text-white/80">
          <Stat label="Signature Plates" value="12+" />
          <Stat label="Tasting Seats" value="28" />
          <Stat label="Wine Pairings" value="6" />
          <Stat label="Private Nights" value="4" />
        </div>
      </div>
    </div>
  );
}

function DishRow() {
  const [slide, setSlide] = useState(0);
  const itemsPerView = 4;
  const totalSlides = Math.ceil(dishes.length / itemsPerView);

  const visibleDishes = useMemo(() => {
    const startIndex = (slide * itemsPerView) % dishes.length;
    return Array.from({ length: itemsPerView }, (_, idx) => {
      const index = (startIndex + idx) % dishes.length;
      return dishes[index];
    });
  }, [slide]);

  const goPrev = () =>
    setSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setSlide((prev) => (prev + 1) % totalSlides);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">Chef&apos;s tasting</h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    slide === index ? "bg-amber-600" : "bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={goPrev}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-100"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-100"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleDishes.map((dish) => (
            <article
              key={dish.name}
              className="rounded-2xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">{dish.name}</h3>
              <p className="text-sm text-zinc-600">{dish.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.4em] text-white/60">{label}</p>
    </div>
  );
}

function ArrowButton({
  onClick,
  icon,
}: {
  onClick: () => void;
  icon: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 p-3 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 md:p-4"
      aria-label="carousel navigation"
    >
      {icon}
    </button>
  );
}

function AboutSection() {
  const stats = [
    { number: "18", label: "YEARS OF EXPERIENCED" },
    { number: "100", label: "MENUS/DISH" },
    { number: "50", label: "STAFFS" },
    { number: "15,000", label: "HAPPY CUSTOMERS" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Chef Portrait */}
          <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px] lg:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&h=800&q=80"
              alt="Chef portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* Middle Column - Two Stacked Images */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[350px]">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Chef cooking"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[350px]">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Fresh ingredients"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center lg:pl-8">
            <div className="relative mb-6">
              <h2 className="relative z-10 text-center text-5xl font-bold text-zinc-900 md:text-left md:text-6xl lg:text-7xl">
                <span
                  className="absolute left-1/2 -top-4 -translate-x-1/2 text-4xl font-normal italic text-amber-600 md:-left-6 md:translate-x-0 md:-top-10 md:text-7xl lg:-left-8 lg:-top-12 lg:text-8xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  About
                </span>
                <span className="block pt-8 md:pt-16 lg:pt-20">Loomii</span>
                <span className="block">Restaurant</span>
              </h2>
            </div>

            <p className="mb-6 text-base leading-relaxed text-zinc-700 md:text-lg">
              A paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>

            <div className="mb-8">
              <p className="mb-2 text-lg font-bold text-zinc-900">
                Mon - Fri 8 AM - 11 PM
              </p>
              <a
                href="tel:+1235235598"
                className="text-3xl font-bold text-amber-600 transition-colors hover:text-amber-700 md:text-4xl"
              >
                +1 (235) 235-598
              </a>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-zinc-200 pt-12 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-amber-600 md:text-5xl lg:text-6xl">
                {stat.number}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="relative mb-12 text-center md:mb-16">
          <h2 className="relative z-10 text-5xl font-bold text-zinc-800 md:text-6xl lg:text-7xl">
            <span
              className="absolute left-1/2 -top-4 -translate-x-1/2 text-4xl font-normal italic text-amber-600 md:-top-10 md:text-7xl lg:-top-12 lg:text-8xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Specialties
            </span>
            <span className="block pt-8 md:pt-16 lg:pt-20">Our Menu</span>
          </h2>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-zinc-900 md:text-2xl">
                  {item.name}
                </h3>
                <p className="mb-4 text-base text-zinc-600 md:text-lg">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zinc-900 md:text-3xl">
                    {item.price}
                  </span>
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Order now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CateringServices() {
  const services = [
    {
      icon: <Cake className="h-12 w-12 md:h-16 md:w-16" />,
      title: "Birthday Party",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: <Users className="h-12 w-12 md:h-16 md:w-16" />,
      title: "Business Meetings",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: <UtensilsCrossed className="h-12 w-12 md:h-16 md:w-16" />,
      title: "Wedding Party",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
  ];

  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="relative mb-12 text-center md:mb-16">
          <h2 className="relative z-10 text-5xl font-bold text-zinc-800 md:text-6xl lg:text-7xl">
            <span
              className="absolute left-1/2 -top-4 -translate-x-1/2 text-4xl font-normal italic text-amber-600 md:-top-10 md:text-7xl lg:-top-12 lg:text-8xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Services
            </span>
            <span className="block pt-8 md:pt-16 lg:pt-20">Catering</span>
            <span className="block">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 text-amber-600">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-zinc-800 md:text-2xl">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReservationSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&h=1200&q=80"
          alt="Grilled meat and ingredients"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Form Section */}
          <div className="rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm md:p-12">
            {/* Section Header */}
            <div className="relative mb-8">
              <h2 className="relative z-10 text-5xl font-bold text-zinc-900 md:text-6xl">
                <span
                  className="absolute -left-2 -top-4 text-4xl font-normal italic text-amber-600 md:-left-6 md:-top-10 md:text-7xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Book a table
                </span>
                <span className="block pt-8 md:pt-16">Make Reservation</span>
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-zinc-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-zinc-900"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block text-sm font-semibold text-zinc-900"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      placeholder="Time"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-zinc-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-semibold text-zinc-900"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="Date"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="person"
                      className="mb-2 block text-sm font-semibold text-zinc-900"
                    >
                      Person
                    </label>
                    <select
                      id="person"
                      name="person"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                    >
                      <option value="">Person</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-600 text-base hover:bg-amber-700 md:w-auto md:px-12"
                >
                  Make a Reservation
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side - Visual Space (for food imagery background) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ian Boner",
      role: "CUSTOMER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Jason McClean",
      role: "CUSTOMER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Mark Stevenson",
      role: "CUSTOMER",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="relative mb-12 text-center md:mb-16">
          <h2 className="relative z-10 text-5xl font-bold text-zinc-800 md:text-6xl lg:text-7xl">
            <span
              className="absolute left-1/2 -top-4 -translate-x-1/2 text-4xl font-normal italic text-amber-600 md:-top-10 md:text-7xl lg:-top-12 lg:text-8xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Testimony
            </span>
            <span className="block pt-8 md:pt-16 lg:pt-20">Happy Customer</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Profile Picture with Quote Icon */}
              <div className="relative mb-6">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Quote Icon */}
                <div className="absolute -bottom-2 -right-2 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-2xl text-white shadow-lg">
                  &ldquo;&rdquo;
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 text-base leading-relaxed text-zinc-600 md:text-lg">
                {testimonial.text}
              </p>

              {/* Customer Name */}
              <h3 className="mb-1 text-lg font-bold text-zinc-900 md:text-xl">
                {testimonial.name}
              </h3>

              {/* Role */}
              <p className="text-sm uppercase tracking-wider text-zinc-500">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((dot, index) => (
            <button
              key={dot}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === 0
                  ? "bg-amber-600"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to page ${dot}`}
            />
          ))}
        </div>
    </div>
    </section>
  );
}

