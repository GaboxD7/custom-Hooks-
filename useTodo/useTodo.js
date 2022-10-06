import {useReducer, useEffect} from 'react';
import { todoReducer  } from '../08-useReducer/todoReducer.js'



export const useTodo = () => {

    const initialState = [

    ]
    
    const init = () => {
      return JSON.parse(localStorage.getItem('todos') || [])
    }
    const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
  
    localStorage.setItem('todos', JSON.stringify( todos ));
      console.log(todos)
      
      }, [todos])

      

        const handleNewTodo = ( todo ) => {
            const action = {
            type:'[TODO] Add Todo',
            payload: todo
            }
        
        dispatchTodos(action)

        }
        const handleDeleteTodo = ( id ) => {
            const action = {
                type:'[TODO] Remove Todo',
                payload: id
            }

        dispatchTodos(action)

        }
        const onTogleTodo = ( id ) => {
            const action = {
                type:'[TODO] Toggle Todo',
                payload: id
            }

        dispatchTodos(action)

        }

   const todosCount =  todos.length;
   const pendingTodosCount = todos.filter(todo => todo.done == false).length


    return {
        handleNewTodo,
        handleDeleteTodo,
        onTogleTodo,
        todos,
        todosCount,
        pendingTodosCount
   

    }
}