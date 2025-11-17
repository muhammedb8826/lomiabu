"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderNav } from "@/components/HeaderNav";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";

const categories = ["Breakfast", "Lunch", "Dinner", "Drinks", "Desserts", "Wine"];

const menuItemsByCategory: Record<string, Array<{
  name: string;
  description: string;
  price: string;
  image: string;
}>> = {
  Breakfast: [
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80",
    },
  ],
  Lunch: [
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&h=400&q=80",
    },
  ],
  Dinner: [
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400&q=80",
    },
  ],
  Drinks: [
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
    },
  ],
  Desserts: [
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&h=400&q=80",
    },
  ],
  Wine: [
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      name: "Grilled Beef with Potatoes",
      description: "Meat, Potatoes, Rice, Tomatoe",
      price: "$29",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=400&q=80",
    },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

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
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&h=600&q=80"
            alt="Food background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-zinc-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-10">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Specialties
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
            <Link href="/" className="flex items-center gap-1 hover:text-white">
              <Home className="h-4 w-4" />
              HOME
            </Link>
            <span>&gt;</span>
            <span className="text-white">MENU</span>
            <span>&gt;</span>
          </nav>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-4 overflow-x-auto py-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-6 py-3 text-base font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-amber-600 text-white shadow-md"
                    : "text-zinc-700 hover:text-zinc-900"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {menuItemsByCategory[activeCategory]?.map((item, index) => (
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
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">
                      {item.name}
                    </h3>
                    <span className="ml-4 text-2xl font-bold text-amber-600 md:text-3xl">
                      {item.price}
                    </span>
                  </div>
                  <p className="mb-4 text-base text-zinc-600 md:text-lg">
                    {item.description}
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 md:w-auto">
                    Order now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

