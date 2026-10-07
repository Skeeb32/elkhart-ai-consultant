'use client';
import {forwardRef} from 'react';
import type {AnchorHTMLAttributes} from 'react';
import {useRouter} from 'next/navigation';

// Use the public router API: this Vinext beta's Link prefetch loader loses
// internal navigation exports in production. Preserve a native anchor fallback.
export const AppLink=forwardRef<HTMLAnchorElement,AnchorHTMLAttributes<HTMLAnchorElement>&{href:string}>(function AppLink({href,onClick,target,...props},ref){
 const router=useRouter();
 return <a {...props} href={href} target={target} ref={ref} onClick={event=>{
  onClick?.(event);
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||target&&target!=='_self'||props.download!==undefined||!href.startsWith('/')||href.startsWith('//'))return;
  const destination=new URL(href,window.location.origin);
  if(destination.pathname===window.location.pathname&&destination.search===window.location.search&&destination.hash)return;
  event.preventDefault();
  router.push(href);
 }}/>
});
export default AppLink;
