import Logo from "./media/two.png";
const Navbar= () => {
    return (
      // nav start
       <nav className="nav-bar    justify-evenly bg-black flex text-white p-1 items-center font-bold   ">
        <div>
          {/* left */}
          <img src={Logo} className="i-size" alt="img" />
        </div>
        {/* right */}
         <ul className="flex flex-row gap-10 align-center items-center "  >
           <li className="flex-auto"><a href="/">Premium</a></li>
           <li className="flex-auto"><a href="/about">Support</a></li>
           <li className="flex-auto"><a href="/contact">Download</a></li>
           {/* border left */}
             <span className="border-r-2 rbo"></span>

             <li className="flex-auto"><a href="/">Sign up</a></li>
           <li className="flex-auto"><a href="/about">Login</a></li>
         </ul>
       
          <ul className="flex flex-row gap-5  "  >
           
         </ul>
       </nav>
   );
 }


 export default Navbar