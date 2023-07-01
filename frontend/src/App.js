import { Outlet } from 'react-router-dom';
import Header from './component/header.js';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

function App() {
  //fetch products
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`$process.env.REACT_APP_SERVER_DOMAIN`)
      const resData = await res.json()
      console.log(resData)
    })()
  },[])
  return (
    <>
     <Toaster />
    <div className = ''>
      <Header/>
      <main className='pt-14 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
        </main>
    </div>
    </>
  );
}

export default App;
