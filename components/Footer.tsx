
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import NewsLetter from "./NewsLetter";
import { inter } from "@/lib/fonts";

export default function Footer(){
  return (
    <footer className="bg-black text-white p-5 lg:pt-20 lg:pb-[66px] lg:px-20 flex justify-center">
      <div className="container">
        <div className="text-center mb-5 lg:mb-[45px]">
          <h2 className={`${inter.className} text-[36px] font-extrabold`}>Logo Here</h2>
        </div>     

        <div className="flex flex-wrap justify-between gap-y-8 gap-x-18 lg:gap-12 text-[16px] py-[30px] pl-0 lg:pl-5 border-t border-white">
          <div className="max-w-[330px] w-full flex-1">
            <h4 className="font-semibold text-[16px] lg:text-[18px] mb-4 lg:mb-5">Reach us</h4>
            <div className="flex flex-col gap-6">
            <Link href="tel:+1 012 3456 789" className="flex flex-col lg:flex-row gap-3.5 lg:gap-[25px] items-start lg:items-center text-[12px] lg:text-[16px] leading-[150%]"><FaPhoneVolume size={23} />+1 012 3456 789</Link>
            <Link href="mailto:demo@gmail.com" className="flex flex-col lg:flex-row gap-3.5 lg:gap-[25px] items-start lg:items-center text-[12px] lg:text-[16px] leading-[150%]"><IoMail size={23} /> demo@gmail.com</Link>
            <Link href="https://share.google/vIzTxm9i88ZJXyg0t" target='_blank' className="flex flex-col lg:flex-row gap-3.5 lg:gap-[25px] items-start lg:items-center text-[12px] lg:text-[16px] leading-[150%]"><FaLocationDot size={23} className="min-w-6"/> 132 Dartmouth Street Boston, Massachusetts 02156 United States</Link>
          </div>
          </div>
            <div className="flex gap-6 flex-col">
              <h4 className="font-semibold text-[16px] lg:text-[18px] ">Company</h4>
              <Link href="/about" className="text-[12px] lg:text-[16px] -mb-1">About</Link>
              <Link href="/contact" className="text-[12px] lg:text-[16px]">Contact</Link>
              <Link href="/blog" className="text-[12px] lg:text-[16px]">Blogs</Link>
            </div>
            <div className="flex gap-6 flex-col">
              <h4 className="font-semibold text-[16px] lg:text-[18px]">Legal</h4>
              <Link href="/" className="text-[12px] lg:text-[16px] -mt-1">Privacy Policy</Link>
              <Link href="/" className="text-[12px] lg:text-[16px]">Terms & Services</Link>
              <Link href="/" className="text-[12px] lg:text-[16px]">Terms of Use</Link>
              <Link href="/" className="text-[12px] lg:text-[16px]">Refund Policy</Link>
            </div>
            <div className="flex gap-6 flex-col">
              <h4 className="font-semibold text-[16px] lg:text-[18px]">Quick Links</h4>
              <Link href="/" className="text-[12px] lg:text-[16px] -mb-1">Techlabz Keybox</Link>
              <Link href="/" className="text-[12px] lg:text-[16px]">Downloads</Link>
              <Link href="/" className="text-[12px] lg:text-[16px]">Forum</Link>
            </div>
          <NewsLetter />
        </div>
      </div>
    </footer>
  )
}