export default function About() {
  return (
    <div className='container' style={{ paddingTop: '40px' }}>
      <h1 className='section-title'>About Michael Stevens Solicitors</h1>

      <section className='section'>
        <div className='container'>
          <h2>Our History</h2>
          <p>
            Michael Stevens Solicitors is a success driven law firm based in
            London. Our team of lawyers have a niche for assisting clients with
            their legal matters in a friendly and efficient manner in every area
            we operate. Specifically we offer the following legal services:
            Employment, Family, Immigration, Housing, Civil Litigation, Wills
            and Probate. We strive to provide the very best in legal services.
          </p>

          <p>
            As a result of the firms' expertise, we are dedicated to adopting
            practical innovative strategies to solve legal problems quickly,
            required to achieve our clients goals without compromise. We
            approach our commitment by working towards meeting the quality of
            service and advice standards set by our regulatory body.
          </p>

          <p>
            We are authorised and regulated by the Solicitors Regulatory
            Authority, and also members of the Law Society of England and Wales.
          </p>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <h2>Our Team</h2>
          <div className='grid grid-2'>
            <div className='card'>
              <h3>Michael Stevens</h3>
              <p>
                <strong>Senior Partner</strong>
              </p>
              <p>
                Michael has over 30 years of experience in civil litigation and
                corporate law. He holds a degree from Oxford University and is a
                member of the Law Society.
              </p>
            </div>
            <div className='card'>
              <h3>Sarah Johnson</h3>
              <p>
                <strong>Partner</strong>
              </p>
              <p>
                Sarah specializes in family law and employment disputes. She has
                been with the firm for 15 years and is known for her
                compassionate approach to client care.
              </p>
            </div>
            <div className='card'>
              <h3>David Chen</h3>
              <p>
                <strong>Associate</strong>
              </p>
              <p>
                David focuses on property law and commercial transactions. He
                joined the firm in 2018 and brings fresh perspectives to complex
                legal challenges.
              </p>
            </div>
            <div className='card'>
              <h3>Emma Williams</h3>
              <p>
                <strong>Associate</strong>
              </p>
              <p>
                Emma handles criminal defense cases and regulatory matters. She
                has extensive experience in court proceedings and client
                advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <h2>Our Values</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className='card'>
              <strong>Integrity:</strong> We maintain the highest ethical
              standards in all our dealings.
            </li>
            <li className='card'>
              <strong>Excellence:</strong> We strive for excellence in every
              case we handle.
            </li>
            <li className='card'>
              <strong>Client Focus:</strong> Your needs and interests are our
              top priority.
            </li>
            <li className='card'>
              <strong>Accessibility:</strong> We believe legal services should
              be accessible to everyone.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
