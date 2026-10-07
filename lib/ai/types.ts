export type ContentInput={business:string;topic:string;platform:string;tone:string;theme:string};
export type AuditInput={business:string;location:string;website:string;marketing:string;challenge:string};
export type Recommendation={title:string;reason:string;nextStep:string;priority:'Start here'|'Next'|'Later'};
export type AIResult<T>={data:T;mode:'demo'|'live';provider:string};
export interface AIService {
 generateContent(input:ContentInput):Promise<AIResult<string>>;
 generateSocialPost(input:ContentInput):Promise<AIResult<string>>;
 generateEmail(input:ContentInput):Promise<AIResult<string>>;
 generateSEORecommendations(input:AuditInput):Promise<AIResult<Recommendation[]>>;
 analyzeBusiness(input:AuditInput):Promise<AIResult<Recommendation[]>>;
 generateLeadResponse(input:{name:string;request:string}):Promise<AIResult<string>>;
 generateCustomerResponse(input:{question:string}):Promise<AIResult<string>>;
 analyzeExpenses(input:{category:string;amount:number}[]):Promise<AIResult<string>>;
 generateBusinessRecommendations(input:AuditInput):Promise<AIResult<Recommendation[]>>;
}
