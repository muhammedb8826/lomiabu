"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  Phone,
  MapPin,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden bg-zinc-900">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        <div className="relative z-10 flex w-full flex-col px-4 pb-24 pt-4 md:px-6 md:pb-20 md:pt-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <TopBar />
            <HeaderNav />
            <Hero />
          </div>
        </div>
      </div>
      <DishRow />
      <AboutSection />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden flex-col gap-2 border-b border-white/10 pb-4 text-xs uppercase tracking-widest text-white/70 md:flex md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <InfoChip icon={<Phone className="h-3 w-3" />}>+1 (235) 235-598</InfoChip>
        <InfoChip icon={<Mail className="h-3 w-3" />}>hello@loomii.com</InfoChip>
        <InfoChip icon={<MapPin className="h-3 w-3" />}>
          427 Market Street, Nairobi
        </InfoChip>
      </div>
      <div className="flex items-center gap-2 text-white/80">
        <Clock className="h-4 w-4" />
        Open hours - Monday - Sunday - 8:00 AM - 9:00 PM
      </div>
    </div>
  );
}

function HeaderNav() {
  const menuItems = ["Home", "About", "Menu", "Stories", "Contact"];

  return (
    <div className="flex w-full items-center justify-between border-b border-white/10 py-4 md:py-6">
      <div className="flex items-center gap-3 md:gap-4">
        <p className="text-lg font-bold tracking-wide text-white md:text-xl">
          Loomii
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-6 md:flex">
        <NavigationMenu className="w-auto">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle} bg-transparent px-0 text-base font-medium text-white opacity-80 hover:opacity-100`}
                >
                  <Link href="#">{item}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button size="lg">Book a table</Button>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="inline-flex items-center gap-2 text-white transition hover:opacity-80 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">MENU</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {item}
              </Link>
            ))}
            <div className="mt-4">
              <Button size="lg" className="w-full">
                Book a table
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
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
        <h1 className="text-6xl font-normal italic leading-none text-amber-600/90 sm:text-7xl md:text-8xl lg:text-9xl" style={{ fontFamily: 'var(--font-playfair)' }}>
          Loomii
        </h1>
        <p className="mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:mt-6 lg:text-6xl">
          Best Restaurant
        </p>
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
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 md:px-6 lg:px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Chef’s tasting</h2>
        <div className="flex gap-3">
          <ArrowButton onClick={goPrev} icon={<ChevronLeft className="h-4 w-4" />} />
          <ArrowButton onClick={goNext} icon={<ChevronRight className="h-4 w-4" />} />
        </div>
      </div>

      <div className="relative">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleDishes.map((dish) => (
          <article
            key={dish.name}
            className="rounded-3xl bg-white/5 p-4 text-center text-white shadow-lg shadow-black/30 backdrop-blur"
          >
            <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border border-white/30">
              <Image
                src={dish.image}
                alt={dish.name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{dish.name}</h3>
            <p className="mt-2 text-sm text-white/70">{dish.description}</p>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoChip({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[11px] tracking-[0.2em] text-white/70">
      {icon}
      {children}
    </span>
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
              <h2 className="relative z-10 text-5xl font-bold text-zinc-900 md:text-6xl lg:text-7xl">
                <span
                  className="absolute -left-4 -top-8 text-6xl font-normal italic text-amber-600 md:-left-6 md:-top-10 md:text-7xl lg:-left-8 lg:-top-12 lg:text-8xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  About
                </span>
                <span className="block pt-12 md:pt-16 lg:pt-20">Loomii</span>
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
