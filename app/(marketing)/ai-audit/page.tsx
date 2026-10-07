import {PageIntro} from '@/components/marketing/shared';
import {Audit} from '@/components/tools/audit';
export const metadata={alternates:{canonical:'/ai-audit'},title:'Free AI Business Opportunity Finder',description:'Answer a few questions and explore sample AI, marketing and automation opportunities for your Elkhart business.'};
export default function AuditPage(){return <><PageIntro eyebrow="A PRACTICAL FIRST LOOK" title="Where could your business work better?" description="Share a little about your business and explore a simple, sample opportunity plan. Use it to start a more useful conversation."/><section className="container section"><Audit/></section></>}
