<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome</title>
</head>
<body>
    @php
     $name = "Suleman Kashif";
     
    @endphp
    {{$name}}

    @php
    $fruits = ['Mango', 'Grapes', 'Orange', 'Banana', 'Apple'];
    $student = ['name' => 'Affan', 'age' => 19, 'email' => 'affan@gmail.com'];
@endphp

<ol>
    @foreach ($student as $key => $std)
        <li> {{$key}} - {{ $std }}</li>
    @endforeach
</ol>


</body>
</html>