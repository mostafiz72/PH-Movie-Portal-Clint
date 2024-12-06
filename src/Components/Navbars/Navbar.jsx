import React, { useContext } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { MdLogout } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Navbar() {

  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = ()=>{
    signOutUser()
    toast.info("logout completed")
    
  }

  return (
    <>
       <div className={`bg-gray-200 font-semibold absolute top-0 -left-80 min-h-screen duration-200 w-80 z-50 p-4 `}> {/*${show && "left-[0px]" } ${!show?"-left-80": ""}*/}
        <button className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-gray-800 text-2xl hover:text-red-600'><IoMdClose /></button>
          <nav>
          <ul className=' flex flex-col items-start gap-5 mt-5'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/camping">Camping</NavLink></li>
                <li><NavLink to="/bungeejumping">Bungee Jumping</NavLink></li>
                { <li><NavLink to="/Profile">Profile</NavLink></li> }
                { <li><NavLink to="/updata">Updata Profile</NavLink></li>}
            </ul>
          </nav>
        </div>

        {/* responsive site navbar end here now */}

          <nav className=' flex justify-between items-center text-lg font-semibold w-11/12 md:container mx-auto py-5'>
        <button className=' font-bold text-2xl cursor-pointer md:hidden'><FaBarsStaggered /></button> 
        <Link to="/" className=' font-bold text-xl md:text-2xl cursor-pointer hidden md:block'>Movie Portal</Link> 
        {/* ekhane bola hoyse jodi user er mordhe kicu thake ta hole tumi amake tar nam ta show koro na hole error deyo na */}
        <div className=' hidden lg:block'>
            <ul className=' flex items-center gap-8'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/allmovives">All Movies</NavLink></li>
                <li><NavLink to="/addmovies">Add Movie</NavLink></li>
                {<li><NavLink to="/favoritesmovies">My Favorites</NavLink></li>}
                {<li><NavLink to="/extraone">Extra section one</NavLink></li>}
                {<li><NavLink to="/extratwo">Extra section two</NavLink></li>}
            </ul>
        </div>
        <div className=' flex items-center gap-5'>
            <div className=' cursor-pointer'>
                <div>
                  {/* {<img className=' w-10 h-10 rounded-full object-cover' src='' alt="" />} */}
                </div>
              {/* {user && user.email? <img className=' w-10 h-10 rounded-full' src={user.photoURL} alt="" /> : <img src={profileLogo} alt="" />}  */}
            </div>
            <div>
                  {user && user.email?<img title={user.displayName} className=' cursor-pointer w-10 h-10 rounded-full object-cover' src={user.photoURL} alt="" /> : <span className=' text-4xl'><FaRegUserCircle /></span>}
            </div>
            {
              user && user.email?
              <button onClick={handleSignOut} className=' btn btn-error cursor-pointer'><MdLogout />Log-Out</button>
              :
              <div className=' flex justify-center items-center gap-3'>
                 <div><Link to="/login" className=' btn btn-accent cursor-pointer'>Login</Link></div>
                 <div><Link to="/register" className=' btn btn-success cursor-pointer text-white'>Register</Link></div>
                 </div>
                 }
                 {/* <div><Link to="/login" className=' btn btn-info cursor-pointer text-white'>Log-In</Link></div>
                 <div><Link to="/register" className=' btn btn-primary cursor-pointer text-white'>Register</Link></div> */}
        </div>
      </nav>
    </>
  )
}
