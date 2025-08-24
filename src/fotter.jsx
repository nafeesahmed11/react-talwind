import Fimg from "./media/foot.png";

const Footer =()=>{
    return(
     <footer className="bg-black text-white p-10 text-lg ">

            {/*top parent-start */}
            <div className="flex justify-between pb-10">

        {/* cont-one */}
            <div className="h-50 w-60 ">
                <img src={Fimg} alt="img" className="h-10" />
                </div>
            
        {/* cont-two */}
            
            <div className="h-50 w-30 ">
                <h4 className="text-zinc-500 font-bold text-xl">Company</h4>

                <h4 className="font-bold">About</h4>
                <h4 className="font-bold">Jobs</h4>
                <h4 className="font-bold">For the Record</h4>
                </div>

        {/* cont-three */}
            
            <div className="h-50 w-30">
                <h4 className="text-zinc-500 font-bold text-xl">Communities</h4>

                <h4 className="font-bold">For Artists</h4>
                <h4 className="font-bold">Developers</h4>
                <h4 className="font-bold">Advertising</h4>
                <h4 className="font-bold">Investors</h4>
                <h4 className="font-bold">Vendors</h4>
                </div>
        {/* cont-four */}
        <div className="h-50 w-40 be  px-1">
                <h4 className="text-zinc-500 font-bold text-xl">Useful links</h4>

                <h4 className="font-bold">Useful links</h4>
                <h4 className="font-bold">Support</h4>
                <h4 className="font-bold">Web Player</h4>
                <h4 className="font-bold">Free Mobile App</h4>
                <h4 className="font-bold">Import your music</h4>
                </div>

             {/* cont-four */}


            {/*top parent-end */}    
                    
              <div className="h-50  w-30">
                <h4 className="text-zinc-500 font-bold text-xl">Communities</h4>

                <h4 className="font-bold">Useful links</h4>
                <h4 className="font-bold">Support</h4>
                <h4 className="font-bold">Web Player</h4>
                <h4 className="font-bold">Free Mobile App</h4>
                <h4 className="font-bold">Import your music</h4>
                </div>
            </div>
        </footer>
    )
}
export default Footer;