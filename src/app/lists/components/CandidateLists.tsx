"use client";

import { trpc } from "@/lib/trpc/client";
import { Divider, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import Card from "./Card";
import { positions } from "@/config/positions";

function CandidateLists() {
  const { data: candidates, isLoading } = trpc.candidates.getPersons.useQuery();
  const [position, setPosition] = useState("Kapitan");
  const filteredCandidates = candidates?.filter(
    (candidate) => candidate.position === position
  );
  const handleSelectionChange = (e: any) => {
    setPosition(e.target.value);
  };

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="mb-3 text-center text-2xl font-semibold">
        Position Lists
      </h1>
      <Select
        id="position"
        label="Position"
        placeholder="Choose position"
        defaultSelectedKeys={new Set(["Kapitan"])}
        onChange={handleSelectionChange}
      >
        {positions.map((position) => (
          <SelectItem key={position} value={position}>
            {position}
          </SelectItem>
        ))}
      </Select>
      <Divider className="mt-3" />
      <div className="mt-3 space-y-3 text-sm">
        {isLoading && <p className="text-center">Loading...</p>}
        {filteredCandidates?.length == 0 ? (
          <p className="text-center">No result</p>
        ) : (
          filteredCandidates?.map((candidate, idx) => (
            <Card key={idx} {...candidate} />
          ))
        )}
      </div>
    </div>
  );
}

export default CandidateLists;
