window.addEventListener('load', e=>{
    
    if (localStorage.getItem('task') !== null) {
        print()  
    }
    else {
        let temp = [{nombre:"",
            check : ""}]
        localStorage.setItem('task', JSON.stringify(temp))
      }
    
    let epico = document.querySelector('#load')
    epico.addEventListener('click', e =>{
        cargar()
    })
    // SUBIR DATOS
    function cargar() {
        let newTask = document.querySelector('#inputTask').value;
        let input = document.querySelector('#inputTask')
        input.value = ""
        if(newTask.trim() != ""){
            memoria(newTask)
        }else{
            console.log("rellenar formulario")
        }
    }
    // Locale storage sumar datos
    function memoria(x) {
        let NEWtask = {nombre:x,
                        check : "o"}
        let listado = JSON.parse(localStorage.getItem('task'))
        listado.push(NEWtask)
        localStorage.setItem('task', JSON.stringify(listado))
        
        print()
        }
        
    // Imprimir datos
    

    function print() {
        let number = 0;
        let x = JSON.parse(localStorage.getItem('task'));
        document.getElementById('listado').innerHTML = '';

        for (let i = 1; i < x.length; i++) {
            if (x[i].check === "o") {
                document.getElementById('listado').innerHTML += `<div class="task">
                    <div class="taskName"><button class="check" value="${i}"></button><p>${x[i].nombre}</p></div> <button class="deleted" value="${i}">Borrar</button>
                </div>`;
            } else if (x[i].check === "x") {
                document.getElementById('listado').innerHTML += `<div class="task">
                    <div class="taskName hecho"><button class="check check-hecho " value="${i}"><img src="./check.svg"></button><p>${x[i].nombre}</p></div> <button class="deleted" value="${i}">Borrar</button>
                </div>`;
                number ++;
            }
        }
        document.getElementById('cantidad').innerHTML = `${number}/${x.length-1}`
        // CHECKS
        let boxes = document.querySelectorAll('.check');

        boxes.forEach(box => {
        box.addEventListener('click', function () {
            let x = parseFloat(this.getAttribute('value'));
            let listado = JSON.parse(localStorage.getItem('task'));

            if (listado[x].check === "x") {
                listado[x].check = "o";
            } else if (listado[x].check === "o") {
                listado[x].check = "x";
            }

            localStorage.setItem('task', JSON.stringify(listado));
             print()
        });
    });
    borrar()
    }   

    function borrar(){
        ///BORRAR
let deleted = document.querySelectorAll('.deleted');
deleted.forEach(lol => {
    
    lol.addEventListener('click', function () {
        let x = parseFloat(this.getAttribute('value'));
        let listado = JSON.parse(localStorage.getItem('task'));

        listado.splice(x,1)
        localStorage.setItem('task', JSON.stringify(listado));
         print()
    });        
});
    }

    
})

