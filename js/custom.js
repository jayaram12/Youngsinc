$(document).ready(function(){
  $("#add-to-cart").show();
  $("#update-quantity").hide();
  $(".alert-success").hide();
  $("#add-to-cart").click(function(){
    $("#update-quantity").show();
    $("#add-to-cart").hide();
    $(".alert-success").show();
  });


});
