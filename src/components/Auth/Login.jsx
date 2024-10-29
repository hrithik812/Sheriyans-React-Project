import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <div className='border-2 border-emerald-600 p-20'>
             <form className='flex flex-col items-center justify-center' action="">
                 <input className='text-white outline-none border-2 border-emerald-600 px-5 py-4 text-xl rounded-full bg-transparent placeholder:text-grey-400' type="email" placeholder='Enter your email'/>
                 <input className='text-white outline-none border-2 border-emerald-600 px-5 py-4 mt-3 text-xl rounded-full bg-transparent placeholder:text-grey-400'  type="password" placeholder='Enter your password'/>
                  <button className='w-full mt-5 text-white outline-none border-2 border-none bg-emerald-600 px-5 py-4 mt-3 text-xl rounded-full  placeholder:text-white'>Login</button>
             </form>
        </div> 
    </div>
  )
}

export default Login