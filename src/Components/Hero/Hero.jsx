"use client";
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeroParallax } from "../ui/hero-parallax";
import { TracingBeam } from "../ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import CartItems from "../CartItems/CartItems";

const navigation = [
  { name: "Graphic Card", href: "/graphicCard" },
  { name: "Keyboard", href: "/keyboard" },
  { name: "Mouse", href: "/mouse" },
];
const Hero = () => {
  const [cartMenu, setCartMenu] = useState(false);

  const handleCartMenuOpen = () => {
    setCartMenu(true);
    setMobileMenuOpen(false);
  };
  const handleCartMenuClose = () => {
    setCartMenu(false);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <section>
      <TracingBeam className="mb-8">
        <HeroParallax products={products} />
        <div className="bg-black h-full" id="hero">
          <header className="dark absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="" alt="" />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div
                onClick={() => {
                  handleCartMenuOpen();
                }}
                className="hidden lg:flex lg:flex-1 lg:justify-end mr-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 text-white mr-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
            </nav>
            {cartMenu && (
              <CartItems
                handleCartMenuClose={handleCartMenuClose}
                cartMenu={cartMenu}
                setCartMenu={setCartMenu}
              />
            )}
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="" alt="" />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <div
                        onClick={() => {
                          handleCartMenuOpen();
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-9 h-9 text-gray-900"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>

          <div className="relative isolate px-6 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Unleash the{" "}
                  <span className="text-indigo-600">experience</span> of online
                  shopping
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Explore the frontier of e-commerce, where the fusion of
                  innovation and imagination creates a shopping experience like
                  no other
                </p>
              </div>
            </div>
          </div>

          {/* SHOP CATEGORIES CARDS */}

          <Link to="/graphicCard">
            <CardContainer className="inter-var ">
              <CardBody className="bg-black relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-0.5 border animate-border inline-block  bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] ">
                <span class="block rounded-md bg-black px-5 py-3 font-bold text-white">
                  <CardItem translateZ="50" className="text-xl font-bold ">
                    GRAPHIC CARD
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-neutral-500"
                  >
                    Embark on a visual odyssey with our futuristic graphics
                    card, seamlessly blending quantum computing and AI for an
                    unparalleled level of immersive gaming and rendering
                    excellence
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/buy/geforce-ada-40-series-og-1200x630@2x.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs4 font-normal text-white"
                    >
                      Buy now →
                    </CardItem>
                  </div>
                </span>
              </CardBody>
            </CardContainer>
          </Link>

          <Link to="/keyboard">
            <CardContainer className="inter-var">
              <CardBody className="bg-black relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-0.5 border animate-border inline-block  bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] ">
                <span class="block rounded-md bg-black px-5 py-3 font-bold text-white">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                  >
                    GAMING KEYBOARDS
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Dive into the future of typing and gaming with our
                    cutting-edge keyboard, merging quantum-inspired precision
                    and AI-driven customization to redefine your immersive and
                    responsive keyboarding experience
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1528198083909-60c0bf5b0718?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs4 font-normal dark:text-white"
                    >
                      Buy now →
                    </CardItem>
                  </div>
                </span>
              </CardBody>
            </CardContainer>
          </Link>

          <Link to="/mouse">
            <CardContainer className="inter-var">
              <CardBody className="bg-black relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-0.5 border animate-border inline-block  bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] ">
                <span class="block rounded-md bg-black px-5 py-3 font-bold text-white">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    GAMING MOUSE
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Experience the future of control with our innovative mouse,
                    blending quantum precision and AI customization for
                    unparalleled accuracy in gaming
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="https://images.unsplash.com/photo-1554876306-5b1fa0c884e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs4 font-normal dark:text-white"
                    >
                      Buy now →
                    </CardItem>
                  </div>
                </span>
              </CardBody>
            </CardContainer>
          </Link>
        </div>
      </TracingBeam>
    </section>
  );
};
export const products = [
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1618764400608-9e7115eede74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1618764400608-9e7115eede74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1618764400608-9e7115eede74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1662643500140-7c2fdf816dd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1496243975092-6ec259c776e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1617294864710-bb97f05457f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1543271082-cf645d49dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1543271082-cf645d49dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1516648612766-d5f00245f63e?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1520959956082-d89787855a7a?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1611120227195-91674b693491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HyperShop",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default Hero;
