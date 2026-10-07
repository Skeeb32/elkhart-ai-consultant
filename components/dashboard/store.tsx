'use client';
import {createContext,useContext,useState} from 'react';
import {demoLeads} from '@/config/demo';
type Lead=typeof demoLeads[number];
type Post={id:string;body:string;platform:string;date:string;status:'Draft'|'Approved'|'Planned'};
type Knowledge={id:string;question:string;answer:string};
type DemoState={leads:Lead[];setLeads:React.Dispatch<React.SetStateAction<Lead[]>>;posts:Post[];setPosts:React.Dispatch<React.SetStateAction<Post[]>>;knowledge:Knowledge[];setKnowledge:React.Dispatch<React.SetStateAction<Knowledge[]>>};
const Context=createContext<DemoState|null>(null);
export function DemoProvider({children}:{children:React.ReactNode}){const [leads,setLeads]=useState(demoLeads),[posts,setPosts]=useState<Post[]>([{id:'post-1',body:'Planning your next project? Write down your goals and questions before choosing a service. Our example team can help you think through the next step.',platform:'Facebook',date:'2026-10-08T09:00',status:'Planned'},{id:'post-2',body:'Behind every good project is a clear plan. Add a real team photo and approved details before publishing this sample.',platform:'LinkedIn',date:'',status:'Draft'}]),[knowledge,setKnowledge]=useState<Knowledge[]>([{id:'faq-1',question:'Where do you work?',answer:'This example business serves Elkhart and surrounding communities. Verify your actual service area before using this answer.'},{id:'faq-2',question:'How do I request a quote?',answer:'Use the business contact form with a brief description of your project. A team member should confirm scope and availability.'}]);return <Context.Provider value={{leads,setLeads,posts,setPosts,knowledge,setKnowledge}}>{children}</Context.Provider>}
export function useDemo(){const c=useContext(Context);if(!c)throw new Error('Demo context is required');return c}
