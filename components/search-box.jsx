"use client";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaPhone,
  FaSearch,
  FaKaaba,
} from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { DatePicker } from "./ui/date-picker";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  tripTypes,
  travelClasses,
  travellerOptions,
  currencyOptions,
} from "@/lib/searchData";
import { LiaChairSolid } from "react-icons/lia";
import { GiKaaba } from "react-icons/gi";

export default function SearchBox() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: "url('/cloud.png')" }}
    >
      {/* Tabs like Flights, Umrah, Visa */}
      <div className="flex justify-center gap-2 mb-4">
        <Button className="bg-primary text-white rounded-t-xl px-6 py-2">
          <FaPlaneDeparture className="mr-2" />
          Flights
        </Button>
        <Button className="bg-red-700 text-white rounded-t-xl px-6 py-2">
          <FaKaaba className="mr-2" /> Umrah
        </Button>
        <Button className="bg-primary text-white rounded-t-xl px-6 py-2">
          Visa
        </Button>
      </div>

      {/* Search Box Container */}
      <div className="bg-white shadow-lg border border-gray-200 rounded-2xl max-w-7xl mx-auto px-6 py-6">
        {/* Buttons Row */}
        <div className="flex flex-wrap gap-3 mb-4 justify-center">
          {tripTypes.map((type, index) => (
            <Button
              key={type}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {type}
            </Button>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <LiaChairSolid className="text-primary" />
                Economy <IoMdArrowDropdown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {travelClasses.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <FaPersonWalkingLuggage className="text-primary" />
                1 Traveller <IoMdArrowDropdown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {travellerOptions.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <Image
                  src="/usd.webp"
                  width={20}
                  height={20}
                  alt="USD"
                  className="mr-1"
                />
                USD
                <IoMdArrowDropdown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {currencyOptions.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <div className="flex items-center gap-2">
            <FaPlaneDeparture className="text-primary" />
            <Input
              type="text"
              placeholder="From Where"
              className="rounded-full px-4"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaPlaneArrival className="text-primary" />
            <Input
              type="text"
              placeholder="To Where"
              className="rounded-full px-4"
            />
          </div>
          <div className="flex items-center gap-2">
            <DatePicker placeholder="Departure" />
          </div>
          <div className="flex items-center gap-2">
            <DatePicker placeholder="Return" />
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary" />
            <Input
              type="text"
              placeholder="Contact No."
              className="rounded-full px-4"
            />
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-full w-full lg:w-auto">
            <FaSearch />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
