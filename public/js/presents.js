const http = axios.create({
  baseURL: 'http://localhost:8000'
});


// DELETE
// Localizar los botones
const buttons = document.querySelectorAll('.btn-delete-present')
// Iterar por los botones para dejarlos onclick
buttons.forEach((button) => {
  button.onclick = () => {
    http.delete(`/presents/${button.value}`)
      .then(() => {
        // Coger al parent element del botón para borrar el nodo
        button.parentElement.remove()
      })
      .catch(e => console.error(e))
  }
})

// PATCH
// Localizar los botones para activar/desactivar
const buttonsActivate = document.querySelectorAll('.btn-activate-present')
// Iterar por los botones para dejarlos onclick
buttonsActivate.forEach((button) => {
  button.onclick = () => {
    const activate = button.value === 'activate';
    http.patch(`/presents/${button.id}`, {
      active: activate
    })
    .then(() => {
      // Cambiar la clase, el texto y el valor del botón
      button.classList.toggle('btn-secondary');
      button.classList.toggle('btn-warning');

      const activateText = 'Activate present';
      const disableText = 'Disable present';
      button.textContent = activate ? disableText : activateText

      button.value = activate ? 'disable' : activate

      // Si está activo o no el feedback
      button.parentElement.querySelector('.operating-feedback').classList.toggle('d-none')
    })
    .catch(e => console.error(e))
  }
})