import {notFound} from 'next/navigation';
import {dashboardLinks} from '@/config/demo';
import {Overview} from '@/components/dashboard/overview';
import {Leads} from '@/components/dashboard/leads';
import {Social} from '@/components/dashboard/social';
import {Finance} from '@/components/dashboard/finance';
import {Reports} from '@/components/dashboard/reports';
import {Chatbot} from '@/components/dashboard/chatbot';
import {Email} from '@/components/dashboard/email';
import {Settings} from '@/components/dashboard/settings';
import {ContentGenerator} from '@/components/tools/content-generator';
export function generateStaticParams(){return dashboardLinks.map(([,section])=>({section}))}
export async function generateMetadata({params}:{params:Promise<{section:string}>}){const {section}=await params;return {title:`${dashboardLinks.find(([,s])=>s===section)?.[0]||'Not found'} · Demo Workspace`,robots:{index:false,follow:false}}}
export default async function DashboardSection({params}:{params:Promise<{section:string}>}){const {section}=await params;switch(section){case'overview':return <Overview/>;case'leads':return <Leads/>;case'social':return <Social/>;case'finance':return <Finance/>;case'reports':return <Reports/>;case'chatbot':return <Chatbot/>;case'email':return <Email/>;case'settings':return <Settings/>;case'content':return <><div className="dashboard-title"><div><span className="eyebrow">FROM IDEA TO EDITABLE DRAFT</span><h1>Content studio</h1><p>Explore themes for your next Facebook, Instagram, or LinkedIn post.</p></div></div><div className="panel"><ContentGenerator/></div></>;default:notFound()}}
