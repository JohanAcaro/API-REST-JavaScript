let alumnos = new Map();

function loadAlumnos() {
  fetch("alumnos.json")
  .then(response => {
    if (response.ok)
      return response.json();
    else
      throw new Error(response.status);
  })
  .then(data => {
    procesar(data);
  })
  .then(data=>verTodos(data))
  .catch(err => {
    procesar("ERROR: ", err.status);
  });
}

function procesar(datos) {
  for (let i in datos) {
    alumnos.set(datos[i].idAlumno, datos[i]);
  }
  document.getElementById("datos").innerText = "Tenemos "+alumnos.size+ " alumnos";
}

function verTodos() {
  let capaAlumno = document.getElementById("listaAlumnos");
  capaAlumno.innerHTML = "";
  for (let alumno of alumnos.values()) {
    let nodo = document.createElement("p");
    let texto = "<hr>";
    texto += "<p style='font-weight: bolder;'>Id Alumno</p>" + alumno.idAlumno +
      " <p style='font-weight: bolder;'>NIF</p> " + alumno.NIF+
      " <p style='font-weight: bolder;'>Nombre</p> " + alumno.nombre+ 
      "<p style='font-weight: bolder;'>Calificaciones</p>";
    var suma=0;
    for (var key in alumno.calificaciones) {
      
      texto +=[key]+ ": " +alumno.calificaciones[key]+ " - ";
      suma += alumno.calificaciones[key];
      if (alumno.calificaciones[key]>=9) {
        texto += " Sobresaliente <br>";
      }
      else if (alumno.calificaciones[key]<9 && alumno.calificaciones[key]>=7){
        texto += " Notable <br>";
      }
      else if (alumno.calificaciones[key]<7 && alumno.calificaciones[key]>=6){
        texto += " Bien <br>";
      }
      else if (alumno.calificaciones[key]<6 && alumno.calificaciones[key]>=5){
        texto += " Suficiente <br>";
      }
      else if (alumno.calificaciones[key]<5 && alumno.calificaciones[key]>=3){
        texto += " Insuficiente <br>";
      }
      else {
        texto += " Muy deficiente <br>";
      }
      media=Math.round(suma/6);
      
    }
    
    texto+= "<p style='font-weight: bolder;'>Media</p>" + media + " - ";
    if (media>=9) {
      texto += " Sobresaliente ";
    }
    else if (media<9 && media>=7){
      texto += " Notable ";
    }
    else if (media<7 && media>=6){
      texto += " Bien ";
    }
    else if (media<6 && media>=5){
      texto += " Suficiente ";
    }
    else if (media<5 && media>=3){
      texto += " Insuficiente ";
    }
    else {
      texto += " Muy deficiente ";
    }
    nodo.innerHTML = texto;
    capaAlumno.appendChild(nodo);
  }
}

function buscarAlumnoId() {
  let capaMensaje = document.getElementById("mensaje");
  capaMensaje.innerHTML = "";
  let capaAlumno = document.getElementById("listaAlumnos");
  capaAlumno.innerHTML = "";
  let num = document.getElementById("numero").value;
  if (num=="") {
    capaMensaje.innerHTML = "Debes escribir el ID del alumno";
    return;
  }

  for (let alumno of alumnos.values()) {
    if (alumno.idAlumno == num) {
      let nodo = document.createElement("p");
      let texto = "<hr>";
      texto += "<p style='font-weight: bolder;'>Id Alumno</p>" + alumno.idAlumno +
      " <p style='font-weight: bolder;'>NIF</p> " + alumno.NIF+
      " <p style='font-weight: bolder;'>Nombre</p> " + alumno.nombre+ 
      "<p style='font-weight: bolder;'>Calificaciones</p>";
      var suma=0;
      for (var key in alumno.calificaciones) {
      
        texto +=[key]+ " - " +alumno.calificaciones[key]+ " - ";
        suma += alumno.calificaciones[key];
        if (alumno.calificaciones[key]>=9) {
          texto += " Sobresaliente <br>";
        }
        else if (alumno.calificaciones[key]<9 && alumno.calificaciones[key]>=7){
          texto += " Notable <br>";
        }
        else if (alumno.calificaciones[key]<7 && alumno.calificaciones[key]>=6){
          texto += " Bien <br>";
        }
        else if (alumno.calificaciones[key]<6 && alumno.calificaciones[key]>=5){
          texto += " Suficiente <br>";
        }
        else if (alumno.calificaciones[key]<5 && alumno.calificaciones[key]>=3){
          texto += " Insuficiente <br>";
        }
        else {
          texto += " Muy deficiente <br>";
        }
        media=Math.round(suma/6);
      }
    
      texto+= "<p style='font-weight: bolder;'>Media</p>" + media + " - ";
      if (media>=9) {
        texto += " Sobresaliente ";
      }
      else if (media<9 && media>=7){
        texto += " Notable ";
      }
      else if (media<7 && media>=6){
        texto += " Bien ";
      }
      else if (media<6 && media>=5){
        texto += " Suficiente ";
      }
      else if (media<5 && media>=3){
        texto += " Insuficiente ";
      }
      else {
        texto += " Muy deficiente ";
      }
      nodo.innerHTML = texto;
      capaAlumno.appendChild(nodo);
    }
  }
}

function buscarAlumnoNombre() {
  let capaMensaje = document.getElementById("mensaje");
  capaMensaje.innerHTML = "";
  let capaAlumno = document.getElementById("listaAlumnos");
  capaAlumno.innerHTML = "";
  let nombre = (document.getElementById("nombre").value).toUpperCase();
  if (nombre =="") {
    capaMensaje.innerHTML = "Debes escribir el nombre del alumno";
    return;
  }

  for (let alumno of alumnos.values()) {
    if (alumno.nombre.toUpperCase().indexOf(nombre)>-1) {
      let nodo = document.createElement("p");
      let texto = "<hr>";
      texto += "<p style='font-weight: bolder;'>Id Alumno</p>" + alumno.idAlumno +
      " <p style='font-weight: bolder;'>NIF</p> " + alumno.NIF+
      " <p style='font-weight: bolder;'>Nombre</p> " + alumno.nombre+ 
      "<p style='font-weight: bolder;'>Calificaciones</p>";
      var suma=0;
      for (var key in alumno.calificaciones) {
      
        texto +=[key]+ " - " +alumno.calificaciones[key]+ " - ";
        suma += alumno.calificaciones[key];
        if (alumno.calificaciones[key]>=9) {
          texto += " Sobresaliente <br>";
        }
        else if (alumno.calificaciones[key]<9 && alumno.calificaciones[key]>=7){
          texto += " Notable <br>";
        }
        else if (alumno.calificaciones[key]<7 && alumno.calificaciones[key]>=6){
          texto += " Bien <br>";
        }
        else if (alumno.calificaciones[key]<6 && alumno.calificaciones[key]>=5){
          texto += " Suficiente <br>";
        }
        else if (alumno.calificaciones[key]<5 && alumno.calificaciones[key]>=3){
          texto += " Insuficiente <br>";
        }
        else {
          texto += " Muy deficiente <br>";
        }
        media=Math.round(suma/6);
      }
    
      texto+= "<p style='font-weight: bolder;'>Media</p>" + media + " - ";
      if (media>=9) {
        texto += " Sobresaliente ";
      }
      else if (media<9 && media>=7){
        texto += " Notable ";
      }
      else if (media<7 && media>=6){
        texto += " Bien ";
      }
      else if (media<6 && media>=5){
        texto += " Suficiente ";
      }
      else if (media<5 && media>=3){
        texto += " Insuficiente ";
      }
      else {
        texto += " Muy deficiente ";
      }
      nodo.innerHTML = texto;
      capaAlumno.appendChild(nodo);
    }
  }
}

