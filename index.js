<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>The Factorial by for loop</title>
        <style>
            body {
                background-color: #000000; 
                color: #00FF00;
            }
        </style>
    </head>
    <body>
        <script type="text/javascript">
            var x = prompt("Enter the number max. 170 to count the factorial");
            var n = parseInt(x);
            var factorial = 1;
            for (var i = 1; i <= n; i++){
            factorial*=i;
            if( i == n) {
                document.write("The factorial for "+ n + " is: " + factorial + ".");
            }
        }
        </script>
    </body>
</html>