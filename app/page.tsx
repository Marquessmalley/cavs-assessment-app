import PortalHero from "@/components/PortalHero";
import PortalStartingLineup from "@/components/PortalStartingLineUp";
export default function PlayerPortal() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <PortalHero
        title="Welcome to the Cleveland Cavaliers Player Portal"
        description="View teams player profile and statistics."
      />
      <PortalStartingLineup />
    </div>
  );
}
