//pegar botão
document.querySelector('#add-time')
    .addEventListener('click', cloneField) // quando o botão for clicado

//ação
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //vai pegar o elemento e todos os seus filhos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value="" //resetar os campos
    })
        
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

//pegar lixeira
document.querySelector('#delete-time')
    .addEventListener('click', removeField) // quando o botão for clicado, ele vai remover um campo

function removeField(){
    const fieldContainer = document.querySelector('.schedule-item') //vai pegar o elemento e todos os seus filhos

    
    
    document.querySelector("#schedule-items").removeChild(fieldContainer)
}