<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <title>Raven</title>
</head>
<body>
    <div class="container">
        <div class="login">
            <h3>Login</h3>
            <form method="post" id="formulario">
                <label>Email:</label>
                <input type="text" id="usuario" name="usuario" placeholder="usuario" required="true" minlength="4" maxlength="30" />
                <label>Password:</label>
                <input type="password" id="password" name="password" placeholder="contrasenia" required="true" minlength="4" maxlength="30" />
                <button type="submit">Iniciar sesión</button>
            </form>
            <div id="alert"></div>
        </div>
    </div>

    <script src="./js/app.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
</body>
</html>