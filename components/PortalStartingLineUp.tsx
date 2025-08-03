import { startingLineup } from "@/lib/placeholder-data";
import LineupCard from "./ui/LineupCard";
import { bebasNeue } from "@/app/layout";

export default function PortalStartingLineup() {
  return (
    <div className="mt-10 p-6 px-12 border-1 border-slate-300 rounded-lg w-sm md:w-3xl">
      <h2
        className={`${bebasNeue.className} font-bold text-center mb-2 text-2xl sm:text-3xl text-red-900`}
      >
        Starting Lineup
      </h2>
      <p className="text-base font-light text-center text-gray-500">
        Click any player to view their profile and statistics
      </p>

      <div>
        {startingLineup.map((player) => (
          <div key={player.id} className="">
            <LineupCard player={player} />
          </div>
        ))}
      </div>
    </div>
  );
}
