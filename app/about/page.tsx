"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Cake, Users, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderNav } from "@/components/HeaderNav";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

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
              <h3 className="mb-4 text-2xl font-bold text-zinc-900 md:text-3xl">
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
                  className="w-full bg-amber-600 text-white hover:bg-amber-700 md:w-auto"
                >
                  Book Now
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side - Info Card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Opening Hours
              </h3>
              <div className="space-y-3 text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Contact Info
              </h3>
              <div className="space-y-3 text-white/90">
                <p>
                  <span className="font-semibold">Phone:</span> +1 (235) 235-598
                </p>
                <p>
                  <span className="font-semibold">Email:</span> hello@loomii.com
                </p>
                <p>
                  <span className="font-semibold">Address:</span> Ethiopia,
                  Shashemene, 01 Bus Station
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-zinc-900 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Header Section - Transparent */}
        <div className="absolute top-0 left-0 right-0 z-50 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
            <TopBar variant="dark" />
            <HeaderNav variant="dark" />
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&h=600&q=80"
            alt="Chef cooking"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-zinc-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-10">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            About Us
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="flex items-center gap-1 hover:text-white">
              <Home className="h-4 w-4" />
              HOME
            </Link>
            <span>&gt;</span>
            <span className="text-white">ABOUT</span>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <CateringServices />

      {/* Booking Section */}
      <ReservationSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
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

