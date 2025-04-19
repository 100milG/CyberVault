import { useInView } from 'react-intersection-observer';
import { FaShieldVirus, FaLock, FaServer, FaKeyboard } from 'react-icons/fa';

const threats = [
  {
    id: 1,
    title: 'Phishing Attacks',
    description: 'Social engineering attacks that trick users into revealing sensitive information.',
    icon: <FaShieldVirus />,
  },
  {
    id: 2,
    title: 'Ransomware',
    description: 'Malicious software that encrypts files and demands payment for decryption.',
    icon: <FaLock />,
  },
  {
    id: 3,
    title: 'DDoS Attacks',
    description: 'Overwhelming servers with traffic to disrupt services.',
    icon: <FaServer />,
  },
  {
    id: 4,
    title: 'Keyloggers',
    description: 'Malware that records keystrokes to steal passwords and sensitive data.',
    icon: <FaKeyboard />,
  },
];

const ThreatCard = ({ threat, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`threat-card card ${inView ? 'fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="threat-icon">{threat.icon}</div>
      <h3>{threat.title}</h3>
      <p>{threat.description}</p>
      <style jsx>{`
        .threat-card {
          opacity: 0;
          text-align: center;
        }

        .threat-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .threat-card.fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const ThreatSimulations = () => {
  return (
    <section id="threat-simulations" className="section">
      <h2>Threat Simulations</h2>
      <div className="grid">
        {threats.map((threat, index) => (
          <ThreatCard
            key={threat.id}
            threat={threat}
            delay={index * 200}
          />
        ))}
      </div>
      <style jsx>{`
        #threat-simulations {
          text-align: center;
        }

        h2 {
          margin-bottom: 3rem;
        }
      `}</style>
    </section>
  );
};

export default ThreatSimulations; 