// console.log('hello')
let btn = document.querySelector('.fetch-btn');
let root = document.querySelector('#root')

btn.addEventListener('click', fetchData)

async function fetchData(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await res.json();
        console.log(data)
        displayData(data)
    } catch (error) {
        alert('SomeThing Went Wrong')
    }
}

function displayData(data){
    data.forEach((e)=>{
        let box = document.createElement('div');
        box.className = 'box';

        let title = document.createElement('h2');
        title.innerText = e.title;
        title.className = 'title';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = e.completed;
        checkbox.className = 'checkbox';

        box.append(title, checkbox);
        root.append(box) ;  
    })
}