import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';
import { profile } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to FormKeep
      const response = await fetch('https://formkeep.com/p/e3b4f69511ee487ce055301f38eeb70d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Get in Touch</h1>
          <p className="text-muted">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <Mail size={20} />
                  <span>{profile.email}</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Github size={20} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="contact-card">
              <h3>Let's Collaborate</h3>
              <p className="text-muted">
                I'm always interested in hearing about new opportunities, projects, and collaborations in product management, AI/ML strategy, and technical leadership.
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
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
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me more..."
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
