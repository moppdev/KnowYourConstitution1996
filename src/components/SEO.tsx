import { useLocation } from 'react-router';

// this component uses React Helmet to change the title of each page and adjust its SEO
export default function SEO({title, description, keywords}: {title: string, description: string, keywords: string})
{
    const location = useLocation();
    const canonicalUrl = `https://kyc1996.vercel.app/${location.pathname}`;

      return (
        <>
            {/* Change the title in the browser tab, add meta tags for SEO */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel='canonical' href={canonicalUrl} />
          <meta name="keywords" content={keywords}/>
        </>
      )
}