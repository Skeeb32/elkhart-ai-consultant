import {csvText} from './calculations';
export function downloadText(name:string,text:string,type='text/plain;charset=utf-8'){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
export function downloadCsv(name:string,rows:(string|number)[][]){downloadText(name,'\uFEFF'+csvText(rows),'text/csv;charset=utf-8');}
