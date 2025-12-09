'use client'
import { inter, roboto } from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent mx-5 lg:mx-[100px] mt-7 lg:mt-[41px] flex justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/" className={`font-extrabold ${inter.className} text-[18px] lg:text-[24px] font-bold`}>Logo Here</Link>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <nav className={`hidden lg:flex gap-[47px] text-[16px] text-gray-700 ${roboto.className}`}>
            <Link className={`${pathname === "/" ? 'hover font-semibold' : ''}`} href="/">Home</Link>
            <Link className={`${pathname === "/features" ? 'hover font-semibold' : ''} flex gap-1 items-center`} href="/features">Features <IoIosArrowDown size={14}/></Link>
            <Link className={`${pathname === "/blog" ? 'hover font-semibold' : ''} `} href="/blog">Blog</Link>
            <Link className={`${pathname === "/shop" ? 'hover font-semibold' : ''} `} href="/shop">Shop</Link>
            <Link className={`${pathname === "/about" ? 'hover font-semibold' : ''} `} href="/about">About</Link>
            <Link className={`${pathname === "/contact" ? 'hover font-semibold': ''} `} href="/contact">Contact</Link>
          </nav>

          <div className="hidden lg:flex gap-9 items-center ml-[60px]">
            <Link href="/account" className={`w-[31px] h-[31px] rounded-full border flex items-center justify-center ${pathname === "/account" ? 'bg-black text-white' : ''}`}><GoPerson size={17}/></Link>
            <Link href="/cart" className={`w-[31px] h-[31px] rounded-full border flex items-center justify-center ${pathname === "/cart" ? 'bg-black text-white' : ''} `}><PiShoppingCartLight size={17}/></Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button 
            className="lg:hidden flex flex-col gap-1 ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu size={24}/>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black text-white z-50 flex flex-col py-5 px-7">
          <div className="flex justify-between items-center mb-[50px]">
            <Link href="/" className={`font-extrabold ${inter.className} text-[18px] font-bold`}>Logo Here</Link>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-2xl"
              aria-label="Close menu"
            >
              <IoClose size={24}/>
            </button>
          </div>

          <nav className={`flex flex-col gap-[30px] text-[16px] ${roboto.className}`}>
            <Link 
              href="/" 
              className={` ${pathname === "/" ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className={` ${pathname === "/features" ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features <IoIosArrowDown size={14} className="inline ml-1"/>
            </Link>
            <Link 
              href="/blog" 
              className={`${pathname === "/blog" ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/shop" 
              className={` ${pathname === "/shop" ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className={` ${pathname === "/about" ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={` ${pathname === "/contact" ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-auto flex justify-center gap-8 py-6">
            <Link 
              href="/account" 
              className={`w-[31px] h-[31px] rounded-full border flex items-center justify-center ${pathname === "/account" ? 'bg-white text-black' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <GoPerson size={17}/>
            </Link>
            <Link 
              href="/cart" 
              className={`w-[31px] h-[31px] rounded-full border flex items-center justify-center ${pathname === "/cart" ? 'bg-white text-black' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <PiShoppingCartLight size={17}/>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}