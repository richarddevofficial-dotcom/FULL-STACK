export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
};

export const getComments = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );

  return res.json();
};
