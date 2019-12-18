function validateEmptyData() {

  if ($('#nombre').val() == '' || $('#apellido').val() == '' || $('#correo').val() == '' || $('#contrasena').val() == '') {
    $('.error').show();
    $('.msg').text(' Debes llenar todos los campos!');
  } else {
    //
    console.log($('input[name=generos]:checked').length)
    if ($('input[name=generos]:checked').length > 0) {
      $('#saveData').attr('type', 'submit');
      $('.error').hide();
    } else {
      $('.error').show();
      $('.msg').text(' Selecciona un genero favorito, por favor!');
    }
  }

}

function logged(){
  $('.notLoggedIn').hide();
  $('.logged').show();
   $('.redes').hide();
  //  $('.redes2').show();
}

function cerrarSesion(){
  $('.notLoggedIn').show();
  $('.logged').hide();
  localStorage.removeItem('sesion');
  localStorage.clear();
   $('.redes').show();
}

function play(e) {
  e.preventDefault();
  document.getElementById('sipnosis-movie').style.display = 'none';

  const video = document.getElementById('movie');
  if (video && video.src) {
    video.src += '?autoplay=1';
  }
}