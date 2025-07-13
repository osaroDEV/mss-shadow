import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="grid grid-2">
            <div>
              <h3 style={{marginBottom: '15px'}}>Contact Information</h3>
              <div style={{marginBottom: '15px'}}>
                <strong>Phone:</strong> +44 (0) 20 7123 4567
              </div>
              <div style={{marginBottom: '15px'}}>
                <strong>Email:</strong> info@michaelstevenssolicitors.co.uk
              </div>
              <div style={{marginBottom: '15px'}}>
                <strong>Address:</strong> 123 Legal Street, London, UK
              </div>
              <div className="card" style={{backgroundColor: '#ecf0f1'}}>
                <h4>Emergency Legal Advice</h4>
                <p>Need urgent legal assistance? Our emergency hotline is available 24/7.</p>
                <strong>Emergency: +44 (0) 20 7123 4567</strong>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
