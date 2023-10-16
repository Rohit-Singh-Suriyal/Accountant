import student from "./assets/student.png"
import search from "./assets/search.png"
import goup from "./assets/goup.png"
import report from "./assets/report.png"
import cap    from "./assets/cap.png"
import girl    from "./assets/girl.png"




const Platform=()=>{
   return(
     <>
     <div className="absolute w-[1297.6px] h-[614.53px] top-[1964px] left-[128px] ">
        <div className="w-[670px] h-[196px] font-poppin leading-[76.5px] text-[65px] font-bold text-black">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to bg-pink-600">All-in-One</span> platform that Makes Easier
        </div>
       
        
     </div>
     <p className="w-[278px] h-[38px] top-[2019px] absolute left-[875px] font-opensans text-black flex items-center justify-center rounded-xl gap-[10px] bg-pink-100 font-bold text-[14px] leading-[22.4px] ">Hey, check out loreumipsum services. </p>
   
     <p className="w-[315px] h-[38px] top-[2065px] absolute left-[840px] font-opensans text-black flex items-center justify-center rounded-xl gap-[10px] bg-pink-100 font-bold text-[14px] leading-[22.4px] ">I learned from their videos, got my first job. </p>
     <p className="w-[332px] h-[38px] top-[2111px] absolute left-[826px] font-opensans text-black flex items-center justify-center rounded-xl gap-[10px] bg-pink-100 font-bold text-[14px] leading-[22.4px] ">I learned from their videos, got my first job. </p>
     <p className="w-[342px] h-[38px] top-[2184px] absolute left-[829px] font-opensans text-black flex items-center justify-center rounded-xl gap-[10px] bg-blue-100 font-bold text-[14px] leading-[22.4px] ">I learned from their videos, got my first job. </p>
     <p className="w-[142px] h-[38px] top-[2230px] absolute left-[1011px] font-opensans text-black flex items-center justify-center rounded-xl gap-[10px] bg-blue-100 font-bold text-[14px] leading-[22.4px] ">Oh, that's great.</p>
     <div className="w-[270.34px] h-[347.68px] top-[1964px] left-[1137.26px] absolute ">
        <img src={student}></img>

     </div>
     <div className="w-[604px] h-[114px] top-[2174px] left-[128px] absolute text-[24px] font-poppin ">
     We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
     </div>

     <div className="w-[65px] h-[65px] top-[2320px] left-[128px] absolute">
         <img src={search}></img>
     </div>
     <div className="w-[205px] h-[96px] top-[2320px] left-[209px] absolute   font-poppin   text-[20px] leading-[32px] text-black" >
     <span className="font-bold">SEARCH</span> for vital company information 
     </div>

     <div className="w-[65px] h-[65px] top-[2320px] left-[446px] absolute">
         <img src={goup}></img>
     </div>
     <div className="w-[215px] h-[96px] top-[2320px] left-[527px] absolute   font-poppin   text-[20px] leading-[32px] text-black" >
     <span className="text-black font-bold">CONNECT</span> with the resources to meet your business needs
     </div>

     <div className="w-[65px] h-[65px] top-[2480px] left-[128px] absolute">
         <img src={report}></img>
     </div>
     <div className="w-[205px] h-[96px] top-[2480px] left-[209px] absolute  font-poppin   text-[20px] leading-[32px] text-black" >
     <span className="font-bold text-black
     ">RESEARCH</span> and generate reports that drive growth 
     </div>

     <div className="w-[65px] h-[65px] top-[2480px] left-[446px] absolute">
         <img src={cap}></img>
     </div>
     <div className="w-[215px] h-[96px] top-[2480px] left-[527px] absolute   font-poppin   text-[20px] leading-[32px] text-black" >
     <span className="font-bold text-black">ACADEMY</span> to give you the skills for success in your career
     </div>
     <div className="w-[280.61px] h-[339.54px] top-[2255.4px] left-[821.25px]  absolute">
    <img src={girl}></img>
     </div>
    
     
     
     
     
     
     </>



   )





}
export default Platform;