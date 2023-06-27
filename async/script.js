

//Primera Promesa

function iamAsinc(){
    return "hola promesa"
}

let message = iamAsinc()

console.log(message)


const eventoFuturo = (res)=> {

    return new Promise((resolve, reject) => {

        res===true ? resolve("respuesta aceptada") : reject("respuesta rechazada")

    })
}


// console.log(eventoFuturo())

eventoFuturo(false)
    .then((respuesta) =>{

        console.log(respuesta)
    })

    .catch((respuesta)=>{

        console.log(respuesta)
    })

    .finally(()=>{
        console.log("finalizo el proceso...")
    })




    const baseDatos = [
        {
            id: 1,
            nombre: "producto1",
            marca: "dia"
        },
        {
            id: 2,
            nombre: "producto1",
            marca: "dia"
        },
        {
            id: 3,
            nombre: "producto1",
            marca: "dia"
        },

    ]

    console.log(baseDatos.id)//....urlParametros
    //especificar algo en particular... nombres==producto1...


    /*


    Todo un elemento
    https://pokeapi.co/api/v2/pokemon/1
    todo el elemento......




    query(consultas) params
    https://pokeapi.co/api/v2/pokemon/1?nombre=picachy&color=amarillo&limit=5



    */


    const pedirProductos = ()=>{

        return new Promise((resolve,reject)=>{

            resolve(baseDatos)

        })

    }

    let productosCarrito = []

    let lista = document.getElementById("contenedor")


    function mostrarProductos(array){

        array.forEach(item => {
            const span = document.createElement('span')

            span.textContent = `${item.id} y ${item.nombre} `

            lista.append(span)

        });

    }

    pedirProductos()
        .then((res)=>{
            productosCarrito = res
            mostrarProductos(productosCarrito)
        })



        //

        // console.log('https://jsonplaceholder.typicode.com/posts')

        console.log( fetch('https://jsonplaceholder.typicode.com/posts') )




        fetch('https://jsonplaceholder.typicode.com/posts')
            .then( (resp) => console.log(resp) )


    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log(data)
    })


    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log( data[0].title )
        console.log( data[0].body )
        console.log(data[0].userId)

        //si quiero imprimir todos por console.log

    }


    )



    //enviando datos

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Coderhouse',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))



    //usando Json con fecht.. Ruta Relativa

    const lista2 = document.getElementById('lista2')

    console.log(lista2)

fetch('data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
   
            lista2.append(li)
        })
    })



//Async

let listaAsync = document.getElementById("listaAsync")
    const pedirPosts = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json()
       
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <h2>prueba</h2>
                <p>${post.body}</p>
            `
            listaAsync.append(li)
        })
    }
    
    pedirPosts()



    //pokeApi

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })



    const  fechtApi= async ()=>{

    try{
    const pokeApi = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await pokeApi.json()
    console.log(data)
    }catch{
        console.log(err)
    }finally{
        console.log("termino")
    }


    }


    fechtApi()