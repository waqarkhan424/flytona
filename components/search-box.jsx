"use client";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaPhone,
  FaSearch,
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
    <div className="bg-white border border-border shadow-sm rounded-2xl p-6 mt-6 max-w-7xl mx-auto">
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
              <LiaChairSolid />
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
              <FaPersonWalkingLuggage />
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <div className="flex items-center gap-2">
          <FaPlaneDeparture className="text-muted-foreground" />
          <Input type="text" placeholder="From Where" />
        </div>
        <div className="flex items-center gap-2">
          <FaPlaneArrival className="text-muted-foreground" />
          <Input type="text" placeholder="To Where" />
        </div>

        {/* <div className="flex items-center gap-2">
          <Input type="date" />
        </div>

        <div className="flex items-center gap-2">
          <Input type="date" />
        </div> */}

        <div className="flex items-center gap-2">
          <DatePicker placeholder="Departure" />
        </div>

        <div className="flex items-center gap-2">
          <DatePicker placeholder="Return" />
        </div>

        <div className="flex items-center gap-2">
          <FaPhone className="text-muted-foreground" />
          <Input type="text" placeholder="Contact No." />
        </div>

        <Button>
          <FaSearch />
          Search
        </Button>
      </div>
    </div>
  );
}
