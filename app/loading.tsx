import {Skeleton} from '@/components/ui/skeleton';
export default function Loading(){return <div className="container section" role="status" aria-label="Loading page"><Skeleton className="h-12 w-2/3 mb-6"/><Skeleton className="h-5 w-full mb-3"/><Skeleton className="h-5 w-3/4"/><span className="sr-only">Loading page…</span></div>}
