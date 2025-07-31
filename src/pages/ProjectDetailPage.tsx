import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import styles from './ProjectDetailPage.module.css';

// Project data for offline projects
const offlineProjects = {
  'lacehub': {
    title: 'LaceHub',
    description: 'Full-stack platforma pro přeprodejce tenisek pomocí Reactu a Nest.js',
    fullDescription: 'LaceHub byla komplexní platforma určená pro přeprodejce tenisek. Aplikace obsahovala uživatelské profily, marketplace funkcionalitu, platební systém a administrační rozhraní. Projekt byl vyvinut s důrazem na moderní design a uživatelskou přívětivost.',
    tech: ['React', 'Nest.js', 'PostgreSQL', 'TypeScript', 'Stripe', 'JWT Auth'],
    features: [
      'Uživatelské účty a profily',
      'Marketplace s pokročilým vyhledáváním',
      'Platební systém pomocí Stripe',
      'Administrační panel',
      'Responzivní design',
      'Real-time notifikace'
    ],
    images: ['/placeholder-project.jpg'],
    status: 'Projekt již není online',
    year: '2023'
  },
  'ecommerce-shop': {
    title: 'E-commerce Shop',
    description: 'Moderní e-shop s kompletní funkcionalitou',
    fullDescription: 'Kompletní e-commerce řešení s košíkem, platbami, správou produktů a objednávek. Aplikace byla optimalizována pro rychlost a SEO.',
    tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Správa produktů',
      'Košík a checkout',
      'Platební brána',
      'Správa objednávek',
      'SEO optimalizace'
    ],
    images: ['/placeholder-project.jpg'],
    status: 'Projekt již není online',
    year: '2023'
  }
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = offlineProjects[projectId as keyof typeof offlineProjects];

  if (!project) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>Projekt nenalezen</h1>
            <p>Omlouváme se, ale požadovaný projekt neexistuje.</p>
            <Link to="/portfolio" className={styles.backLink}>
              ← Zpět na portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <Link to="/portfolio" className={styles.backLink}>
            ← Zpět na portfolio
          </Link>
        </div>

        <div className={styles.projectHeader}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{project.title}</h1>
            <span className={styles.year}>{project.year}</span>
          </div>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.status}>{project.status}</div>
        </div>

        <div className={styles.content}>
          <div className={styles.details}>
            <section className={styles.section}>
              <h2>O projektu</h2>
              <p>{project.fullDescription}</p>
            </section>

            <section className={styles.section}>
              <h3>Použité technologie</h3>
              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h3>Klíčové funkce</h3>
              <ul className={styles.features}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className={styles.images}>
            <h3>Ukázky z projektu</h3>
            {project.images.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className={styles.projectImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
