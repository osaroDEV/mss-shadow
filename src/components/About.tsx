export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About Our Firm</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Our Experience</h3>
            <p>Michael Stevens Solicitors has been providing professional legal services for over 25 years. We have handled thousands of cases across multiple practice areas.</p>
            <ul style={{marginTop: '15px'}}>
              <li>✓ Over 25 years of experience</li>
              <li>✓ Qualified solicitors</li>
              <li>✓ Regulated by SRA</li>
              <li>✓ Competitive rates</li>
            </ul>
          </div>
          <div className="card">
            <h3>Why Choose Us</h3>
            <p>We are committed to providing high-quality legal services with personalized attention to each client's needs.</p>
            <ul style={{marginTop: '15px'}}>
              <li>✓ Free initial consultation</li>
              <li>✓ Transparent fee structure</li>
              <li>✓ 24/7 emergency support</li>
              <li>✓ Proven track record</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
