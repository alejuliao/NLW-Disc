document.querySelector('#add-time').addEventListener('click', cloneField);


function cloneField() {
  console.log("foi ?");
  //duplicar campos
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  //limpar campos
  const fields = newFieldContainer.querySelectorAll('input')
  fields.forEach(function(field) {
    field.value = '';
  });
  
  //adicionar página
  document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

