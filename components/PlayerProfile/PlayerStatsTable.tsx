export default function PlayerStatsTable({ playerBioInfo, playerStats }: any) {
  const { avg, tot } = playerStats.data.pl;
  const { sa } = playerBioInfo.data.pl.ca;
  const latestYear = sa.length - 1;
  // console.log(sa);

  return (
    <div className="overflow-x-auto mx-2 border rounded-xl">
      <table className=" min-w-max table-auto border border-gray-300 rounded-xl overflow-hidden shadow-md">
        <thead>
          <tr className="bg-red-900 border">
            <th
              colSpan={19}
              className="text-center py-4 text-3xl font-bold rounded-t-xl text-gold"
            >
              Player Statistics
            </th>
          </tr>
          <tr>
            <th className="px-4">Season</th>
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
          <tr>
            <td className="px-4">2024-2025</td>
            <td className="px-4">{sa[latestYear].gp}</td>
            <td className="px-4">{avg.min.val}</td>
            <td className="px-4">{tot.fgm.val - tot.tpm.val}</td>
            <td className="px-4">{tot.fga.val - tot.tpa.val}</td>
            <td className="px-4">
              {(
                ((tot.fgm.val - tot.tpm.val) / (tot.fga.val - tot.tpa.val)) *
                100
              ).toFixed(1)}
            </td>
            <td className="px-4">{tot.tpm.val}</td>
            <td className="px-4">{tot.tpa.val}</td>
            <td className="px-4">{(tot.tpp.val * 100).toFixed(1)}</td>
            <td className="px-4">{tot.ftm.val}</td>
            <td className="px-4">{tot.fta.val}</td>
            <td className="px-4">{(tot.ftp.val * 100).toFixed(1)}</td>
            <td className="px-4">{avg.ast.val}</td>
            <td className="px-4">{avg.stl.val.toFixed(1)}</td>
            <td className="px-4">{avg.blk.val.toFixed(1)}</td>
            <td className="px-4">{avg.oreb.val.toFixed(1)}</td>
            <td className="px-4">{avg.dreb.val.toFixed(1)}</td>
            <td className="px-4">{tot.reb.val}</td>
            <td className="px-4">{avg.pts.val}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
