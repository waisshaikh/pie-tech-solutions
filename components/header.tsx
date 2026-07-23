'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
const links = [['Home','/'],['About','/about'],['Services','/services'],['Approach','/approach'],['Contact','/contact']];
export function Header() { const [open,setOpen]=useState(false); const pathname=usePathname(); return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"><Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}><Image src="/zyberly%20logo.jpg.jpeg" alt="Zyberly Solutions" width={1536} height={1536} priority className="zyberly-wordmark h-11 w-44 rounded-md"/></Link><nav className="hidden items-center gap-7 lg:flex">{links.map(([label,href])=><Link key={href} href={href} className={`nav-link ${pathname===href?'active':''}`}>{label}</Link>)}<Link href="/contact" className="header-cta">Let’s talk <ArrowUpRight size={16}/></Link></nav><button aria-label="Toggle navigation" className="text-white lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="border-t border-white/10 bg-ink px-5 py-6 lg:hidden">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="block border-b border-white/8 py-4 text-2xl text-white">{label}</Link>)}</nav>}</header>; }

