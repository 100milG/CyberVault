import { Link } from 'react-scroll';
import { FaShieldAlt, FaUserSecret, FaClipboardCheck, FaQuestionCircle, FaComments } from 'react-icons/fa';

const Navigation = () => {
  const navItems = [
    { to: 'threat-simulations', text: 'Threats', icon: <FaShieldAlt /> },
    { to: 'cyber-hygiene', text: 'Hygiene', icon: <FaClipboardCheck /> },
    { to: 'hacker-profiles', text: 'Profiles', icon: <FaUserSecret /> },
    { to: 'quiz', text: 'Quiz', icon: <FaQuestionCircle /> },
    { to: 'feedback', text: 'Feedback', icon: <FaComments /> },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid var(--primary-color);
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-color);
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav-item:hover {
          color: var(--primary-color);
          background: rgba(0, 255, 157, 0.1);
        }

        .nav-item.active {
          color: var(--primary-color);
          background: rgba(0, 255, 157, 0.15);
        }

        @media (max-width: 768px) {
          .nav-container {
            gap: 1rem;
            padding: 0.5rem;
          }

          .nav-item span {
            display: none;
          }

          .nav-item {
            padding: 0.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation; 