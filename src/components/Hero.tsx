export default function Hero() {
  return (
    <section style={{backgroundColor: '#95a5a6', padding: '60px 0', borderBottom: '3px solid #7f8c8d'}}>
      <div className="container">
        <div style={{textAlign: 'center'}}>
          <h1 style={{fontSize: '36px', marginBottom: '20px', color: '#2c3e50'}}>
            MICHAEL STEVENS SOLICITORS
          </h1>
          <p style={{fontSize: '18px', marginBottom: '30px', color: '#34495e'}}>
            Professional Legal Services | Trusted Advice | Over 25 Years Experience
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
            <a href="/contact" className="btn" style={{fontSize: '18px', padding: '15px 30px'}}>
              FREE CONSULTATION
            </a>
            <a href="/services" className="btn btn-secondary" style={{fontSize: '18px', padding: '15px 30px'}}>
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
