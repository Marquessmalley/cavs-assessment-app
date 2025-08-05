"use client";
import { calculatePlayerStat } from "@/lib/playerUtils";
export default function PlayerStatsTable({ playerBioInfo, mode }: any) {
  const seasonTotals = [...playerBioInfo.data.pl.ct.st].reverse();

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className=" min-w-max table-auto border border-gray-300 rounded-xl overflow-hidden shadow-md ">
        <thead>
          <tr className="border border-slate-300">
            <th className="px-4  py-2">Season</th>
            <th className="px-4">GP</th>
            <th className="px-4">MP</th>
            <th className="px-4">2PM</th>
            <th className="px-4">2PA</th>
            <th className="px-4">2P%</th>
            <th className="px-4">3PM</th>
            <th className="px-4">3PA</th>
            <th className="px-4">3P%</th>
            <th className="px-4">FTM</th>
            <th className="px-4">FTA</th>
            <th className="px-4">FT%</th>
            <th className="px-4">AST</th>
            <th className="px-4">STL</th>
            <th className="px-4">BLK</th>
            <th className="px-4">OREB</th>
            <th className="px-4">DREB</th>
            <th className="px-4">TREB</th>
            <th className="px-4">PTS</th>
          </tr>
        </thead>
        <tbody>
          {seasonTotals.map((season: any) => {
            const twoPM = season.fgm - season.tpm;
            const twoPA = season.fga - season.tpa;
            const twoPP = (twoPM / twoPA) * 100;
            const ttp = (season.tpm / season.tpa) * 100;
            const ftp = (season.ftm / season.fta) * 100;
            const treb = season.oreb + season.dreb;
            return (
              <tr key={season.val} className="border border-slate-300">
                <td className="px-4 py-2 text-center">{season.val}</td>
                <td className="px-4 text-center">{season.gp}</td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.min, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, twoPM, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, twoPA, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">{twoPP.toFixed(1)}</td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.tpm, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.tpa, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">{ttp.toFixed(1)}</td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.ftm, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.fta, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">{ftp.toFixed(1)}</td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.ast, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.stl, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.blk, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(
                    mode,
                    season.oreb,
                    season.gp,
                    season.min
                  )}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(
                    mode,
                    season.dreb,
                    season.gp,
                    season.min
                  )}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, treb, season.gp, season.min)}
                </td>
                <td className="px-4 text-center">
                  {calculatePlayerStat(mode, season.pts, season.gp, season.min)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
