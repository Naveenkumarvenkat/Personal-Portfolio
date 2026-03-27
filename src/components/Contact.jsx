import React, { useEffect, useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Linkedin, Github, Code2, Send, Loader2 } from 'lucide-react';
import { getContactInfo, sendContactMessage } from '../services/api';

const getIcon = (key) => {
  switch (key) {
    case 'email': return <Mail size={20} />;
    case 'phone': return <Phone size={20} />;
    case 'location': return <MapPin size={20} />;
    case 'linkedin': return <Linkedin size={20} />;
    case 'github': return <Github size={20} />;
    case 'leetcode': return <Code2 size={20} />;
    default: return <Mail size={20} />;
  }
};

const defaultContactInfo = {
  email: 'naveenkumarsasi05@gmail.com',
  phone: '+91 9487875185',
  location: 'Madurai, Tamil Nadu, India',
  linkedin: 'linkedin.com/in/naveen-kumar-v-568b832a4',
  github: 'github.com/Naveenkumarvenkat',
  leetcode: 'leetcode.com/u/naveenkumarvenkat/',
};

const getHref = (key, value) => {
  switch (key) {
    case 'email': return `mailto:${value}`;
    case 'phone': return `tel:${value.replace(/\s+/g, '')}`;
    case 'linkedin':
    case 'github':
    case 'leetcode':
      return value.startsWith('http') ? value : `https://${value}`;
    default: return null;
  }
};

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [infoLoading, setInfoLoading] = useState(true);
  const [infoError, setInfoError] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getContactInfo();
        setContactInfo(data);
      } catch (err) {
        setContactInfo(defaultContactInfo);
        setInfoError(true);
      } finally {
        setInfoLoading(false);
      }
    };
    fetchInfo();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFormStatus(null);
    try {
      await sendContactMessage(form);
      setFormStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setFormStatus('error');
    } finally {
      setSending(false);
    }
  };

  const infoEntries = contactInfo ? Object.entries(contactInfo) : [];

  return (
    <div className="container section-wrapper">
      <h2 className="section-title">Contact & Hire Me</h2>
      <div className="contact-grid">

        <div className="contact-info-panel premium-card">
          <h3 className="contact-info-title">Let's Connect</h3>
          <p className="contact-info-subtitle">Feel free to reach out for collaborations or opportunities!</p>
          {infoLoading ? (
            <div className="contact-loading"><Loader2 size={24} className="spin-icon" /> Loading...</div>
          ) : (
            <div className="contact-info-list">
              {infoEntries
                .filter(([key, value]) => !['linkedin', 'github', 'leetcode'].includes(key) && value?.toString().trim() !== '1')
                .map(([key, value]) => {
                  const href = getHref(key, value);
                  return (
                    <div key={key} className="contact-info-item">
                      <span className="contact-info-icon">{getIcon(key)}</span>
                      {href ? (
                        <a href={href} target={key === 'email' || key === 'phone' ? '_self' : '_blank'} rel="noopener noreferrer" className="contact-info-link">
                          {value}
                        </a>
                      ) : (
                        <span className="contact-info-value">{value}</span>
                      )}
                    </div>
                  );
                })}

              <div className="contact-info-social-row">
                {infoEntries
                  .filter(([key]) => ['linkedin', 'github', 'leetcode'].includes(key))
                  .map(([key, value]) => (
                    <a
                      key={key}
                      href={getHref(key, value)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-icon"
                      title={key.charAt(0).toUpperCase() + key.slice(1)}
                    >
                      {getIcon(key)}
                    </a>
                  ))}
              </div>
            </div>
          )}
          {/* Note removed to show default data seamlessly */}
        </div>

        <div className="contact-form-panel premium-card">
          <h3 className="contact-form-title">Send a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project... (or include your number for a quick DM)" required rows="5"></textarea>
            </div>

            <div className="contact-dm-action">
              <p>Or chat directly:</p>
              <a
                href={`https://wa.me/${defaultContactInfo.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-whatsapp"
              >
                DM on WhatsApp
              </a>
            </div>
            <button type="submit" className="btn btn-primary shimmer-effect" disabled={sending}>
              {sending ? <><Loader2 size={18} className="spin-icon" /> Sending...</> : <><Mail size={18} /> Send Message</>}
            </button>
            {formStatus === 'success' && <p className="form-feedback success">✅ Message sent successfully!</p>}
            {formStatus === 'error' && <p className="form-feedback error">❌ Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
