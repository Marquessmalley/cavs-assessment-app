export const calulateAge = (birthDate: string) => {
  const playerBirth = new Date(birthDate);
  const today = new Date();
  return today.getFullYear() - playerBirth.getFullYear();
};
