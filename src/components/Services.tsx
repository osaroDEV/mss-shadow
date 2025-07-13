export default function Services() {
  const services = [
    {
      title: 'Business Migration',
      description:
        'If you employ a foreign national or are intending to do so, you will need to have a Sponsorship Licence. We can advice you on how you can sponsor foreign nationals to come to the United Kingdom to work for you.',
    },
    {
      title: 'Employment Matters',
      description:
        'Employment law claims are complex and time-sensitive, so act fast. Speak to our solicitors for clear advice and the best solution, aiming for out-of-court resolutions whenever possible. ',
    },
    {
      title: 'Family Law',
      description:
        'We offer advice and representations on a privately funded basis in the preparation of Divorce, Judicial Separation and Dissolution of Civil Partnerships petitions. ',
    },
    {
      title: 'Housing Landlord and Tenants',
      description:
        'We advise and represent in any matter or issues arising with local housing authorities, housing applications, tenants, landlords, ownership, repairs and many more. ',
    },
    {
      title: 'Wills and Probate',
      description: 'We undertake non-contentious probate matters.',
    },
    {
      title: 'Immigration Law',
      description:
        'We help you visit, work, study, or join your family in the UK. We also represent complex immigration, asylum, and human rights cases in court.',
    },
  ];

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='section-title'>Our Legal Services</h2>
        <div className='grid grid-3'>
          {services.map((service, index) => (
            <div key={index} className='card'>
              <h3 style={{ marginBottom: '10px' }}>{service.title}</h3>
              <p>{service.description}</p>
              <a href='/contact' className='btn' style={{ marginTop: '15px' }}>
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
