import React, { useState } from "react";
import Logo from "../assets/img/Logo-Sans-Bg.webp";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full py-2 px-6 shadow-md bg-white fixed top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img className="h-16 w-16" src={Logo} alt="Logo" />
        </a>

        {/* Desktop Nav */}
        <div className=" flex max-md:hidden navBarTop gap-8 justify-between items-center">
          <Menu as="div">
            <MenuButton className="relative hover:text-indigo-600">
              Locations
            </MenuButton>
            <MenuItems
              transition
              className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
              <MenuItem>
                <a
                  href="reservation-videobooth"
                  className="block px-4 py-2 hover:text-indigo-600 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                  Vidéoboooth 360°
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="reservation-chateau"
                  className="block px-4 py-2 hover:text-indigo-600 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                  Structure gonflable
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          {/* <Menu as="div">
            <MenuButton className="relative hover:text-indigo-600">
              Événements
            </MenuButton>
            <MenuItems
              transition
              className="absolute z-10  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
              <MenuItem>
                <a
                  href="/evenements/mariage"
                  className="block px-4 py-2 hover:text-indigo-600 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                  Anniversaire
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="/evenements/anniversaire"
                  className="block px-4 py-2 hover:text-indigo-600 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                  Mariage
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="/evenements/professionnel"
                  className="block px-4 py-2 hover:text-indigo-600 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                  Professionnel
                </a>
              </MenuItem>
            </MenuItems>
          </Menu> */}
          {/* <Menu as="div">
            <a
              href="/qui"
              className="block py-2 hover:text-indigo-600  text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
              Qui nous sommes ?
            </a>
          </Menu> */}
          <Menu as="div">
            <MenuButton className="relative">
              <a href="tel:0651486384" className="hover:text-indigo-600">
                0651486384
              </a>
            </MenuButton>
          </Menu>
          {location.pathname !== "/cvg" && (
            <Menu as="div">
              <MenuButton
                onClick={() =>
                  document
                    .getElementById("Booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-md bg-indigo-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md cursor-pointer text-white px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:animate-jiggle">
                Réserver
              </MenuButton>
            </Menu>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden items-center mt-4 navBarTop flex flex-col gap-4">
          <Menu as="div" className="relative">
            <MenuButton className="block text-left w-full hover:text-indigo-600">
              Location
            </MenuButton>
            <MenuItems className="mt-1 bg-white shadow rounded-md p-2">
              <MenuItem>
                <a
                  href="reservation-videobooth"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">
                  Vidéobooth 360°
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
                  href="reservation-chateau">
                  Structure gonflable
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          {/* <Menu as="div" className="relative">
            <MenuButton className="block text-left w-full hover:text-indigo-600">
              Événements
            </MenuButton>
            <MenuItems className="mt-1 bg-white shadow rounded-md p-2">
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
                  href="/evenements/anniversaire">
                  Anniversaire
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
                  href="/evenements/mariage">
                  Mariage
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
                  href="/evenements/professionnel">
                  Professionnel
                </a>
              </MenuItem>
            </MenuItems>
          </Menu> */}
          {/* <a
            href="/qui"
            className="block py-2 hover:text-indigo-600  text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
            Qui nous sommes ?
          </a> */}
          <a href="tel:0651486384" className="hover:text-indigo-600">
            0651486384
          </a>
          {location.pathname !== "/cvg" && (
            <Menu as="div">
              <MenuButton
                onClick={() =>
                  document
                    .getElementById("Booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md cursor-pointer text-white px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:animate-jiggle">
                Réserver
              </MenuButton>
            </Menu>
          )}
        </div>
      )}
    </nav>
  );
}
