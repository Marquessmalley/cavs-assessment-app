"use client";

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
                  {mode === "Total"
                    ? season.min
                    : mode === "Per Game"
                    ? (season.min / season.gp).toFixed(1)
                    : ((season.min / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? twoPM
                    : mode === "Per Game"
                    ? (twoPM / season.gp).toFixed(1)
                    : ((twoPM / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? twoPA
                    : mode === "Per Game"
                    ? (twoPA / season.gp).toFixed(1)
                    : ((twoPA / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">{twoPP.toFixed(1)}</td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.tpm
                    : mode === "Per Game"
                    ? (season.tpm / season.gp).toFixed(1)
                    : ((season.tpm / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.tpa
                    : mode === "Per Game"
                    ? (season.tpa / season.gp).toFixed(1)
                    : ((season.tpa / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">{ttp.toFixed(1)}</td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.ftm
                    : mode === "Per Game"
                    ? (season.ftm / season.gp).toFixed(1)
                    : ((season.ftm / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.fta
                    : mode === "Per Game"
                    ? (season.fta / season.gp).toFixed(1)
                    : ((season.fta / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">{ftp.toFixed(1)}</td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.ast
                    : mode === "Per Game"
                    ? (season.ast / season.gp).toFixed(1)
                    : ((season.ast / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.stl
                    : mode === "Per Game"
                    ? (season.stl / season.gp).toFixed(1)
                    : ((season.stl / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.blk
                    : mode === "Per Game"
                    ? (season.blk / season.gp).toFixed(1)
                    : ((season.blk / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.oreb
                    : mode === "Per Game"
                    ? (season.oreb / season.gp).toFixed(1)
                    : ((season.oreb / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.dreb
                    : mode === "Per Game"
                    ? (season.dreb / season.gp).toFixed(1)
                    : ((season.dreb / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? treb
                    : mode === "Per Game"
                    ? (treb / season.gp).toFixed(1)
                    : ((treb / season.min) * 36).toFixed(1)}
                </td>
                <td className="px-4 text-center">
                  {mode === "Total"
                    ? season.pts
                    : mode === "Per Game"
                    ? (season.pts / season.gp).toFixed(1)
                    : ((season.pts / season.min) * 36).toFixed(1)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
