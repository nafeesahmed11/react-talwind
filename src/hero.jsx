import Hero from "./media/au-one.jpg";
const Hreo = () => {
  return (
    <div className="gap-2 flex flex-row justify-between  text-white hero spac">
        
        <section className=" flex flex-col gap-2 left h-100 w-150">
        
            <h1 className="font-bold text-5xl">BDT 0.00 for 3 months of Premium Individual</h1>
            <p className="text-lg text-gray-400">Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</p>
           <div className="flex flex-row gap-2">
             <button className="btn my-3 px-5 py-1 rounded-2xl bg-green-600 text-white">Get Premium</button>
            <button className="btn my-3 px-5 py-1 rounded-2xl bg-green-600 text-white">View all plan</button>
           </div>
           <div className="text-gray text-xs">
                <p>Premium Individual only. BDT 0 for 3 months, then BDT 219 per month after. Offer only available if you haven’t tried Premium before. Terms apply.
                   Offer ends 22 September 2025.</p>
            </div>
          </section>
          <section>
            <img src={Hero} alt="img" className="heroimg" />
          </section>
    </div>
 
    

  );
};
export default Hreo;