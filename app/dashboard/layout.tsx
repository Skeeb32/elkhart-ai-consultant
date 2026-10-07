import {DashboardShell} from '@/components/dashboard/shell';
import {DemoProvider} from '@/components/dashboard/store';
export const metadata={title:'Demo Client Workspace',robots:{index:false,follow:false}};
export default function DashboardLayout({children}:{children:React.ReactNode}){return <DemoProvider><DashboardShell>{children}</DashboardShell></DemoProvider>}
