"use client";

import Image from "next/image";
import { Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&h=200&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&h=200&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=200&h=200&q=80",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&h=200&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&h=200&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&h=200&q=80",
  ];

  return (
    <footer className="bg-zinc-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Loomii */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Loomii</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors hover:bg-white/10"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition-colors hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Open Hours */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Open Hours</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Monday</span>
                <span className="font-semibold">9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span className="font-semibold">9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span className="font-semibold">9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span className="font-semibold">9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="font-semibold">9:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">9:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">9:00 - 02:00</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Gallery */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                <span className="font-semibold text-white">Phone:</span> +1 (235)
                235-598
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                hello@loomii.com
              </p>
              <p>
                <span className="font-semibold text-white">Address:</span>{" "}
                Ethiopia, Shashemene, 01 Bus Station
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">
            Copyright ©{new Date().getFullYear()} All rights reserved | Made with ❤️ by{" "}
            <a
              href="https://muhdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-500 transition-colors"
            >
              muhdev.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

