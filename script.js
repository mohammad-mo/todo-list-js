const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todoList')
const filterOption = document.querySelector('.filter-todos')

const markup = () =>
{
    if(todoInput.value === '' || /^\s*$/.test(todoInput.value))
    {
        return
    }
    else
    {
        return `
            <li>${todoInput.value}</li>
            <span><i class='far fa-trash-alt'></i></span>
            <span><i class='far fa-check-square'></i></span>
        `
    }
}

const addTodo = () => 
{
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    todoDiv.insertAdjacentHTML('afterbegin', markup())
    
    if (markup()) todoList.appendChild(todoDiv)
    todoInput.value = ''
}

const checkRemoveOrComplete = (e) => 
{
    const classList = [...e.target.classList]
    const item = e.target
    const parentEl = item.parentElement.parentElement

    // console.log(classList)
    // console.log(item)

    if (classList[1] === 'fa-trash-alt')
    {
        parentEl.remove()
    }
    else if (classList[1] === 'fa-check-square')
    {
        parentEl.classList.toggle('completed')
    }
}

const filterTodos = (e) => 
{
    // console.log(e.target.value)
    const todos = [...todoList.childNodes]
	// console.log(todos)

    todos.forEach((todo) =>
    {
        switch (e.target.value) 
        {
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                if (todo.classList.contains('completed'))
                {
                    todo.style.display = 'flex'
                }
                else
                {
                    todo.style.display = 'none'
                }
                break;
            case 'active':
                if (!todo.classList.contains('completed'))
                {
                    todo.style.display = 'flex'
                }
                else
                {
                    todo.style.display = 'none'
                }
                break
        }
    })
}


// listener
todoButton.addEventListener('click', addTodo)
todoInput.addEventListener('keyup', (event) =>
{
    if (event.key === 'Enter')
    {
        addTodo()
    }
})
todoList.addEventListener('click', checkRemoveOrComplete)
filterOption.addEventListener('click', filterTodos)