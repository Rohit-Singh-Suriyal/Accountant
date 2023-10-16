import img from "./assets/img.png"
import down from"./assets/down.png"
import star from"./assets/star.png"
import cal from "./assets/cal.png"
import anti from "./assets/anti.png"
import big from "./assets/big.png"
import imgl from "./assets/imgl.png"
import facebok from "./assets/facebok.png"
import insta from "./assets/insta.png"
import linked from "./assets/linked.png"
import whats from "./assets/whats.png"

const Search=({showobj1,obj5,show})=>{
  console.log(obj5?.name);
  console.log( obj5?.intro)
 console.log(obj5?.rating);
 console.log(obj5?.reviewCount)
 console.log(obj5?.taskComplexity)
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()

 


 return(
    <>
      { show &&
       <div className="w-[1536] h-[85px]  relative ">
         <div className="w-[138px] h-[45px] top-[20px] left-[127px] absolute">
            <img src={img}></img>

           </div>
           <div className="w-[145px] h-[62px]  absolute top-[14px] left-[297px] p-[16px] font-bold text-black flex">
             Solutions<img className=" h-[26px]"src={down}></img>
           </div>
           <div className="w-[145px] h-[62px]  absolute top-[14px] left-[450px] p-[16px] font-bold text-black flex">
             Features <img className=" h-[26px]"src={down}></img>
           </div>
           <div className="w-[115px] h-[62px]  absolute top-[14px] left-[689px] p-[16px] font-bold text-black flex">
             About <img className=" h-[26px]"src={down}></img>
           </div>
           <button className="h-[46px] w-[100px] top-[19px] left-[1192px] rounded-sm text-blue-600 border-[1.5px] border-blue-600 p-[10px 10px 10px 10px] absolute font-bold"  >Login</button>
           <button className="h-[46px] w-[100px] top-[19px] left-[1308px] rounded-xl text-white bg-blue-700
            border-[1.5px] border-blue-600 p-[10px 10px 10px 10px] absolute font-bold"  >Login</button>
        <div className="w-[515px] h-[960px] top-[165px] left-[127px] absolute ">
         <div className="w-[303px] h-[53px] top-[5px] font-poppin font-bold text-[35px] leading-[52.5px]">
           {showobj1?.name || obj5?.name}
         </div>
         <div className="w-[515px] h-[128px] top-[78px] absolute border-[2px]  text-[20px]">
           {showobj1?.intro || obj5?.intro}
         </div>
         <img  className="w-[24px] h-[24px] top-[241px] absolute" src={star}></img>
          <div className="w-[80px] h-[30px] top-[238px] left-[32px] pt-[3px] absolute">
            <span className="font-bold text-20px text-blue-700">{showobj1?.rating||obj5?.rating}</span>{showobj1?.reviewCount|| obj5?.reviewCount}
          </div>
          <div className="w-[515px] h-[216px] top-[300px] absolute border-[2px] shadow-lg">
          </div>
         <p className="w-[300px] h-[32px] top-[328px] font-poppin text-[20px] leading-[32px] left-[27px] absolute font-semibold">{showobj1?.taskComplexity||obj5?.taskComplexity}</p>
          <p className="w-[187px] h-[36px] top-[326px] left-[305px] absolute text-[24px] leading-36px font-bold"> {showobj1?.price||obj5?.price}</p>
          <img  className="w-[24px] h-[24px] top-[396px] left-[27px] absolute"src={cal}></img>
          <p className="w-[422px] h-[32px] top-[392px] left-[61px] absolute text-[20px] font-pop leading-[32px]
            ">{showobj1?.deliveryTime || obj5?.deliveryTime}</p>
          <button className="w-[220px] h-[46px] top-[447px] left-[27px] absolute bg-blue-700 text-white font-bold rounded-xl font-opensans">Request Proposal</button>
          <button className="w-[220px] h-[46px] top-[447px] left-[272px] absolute border-[1px] border-blue-700 rounded-xl">Chat with me</button>
          <div className="w-[515px] h-[412px]  top-[548px] absolute ">
          </div>
          <p className="w-[463px] h-[53px] top-[578px] left-[29px] absolute font-poppin font-bold text-[35px] leading-[52.5px]">What people say?</p>
          <div className="w-[463px] h-[224px] top-[645px] left-[29px] absolute font-poppin text-[20px] font-semibold leading-[32px]">
         {showobj1?.testimonial || obj5?.testimonial}
          </div>
          <div className="w-[32px] h-[10px] top-[928px] left-[215px] rounded-2xl bg-blue-700 absolute"></div>
          <div className="w-[10px] h-[10px] top-[928px] left-[250px] rounded-xl bg-gray-500 absolute"></div>
          <div className="w-[10px] h-[10px] top-[928px] left-[263px] rounded-xl bg-gray-500 absolute"></div>
          <div className="w-[10px] h-[10px] top-[928px] left-[276px] rounded-xl bg-gray-500 absolute"></div>
        </div>
        <img className="w-[733px] h-[412px] top-[165px] left-[675px] absolute" src={showobj1?.image || obj5?.image}></img>
        <p className="w-[733px] h-[53px] top-[609px] left-[675px] font-poppin font-bold text-[35px] leading-[52.5px] absolute">About {showobj1?.name || obj5?.name}</p>
       
       <p className="w-[186px] h-[34px] top-[684px] left-[675px] absolute font-poppin text-[16px] leading-[34px] text-gray-500">From</p>
       <p className="w-[186px] h-[34px] top-[726px] left-[675px] absolute font-poppin text-[16px] leading-[34px] text-black">{showobj1?.from || obj5?.from}</p>
       <p className="w-[186px] h-[34px] top-[684px] left-[893px] absolute font-poppin text-[16px] leading-[34px] text-gray-500">PARTNER SINCE</p>
       <p className="w-[186px] h-[34px] top-[726px] left-[893px] absolute font-poppin text-[16px] leading-[34px] text-black">{showobj1?.partnerSince || obj5?.partnerSince}</p>
       <p className="w-[195px] h-[34px] top-[684px] left-[1112px] absolute font-poppin text-[16px] leading-[34px] text-gray-500">AVERAGE RESPONSE TIME</p>
       <p className="w-[186px] h-[34px] top-[726px] left-[1112px] absolute font-poppin text-[16px] leading-[34px] text-black">{showobj1?.averagetime || obj5?.averagetime}</p>
      <div className="w-[733px] h-[144px] top-[792px] left-[675px] absolute ">
        <p className="poppin text-[16px] lleading-[34px] font-bold text-gray-600">ABOUT</p>
        <p className="text-[20px] mt-[10px]">
       {showobj1?.description || obj5?.description}
        </p>
      </div>
      <p className="w-[733px] h-[34px] top-[968px] left-[675px] absolute font-poppin font-bold text-[16px] leadng-[34px] text-gray-500">SERVICES  OFFER</p>
      <div className="w-[405px] h-[324px] top-[1010px] left-[675px] absolute ">
        <li className="font-poppin font-semibold text-[20px] leading-[36px]">{showobj1?.services?.[0]||obj5?.services?.[0]} </li>
        <li className="font-poppin font-semibold text-[20px] leading-[36px]">{showobj1?.services?.[1]||obj5?.services?.[1]}  </li>
        <li className="font-poppin font-semibold text-[20px] leading-[36px]">{showobj1?.services?.[2]||obj5?.services?.[2]} </li>
        
    
      <div>

      </div>

        

      </div>
    <div className="w-[296px] h-[144px] top-[968px] left-[1112px] absolute">
      <p className="font-poppin font-bold text-[15px] leading-[34px] text-gray-500">Why me?</p> 
      <li className="font-poppin font-semibold text-[20px] leading-[34px]">{showobj1?.benefits?.[0]||obj5?.benefits?.[0]}</li>
      <li className="font-poppin font-semibold text-[20px] leading-[34px]">{showobj1?.benefits?.[1]||obj5?.benefits?.[1]}</li>
      
        
     
    </div>
    <img className="w-[1279px] h-[477px] top-[1530px] left-[129px] absolute" src={big}></img>


    <div className="w-[1536px] h-[398px] absolute top-[2160px]
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
   <div className="top-[2556px] border-[2px] border-black
    absolute  w-[1536px] h-[57px] bg-black text-white flex justify-center items-center">
        <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
    </div>


           
</div>
}

</>




 )


}
export default Search