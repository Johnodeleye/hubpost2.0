"use client";

import * as React from "react";
import Image from "next/image";
import { files } from "@/app/assets/files";
import { Input } from "@/components/ui/input";

interface Props {
  handleSearch: (query: string) => void;
  routeType: string;
}

function Searchbar({ handleSearch, routeType }: Props) {
  const [search, setSearch] = React.useState("");

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="searchbar flex flex-col">
      <div className="flex items-center mb-4">
        <Image
          src={files.search}
          alt="search"
          width={24}
          height={24}
          className="object-contain"
        />
        <Input
          id="text"
          value={search}
          onChange={handleInputChange}
          placeholder={`${
            routeType !== "/search" ? "Search for Users" : "Search Posts"
          }`}
          className="no-focus searchbar_input flex-1 ml-2"
        />
      </div>
    </div>
  );
}

export default Searchbar;