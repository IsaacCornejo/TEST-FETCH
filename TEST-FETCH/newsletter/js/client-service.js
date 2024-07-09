import { fetchNews } from './api.js';

const createNew = (imagen, categoria, titulo, descripcion, id) => {
  return fetch("https://6684f71a56e7503d1ae1c8c3.mockapi.io/noticia", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, categoria, titulo, descripcion, id }),
  });
};

export const clientServices = {
  fetchNews,
  createNew,
};
