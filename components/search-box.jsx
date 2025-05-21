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

export default function SearchBox() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-10"
      style={{ backgroundImage: "url('/cloud.png')" }}
    >
      {/* Top Buttons: Flights, Umrah, Visa */}
      <div className="flex justify-center gap-4 mb-[-20px] relative z-10">
        <Button className="bg-primary text-white shadow-md rounded-xl px-6 py-2">
          <FaPlaneDeparture className="mr-2" />
          Flights
        </Button>
        <Button className="bg-primary text-white shadow-md rounded-xl px-6 py-2">
          <FaKaaba className="mr-2" />
          Umrah
        </Button>
        <Button className="bg-primary text-white shadow-md rounded-xl px-6 py-2">
          Visa
        </Button>
      </div>

      {/* Search Box */}
      <div className="bg-white shadow-xl border border-muted rounded-2xl max-w-[1100px] mx-auto px-6 py-6 mt-10">
        {/* Trip Options + Dropdowns */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
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

          {/* Travel Class */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <LiaChairSolid className="text-primary mr-1" />
                Economy <IoMdArrowDropdown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {travelClasses.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Traveller Count */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <FaPersonWalkingLuggage className="text-primary mr-1" />
                1 Traveller <IoMdArrowDropdown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {travellerOptions.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Currency */}
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
                USD <IoMdArrowDropdown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {currencyOptions.map((item) => (
                <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {/* From Where */}
          <div className="relative">
            <FaPlaneDeparture className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-base" />
            <Input
              type="text"
              placeholder="From Where"
              className="pl-10 rounded-full"
            />
          </div>

          {/* To Where */}
          <div className="relative">
            <FaPlaneArrival className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-base" />
            <Input
              type="text"
              placeholder="To Where"
              className="pl-10 rounded-full"
            />
          </div>

          {/* Departure */}
          <div className="w-full">
            <DatePicker placeholder="Departure" />
          </div>

          {/* Return */}
          <div className="w-full">
            <DatePicker placeholder="Return" />
          </div>

          {/* Contact No. */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-base" />
            <Input
              type="text"
              placeholder="Contact No."
              className="pl-10 rounded-full"
            />
          </div>

          {/* Search Button */}
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-full w-full sm:w-auto sm:px-6">
            <FaSearch className="mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
