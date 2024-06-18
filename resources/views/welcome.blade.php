<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-[100vh]">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
         @vite('resources/css/app.css')
    </head>
    <body class="h-[100vh] bg-gray-100">
        <div id="app" class="min-h-full"></div>
        @vite('resources/js/app.js')
    </body>
</html>
