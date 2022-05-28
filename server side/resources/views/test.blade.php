@extends('layouts.master')

@section('content')
    <p id="power">0</p>
@stop

@section('footer')
<script src="http://127.0.0.1:3000/socket.io/socket.io.js"></script>    <script>
        //var socket = io('http://localhost:3000');
        var socket = io('http://127.0.0.1:3000');
        socket.on("room-1:App\\Events\\MessageSent", function(message){
            // increase the power everytime we load test route

            $('#power').text(parseInt($('#power').text()) + parseInt(message));
        });
    </script>
      <script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
@stop

