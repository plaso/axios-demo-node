const http = axios.create({
  baseURL: 'http://localhost:8000'
});

// Localizar los botones

const buttons = document.querySelectorAll('.btn-delete-city')

// Iterar por estos botones y ponerles su onclick

buttons.forEach((button) => {
  button.onclick = () => {
    http.delete(`/cities/${button.value}`)
      .then(() => {
        button.parentElement.parentElement.parentElement.remove()
      })
      .catch(e => console.error(e))
  }
})

const buttonsActivate = document.querySelectorAll('.btn-activate-city')

buttonsActivate.forEach((button) => {
  button.onclick = () => {
    const activate = button.value === 'activate';

    http.patch(`/cities/${button.id}`, {
      active: activate
    })
      .then(() => {
        // cambiar la clase del botón

        ["btn-secondary", "btn-warning"]

        button.classList.toggle("btn-secondary");
        button.classList.toggle("btn-warning");

        const activateText = "Activate city"
        const disableText = "Disable city"
        button.textContent = activate ? disableText : activateText

        button.value = activate ? "disable" : "activate"


        // mostrar o ocultar feedback

        button.parentElement.querySelector(".operating-feedback").classList.toggle("d-none")
      })
      .catch(e => console.error(e))
  }
})