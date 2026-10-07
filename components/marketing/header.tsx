'use client';
import Link from '@/components/app-link';
import { usePathname } from 'next/navigation';
import { Menu, X, Command } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '@/config/site';
export function Header() {
 const [open,setOpen]=useState(false); const path=usePathname();
 return <header className="site-header"><div className="container nav-inner"><Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-icon"><Command size={22}/></span><span>ELKHART<span className="brand-sub">AI CONSULTANT</span></span></Link><button className="menu-button" aria-expanded={open} aria-controls="main-navigation" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="main-navigation" className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{navigation.map(([label,href])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="button small" href="/contact" onClick={()=>setOpen(false)}>Let’s talk</Link></nav></div></header>
}
