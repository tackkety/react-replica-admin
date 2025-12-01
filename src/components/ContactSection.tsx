const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="heading">Contact <span>Us</span></h2>
      
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className='bx bx-envelope'></i>
              </div>
              <div className="contact-details">
                <h4>Email Us</h4>
                <p>afrirobot@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className='bx bx-phone'></i>
              </div>
              <div className="contact-details">
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className='bx bx-map'></i>
              </div>
              <div className="contact-details">
                <h4>Visit Us</h4>
                <p>Ethiopia, Addis Ababa</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="031cccab-56d5-46ea-817e-f3d85d257746" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            <div className="form-grid">
              <div className="input-group">
                <input type="text" name="name" placeholder=" " required />
                <label>Full Name</label>
                <div className="input-line"></div>
              </div>
              
              <div className="input-group">
                <input type="email" name="email" placeholder=" " required />
                <label>Email Address</label>
                <div className="input-line"></div>
              </div>
              
              <div className="input-group">
                <input type="tel" name="phone" placeholder=" " />
                <label>Phone Number</label>
                <div className="input-line"></div>
              </div>
              
              <div className="input-group">
                <input type="text" name="subject" placeholder=" " required />
                <label>Subject</label>
                <div className="input-line"></div>
              </div>
            </div>
            
            <div className="input-group full-width">
              <textarea name="message" rows={5} placeholder=" " required></textarea>
              <label>Your Message</label>
              <div className="input-line"></div>
            </div>
            
            <button type="submit" className="btn submit-btn">
              <h4>Send Message</h4>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;