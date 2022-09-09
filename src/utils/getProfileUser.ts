export const getProfilePictureByUserId = (id: number) => {
  const sprites = "open-peeps";
  return `https://avatars.dicebear.com/api/${sprites}/${id}.svg`

};
