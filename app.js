



const input = document.getElementById('inp')
const ul = document.getElementById('ul1')
const button = document.getElementById('b1')

ul1.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
        } 
        
    }
  
)

function saveData(){
    localStorage.setItem('data', ul.innerHTML)
}
function showTask(){
    ul.innerHTML = localStorage.getItem('data')
}
showTask();

const addTask= ()=>{
    let inputValue = input.value.trim()
    if(inputValue !== ''){
        const li = document.createElement('li')
        li.innerHTML= inputValue
        ul.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML= "\u00d7" // \u00d7 code of cross icon
        li.appendChild(span)
        input.value = ''
        saveData();
    }
    
}


button.addEventListener('click',addTask)




