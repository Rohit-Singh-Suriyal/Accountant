import "./App.css"
import { useEffect, useReducer, useRef ,useState } from "react";
import img from "./assets/img.png"
import down from "./assets/down.png"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import Join from "./join"
import Platform from "./Platform";
import Footer from "./footer";
import Search from "./Search";
import arrow from "./assets/arrow.png"
import Dynamic from "./Dynamic";
function App() {
  
  const inputref=useRef();
  const searchref=useRef();
  const [obj1,setobj1]=useState({});
  const [arrowback,setarrow]=useState(false);
  const[show,setshow]=useState(false);
  const[error,seterror]=useState(false);
  const [obj3,setobj3]=useState([]);
  const[obj5,setobj5]=useState({});
  
  const submit=()=>{

    setarrow(false)
    setshow(false);
    seterror(false)
  }
  
  const shandler=async(e)=>{
    console.log("target");
    const Name=e?.target?.innerText;
    console.log(Name);
    const res=await fetch(`http://localhost:3000/employee?name_like=${Name}`);
    const data=await res.json();
    console.log(data);
   
    obj5.intro=data[0].intro.toString();
    console.log(obj5.intro);
    obj5.name=data[0].name.toString();
    obj5.price=data[0].price.toString();
    obj5.rating=data[0].rating.toString();
    obj5.reviewCount=data[0].reviewCount.toString()
    obj5.taskComplexity=data[0].taskComplexity.toString()
    obj5.testimonial=data[0].testimonial.text.toString();

    obj5.image=data[0].image;
    obj5.deliveryTime=data[0].deliveryTime.toString();
    obj5.averagetime=data[0].about.averageResponseTime.toString();
    obj5.benefits=data[0].about.benefits;
    obj5.description=data[0].about.description;
    obj5.from=data[0].about.from;
    obj5.partnerSince=data[0].about.partnerSince;
    obj5.services=data[0].about.services
    
    setobj5(obj5);
    setshow(true);
    setarrow(true);
  

  }
  
  const changehandler=async()=>{
     const res =await fetch(`http://localhost:3000/employee?name_like=${inputref.current.value}`);
     const data=await res.json();
     console.log(data);
     const newarray=[]
     for(let i=0;i<data.length;i++){
      console.log("rohtio")
      
      newarray.push(data[i].name);
      setobj3(newarray);
      
     }
    }
    
  
     
  const fecthdata=async()=>{
    console.log(obj1);
    const res=await fetch("http://localhost:3000/employee");
    const data=await res.json();
    console.log(data);
    let t=false;
    for(let i=0;i<data.length;i++){
      
       if(inputref.current.value===data[i].name){
        console.log("rohit");
        console.log(data[i]);
        const str=data[i].intro.toString();
        const  name=data[i].name.toString();
        const price=data[i].price;
        const rating=data[i].rating.toString();
        const reviewcount=data[i].reviewCount.toString();
        const taskComplexity=data[i].taskComplexity.toString();
        const testimonial=data[i].testimonial.text;
        const image=data[i].image;
        const deliveryTime=data[i].deliveryTime.toString();
        
        console.log(str);
        
        obj1.intro=str;
        obj1.name=name;
        obj1.price=price;
        obj1.rating=rating;
        obj1.reviewCount=reviewcount;
        obj1.taskComplexity=taskComplexity;
        obj1.testimonial=testimonial;
        obj1.image=image;
        console.log(image);
        obj1.averagetime=data[i].about.averageResponseTime;
        obj1.benefits=data[i].about.benefits;
        obj1.description=data[i].about.description;
        obj1.from=data[i].about.from;
        obj1.partnerSince=data[i].about.partnerSince;
        obj1.services=data[i].about.services
        t=true;
        setobj1(obj1);
        setshow(true);
        seterror(false);
        setarrow(true);
        
       }
    }
    if(t===false){
      console.log(error);
      seterror(true)

    }
    

   

    
   
   
  }
  useEffect(()=>{
    if(inputref?.current?.value===""){
      setarrow(false)
    }
  },[])
  
  const submithandler=()=>{
   
    fecthdata();
   
    
  }

 
 
 

  
 
 
 

  return (
    <>
   
    { arrowback  &&
    <img  onClick={submit}className="absolute top-[28px] left-[30px] z-50" src={arrow}></img>
}
    { !show &&
    <div className="text-blue-800 h-[803px] w-[1536px] relative bg-gradient-to-r from-white via-blue-100 to-blue-100 " >
      <div className="h-[85px] w-[1536px]">
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
           <button className="h-[46px] w-[100px] top-[19px] left-[1192px] rounded-sm text-blue-600 border-[1.5px]  p-[10px 10px 10px 10px] absolute font-bold"  >Login</button>
           <button className="h-[46px] w-[100px] top-[19px] left-[1308px] rounded-xl text-white bg-blue-700
             p-[10px 10px 10px 10px] absolute font-bold"  >Login</button>

      </div>
      <div className="">
        <div className="flex justify-center first ">
        <div className="w-[670px] h-[160px] top-[255px] left-[128px] absolute font-sans font-bold text-[70px] leading-[80px] text-black">
        Find  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to bg-pink-500 ">Partners</span> (CAs) available online
       
        </div>
        <p className="font-bold text-[20px] w-[640px] h-[55px] absolute top-[423px] left-[128px] leading-[30px] text-gray-400 font-opensans"><span className="text-gray-700 font-poppin ">CONNECT </span>with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
        <div className="w-[632px] h-[73px] top-[546px] left-[128px] border-solid border-gray-500 border-[2px] absolute flex rounded-[1px] ">
          
          <input onChange={changehandler} ref={inputref} className="flex items-center w-[100%]  p-[29px]"placeholder="Search by name"/>


          <div className="border-[2px]  w-[629px] absolute max-h-[200px] overflow-auto top-[70px]">
         <ul>
           {obj3.map((item,i)=>(
            <li key={i} onClick={shandler}className="cursor-pointer text-[20px]  font-bold text-black p-[5px]">{item}</li>
           ))
           
           }
         </ul>





        
    </div>


   
          <button className="w-[192px] h-[72px] font-bold rounded-lg bg-blue-600 text-white" onClick={submithandler}>Search</button>
          {error && 
    <p className="mt-[-30px] mr-[50px] absolute font-bold text-[20px] text-red-500">No match found</p>}

        </div>

        </div>
        <div className="second w-[629.4px] h-[487px]  absolute top-[211px] left-[866px]  flex">
          <div className="w-[198.72px] h-[487px] p-[83.97px, 0px, 0px, 0px] gap-[10.5px] ">
            <img src={img1}></img>
          </div>
          <div className="w-[198.72px] h-[403.03px] ml-[12.5px]
          ">
            <img src={img2}></img>
         
          </div>
          <div className="w-[200px] h-[403.03px] ml-[10.5px] mt-[41px] mr-[0px]">
            <img src={img3}></img>

          </div>


        </div>
      

      </div>
      
      <Join/>
      <Platform/>
      <Footer/>
    
    </div>
    }
   {!error && 
    <Search
            obj5={obj5}show={show} showobj1={obj1}/>
   }
   
   
   
   
    

    
     </>
    
  )
}

export default App;
