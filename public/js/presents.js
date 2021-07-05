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