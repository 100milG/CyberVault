import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import { db } from '../config/firebase';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    threat: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'feedback'), {
        ...formData,
        timestamp: new Date(),
      });
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
      console.error('Error submitting feedback:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="feedback-success card fade-in">
        <FaCheck className="success-icon" />
        <h3>Thank You!</h3>
        <p>Your feedback has been submitted successfully.</p>
        <style jsx>{`
          .feedback-success {
            text-align: center;
            padding: 3rem;
          }

          .success-icon {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    );
  }

  return (
    <section id="feedback" className="section">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form card">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="threat">Report a Threat (Optional)</label>
          <textarea
            id="threat"
            name="threat"
            value={formData.threat}
            onChange={handleChange}
            rows="3"
            placeholder="Describe any security threats or vulnerabilities you've encountered..."
          ></textarea>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="button submit-button" disabled={isSubmitting}>
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              Submit Feedback <FaPaperPlane className="button-icon" />
            </>
          )}
        </button>
      </form>
      <style jsx>{`
        .feedback-form {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
        }

        .error-message {
          color: #f44336;
          margin-bottom: 1rem;
        }

        .submit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .button-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .feedback-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeedbackForm; 