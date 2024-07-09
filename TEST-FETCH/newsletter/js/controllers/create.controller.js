import { clientServices } from "../client-service.js";

//OBTENIENDO LA SECTION DE LAS NOTICIAS RECIENTES
const latestNews = document.querySelector(".recientes__container");

clientServices
  .fetchNews()
  .then((data) => {
    // Ordenar las noticias por fecha en orden descendente

    // Tomar las ultimas noticias
    const recentNews = data.slice(-5);
    console.log(recentNews);

    recentNews.forEach((noticia) => {
      createNews(
        noticia.imagen,
        noticia.descripcion,
        noticia.id,
        noticia.titulo,
        noticia.categoria
      );
    });
  })
  .catch((error) => {
    console.error("Error al obtener noticias:", error);
  });

//  FUNCION PARA CREAR Y MOSTRAR NOTICIAS EN EL INICIO

const createNews = (imagen, descripcion, id, titulo, categoria) => {
  const newsElement = `<article class="noticia">
      <a href="#${id}" class="noticia__container">
        <img class="noticia__img" src="${imagen}" alt="noticia">
      </a>
      <div class="noticia__info">
        <span class="noticia__categoria">${categoria}</span>
        <h3 class="noticia__titulo">${titulo}</h3>
      </div>
    </article>
`;

  //CONDICIONAL PARA SABER SI LA NOTICIA PERTENECE A LA CATEGORIA "RECIENTES"

  // Crear un contenedor temporal
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = newsElement;
  // Agregar el primer hijo del contenedor temporal a latestNews1
  latestNews.appendChild(tempContainer.firstElementChild);
};
