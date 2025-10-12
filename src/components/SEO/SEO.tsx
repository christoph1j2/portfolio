import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "ECL IT - Weby na míru a IT Podpora | Západní Čechy, Mariánské Lázně",
  description = "ECL IT - Tvorba moderních webů, IT podpora, opravy počítačů. V Plzni, Teplé, Mariánských Lázních a Západních Čechách.",
  keywords = "opravy počítačů, servis notebooků, IT podpora, tvorba webů, IT služby, Západní Čechy, Teplá, Mariánské Lázně, Plzeň, weby pro firmy a podnikatele, ECL IT, konkurence monopolu, kvalitní weby, moderní weby, webové stránky, web design, SEO, správa webů, hosting, domény, školení, doučování, IOT, stavba PC, upgrade PC, zálohování dat, obnova dat, bezpečnost IT, lokální, dostupný, spolehlivý, mobilní",
  canonicalUrl = "https://ecl-it.cz/",
  ogImage = "/logo.png",
  ogType = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel: string, href: string, hrefLang?: string) => {
      let selector = `link[rel="${rel}"]`;
      if (hrefLang) {
        selector += `[hreflang="${hrefLang}"]`;
      }
      
      let link = document.querySelector(selector) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hrefLang) {
          link.setAttribute('hreflang', hrefLang);
        }
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', `https://ecl-it.cz${ogImage}`, true);
    updateMetaTag('og:locale', 'cs_CZ', true);
    updateMetaTag('og:site_name', 'ECL IT', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `https://ecl-it.cz${ogImage}`);

    // Update SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index,follow,max-snippet:-1,max-image-preview:large');

    // Update hreflang links
    updateLinkTag('alternate', canonicalUrl, 'cs');
    updateLinkTag('alternate', canonicalUrl, 'x-default');

  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null; // This component doesn't render anything
};

export default SEO;