import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(6);
  const [isNum, setIsNum] = useState(true);
  const [isSym,setIsSym] =  useState(false);
  const [pass, setPass] = useState("");
  const [copyButton, changeCopyButtonText]=useState("Copy");
  const passRef = useRef(null)

  //for generate random password :
  const passMaker=()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNum) str += "012345678901234567890123456789"; // used thrice for increasing the probability  of getting a number.
    if(isSym) str+= "~!@#$%^&*()-_=+[{|]}\;:,.<>/?~!@#$%^&*()-_=+[{|]}\;:,.<>/?"; // used twice for increasing the probability  of getting a Symbol.

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char);
    }
    setPass(pass);
    changeCopyButtonText("Copy")
  }

  //for copy the password into clipboard using copy button:
 const copy=()=>{
    window.navigator.clipboard.writeText(pass).then(() => {
      passRef.current.select();
      changeCopyButtonText("Copied");
    }, err => {
      console.log('Error in copying',err);
    });
  }
  //for memoization only (optional)
  // useCallback(()=>{passMaker},[length, isNum, isSym,pass]);

  // for run passMaker function again on any change in the dependency array's element:
  useEffect( ()=>{passMaker()},[length,isNum,isSym])
  return (
    <>
      
     <div id="container" className='bg-teal-200 fixed p-12 rounded-2xl ml-60 border border-blue-600'>
      <h1 className='mb-14 text-3xl text-blue-600'>Password Generator</h1>
      <input type="text" value={pass} ref={passRef}readOnly placeholder='P a s s w o r d' className='rounded px-4 py-2.5 outline-none hover:bg-slate-300'/>

      <button id='copyButton' className='mr-8 ml-0 bg-blue-500 p-2 rounded-xl text-lg hover:bg-black hover:text-cyan-300' onClick={copy}>{copyButton}</button>

      <input type="range" value={length} onChange={(e)=>{setLength(e.target.value)}} id="range" min={6} max={20}/> 
      
      <label htmlFor="range">Length: {length}</label> <br />
      <input type="checkbox" id="number" defaultChecked={isNum} onChange={()=>setIsNum((prev)=>!prev)} className='ml-60 size-xl h-4 w-16'/>
      <label htmlFor="number" className='text-xl'>Numbers</label> <br />
      <input type="checkbox" id="symbol" defaultChecked={isSym} onChange={()=>setIsSym((prev)=>!prev)} className="ml-60 size-xl h-4 w-24"/>
      <label htmlFor="symbol" className='text-xl'>Symbols</label>
     </div>
    </>
  )
}

export default App
