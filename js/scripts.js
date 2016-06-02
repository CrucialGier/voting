$(document).ready(function(){
  $("button#register").click(function(){
    $("form").show();
  });

  $("#age").change(function() {
    var dob = parseInt($("#age").val());

    if (dob === 1) {
      $("h3").show();
      $(".old").hide();
      $(".young").show();
    } else {
      $("h3").show();
      $(".young").hide();
      $(".old").show();
    };
  });

});
