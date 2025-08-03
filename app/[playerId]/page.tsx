import { fetchPlayerBio, fetchPlayerImage } from "@/lib/api/playerData";
import PlayerHeader from "@/components/PlayerProfile/PlayerHeader";

export default async function PlayerProfilePage({
  params,
}: {
  params: Promise<{ playerId: string }>;
}) {
  const { playerId } = await params;
  const playerBioInfo = await fetchPlayerBio(playerId);
  const playerImage = await fetchPlayerImage(playerId);

  return (
    <div>
      <PlayerHeader playerBioInfo={playerBioInfo} playerImage={playerImage} />
    </div>
  );
}
