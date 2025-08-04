import { fetchPlayerBio, fetchPlayerImage } from "@/lib/api/playerData";
import PlayerHeader from "@/components/PlayerProfile/PlayerHeader";
import PlayerStatsView from "@/components/PlayerProfile/PlayerStatsView";

export default async function PlayerProfilePage({
  params,
}: {
  params: Promise<{ playerId: string }>;
}) {
  const { playerId } = await params;
  const playerBioInfo = await fetchPlayerBio(playerId);
  const playerImage = await fetchPlayerImage(playerId);

  return (
    <div className="mb-10">
      <div className="">
        <PlayerHeader playerBioInfo={playerBioInfo} playerImage={playerImage} />
      </div>
      <PlayerStatsView playerBioInfo={playerBioInfo} />
    </div>
  );
}
