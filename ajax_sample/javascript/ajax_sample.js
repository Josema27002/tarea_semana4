let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function fetchData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      data = request.response; // Guardar los datos en la variable
      updateContent(); // Actualizar el contenido por primera vez
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function updateContent() {
  if (data.length > 0) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number = (number + 1) % data.length; // Ciclo a través de los datos
  }
}

function changeVideo() {
  if (data.length === 0) {
    fetchData(); // Obtener los datos solo si no están cargados
  } else {
    updateContent(); // Actualizar el contenido si los datos ya están cargados
  }
}

button.addEventListener('click', changeVideo);
window.onload = fetchData;
