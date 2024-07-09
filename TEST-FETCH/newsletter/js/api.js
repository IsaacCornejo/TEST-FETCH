export const fetchNews = () => {
    return fetch("https://6684f71a56e7503d1ae1c8c3.mockapi.io/noticia")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Network response was not ok ' + respuesta.statusText);
        }
        return respuesta.json();
      })
      .catch((error) => {
        console.error("Error al obtener noticias:", error);
        throw error;
      });
  };
  