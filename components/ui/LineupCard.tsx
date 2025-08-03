import Link from "next/link";

interface IPlayerProps {
  id: number;
  name: string;
  position: string;
  number: string;
}
export default function LineupCard({ player }: { player: IPlayerProps }) {
  return (
    <Link href={`/${player.id}`}>
      <div className="px-4 py-2 flex items-center border border-slate-300 m-4 w-full rounded-lg hover:bg-slate-200 transition duration-200 cursor-pointer">
        <p className="mr-6 bg-red-100 p-2 rounded-full w-10 flex justify-center font-bold text-red-900">
          {player.number}
        </p>
        <div>
          <p className="font-bold">{player.name}</p>
          <p className="font-light text-slate-400 text-lg">{player.position}</p>
        </div>
      </div>
    </Link>
  );
}
