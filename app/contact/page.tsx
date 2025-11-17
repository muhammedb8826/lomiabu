"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderNav } from "@/components/HeaderNav";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
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
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&h=600&q=80"
            alt="Restaurant interior"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-zinc-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-10">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="flex items-center gap-1 hover:text-white">
              <Home className="h-4 w-4" />
              HOME
            </Link>
            <span>&gt;</span>
            <span className="text-white">CONTACT</span>
          </nav>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600/10">
                <Phone className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">Phone</h3>
              <p className="text-zinc-600">+1 (235) 235-598</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600/10">
                <Mail className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">Email</h3>
              <p className="text-zinc-600">hello@loomii.com</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600/10">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">Address</h3>
              <p className="text-zinc-600">Ethiopia, Shashemene<br />01 Bus Station</p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-600/10">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">Open Hours</h3>
              <p className="text-zinc-600">Monday - Sunday<br />8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">Get in Touch</h2>
            <p className="text-lg text-zinc-600">
              Have a question or want to make a reservation? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-zinc-900">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="+1 (235) 235-598"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="What is this regarding?"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="Your message..."
              />
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">Find Us</h2>
            <p className="text-lg text-zinc-600">
              Visit us at our location in Shashemene, Ethiopia
            </p>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-lg bg-zinc-200">
            {/* Placeholder for map - you can replace this with an actual map embed */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-16 w-16 text-zinc-400" />
                <p className="text-lg font-semibold text-zinc-600">Ethiopia, Shashemene</p>
                <p className="text-zinc-500">01 Bus Station</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

