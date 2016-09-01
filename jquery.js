
$(document).ready(function() {
    $('#add').click(function(){
    	$('#add').remove(); 
		$('#remove').show(); 
	}); 

	$('#remove').click(function(){
		$('#remove').hide(); 
		$('#add').show()
	}); 
});