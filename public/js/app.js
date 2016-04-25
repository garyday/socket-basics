var socket = io();

socket.on('connect', function(){
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message){
	
	var timestampMoment = moment.utc(message.timestamp);

	console.log('New message:');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>' + timestampMoment.local().format('h:mma') + ': </strong>' + message.text + '</p>');
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event){
	event.preventDefault();

	var $message = $form.find('input[name=message]')

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
});