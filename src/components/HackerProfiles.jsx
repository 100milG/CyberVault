import { useInView } from 'react-intersection-observer';
import { FaUserNinja, FaUserSecret, FaBuilding, FaGlobe } from 'react-icons/fa';

const hackerProfiles = [
  {
    id: 1,
    title: 'Script Kiddie',
    icon: <FaUserNinja />,
    description: 'Inexperienced hackers who use existing scripts and tools without understanding them.',
    traits: ['Limited technical knowledge', 'Uses pre-made tools', 'Opportunistic attacks'],
    threatLevel: 'Low',
    color: '#4CAF50',
  },
  {
    id: 2,
    title: 'Black Hat',
    icon: <FaUserSecret />,
    description: 'Malicious hackers who breach security for personal gain or malicious intent.',
    traits: ['Advanced technical skills', 'Creates custom malware', 'Targets valuable data'],
    threatLevel: 'High',
    color: '#f44336',
  },
  {
    id: 3,
    title: 'Insider Threat',
    icon: <FaBuilding />,
    description: 'Employees or contractors who misuse their authorized access.',
    traits: ['Has legitimate access', 'Knowledge of systems', 'Internal motivation'],
    threatLevel: 'Medium',
    color: '#ff9800',
  },
  {
    id: 4,
    title: 'Nation-State Actor',
    icon: <FaGlobe />,
    description: 'Government-sponsored groups with sophisticated capabilities.',
    traits: ['Advanced persistent threats', 'Unlimited resources', 'Strategic targets'],
    threatLevel: 'Critical',
    color: '#9c27b0',
  },
];

const HackerCard = ({ profile, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`hacker-card card ${inView ? 'fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="threat-level" style={{ backgroundColor: profile.color }}>
        {profile.threatLevel}
      </div>
      <div className="hacker-icon">{profile.icon}</div>
      <h3>{profile.title}</h3>
      <p className="description">{profile.description}</p>
      <div className="traits">
        {profile.traits.map((trait, index) => (
          <span key={index} className="trait">
            {trait}
          </span>
        ))}
      </div>
      <style jsx>{`
        .hacker-card {
          opacity: 0;
          position: relative;
          overflow: hidden;
          padding-top: 3rem;
        }

        .threat-level {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.5rem 1rem;
          color: white;
          font-size: 0.9rem;
          border-bottom-left-radius: 8px;
        }

        .hacker-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 1rem;
        }

        .description {
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .traits {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .trait {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          color: var(--primary-color);
        }

        .hacker-card.fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const HackerProfiles = () => {
  return (
    <section id="hacker-profiles" className="section">
      <h2>Hacker Profiles</h2>
      <div className="grid">
        {hackerProfiles.map((profile, index) => (
          <HackerCard
            key={profile.id}
            profile={profile}
            delay={index * 200}
          />
        ))}
      </div>
      <style jsx>{`
        #hacker-profiles {
          text-align: center;
        }

        h2 {
          margin-bottom: 3rem;
        }
      `}</style>
    </section>
  );
};

export default HackerProfiles; 