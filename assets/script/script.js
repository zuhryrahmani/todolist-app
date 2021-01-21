// signup & signin

let data = [
    {
        name: 'Zuhry Abdi Rahmani',
        email: 'zuhryabdirahmani@gmail.com',
        password: 'zuhry123'
    },
    {
        name: 'Gary Sumarab',
        email: 'garysumarab@gmail.com',
        password: 'gary123'
    },
    {
        name: 'Roofi Ahmad Sidiq',
        email: 'roofiahmadsidiq@gmail.com',
        password: 'roofi123'
    }
]

const signin = () => {

    let email = document.getElementById('signinEmail').value;
    let pass = document.getElementById('signinPass').value;
    let temp = {email: '', password: ''};
    for(let i = 0; i < data.length; i++) {
        if(data[i].email === email && data[i].password === pass) {
            temp.email = data[i].email;
            temp.password = data[i].password;
        }
    }
    if(email === temp.email && pass === temp.password) {
        document.getElementById('form').action = '../task_dashboard/dashboard.html';
    } else {
        alert('Email sama passwordnya jangan ngaco cuy!');
    }
}

const signup = () => {
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let pass = document.getElementById('signupPass').value;
    if(name !== '' && email !== '' && pass !== '') {
        data.push({name: name, email: email, password: pass});
        document.getElementById('form').action = '../task_dashboard/dashboard.html';
    }
}

// signup & signin end




// dashboard

// important popup
const important = (event) => {
    event.target.classList.toggle('important-icon');
}

// checkbox popup
const check = (event) => {
    event.target.classList.toggle('checkbox-icon');
    console.log(event.target);
}

// add task
const task = () => {
    let taskName = document.querySelector('#addTask').value;
    if(taskName !== '') {
        let x = `<div class="content">
                    <div class="content-check">
                        <div class="checkbox">
                            <i class="fas fa-check" onclick="check(event)"></i>
                        </div>
                    </div>
                    <div class="content-name">
                        <p>${taskName}</p>
                    </div>
                    <div class="content-important">
                        <i class="fas fa-star" onclick="important(event)"></i>
                    </div>
                    <div class="content-logos">
                        <i class="fas fa-trash-alt" onclick="remove(event)"></i>
                        <i class="fas fa-pencil-alt" onclick="rename(event)"></i>
                    </div>
                </div>`;
        document.querySelector('#task').innerHTML += x;
    }
}

// remove task
const remove = (event) => {
    event.target.parentElement.parentElement.remove();
}

// rename task
const rename = (event) => {
    if(document.querySelectorAll('.rename').length < 1) {
        let target = event.target.parentElement.parentElement;
        const addNewName = () => {
            target.querySelector('.content-name').innerHTML = `<form class="renameContainer" action="">
                                                            <input class="rename" type="text" placeholder="new task ...">
                                                            <button></button>
                                                        </form>`;
            let rename = document.querySelector('.rename')
            rename.focus();
            document.querySelector('button').addEventListener('click', function(event) {
                if(rename.value !== '') {
                    event.target.parentElement.parentElement.innerHTML = `<p>${rename.value}</p>`
                } else {
                    addNewName();
                }
            })
        }
        addNewName();
    }
}

// dashboard ends