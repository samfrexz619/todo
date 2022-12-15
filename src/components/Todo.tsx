import { useState } from 'react';
import '../App.css'
import TodoList from './TodoList';



const Todo = () => {
  const btns: string[] = ['Today', 'Tomorrow', 'Monday']

  const [active, setActive] = useState(btns[0])

  const handleToggle =(type: string)=> {
    setActive(type)
  }
  return ( 
    <section className="bg-pry py-4 rounded-xl fil w-full">
      <div className='w-[88%] mx-auto'>
        <header className="text-sec text-center font-bold">Note</header>
        <div className='text-white flex space-x-6 py-7 justify-center'>
          {
            btns.map(btn => (
              <button 
                key={btn}
                className={active === btn ? 'btn' : ''}
                onClick={()=> handleToggle(btn)}
              >
                {btn}
              </button>
            ))
          }
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </section>
   );
}
 
export default Todo;