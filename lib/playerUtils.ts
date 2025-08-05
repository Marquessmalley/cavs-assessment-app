export const calculatePlayerStat = (
  mode: string,
  stat: number,
  gp: number,
  minutes: number
): number | string => {
  if (mode === "Per Game") return (stat / gp).toFixed(1);
  if (mode === "Per 36 Min") return ((stat / minutes) * 36).toFixed(1);
  return stat;
};

export const calulatePlayerAge = (birthDate: string) => {
  const playerBirth = new Date(birthDate);
  const today = new Date();

  // Check if the player has had their birthday this year
  if (
    today.getMonth() < playerBirth.getMonth() &&
    today.getDate() < playerBirth.getDate()
  ) {
    return today.getFullYear() - playerBirth.getFullYear() - 1;
  }
  return today.getFullYear() - playerBirth.getFullYear();
};
