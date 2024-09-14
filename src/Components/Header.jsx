import React, { useContext } from 'react'
import useTheme from '../Context/ThemeContext'

const Header = () => {
    const {themeMode,lightTheme,darkTheme}=useTheme()

    const onChangeBtn=(e)=>{
        const darkModeStatus=e.target.checked
        if(darkModeStatus){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }
  return (
    <>
    <div className='w-full h-20 px-10 py-6 flex justify-between'>
        <h1 className='text-2xl font-bold dark:text-white'>Task Management System</h1>
        <div className='flex gap-6 items-center'>
            <div>
                <label className='inline-flex items-center cursor-pointer'>
                <span className='me-3 text-sm font-medium dark:text-white'>Light</span>
                <input onChange={onChangeBtn} type="checkbox" className='sr-only peer' checked={themeMode==='dark'}/>
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className='ms-3 text-sm font-medium dark:text-white'>Dark</span>
                </label>
            </div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
            </div>
        </div>
    </div>
    <div className='bg-gray-300 w-full h-1 dark:bg-slate-700'></div>
    
    </>
  )
}

export default Header