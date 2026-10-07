import type {Lead,SocialPost,Campaign,FinancialRecord} from '@/lib/domain';
export type IntegrationStatus={connected:boolean;mode:'demo'|'live';description:string};
export interface CRMService{status():IntegrationStatus;createLead(businessId:string,input:Omit<Lead,'id'|'businessId'|'createdAt'>):Promise<Lead>}
export interface SocialService{status():IntegrationStatus;schedule(businessId:string,post:SocialPost):Promise<{id:string;status:'scheduled'}>}
export interface EmailService{status():IntegrationStatus;sendCampaign(businessId:string,campaign:Campaign):Promise<{id:string;status:'queued'}>}
export interface FinanceService{status():IntegrationStatus;listRecords(businessId:string):Promise<FinancialRecord[]>}
export class NotConnectedError extends Error {constructor(service:string){super(`${service} is not connected. No external action was taken.`)}}
export const mockSocialService:SocialService={status:()=>({connected:false,mode:'demo',description:'Planning only'}),async schedule(){throw new NotConnectedError('Social publishing')}};
export const mockEmailService:EmailService={status:()=>({connected:false,mode:'demo',description:'Drafting only'}),async sendCampaign(){throw new NotConnectedError('Email')}};
export const mockCRMService:CRMService={status:()=>({connected:false,mode:'demo',description:'Sample leads only'}),async createLead(){throw new NotConnectedError('CRM')}};
export const mockFinanceService:FinanceService={status:()=>({connected:false,mode:'demo',description:'Sample records only'}),async listRecords(){return []}};
