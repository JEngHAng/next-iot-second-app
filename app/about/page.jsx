import React from 'react'
import { Itim } from "next/font/google";

const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
  
});

export default function About() {
  return (
    <>
      <div>
        <h1 className='text-center text-3xl mt-10'>สวัสดี About</h1>
        <h1 className={`text-center text-3xl mt-10 ${itim.className}`}>ยินดีต้อนรับสู่หน้าข้อมูลเกี่ยวกับเรา</h1>
        <hr className='my-5'/>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, at architecto suscipit non porro esse qui modi error cupiditate quam corrupti officiis facere delectus voluptates numquam aliquam, voluptas deleniti ad. Repudiandae, aliquid libero quod rerum facere reiciendis quae quas amet!</p>
      </div>
    </>
  )
}
