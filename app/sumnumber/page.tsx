"use client"
 
import { useState } from "react";
 
export default function SumNumber() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState<string | null>("0.00");
 
    const calSumNumber = () =>{
        const sum = num1 + num2;
        setResult(sum.toFixed(2));
    }
 
    const reset = () => {
        setNum1(0);
        setNum2(0);
        setResult("0.00");
    }
 
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-10">
                Sum Number Page
            </h1>
            <hr className="my-10"/>
            <label htmlFor="" className="ml-10">ป้อนตัวเลขตัวที่ 1</label>
            <input  value={num1} onChange={(e)=>setNum1(parseFloat( e.target.value) )}
                    type="number" className="border border-black mx-5 p-1 rounded"/>
            <br /><br />
            <label htmlFor="" className="ml-10">ป้อนตัวเลขตัวที่ 2</label>
            <input  value={num2} onChange={(e)=>setNum2(parseFloat( e.target.value) )}
                    type="number" className="border border-black mx-5 p-1 rounded"/>
            <br /><br />
            <button onClick={calSumNumber}
                className="bg-blue-500 text-white px-4 py-2 rounded ml-10">
                คำนวณผลรวม
            </button>
            <button onClick={reset}
                className="bg-red-400 text-white px-4 py-2 rounded ml-10">
                รีเซ็ต
            </button>
            <hr className="my-10"/>
            <h2 className="ml-10 text-2xl font-semibold">
                ผลลัพธ์ : {result}
            </h2>
        </>
    );
}