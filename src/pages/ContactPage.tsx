import type { FormEvent } from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_82akh6o', // Service ID
        'template_tf2xqmc', // Template ID
        formRef.current,
        'VerbKgFEHte6euhPE', // Public key
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
        },
        () => {
          setStatus('error');
        },
      );
  };

  return (
    <section className="section">
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
          Contact
        </p>
        <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Book your free growth consultation</h1>
        <p style={{ fontSize: 15, color: '#cbd5f5', marginBottom: 24 }}>
          Share a bit about your business and goals. We&apos;ll review your current setup and get back within one
          business day with next steps.
        </p>
        <div className="grid-content">
          <form
            ref={formRef}
            className="gradient-border"
            style={{ borderRadius: 22, padding: 1 }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
                borderRadius: 20,
                background: 'rgba(15,23,42,0.96)',
                padding: 18,
                display: 'grid',
                gap: 12,
                fontSize: 13,
              }}
            >
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  placeholder="hello@virtualdigitalhb.com"
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                  }}
                />
              </div>
              <div>
                <label htmlFor="business">Business / company</label>
                <input
                  id="business"
                  name="company"
                  placeholder="Brand / company name"
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                  }}
                />
              </div>
              <div>
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals, current monthly revenue and channels you use today."
                  style={{
                    width: '100%',
                    marginTop: 4,
                    borderRadius: 10,
                    border: '1px solid rgba(148,163,184,0.6)',
                    background: 'rgba(15,23,42,0.96)',
                    padding: '8px 10px',
                    color: '#e5f0ff',
                    resize: 'vertical',
                  }}
                />
              </div>
              <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit inquiry'}
              </button>
              {status === 'success' && (
                <p style={{ fontSize: 12, color: '#22c55e' }}>Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p style={{ fontSize: 12, color: '#f97373' }}>Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
          <div style={{ fontSize: 14, color: '#9ca3af', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div>
              <h2 style={{ fontSize: 18 }}>Other ways to reach us</h2>
              <p>Email: virtualdigitalhb@gmail.com</p>
              <p>WhatsApp: +92 3705978907</p>
            </div>
            <div>
              <h3 style={{ fontSize: 15, marginTop: 8 }}>Socials</h3>
              <p>
                <a href="https://www.instagram.com/virtual_digital_hb" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>
                  Instagram
                </a>{' '}
                •{' '}
                <a href="https://www.linkedin.com/in/virtual_digital_hb" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>
                  LinkedIn
                </a>{' '}
                •{' '}
                <a href="https://www.tiktok.com/@virtual_digital_hb" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }}>
                  TikTok
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

