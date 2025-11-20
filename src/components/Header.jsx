import Logo from '/Demon slayer/img/Logo.png'
const Header = () => {
  return (
    <div className='backdrop-blur-sm text-white h-20 flex items-center p-10 fixed top-0 left-0 w-full z-50 
                   
                   shadow-xl transition-shadow duration-300'>
    <img src = {Logo} className='h-20' ></img>
    <div className='flex w-full justify-center gap-10 text-lg text-black cursor-pointer font-medium'>
     
    </div>
    </div>
  )
}

export default Header