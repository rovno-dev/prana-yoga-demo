import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const metadata={title:'Прана — центр йоги в Москве',description:'Йога в Москве: занятия для начинающих и опытных, семинары, массаж, онлайн-практика.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><Header/>{children}<Footer/></body></html>}
