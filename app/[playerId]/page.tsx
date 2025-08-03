import {
  fetchPlayerBio,
  fetchPlayerImage,
  fetchPlayerStats,
} from "@/lib/api/playerData";
import PlayerHeader from "@/components/PlayerProfile/PlayerHeader";
import PlayerStatsTable from "@/components/PlayerProfile/PlayerStatsTable";

export default async function PlayerProfilePage({
  params,
}: {
  params: Promise<{ playerId: string }>;
}) {
  const { playerId } = await params;
  const playerBioInfo = await fetchPlayerBio(playerId);
  const playerImage = await fetchPlayerImage(playerId);
  const playerStats = await fetchPlayerStats(playerId);

  return (
    <div className="">
      <div className="">
        <PlayerHeader playerBioInfo={playerBioInfo} playerImage={playerImage} />
      </div>
      <div className="mt-10 bg-red-100 ">
        <PlayerStatsTable playerStats={playerStats} />
      </div>
    </div>
  );
}
