const Card =()=>{
    return(
      <section className="spac mb-10 grid grid-cols-2 gap-4 content-between items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        {/* card-1 */}
        <div className="w-72 bg-slate-800 h-96 rounded-xl font-bold my-2">
            <div className="p-2" >
                <h1 className=" bg-pink-200 inline-block rounded-sm p-1">BDT 0 for 3 months</h1>
                <p className="text-white">Premium</p>
                <h1 className=" text-pink-200 font-bold text-4xl">Individual</h1>
                <h1 className="text-sm font-bold text-white">BDT 0 for 3 months </h1>
                <p className="text-white text-xs">BDT 219/month after</p>
                <hr className="text-white" />
                <div className="px-4 py-2">
                    <ul className="list-disc text-white text-xs">
                        <li>1 Premium account</li>
                        <li>Cancel anytime</li>
                        <li>Subscribe or one-time payment</li>
                    </ul>
                    
                </div>
               <div > 
                <button type="button" className="my-2 bg-pink-200 rounded-2xl text-sm h-10 w-64">Try 3 months for BDT 0</button>
                
                <button type="button" className="border-2 rounded-2xl text-sm h-10 w-64 border-slate-500 text-white">Try one time payment</button>
                </div>
                <p className="my-2 text-gray-300 text-xs">BDT 0 for 3 months, then BDT 219 per month after. Offer only available if you haven’t tried Premium before. Terms apply.Offer ends 22 September 2025.
                </p>
            </div>
        </div>

                {/* card-2 */}
        <div className="w-77 bg-slate-800 h-100 rounded-xl font-bold my-2">
            <div className="p-2" >
                <h1 className=" bg-purple-300 inline-block rounded-xs p-1">BDT 0 for 3 months</h1>
                <p className="text-white">Premium</p>
                <h1 className=" text-purple-300 font-bold text-4xl">Student</h1>
                <h1 className="text-sm font-bold text-white">BDT 0 for 3 months </h1>
                <p className="text-white text-xs">BDT 219/month after</p>
                <hr className="text-white" />
                <div className="px-4 py-2">
                    <ul className="list-disc text-white text-xs">
                        <li>1 Premium account</li>
                        <li>Cancel anytime</li>
                        <li>Subscribe or one-time payment</li>
                    </ul>
                    
                </div>
               <div > 
                <button type="button" class="my-2 bg-purple-300  rounded-2xl text-sm h-10 w-70">Try 3 mounth for BDT 0</button>
                
                <button type="button" class="border-3   rounded-2xl text-sm h-10 w-70 border-slate-500 text-white">Try one time payment</button>
                </div>
                <p className="my-2 text-gray-300 text-xs">BDT 0 for 3 months, then BDT 219 per month after. Offer only available if you haven’t tried Premium before. Terms apply.Offer ends 22 September 2025.
                </p>
            </div>
        </div>
        {/* card-3 */}
        <div className="w-77 bg-slate-800 h-100 rounded-xl font-bold my-2">
            <div className="p-2" >
                <h1 className=" bg-amber-400 inline-block rounded-xs p-1">BDT 0 for 3 months</h1>
                <p className="text-white">Premium</p>
                <h1 className=" text-amber-400 font-bold text-4xl">Dou</h1>
                <h1 className="text-sm font-bold text-white">BDT 299 </h1>
                <p className="text-white text-xs">BDT 219/month after</p>
                <hr className="text-white" />
                <div className="px-4 py-2">
                    <ul className="list-disc text-white text-xs">
                        <li>1 Premium account</li>
                        <li>Cancel anytime</li>
                        <li>Subscribe or one-time payment</li>
                    </ul>
                    
                </div>
               <div > 
                <button type="button" class="my-2 bg-amber-400  rounded-2xl text-sm h-10 w-70">Try 3 mounth for BDT 0</button>
                
                <button type="button" class="border-3   rounded-2xl text-sm h-10 w-70 border-slate-500 text-white">Try one time payment</button>
                </div>
                <p className="my-2 text-gray-300 text-xs">BDT 0 for 3 months, then BDT 219 per month after. Offer only available if you haven’t tried Premium before. Terms apply.Offer ends 22 September 2025.
                </p>
            </div>
        </div>

     
      </section>
    );
}
export default Card;