// funcion para filtrar los servicios de streaming por plataforma
export function filtrarServicios(array, servicios) {
  return array.filter(
    (servicio) => servicio.isStreaming && servicio.platform === servicios
  );
}

//funcion para pintar los servicios de streaming
export function pintarServicios(array, id, platform) {
  let section = document.getElementById(id);
  let h1 = document.createElement("h1");
  h1.innerHTML = `Disfrutras de las Series y Peliculas de ${platform}`;
  h1.className = "h1stream text-2xl";
  section.appendChild(h1);
  array.forEach((element) => {
    let div = document.createElement("div");
    div.className = "servicio";
    div.innerHTML = ` 
            
            <h3 class="title">${element.title}</h3>`;
    section.appendChild(div);
  });
}
