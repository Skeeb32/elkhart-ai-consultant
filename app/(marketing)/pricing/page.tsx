import {PageIntro,CTA} from '@/components/marketing/shared';
import {PricingCards,FAQ} from '@/components/marketing/sections';
export const metadata={alternates:{canonical:'/pricing'},title:'Example Plans & Pricing',description:'Compare flexible example plans for practical AI consulting, marketing, and automation in Elkhart.'};
export default function Pricing(){return <><PageIntro eyebrow="START WHERE YOU ARE" title="A practical plan for your next step." description="Get focused help today, with room to connect more of your business tomorrow. These example prices help frame a conversation; your proposal defines the actual scope."/><section className="container section"><PricingCards/></section><FAQ/><CTA/></>}
