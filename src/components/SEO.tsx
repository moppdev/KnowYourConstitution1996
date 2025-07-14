import { useLocation } from 'react-router';
import img from '../assets/og.png'

// this component uses React Helmet to change the title of each page and adjust its SEO
export default function SEO({title, description, keywords, heroImgHref}: {title: string, description: string, keywords: string, heroImgHref?: string})
{
    const location = useLocation();
    const canonicalUrl = `https://www.kyc1996.co.za${location.pathname}`;

      return (
        <>
            {/* Change the title in the browser tab, add meta tags for SEO */}
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel='canonical' href={canonicalUrl} />
          <meta name="keywords" content={keywords}/>

          {/* Preload hero image */}
          {heroImgHref && <link rel="preload" as="image" href={heroImgHref} fetchPriority="high" />}

          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={img} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={img} />
        </>
      )
}