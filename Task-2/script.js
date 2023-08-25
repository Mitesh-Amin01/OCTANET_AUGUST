const btn = document.getElementById('btn')
let tesk_arr=[]
let Deadline_arr=[]
let Priority_arr = []
let Label_arr = []
btn.addEventListener('click',(e)=>{
    const tesk = document.getElementById('task').value
    const Deadline =document.getElementById('Deadline').value
    const Priority = document.getElementById('Priority').value
    const Label =document.getElementById('Label').value
    e.preventDefault()
    tesk_arr.push(tesk)
    Deadline_arr.push(Deadline)
    Priority_arr.push(Priority)
    Label_arr.push(Label)


    localStorage.setItem("Task",JSON.stringify(tesk_arr))
    localStorage.setItem("Deadline",JSON.stringify(Deadline_arr))
    localStorage.setItem('Priority',JSON.stringify(Priority_arr))
    localStorage.setItem('Label',JSON.stringify(Label_arr))
    
    document.getElementById('1').innerHTML=""
    let storedBlogs = JSON.parse(localStorage.getItem('Task'));
    storedBlogs.forEach(element => {
        let t1 = document.getElementById('1')
        let b=document.createElement('h4')
        let text = document.createTextNode(element)
        b.appendChild(text)
        t1.appendChild(b)
    });
    document.getElementById('2').innerHTML=""
    let dead = JSON.parse(localStorage.getItem('Deadline'));
    dead.forEach(element => {
        let t1 = document.getElementById('2')
        let b=document.createElement('h4')
        let text = document.createTextNode(element)
        b.appendChild(text)
        t1.appendChild(b)
    });
    document.getElementById('3').innerHTML=""
    let Priority_value = JSON.parse(localStorage.getItem('Priority'));
    Priority_value.forEach(element => {
        let t1 = document.getElementById('3')
        let b=document.createElement('h4')
        let text = document.createTextNode(element)
        b.appendChild(text)
        t1.appendChild(b)
    });
    document.getElementById('4').innerHTML=""
    let Label_value = JSON.parse(localStorage.getItem('Label'));
    Label_value.forEach(element => {
        let t1 = document.getElementById('4')
        let b=document.createElement('h4')
        let text = document.createTextNode(element)
        b.appendChild(text)
        t1.appendChild(b)
    });
})