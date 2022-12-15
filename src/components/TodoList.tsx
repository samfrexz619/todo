import { useReducer } from "react";
import { formatDate, Todos, initialTodos } from "../utils"


const reducer =(state: Todos[], action: any)=> {
  switch(action.type) {
    case "COMPLETED" :
      return state.map((todo)=> {
        if(todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo
        }
      })
    case 'DELETE_TASK' :
      return state.filter((todo)=> todo.id !== action.id)
    default: 
    return state;
  }
}

const TodoList = () => {

  const [todos, dispatch] = useReducer(reducer, initialTodos)

  
  const handleCompleted =(id: number)=> {
    dispatch({type: "COMPLETED", id})
  }

  const handleDelete =(id: number)=> {
    dispatch({type: "DELETE_TASK", id})
  }

  return ( 
    <main className="w-full">
      <div>
        <form className="">
          <div className="w-full p-3 add-todo rounded-md">
            <input type="text" placeholder="Add item" className="w-full" />
          </div>
        </form>
        {
          todos.map((todo)=> (
            <div key={todo.id} className={`bg-gray-300 text-black rounded-md shadow-xl p-4 mb-2 flex h-auto items-center space-x-2 justify-between ${todo.completed ? 'line-through' : null}`}>
              <div className="flex-none pr-9">
                <input 
                  type="checkbox"
                  checked={todo.completed}
                  onChange={()=> handleCompleted(todo.id)}
                />
              </div>
              <div className="flex-1">
                <p id="task">{todo.task}</p>
                <p className="text-[#77ACD5] italic">{formatDate(todo.date)}</p>
              </div>
              <div className="flex-none">
              <i onClick={()=> handleDelete(todo.id)} className="fa-sharp fa-solid fa-trash cursor-pointer"></i>
              </div>
            </div>
          ))
        }
      </div>
    </main>
   );
}
 
export default TodoList;