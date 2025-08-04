"use client";
import { useState } from "react";
import StatDropDown from "@/components/ui/StatDropDown";
import PlayerStatsTable from "./PlayerStatsTable";
import { bebasNeue } from "@/app/font";

export default function PlayerStatsView({ playerStats, playerBioInfo }: any) {
  const [mode, setMode] = useState<"Total" | "Per Game" | "Per 36 Min">(
    "Total"
  );

  return (
    <div className="mb-10">
      {/* DROP DOWN */}
      <div className=" max-w-5xl mx-auto  overflow-hidden my-6">
        <StatDropDown setMode={setMode} />
      </div>

      {/* TABLE */}
      <div className=" max-w-5xl mx-auto border rounded-xl overflow-hidden mb-10">
        <div className="bg-gradient-to-l from-blue-900 to-red-900">
          <p
            className={`text-center py-4 text-3xl font-bold rounded-t-xl text-gold ${bebasNeue.className}`}
          >
            Player Stats
          </p>
        </div>
        <PlayerStatsTable
          mode={mode}
          playerStats={playerStats}
          playerBioInfo={playerBioInfo}
        />
      </div>
    </div>
  );
}
