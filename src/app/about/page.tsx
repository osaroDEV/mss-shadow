export default function About() {
  return (
    <div className="container" style={{paddingTop: '40px'}}>
      <h1 className="section-title">About Michael Stevens Solicitors</h1>
      
      <section className="section">
        <div className="container">
          <h2>Our History</h2>
          <p>Michael Stevens Solicitors has been serving the legal needs of our community for over 25 years. Founded in 1998, we have built a reputation for providing reliable, professional legal services across a wide range of practice areas.</p>
          <p>Our firm was established with the simple mission of providing accessible, high-quality legal representation to individuals and businesses alike.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Michael Stevens</h3>
              <p><strong>Senior Partner</strong></p>
              <p>Michael has over 30 years of experience in civil litigation and corporate law. He holds a degree from Oxford University and is a member of the Law Society.</p>
            </div>
            <div className="card">
              <h3>Sarah Johnson</h3>
              <p><strong>Partner</strong></p>
              <p>Sarah specializes in family law and employment disputes. She has been with the firm for 15 years and is known for her compassionate approach to client care.</p>
            </div>
            <div className="card">
              <h3>David Chen</h3>
              <p><strong>Associate</strong></p>
              <p>David focuses on property law and commercial transactions. He joined the firm in 2018 and brings fresh perspectives to complex legal challenges.</p>
            </div>
            <div className="card">
              <h3>Emma Williams</h3>
              <p><strong>Associate</strong></p>
              <p>Emma handles criminal defense cases and regulatory matters. She has extensive experience in court proceedings and client advocacy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Values</h2>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li className="card">
              <strong>Integrity:</strong> We maintain the highest ethical standards in all our dealings.
            </li>
            <li className="card">
              <strong>Excellence:</strong> We strive for excellence in every case we handle.
            </li>
            <li className="card">
              <strong>Client Focus:</strong> Your needs and interests are our top priority.
            </li>
            <li className="card">
              <strong>Accessibility:</strong> We believe legal services should be accessible to everyone.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
