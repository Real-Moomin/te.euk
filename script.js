$( "li" ).click(function() {
  $( "li" ).removeClass( "selected" );
  $( this ).toggleClass( "selected" );
});
