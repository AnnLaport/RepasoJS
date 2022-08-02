window.addEventListener('load', ()=>{
    let envio=document.getElementById('formulario');
    let usuario= document.getElementById('usuario');
    let password=document.getElementById('password');
    let alert=document.getElementById('alert');

    function data(){
        let datos=new FormData();
        datos.append("usuario", usuario.value);
        datos.append("password", password.value);
        fetch('http://localhost:8012/xampp/RepasoJS1/BackEnd/validarlogin.php',{
            method: 'POST',
            body: datos
        }).then(response => response.json())
        .then((success)=>{
            if(success.success==1){
                location.href='./pages/home.php';
            }else{
                alerta();
            }
        });
    }

    function alerta(){

        alert.innerHTML=
        `
            <div role="alert" style="text-align: center;">
                <strong style="color:red;">Datos incorrectos</strong>
            </div>
        `
    }


    envio.addEventListener('submit', (e)=>{
        e.preventDefault();

        data();
    })
})