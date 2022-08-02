<?php
    include('./conexion.php');

    if(isset($_POST['usuario']) && !empty($_POST['usuario'])){

        $usuario=$_POST['usuario'];
        $password=$_POST['password'];
        $query= "SELECT * FROM datos WHERE nombre='$usuario' AND password='$password'";
        $result= mysqli_query($conexion,$query);
        
        if(mysqli_num_rows($result)>0){
            echo json_encode(array("success"=>1));
        }else{
            echo json_encode(array("success"=>0));
        }
    }
?>