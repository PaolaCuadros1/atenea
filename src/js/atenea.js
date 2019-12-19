$(function () {
  var sesion = localStorage.getItem("logged")
    if (sesion === "User") {
      logged();
    }else if (sesion === "Admin") {
      printMenuAdmin();
    }
})


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

function logged() {
  $('.notLoggedIn').hide();
  $('.logged').show();
  $('.redes').hide();
  localStorage.setItem("logged", "User");
}

function cerrarSesion() {
  $('.notLoggedIn').show();
  $('.logged').hide();
  localStorage.removeItem('sesion');
  localStorage.clear();
  $('.redes').show();
  localStorage.removeItem("logged");
}

function play(e) {
  e.preventDefault();
  document.getElementById('sipnosis-movie').style.display = 'none';

  const video = document.getElementById('movie');
  if (video && video.src) {
    video.src += '?autoplay=1';
  }
}

function printMenuAdmin() {
  $('.adminLoged').show();
  $('.notLoggedIn').hide();
  $('.logged').hide();
  $('.linkLogingAdmin').hide();
  localStorage.setItem("logged", "Admin");
}

function cerrarSesionAdmin() {
  $('.adminLoged').hide();
  $('.notLoggedIn').show();
  //$('.logged').show();
  $('.linkLogingAdmin').show();
  localStorage.removeItem("logged");
}

function addRemoveFavorite(){
  if ($( "#favorite" ).hasClass( "far" )){
    $('#favorite').removeClass('far');
    $('#favorite').addClass('fas');
  }else{
    $('#favorite').removeClass('fas');
    $('#favorite').addClass('far');
  }
  
}