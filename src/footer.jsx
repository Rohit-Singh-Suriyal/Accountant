import imgl from "./assets/imgl.png"
import facebok from "./assets/facebok.png"
import insta from "./assets/insta.png"
import linked from "./assets/linked.png"
import whats from "./assets/whats.png"
const Footer=()=>{
 return(
   <>
    <div className="w-[1536px] h-[341px] border-[2px] border-red-600 absolute top-[2730px]
    bg-gradient-to-r from-blue-700 via-blue-700 to-violet-600">
    <div className="relative">
        <div className="w-[138px] h-[45px] top-[31.46px] left-[127px] absolute  ">
            <img src={imgl}></img>
        </div>
        <div className="w-[272px] h-[44px] top-[92px] left-[128px] absolute text-white">
        <p>India's first platform dedicated to </p>
        <p>simplifying partner search</p>
        </div>
        <div className="w-[130px] flex flex-col  h-[133px] top-[41px] left-[502px] absolute text-white">
          <p className="mb-[10px] font-bold">Compnay</p>
          <p className="mb-[10px]">About</p>
          <p className="mb-[10px]">Pricing</p>
          <p className="mb-[10px]">Careers</p>
        </div>
        <div className="w-[130px] h-[171px] top-[41px] left-[696px] absolute text-white">
        <p className="mb-[10px] font-bold">Solutions</p>
          <p className="mb-[10px] font-bold">Search</p>
          <p className="mb-[10px]">Connect</p>
          <p className="mb-[10px]">Research</p>
          <p className="mb-[10px]">Academy</p>
          
        </div>
        <div className="w-[130px] h-[95px] top-[41px] left-[890px] absolute text-white ">
               <p className="mb-[10px] font-bold">RESOURCES</p>
               <p className="mb-[10px]">Blogs</p>
               <p className="mb-[10px]">Forms</p>
        </div>
        <div className="w-[130px] h-[95px] top-[41px] left-[1084px] text-white absolute">
             <p className="mb-[10px] font-bold">SUPPORT</p>
             <p className="mb-[10px]">Help</p>
             <p className="mb-[10px]">Contact Us</p>
        </div>
        <div className="w-[130px] h-[133px] top-[41px] left-[1278px] absolute text-white">
             <p className="mb-[10px] font-bold">LEGAL</p>
             <p className="mb-[10px]">Privacy</p>
             <p className="mb-[10px]">Terms</p>
             <p className="mb-[10px]">Accessibility</p>
        </div>
        <div className="w-[1280px] top-[244px] left-[128px] border-[1px] absolute">

        </div>
        <p className="w-[681px] h-[22px] top-[276px] left-[128px] absolute text-white">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
        <img className="w-[24px] h-[24px] top-[276px] left-[1240px] absolute" src={facebok}></img>
        <img className="w-[24px] h-[24px] top-[276px] left-[1288px] absolute" src={insta}></img>
        <img className="w-[24px] h-[24px] top-[276px] left-[1336px] absolute"  src={linked}></img>
        <img className="w-[24px] h-[24px] top-[276px] left-[1384px] absolute"  src={whats}></img>




    </div>
   </div >
    <div className="top-[3069px] border-[2px] border-black
    absolute  w-[1536px] h-[57px] bg-black text-white flex justify-center items-center">
        <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
    </div>

   
   
   
   
   
   </>






 )




}
export default Footer;