export function leadEstimate(visitors:number,current:number,target:number){
 if(![visitors,current,target].every(Number.isFinite)||visitors<0||current<0||target<0||current>100||target>100)throw new Error('Enter non-negative traffic and conversion rates between 0 and 100.');
 const before=visitors*current/100,after=visitors*target/100;return {before,after,additional:after-before};
}
export function marketingMetrics(spend:number,leads:number,customers:number,value:number){
 if(![spend,leads,customers,value].every(Number.isFinite)||Math.min(spend,leads,customers,value)<0||customers>leads)throw new Error('Use non-negative numbers. Customers cannot exceed leads.');
 const revenue=customers*value;return {revenue,costPerLead:leads?spend/leads:null,acquisitionCost:customers?spend/customers:null,returnOnSpend:spend?revenue/spend:null,netMarketingReturn:spend?(revenue-spend)/spend*100:null};
}
export function csvText(rows:(string|number)[][]){return rows.map(row=>row.map(value=>{let text=String(value);if(/^[\s]*[=+\-@\t\r]/.test(text))text="'"+text;return '"'+text.replaceAll('"','""')+'"';}).join(',')).join('\r\n');}
