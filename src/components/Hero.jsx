import { useParallax } from 'react-scroll-parallax';
import { Link } from 'react-scroll';

const Hero = () => {
  const { ref } = useParallax({
    speed: -10,
  });

  return (
    <section className="hero section" ref={ref}>
      <div className="hero-content fade-in">
        <h1 className="hero-title">Welcome to CyberVault</h1>
        <p className="hero-subtitle">Navigate the Threat Matrix</p>
        <Link
          to="threat-simulations"
          smooth={true}
          duration={500}
          className="button"
        >
          Start the Journey
        </Link>
      </div>
      <div className="hero-background">
        <div className="grid-overlay"></div>
      </div>
      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          z-index: 2;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          letter-spacing: 3px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--secondary-color);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(transparent 1px, var(--background-color) 1px),
                          linear-gradient(90deg, transparent 1px, var(--background-color) 1px);
          background-size: 30px 30px;
          opacity: 0.1;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 