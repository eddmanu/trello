var contentGeneral = document.getElementById('box-table');
var inputBox = document.getElementById('input-box');
var referencia = document.getElementById('referencia');



// evento click para el cambio por un formulario
inputBox.addEventListener('click', function () {
  contentGeneral.removeChild(inputBox);
  createInput(event);
});

// funcion para guardar texto ingresado al input
function createInput(event) {
  var contentForm = document.createElement('div');
  var newInput = document.createElement('input');
  var buton = document.createElement('button');
  var spanIcon = document.createElement('span');

  contentForm.setAttribute('class', 'new-form left');
  contentForm.setAttribute('id', 'first-form');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'new-input');
  newInput.setAttribute('id', 'new-input');
  newInput.setAttribute('placeholder', 'Añadir una lista...');
  buton.setAttribute('id', 'new-buton');

  buton.textContent = "Guardar";
  spanIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

  contentForm.appendChild(newInput);
  contentForm.appendChild(buton);
  contentForm.appendChild(spanIcon);

  contentGeneral.appendChild(contentForm);
  document.getElementById('new-buton').parentNode.firstChild.focus();
  


  // evento click para guardar el texto ingresado
  buton.addEventListener('click', function () {
    newlist(contentGeneral, newInput);
    });
}

function newlist(contentGeneral, newInput){
  if(newInput.value) {
      var contentTextList = document.createElement('div'); // contenedor de las nuevas tareas
      var pValue = document.createElement('p');
      var pNewTarea = document.createElement('p');

      contentTextList.setAttribute('class', 'new-form left');
      pValue.setAttribute('class', 'contenido');
      pValue.setAttribute('id', 'title');
      pNewTarea.setAttribute('class', 'add-homework');

      pNewTarea.textContent = 'Añadir una tarea';
      pValue.textContent = newInput.value;

      contentTextList.appendChild(pValue);
      contentTextList.appendChild(pNewTarea);
      contentGeneral.appendChild(contentTextList);
      contentGeneral.insertBefore(contentTextList,referencia);

      newInput.value = '';
      pNewTarea.addEventListener('click', function () {
        newtareas(contentTextList, pNewTarea)
      });
      document.getElementById('new-buton').parentNode.firstChild.focus();
    }
}


function newtareas(contentTextList, pNewTarea){

        contentTextList.removeChild(pNewTarea);

        var tareaOLD = document.getElementsByClassName('new-form-tarea');
        var oldContextList = null;

        if (tareaOLD[0] != null){
          var pOldTarea = document.createElement('p');
          pOldTarea.setAttribute('class', 'add-homework');
          pOldTarea.textContent = 'Añadir tarea';
          oldContextList = tareaOLD[0].parentNode;
          oldContextList.appendChild(pOldTarea);
          tareaOLD[0].remove();  
          pOldTarea.addEventListener('click', function () {
            newtareas(oldContextList, pOldTarea);
          });
        };


        var contentForm = document.createElement('div');
        var newInput = document.createElement('textarea');
        var butonTarea = document.createElement('button');
        var spanIcon = document.createElement('span');

        contentForm.setAttribute('class', 'new-form-tarea card');
        newInput.setAttribute('id', 'new-input-card');
        newInput.setAttribute('placeholder', 'Añadir una tarea...');
        butonTarea.setAttribute('id', 'new-buton-card');

        butonTarea.textContent = "Añadir";
        spanIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

        contentTextList.appendChild(contentForm);
        contentForm.appendChild(newInput);
        newInput.focus();
        contentForm.appendChild(butonTarea);
        contentForm.appendChild(spanIcon);

        // evento click para guardar el texto ingresado
        butonTarea.addEventListener('click', function () {
          console.log('Te odio js');
          if(newInput.value) {
              var pCard = document.createElement('p');
              pCard.setAttribute('class', 'content-list');
              pCard.textContent = newInput.value;
              contentTextList.insertBefore(pCard,contentForm);
              newInput.focus();
              newInput.value = '';
          }
        });
}



function limpiarTarea(){

  var tareaOLD = document.getElementsByClassName('new-form-tarea');
  var oldContextList = null;
  for (var i = tareaOLD.length-1; i >= 0; i--) {
    var pOldTarea = document.createElement('p');
    pOldTarea.setAttribute('class', 'add-homework');
    pOldTarea.textContent = 'Añadir tarea';
    oldContextList = tareaOLD[i].parentNode;
    oldContextList.appendChild(pOldTarea);
    tareaOLD[i].remove();  
    pOldTarea.addEventListener('click', newtareas(oldContextList, pOldTarea));
  };

}
