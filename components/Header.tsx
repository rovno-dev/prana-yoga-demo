'use client';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['О центре','/about'],['Расписание','/schedule'],['Направления','/services'],
  ['Цены','/prices'],['Инструкторы','/instructors'],['Семинары','/seminars'],['Контакты','/contacts']
];

export default function Header(){
  const [open,setOpen]=useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" onClick={()=>setOpen(false)}>
        <span className="brand-mark">P</span><span><strong>prāṇa</strong><small>центр йоги</small></span>
      </Link>
      <nav className="desktop-nav">{links.map(([t,h])=><Link href={h} key={h}>{t}</Link>)}<Link className="header-cta" href="/schedule">Записаться <ArrowUpRight size={15}/></Link></nav>
      <button className="mobile-menu" aria-label="Меню" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open && <div className="mobile-nav">{links.map(([t,h])=><Link onClick={()=>setOpen(false)} href={h} key={h}>{t}</Link>)}<Link onClick={()=>setOpen(false)} className="header-cta" href="/schedule">Выбрать занятие</Link></div>}
  </header>
}
