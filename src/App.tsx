import React from 'react';
import logo from './assets/logo.svg'
import './App.css'
import Todo from './components/Todo';

function App() {
  return (
    <main className='bg-pry text-white h-screen w-full'>
      <div className='flex justify-between'>
        <div className='h-screen w-[55%] flex justify-center items-center'>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className='todo w-[45%] h-screen flex flex-col items-center justify-center'>
          <div className='min-w-[500px] mx-auto'>
            <Todo />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
