export default function PlayerStatsTable({ playerStats }: any) {
  const { avg, tot } = playerStats;
  return (
    <div className="overflow-x-auto mx-2">
      <table className="min-w-max table-auto border">
        <thead>
          <tr>
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
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
            <td className="px-4">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
