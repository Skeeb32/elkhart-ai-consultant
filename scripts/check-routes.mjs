import {services} from '../config/services.ts';
import {articles} from '../config/articles.ts';
import {dashboardLinks} from '../config/demo.ts';
const origin=process.argv[2]||'http://127.0.0.1:5173';
const paths=['/','/services','/pricing','/about','/contact','/ai-audit','/tools','/blog','/privacy','/terms',...services.map(s=>`/services/${s.slug}`),...articles.map(a=>`/blog/${a.slug}`),'/dashboard',...dashboardLinks.map(([,s])=>`/dashboard/${s}`)];
const failures=[];
for(const path of paths){
 const response=await fetch(new URL(path,origin));const html=await response.text();
 if(response.status!==200||(html.match(/<h1\b/g)||[]).length!==1)failures.push(`${path}: expected HTTP 200 and exactly one h1; got ${response.status}`);
}
for(const [path,status] of [['/sitemap.xml',200],['/robots.txt',200],['/not-a-page',404],['/services/not-a-service',404],['/blog/not-a-post',404],['/dashboard/not-a-module',404]]){
 const response=await fetch(new URL(path,origin));if(response.status!==status)failures.push(`${path}: expected ${status}, got ${response.status}`);
}
if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}else console.log(`${paths.length} application routes, metadata endpoints, and invalid-route responses passed.`);
