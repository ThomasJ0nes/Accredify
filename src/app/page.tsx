"use client";
import Navbar from "./components/navbar";

import Image from "next/image";
import Particles from "./components/particles";
import SilderIcon01 from "/public/ps-icon-01.svg";
import SilderIcon02 from "/public/ps-icon-02.svg";
import SilderIcon03 from "/public/ps-icon-03.svg";
import SilderIcon04 from "/public/ps-icon-04.svg";

import ProgressSlider from "./components/progressSlider";
import Content from "./components/contentSection";
import Footer from "./components/footer";

export default function Home() {
  const tabs = [
    {
      title: "Lassen Peak",
      img: "/card-01.png",
      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Mount Shasta",

      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Eureka Peak",

      tag: "Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
  ];

  const items = [
    {
      img: "/ps-image-01.png",
      desc: "Omnichannel",
      buttonIcon: SilderIcon01,
    },
    {
      img: "/ps-image-02.png",
      desc: "Multilingual",
      buttonIcon: SilderIcon02,
    },
    {
      img: "/ps-image-03.png",
      desc: "Interpolate",
      buttonIcon: SilderIcon03,
    },
    {
      img: "/ps-image-04.png",
      desc: "Enriched",
      buttonIcon: SilderIcon04,
    },
  ];
  return (
    <>
      <main className="relative p-6 lg:px-8 min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <Navbar />
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16">
          <div className="text-center">
            {/* Illustration #1 */}
            <div
              className="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/shape.svg"
                className="max-w-none"
                width={852}
                height={582}
                alt="Illustration"
              />
            </div>

            {/* Illustration #2 */}
            <div
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/shape.svg"
                className="max-w-none"
                width={852}
                height={582}
                alt="Illustration"
              />
            </div>

            {/* Particles animation */}
            <Particles className="absolute inset-0 pointer-events-none" />

            <div className="relative mt-32">
              <h1 className="inline-flex font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Interactive Particle Animation
              </h1>
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-lg text-slate-400">
                  Our landing page template works on all devices, so you only
                  have to set it up once, and get beautiful results forever.
                </p>
              </div>
              <div className="inline-flex justify-center space-x-4">
                <div>
                  <a
                    className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group"
                    href="#0"
                  >
                    Get Started{" "}
                    <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    className="inline-flex justify-center whitespace-nowrap rounded-lg bg-slate-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    Read the docs
                  </a>
                </div>
              </div>
              <Content />
            </div>
          </div>
        </div>
      </main>

      <ProgressSlider items={items} />

      <Footer />
    </>
  );
}
