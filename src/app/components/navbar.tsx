"use client;";
import React, { use } from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Global"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "transparent",
      }}
      className="flex items-center justify-between lg:px-8 fixed top-0 left-0 right-0 z-20 px-4 py-4 sm:px-6 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24 5xl:px-28 6xl:px-32 7xl:px-36 8xl:px-40 9xl:px-44 10xl:px-48 11xl:px-52 12xl:px-56 13xl:px-60 14xl:px-64 15xl:px-68 16xl:px-72 17xl:px-76 18xl:px-80 19xl:px-84 20xl:px-88 21xl:px-92 22xl:px-96 23xl:px-100 24xl:px-104 25xl:px-108 26xl:px-112 27xl:px-116 28xl:px-120 29xl:px-124 30xl:px-128 31xl:px-132 32xl:px-136 33xl:px-140 34xl:px-144 35xl:px-148 36xl:px-152 37xl:px-156 38xl:px-160 39xl:px-164 40xl:px-168 41xl:px-172 42xl:px-176 43xl:px-180 44xl:px-184 45xl:px-188 46xl:px-192 47xl:px-196 48xl:px-200 49xl:px-204 50xl:px-208 51xl:px-212 52xl:px-216 53xl:px-220 54xl:px-224 55xl:px-228 56xl:px-232 57xl:px-236 58xl:px-240 59xl:px-244 60xl:px-248 61xl:px-252 62xl:px-256 63xl:px-260 64xl:px-264 65xl:px-268 66xl:px-272 67xl:px-276 68xl:px"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-bold leading-6 text-gray-100">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
