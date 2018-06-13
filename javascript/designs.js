function clearGrid(){
  // TODO: Erases an existing grid.
  $('tr').remove();
  $('#right_plane').css('display', 'none');
}

function makeGrid() {
// TODO: Dynamically inserts a grid with
//       user specified dimensions.
  const height = $('#inputHeight').val();
  const width = $('#inputWeight').val();
  for(var i = 0; i < height; i++){
    $('#pixelCanvas').append('<tr></tr>');
    for(var k = 0; k < width; k++){
      let row = $('tr')[i];
      $(row).append('<td></td>');
    }
  }
  $('#right_plane').fadeIn(1500);
  $('#pixelCanvas').fadeIn(1700);
  $('#left_plane').css('margin-left', '2em');
}

$('#sizePicker').submit(function(e){
  // When users submit the form makeGrid is called.
  // But the page will not refresh.
  e.preventDefault();
  clearGrid();
  makeGrid();
});

let color = $('#colorPicker').val();
$('#colorPicker').on('change', function(){
  color = $('#colorPicker').val();
})

$('#pixelCanvas').on("click", function(e){
  $(e.target).css('background-color', color);
});
