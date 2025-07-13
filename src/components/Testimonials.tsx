export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      text: "Michael Stevens Solicitors helped me with my property dispute. They were professional and got results.",
      service: "Property Law"
    },
    {
      name: "Sarah Johnson",
      text: "Excellent service for my divorce case. They made a difficult time much easier to handle.",
      service: "Family Law"
    },
    {
      name: "David Brown",
      text: "Great legal advice for my business. They understand commercial law very well.",
      service: "Corporate Law"
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card" style={{backgroundColor: '#ecf0f1'}}>
              <p style={{marginBottom: '15px', fontStyle: 'italic'}}>"{testimonial.text}"</p>
              <div style={{borderTop: '1px solid #bdc3c7', paddingTop: '15px'}}>
                <strong>{testimonial.name}</strong>
                <p style={{fontSize: '14px', color: '#7f8c8d'}}>{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
