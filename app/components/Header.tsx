// import LogoMark from "./header/LogoMark";
// import ViewWorkButton from "./header/ViewWorkButton";

// type NavItem = {
//   label: string;
//   href: string;
//   hasDropdown?: boolean;
// };

// const navItems: NavItem[] = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services", hasDropdown: true },
//   { label: "Packages", href: "#packages" },
//   { label: "Reviews", href: "#reviews" },
// ];

// const arrowIcon = (
//   <svg
//     aria-hidden="true"
//     className="size-3 text-white/70"
//     viewBox="0 0 12 8"
//     fill="none"
//   >
//     <path
//       d="M1 2.25 5.5 6.5 10 2.25"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// export function Header() {
//   return (
//     <header className="flex w-full items-center justify-center px-6 pt-12 text-white">
//       <div className="flex w-full max-w-6xl flex-col items-center gap-6 rounded-[999px] border border-white/10 bg-[#111317] px-6 py-6 shadow-[0_15px_45px_rgba(0,0,0,0.55)] lg:flex-row lg:gap-8 lg:px-8 lg:py-4">
//         <div className="flex items-center gap-3">
//             <LogoMark />
//         </div>

// <nav className="flex w-full items-center justify-center text-sm font-medium tracking-wide lg:flex-1">
//   <ul className="flex flex-wrap items-center justify-center gap-4 text-white/80 md:gap-6 lg:gap-8">
//     {navItems.map((item) => (
//       <li key={item.label}>
//         <a
//           href={item.href}
// className="inline-flex items-center gap-2 transition-colors hover:text-white"
//         >
//           <span>{item.label}</span>
//           {item.hasDropdown ? arrowIcon : null}
//         </a>
//       </li>
//     ))}
//   </ul>
// </nav>

//         <div className="flex flex-col items-center gap-2 text-sm lg:flex-row">
//           <ViewWorkButton />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
// import { Menu, X } from "lucide-react"
import LogoMark from "./header/LogoMark"
import ViewWorkButton from "./header/ViewWorkButton"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Packages", href: "#packages" },
    { name: "Reviews", href: "#reviews" },
  ]
  return (
    <header
      className={`fixed top-0 left-0 flex justify-evenly items-center my-4 right-0 mx-auto z-50 transition-all duration-300  ${isScrolled ? "h-20 w-[70%] border rounded-xl border-gray-200/50 bg-white/20 backdrop-blur-xl shadow-lg flex justify-center my-4" : "h-20 w-full border-none bg-transparent"}`}
    >

      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-3">
          <LogoMark />
        </div>
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 px-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">

         <div className="flex flex-col items-center gap-2 text-sm lg:flex-row">
          <ViewWorkButton />
        </div>
      </div>

    </header>
  )
}
