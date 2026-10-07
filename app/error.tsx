'use client';
export default function ErrorPage({reset}:{error:Error;reset:()=>void}){return <main id="main" className="container section"><h1>Something didn’t load.</h1><p className="section-lead">Please try again. Your draft may need to be entered again after a refresh.</p><button className="button mt-7" onClick={reset}>Try again</button></main>}
