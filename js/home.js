console.log('hola desde javascript');


const serabutton = (num) => {
  console.log("apretaste el boton de sera");

  
  const divimgs = document.querySelector(".mcfragment");

  if(num==1){
    divimgs.style.backgroundColor="rgb(255, 224, 229)";
    divimgs.innerHTML = `
        <div class="imagenes">
                <img src="../assets/Seraphine_0.jpg" alt="seraphinelol" />
            </div>
            <div class="imagenes1">
                <div class="imgmedio">
                    <img src="../assets/seraphine_3.avif" alt="seraphinelol" />
                </div>
                <div class="imgmedio1">
                    <div class="imgmedio2">
                        <img src="../assets/Seraphine_1.jpg" alt="seraphinelol" />
                    </div>
                    <div class="imgmedio2">
                        <img src="../assets/seraphine_2.jpg" alt="seraphinelol" />
                    </div>
                </div>
            </div>
            <div class="imagenes">
                <img src="../assets/Seraphine_4.jpg" alt="seraphinelol" />
        </div>
    `;
  }else{
    divimgs.style.backgroundColor="rgb(39, 70, 38)";
    divimgs.innerHTML = `
        <div class="imagenes">
                <img src="../assets/Senna_0.jpg" alt="sennalol" />
            </div>
            <div class="imagenes1">
                <div class="imgmedio">
                    <img src="../assets/Senna_1.jpg" alt="sennalol" />
                </div>
                <div class="imgmedio1">
                    <div class="imgmedio2">
                        <img src="../assets/Senna_2.jpg" alt="sennalol" />
                    </div>
                    <div class="imgmedio2">
                        <img src="../assets/Senna_3.jpg" alt="sennalol" />
                    </div>
                </div>
            </div>
            <div class="imagenes">
                <img src="../assets/Senna_4.jpg" alt="sennalol" />
        </div>
    `;
  }
};