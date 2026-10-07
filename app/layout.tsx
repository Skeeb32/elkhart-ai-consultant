import type { Metadata } from 'next';
import { site } from '@/config/site';
import './globals.css';
export const metadata: Metadata = { metadataBase:new URL(site.url), title:{default:'Elkhart AI Consultant | More Leads. Less Busywork.',template:'%s | Elkhart AI Consultant'},description:site.description,openGraph:{title:'Elkhart AI Consultant',description:site.description,type:'website',locale:'en_US'},twitter:{card:'summary',title:'Elkhart AI Consultant',description:site.description},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>}
