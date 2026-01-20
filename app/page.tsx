import Image from 'next/image'
import img1 from '@/assets/images/img1.png'
import img2 from '@/assets/images/img2.png'
import img3 from '@/assets/images/img3.png'

export default function Home() {
  return (
    <>
      <div>
        <h1 className='text-center text-3xl mt-10'>สวัสดี Home</h1>
        <hr className='my-5'/>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, at architecto suscipit non porro esse qui modi error cupiditate quam corrupti officiis facere delectus voluptates numquam aliquam, voluptas deleniti ad. Repudiandae, aliquid libero quod rerum facere reiciendis quae quas amet!</p>
        
        <Image src="/img4.png" alt="img4" width={150} height={150} className='inline' />
        <Image src="/img5.png" alt="img5" width={150} height={150} className='inline'/>
        <br />  <br />  <br />
        <Image src={img1} alt="img1" width={150} height={150} className='inline'/>
        <Image src={img2} alt="img2" width={150} height={150} className='inline'/>
        <Image src={img3} alt="img3" width={150} height={150} className='inline'/>
      </div>  
    </>
  )
}
