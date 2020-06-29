class Producto {
    constructor(name,price,year){
        this.name = name
        this.price = price
        this.year = year
    }
}

class UI {
    addProduct(producto){
        const productList = document.getElementById('product-list')

        const element= document.createElement('div')
        element.innerHTML = `
            <div class='card text-center mb-4'>
                <div class='card-body'>
                    <strong>Nombre del producto</strong>: ${producto.name}
                    <strong>Precio del producto</strong>: ${producto.price}
                    <strong>Año del producto</strong>: ${producto.year}
                    <a href='#' class='btn btn-danger' id='delete'>Borrar</a>
                </div>
            </div>
        `
        productList.appendChild(element)
    }

    //Resetear formulario
    resetForm(){
        document.getElementById('product-form').reset()
    }

    deleteProduct(element){
        if(element.id ==='delete'){
            element.parentElement.parentElement.remove();
            this.showMessage('Producto Eliminado','danger')
        }
    }
    showMessage(message, cssClass){
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass} mt-2`
        div.appendChild(document.createTextNode(message))

        const container = document.querySelector('.container')
        const app = document.querySelector('#App')
        container.insertBefore(div, app)

        setTimeout(function(){
            div.remove()
        },5000)
    }
}

//Eventos
document.getElementById('product-form').addEventListener('submit', submitLog)

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI
    ui.deleteProduct(e.target)
})


function submitLog(e) {
        e.preventDefault()
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const year = document.getElementById('year').value
    
        const producto = new Producto(name, price, year)
        const ui = new UI()
        
        if(name === '' ||price === ''|| year === ''){
            ui.showMessage('Completa el formulario','danger')
        }else{
            ui.addProduct(producto)
            ui.resetForm()
            ui.showMessage('Valor cargado exitosamente', 'success')
        }
        
}
