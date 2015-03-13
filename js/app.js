$(document).ready(function(){

// add by enter and click
	$('#additem').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#submit').click();
		};
	});

// add items to list
	$('#submit').click(function(){
		var txtbox = document.getElementById('additem');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#additem').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="items"></li>').appendTo('#list').html('<img class="add" src="img/add.png"><span>' + txtval + '</span><img class="delete" src="img/delete.png"/>');
		document.getElementById('additem').value = '';
		};
	});

// delete items from list
	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

// cross off items and remove checkmark
	$('#list').on('click', 'li', function(){
		$(this).toggleClass('strike').children('.add').toggleClass('hide');
	});

	$('#list').sortable();
});