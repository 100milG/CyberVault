import { useInView } from 'react-intersection-observer';
import { FaCheck, FaLock, FaShieldAlt, FaUserSecret, FaWifi, FaDatabase, FaEnvelope, FaMobile } from 'react-icons/fa';

const tips = [
  {
    id: 1,
    icon: <FaLock />,
    title: 'Strong Passwords',
    description: 'Use complex passwords with numbers, symbols, and mixed case letters.',
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: 'Two-Factor Authentication',
    description: 'Enable 2FA on all your important accounts for extra security.',
  },
  {
    id: 3,
    icon: <FaUserSecret />,
    title: 'Privacy Settings',
    description: 'Regularly review and update privacy settings on social media.',
  },
  {
    id: 4,
    icon: <FaWifi />,
    title: 'Secure Networks',
    description: 'Avoid using public Wi-Fi without a VPN connection.',
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: 'Regular Backups',
    description: 'Keep important data backed up in secure, encrypted storage.',
  },
  {
    id: 6,
    icon: <FaEnvelope />,
    title: 'Email Security',
    description: 'Be cautious of unexpected attachments and verify sender addresses.',
  },
  {
    id: 7,
    icon: <FaMobile />,
    title: 'Device Updates',
    description: 'Keep all devices and software updated with security patches.',
  },
];

const TipCard = ({ tip, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`tip-card card ${inView ? 'fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="tip-icon">{tip.icon}</div>
      <div className="tip-content">
        <h3>{tip.title}</h3>
        <p>{tip.description}</p>
      </div>
      <div className="checkmark">
        <FaCheck />
      </div>
      <style jsx>{`
        .tip-card {
          opacity: 0;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .tip-icon {
          font-size: 2rem;
          color: var(--primary-color);
          flex-shrink: 0;
        }

        .tip-content {
          flex-grow: 1;
        }

        .tip-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .tip-content p {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .checkmark {
          color: var(--primary-color);
          font-size: 1.5rem;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
        }

        .tip-card:hover .checkmark {
          opacity: 1;
          transform: scale(1);
        }

        .tip-card.fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const CyberHygiene = () => {
  return (
    <section id="cyber-hygiene" className="section">
      <h2>Cyber Hygiene Tips</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <TipCard
            key={tip.id}
            tip={tip}
            delay={index * 100}
          />
        ))}
      </div>
      <style jsx>{`
        #cyber-hygiene {
          text-align: center;
        }

        h2 {
          margin-bottom: 3rem;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 0 auto;
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
};

export default CyberHygiene; 