import { Helmet } from 'react-helmet-async';

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
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`https://ecl-it.cz${ogImage}`} />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="ECL IT" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://ecl-it.cz${ogImage}`} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large" />
      <link rel="alternate" hrefLang="cs" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;