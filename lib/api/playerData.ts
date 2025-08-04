export async function fetchPlayerBio(playerId: string) {
  const res = await fetch(
    `https://api.nba.com/v0/api/mobilefeed/nba/2024/players/playercard_${playerId}_02.json`,
    {
      method: "GET",
      headers: {
        "X-NBA-Api-Key": `${process.env.NBA_API_KEY}`,
      },
    }
  );

  if (!res.ok) throw new Error(`Response status: ${res.status}`);

  const playerInfo = await res.json();
  return playerInfo;
}

export async function fetchPlayerStats(playerId: string) {
  const seasons = ["2024-2025", "2023-2024", "2022-2023"];
  let year;
  const allSeasons = await Promise.all(
    seasons.map(async (season) => {
      year = season.split("-");
      const res = await fetch(
        `https://api.nba.com/v0/api/mobilefeed/nba/${year[0]}/players/player_ranks_${playerId}_02.json`,
        {
          method: "GET",
          headers: {
            "X-NBA-Api-Key": `${process.env.NBA_API_KEY}`,
          },
        }
      );

      if (!res.ok) throw new Error(`Response status: ${res.status}`);

      const playerStats = await res.json();

      return {
        season,
        ...playerStats,
      };
    })
  );

  return allSeasons;
}

export async function fetchPlayerImage(playerId: string) {
  const res = await fetch(
    `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png
`,
    {
      method: "GET",
    }
  );
  if (!res.ok) throw new Error(`Response status: ${res.status}`);

  return res.url;
}
