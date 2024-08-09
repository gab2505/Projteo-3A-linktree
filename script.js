function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("day")

 //pegar a tag da imagem
  const img = document.querySelector("#perfil img")
  //substituir a imagem
  if (html.classList.contains("day")) {

  //se tiver day mode, adicionar imagem light
    img.setAttribute('src','./assets/avatar-preto.png')
  } else{
  //se tiver sem light mode, manter imagem 1"comum"
    img.setAttribute('src','./assets/avatar 1.png')
  }

  }