"use client";

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

// import { Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#5a54fc] text-white py-8 px-4 text-center rounded-lg">
      <div className="flex flex-col items-center gap-3">
        <span className="text-4xl font-bold">#</span>
        <h2 className="font-bold text-lg">Traffic </h2>
        <p className="font-semibold">Providing reliable tech </p>
        <p className="text-sm">Copyright &copy; 2025 - All rights reserved</p>
        <div className="flex gap-4 mt-3">
          <a href="#" className="hover:text-gray-300">
            <IconBrandTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IconBrandYoutube size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IconBrandFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
