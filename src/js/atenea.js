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
}

function cerrarSesion(){
  $('.notLoggedIn').show();
  $('.logged').hide();
  localStorage.removeItem('sesion');
  localStorage.clear();
}