
var items =  localStorage.getItem('itemList')

/*if(items){
    items = items.split(',')
}else{
    items = []
}*/

/* Operador Ternario */
items = items ? items.split(',') : []
showItem()

function addITem() {
    let item = document.getElementById('item').value
    if(item){
        items.push(item)
        items.push(valor)
        showItem()
    }   
}

function showItem() {
    document.getElementById('item').value = ''
    let html = ''
    /*for (let datos of items) {
        html += `<div class="col-sm-10 col-lg-10 col-xl-10 mb-3"> ${datos} </div>`
        
    }*/

    for (let i = 0; i < items.length; i++){

       html += `<div class="col-sm-5 col-lg-5 col-xl-5 mb-3"> ${items[i]} </div>
                <div class="col-sm-5 col-lg-5 col-xl-5 mb-3"> ${items[i+1]} </div>`
               
       html += `<div class="col"> 
                    <a href="#" class="btn btn-danger" onclick="deleteItem(${i})">
                        X
                    </a>
                </div>`
    }
    

    localStorage.setItem('itemList', items)
    document.getElementById('items-list').innerHTML = html
}


function deleteItem(itemPos) {
    items.splice(itemPos, 2)
    showItem() 
}
