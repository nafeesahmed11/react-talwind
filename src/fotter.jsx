import Fimg from "./media/foot.png";

const Footer =()=>{
    return(
     <footer className="bg-black text-white p-10 text-lg ">

            {/*top parent-start */}
            <div className="flex justify-between pb-10">

        {/* cont-one */}
            <div className="h-50 w-60 ">
                <img src={Fimg} alt="img" className="h-15" />
                </div>
            
        {/* cont-two */}
            
            <div className="h-50 w-40 ">
                <h4 className="text-zinc-500 font-bold text-xl">Company</h4>

                <h4 className="hover:text-green-400"><a href="#">About</a></h4>
                <h4 className="hover:text-green-400"><a href="#">Jobs</a></h4>
                <h4 className="hover:text-green-400"><a href="#">For the Record</a> </h4>
                </div>

        {/* cont-three */}
            
            <div className="h-50 w-40">
                <h4 className="text-zinc-500 font-bold text-xl">Communities</h4>

                <h4 className="hover:text-green-400"> <a href="#">For Artists</a></h4>
                <h4 className="hover:text-green-400"> <a href="#">Developers</a></h4>
                <h4 className="hover:text-green-400"> <a href="#">Advertising</a></h4>
                <h4 className="hover:text-green-400"><a href="#">Investors</a></h4>
                <h4 className="hover:text-green-400"><a href="#">Vendors</a></h4>
                </div>
        {/* cont-four */}
        <div className="h-50 w-40 be  px-1">
                <h4 className="text-zinc-500 font-bold text-xl">Useful links</h4>

                <h4 className="hover:text-green-400"><a href="#">Support</a></h4>
                <h4 className="hover:text-green-400"> <a href="#"> Web Player</a></h4>
                <h4 className="hover:text-green-400"><a href="#"> Free Mobile App</a></h4>
                <h4 className="hover:text-green-400"><a href="#"> Import your music</a></h4>
                </div>

             {/* cont-four */}


            {/*top parent-end */}    
                    
              <div className="h-50  w-40">
                <h4 className="text-zinc-500 font-bold text-xl">Communities</h4>

                  
                <h4 className="hover:text-green-400"><a href="">Support</a></h4>
                <h4 className="hover:text-green-400"><a href="">Web Player</a></h4>
                <h4 className="hover:text-green-400"><a href="">Free Mobile App</a></h4>
                <h4 className="hover:text-green-400"><a href="">Import your music</a></h4>
                </div>
            </div>
        </footer>
    )
}
export default Footer;