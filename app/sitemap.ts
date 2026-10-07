import type {MetadataRoute} from 'next';
import {site} from '@/config/site';
import {services} from '@/config/services';
import {articles} from '@/config/articles';
export default function sitemap():MetadataRoute.Sitemap{return ['','/services','/pricing','/about','/contact','/ai-audit','/tools','/blog','/privacy','/terms',...services.map(s=>`/services/${s.slug}`),...articles.map(a=>`/blog/${a.slug}`)].map(path=>({url:`${site.url}${path}`,changeFrequency:'monthly',priority:path===''?1:.7}))}
