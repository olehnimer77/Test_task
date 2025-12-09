'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaDiscord, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

export default function ContactCard() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: '' })) // Clear error on change
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let newErrors: typeof errors = { firstName: '', lastName: '', email: '', phone: '', message: '' }
    let hasError = false

    if (!form.firstName.trim()) { newErrors.firstName = 'First name is required'; hasError = true }
    if (!form.lastName.trim()) { newErrors.lastName = 'Last name is required'; hasError = true }
    if (!form.email.trim()) { newErrors.email = 'Email is required'; hasError = true }
    if (!form.phone.trim()) { newErrors.phone = 'Phone number is required'; hasError = true }
    if (!form.message.trim()) { newErrors.message = 'Message is required'; hasError = true }

    setErrors(newErrors)

    if (!hasError) {
      console.log('send', form)
      alert('Information was sent!')
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      })
    }
  }

  const inputClass = "outline-none text-[14px] leading-5 border-b border-[#8d8d8d] py-2 w-full focus:border-black"

  return (
    <div className="bg-white rounded-[10px] p-1 lg:py-2.5 mb-5 lg:mb-12.5 mx-5">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <aside className=" bg-black text-white py-[15px] px-[50px] lg:p-10 rounded-[10px] w-full lg:w-[40%] relative overflow-hidden flex flex-col items-center lg:items-start" >
          <h3 className="text-[20px] lg:text-[28px] font-semibold mb-1.5">Contact Information</h3>
          <p className="text-[#c9c9c9] text-[11px] lg:text-[18px] mb-4 lg:mb-[111px]">Say something to start a live chat!</p>

          <div className="flex flex-col gap-12.5 mb-[58px] lg:mb-[159px]">
            <Link href="tel:+1 012 3456 789" className="flex flex-col lg:flex-row gap-2.5 lg:gap-[25px] items-center text-[12px] lg:text-[16px]"><FaPhoneVolume size={24} />+1 012 3456 789</Link>
            <Link href="mailto:demo@gmail.com" className="flex flex-col lg:flex-row gap-2.5 lg:gap-[25px] items-center text-[12px] lg:text-[16px]"><IoMail size={24} /> demo@gmail.com</Link>
            <Link href="https://share.google/vIzTxm9i88ZJXyg0t" target='_blank' className="flex flex-col lg:flex-row gap-2.5 lg:gap-[25px] text-[12px] lg:text-[16px] items-center text-center lg:text-start lg:w-[80%]"><FaLocationDot size={24} /> 132 Dartmouth Street Boston, Massachusetts 02156 United States</Link>
          </div>

          <div className="flex gap-6 justify-start">
            <Link href="https://x.com" target='_blank' className="w-7.5 h-7.5 rounded-full bg-[#1b1b1b] flex items-center justify-center focus:bg-white focus:text-black"><FaTwitter width={15} height={12}/></Link>
            <Link href="https://www.instagram.com" target='_blank' className="w-7.5 h-7.5 rounded-full bg-[#1b1b1b] flex items-center justify-center focus:bg-white focus:text-black"><FaInstagram size={15}/></Link>
            <Link href="https://discord.com" target='_blank' className="w-7.5 h-7.5 rounded-full bg-[#1b1b1b] flex items-center justify-center focus:bg-white focus:text-black"><FaDiscord/></Link>
          </div>

          <div className="absolute w-48 h-48 lg:w-[269px] lg:h-[269px] bg-[#1a1a1a] rounded-full right-[-115px] lg:right-[-90px] bottom-[-90px]" />
          <div className="absolute w-[54px] h-[54px] lg:w-[138px] lg:h-[138px] bg-[rgba(72,72,72,0.5)] rounded-full right-6 lg:right-[70px] bottom-[50px] lg:bottom-[60px]" />
        </aside>

        <form onSubmit={onSubmit} className="w-full lg:w-[60%] p-4 pb-[60px] lg:pb-4 lg:pt-12.5 lg:pr-12.5 mb box-border relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-[45px] gap-x-[39px]">
            <label htmlFor="firstName" className='max-w-[278px] w-full'>
              <p className='text-[12px] text-[#8d8d8d] font-medium mb-1'>First Name</p>
              <input 
                name="firstName" 
                value={form.firstName} onChange={onChange}
                placeholder="John" 
                className={inputClass} 
              />
              {errors.firstName && <p className="text-red-500 text-[12px] mt-1">{errors.firstName}</p>}
            </label>

            <label htmlFor="lastName" className='max-w-[278px] w-full'>
              <p className='text-[12px] text-[#8d8d8d] font-medium mb-1'>Last Name</p>
              <input 
                name="lastName" 
                value={form.lastName} onChange={onChange}
                placeholder="Doe" 
                className={inputClass} 
              />
              {errors.lastName && <p className="text-red-500 text-[12px] mt-1">{errors.lastName}</p>}
            </label>

            <label htmlFor="email" className='max-w-[278px] w-full'>
              <p className='text-[12px] text-[#8d8d8d] font-medium mb-1'>Email</p>
              <input 
                name="email" 
                value={form.email} onChange={onChange}
                placeholder="johndoe@me.com" 
                className={inputClass} 
              />
              {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
            </label>

            <label htmlFor="phone" className='max-w-[278px] w-full'>
              <p className='text-[12px] text-[#8d8d8d] font-medium mb-1 '>Phone Number</p>
              <input 
                name="phone" 
                value={form.phone} onChange={onChange}
                placeholder="+1 012 3456 789" 
                className={inputClass} 
              />
              {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>}
            </label>
          </div>

          <div className="my-[25px] lg:my-[45px]">
            <label className="font-semibold text-sm">Select Subject?</label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-5 mt-3.5">
              <label className="flex items-center gap-2.5 text-[12px]">
                <input type="radio" name="subject" value="general"
                  className="accent-black "
                  checked={form.subject === 'general'}
                  onChange={(e) => setForm(prev => ({...prev, subject: e.target.value}))} />
                General Inquiry
              </label>
              <label className="flex items-center gap-2.5 text-[12px]">
                <input type="radio" name="subject" value="somevalue1"
                  className="accent-black "
                  checked={form.subject === 'somevalue1'}
                  onChange={(e) => setForm(prev => ({...prev, subject: e.target.value}))} />
                Some value 1
              </label>
              <label className="flex items-center gap-2.5 text-[12px]">
                <input type="radio" name="subject" value="somevalue2"
                  className="accent-black "
                  checked={form.subject === 'somevalue2'}
                  onChange={(e) => setForm(prev => ({...prev, subject: e.target.value}))} />
                Some value 2
              </label>
            </div>
          </div>

          <div className="">
            <label htmlFor="message" className='max-w-[278px] w-full'>
              <p className='text-[12px] text-[#8d8d8d] font-medium'>Message</p>
              <textarea name="message" value={form.message} onChange={onChange}
              placeholder="Write your message.." rows={1}
              className={inputClass}></textarea>
              {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
            </label>
          </div>

          <div className="mt-[25px] lg:mt-[45px] w-full lg:w-fit flex items-center justify-end justify-self-end">
            <button type="submit" className="text-white text-[13px] lg:text-[16px] bg-black py-2.5 lg:py-[15px] px-12 rounded-[5px] w-full md:w-fit">Send Message</button>
          </div>
          <div className="absolute right-35 lg:right-32 -bottom-7 lg:-bottom-10">
            <img src="./letter.png" alt="paper plane" className="w-[120px] lg:w-60" />
          </div>
        </form>
      </div>
    </div>
  )
}
