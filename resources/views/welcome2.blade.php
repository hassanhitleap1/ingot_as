<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{env('APP_NAME')}}</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">


</head>
<body class="hold-transition sidebar-mini layout-fixed">

<div class="wrapper">
    <div id="app">
    </div>
</div>
<script src="{{ mix('js/app.js') }}"></script>

</body>
</html>
