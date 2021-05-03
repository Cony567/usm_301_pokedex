


tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
//Electrico: <i class="fas fa-bolt"></i>
//Agua: <i class="fas fa-tint"></i>
//Fuego: <i class="fas fa-fire"></i>
//Planta: <i class="fas fa-leaf"></i>
//Normal: <i class="fas fa-star"></i>
const eliminarPok = ()=>{

}
const pokemones = [];
const cargarTabla = ()=>{
  //1. obtener una referencia a la tabla
  let tbody = document.querySelector("#tabla-tbody");
  tbody.innerHTML="";
  //2.recorrer la lista de pokemones  
  for(let i=0; i < pokemones.length; ++i){
    let p=pokemones[i];
    //3. por cada pokemon generar una fila (tr)
    let tr = document.createElement("tr");
    // 4. por cada atributo(nombre, tipo, descriptio, and so on ), vot a generar celdas (td)
    let td_nro=document.createElement("td");
    td_nro.innerText =(i+1);//define el contenido de texto de un td en este caso o de una etiqueta
    let td_nombre=document.createElement("td");
    td_nombre.innerText=p.nombre;
    let td_description=document.createElement("td");
    td_description.innerHTML= p.description;
    let td_tipo=document.createElement("td");

    let icono = document.createElement("i");
    if(p.tipo=="fuego"){
      icono.classList.add("fas","fa-fire","text-danger", "fa-3x");
    }else if(p.tipo=="planta"){
      icono.classList.add("fas","fa-leaf","text-success","fa-3x");
    }else if(p.tipo=="electrico"){
      icono.classList.add("fas","fa-bolt", "text-warning","fa-3x");
    }else if (p.tipo=="agua"){
      icono.classList.add("fas","fa-tint","text-primary","fa-3x");
    }else{
      icono.classList.add("fas","fa-star","text-info","fa-3x");
    }
    td_tipo.classList.add("text-center");
    td_tipo.appendChild(icono);
    
    let td_acciones=document.createElement("td");
    let boton=document.createElement("button");
    boton.classList.add("btn-danger");
    boton.innerText = "Eliminar";
    td_acciones.appendChild(boton);
    //5. agregar las celdas al tr
    tr.appendChild(td_nro);//agregar un elemento dentro de otro xd 
    tr.appendChild(td_nombre);
    tr.appendChild(td_tipo);
    tr.appendChild(td_description);
    tr.appendChild(td_acciones);
    //6. agregar el tr a la tabla 
    tr.classList.add("text-center");
    tbody.appendChild(tr);
  }
  
}
document.querySelector("#limpiar-btn").addEventListener("click", ()=>{
  let tbody = document.querySelector("#tabla-tbody");
  tbody.innerHTML="";
  for(let i=pokemones.length;i>=0;--i){
    pokemones.pop();
  }
});
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let description = tinymce.get("descripcion-txt").getContent();
    let legendario = document.querySelector("#legendario-si").checked;
    let tipo = document.querySelector("#tipo-select").value;
    //creacion de un objeto llamado pokemon
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.description = description;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    pokemones.push(pokemon);//append
    cargarTabla();
    //mensaje por pantalla pero bonito xd
    Swal.fire("Exito!", "Pokemon registrado","success");
});