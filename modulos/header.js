//funcion para pitar el header de las paginas

export function pintarHeader(pag, id) {
  const header = document.getElementById(id);
  const homeLink = pag === "home" ? "#" : "../index.html";
  const netflixLink = pag === "Netflix" ? "#" : "../pages/netflix.html";
  const disneyLink = pag === "Disney" ? "#" : "../pages/disney+.html";
  const hboLink = pag === "HBO" ? "#" : "../pages/hbo.html";
  header.innerHTML = `
        <nav class="header">
           <a href="${homeLink}"><img class="logo" src="${
    homeLink == true ? "./img/logoPagina.png" : "../img/logoPagina.png"
  }"></a>
           <a href="${netflixLink}"><img src="../img/netflix.png" class="logo"></a>
           <a href="${disneyLink}"><img src="../img/disney.png"class="logo"></a>
           <a href="${hboLink}"><img src="../img/hbo.png"class="logo"></a>
    </nav>
    `;
}
