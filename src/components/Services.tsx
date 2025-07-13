export default function Services() {
  const services = [
    {
      title: "Civil Litigation",
      description: "Contract disputes, property disputes, and personal injury claims."
    },
    {
      title: "Corporate Law",
      description: "Business formation, mergers & acquisitions, and commercial contracts."
    },
    {
      title: "Family Law",
      description: "Divorce proceedings, child custody, and adoption services."
    },
    {
      title: "Employment Law",
      description: "Employment contracts, workplace disputes, and discrimination claims."
    },
    {
      title: "Property Law",
      description: "Property sales & purchases, landlord & tenant law, and real estate disputes."
    },
    {
      title: "Criminal Defense",
      description: "Criminal defense, traffic violations, and white collar crime."
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Legal Services</h2>
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3 style={{marginBottom: '10px'}}>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/contact" className="btn" style={{marginTop: '15px'}}>
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
