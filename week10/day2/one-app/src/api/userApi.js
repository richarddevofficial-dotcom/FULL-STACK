const BASE_URL = "https://randomuser.me/api/";

export const getRandomUser = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await res.json();
  return data.results[0];
};
