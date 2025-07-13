import Link from 'next/link'

export default function Header() {
  return (
    <header style={{backgroundColor: '#2c3e50', color: 'white', padding: '20px 0', borderBottom: '3px solid #34495e'}}>
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
          <div>
            <Link href="/" style={{color: 'white', textDecoration: 'none'}}>
              <h1 style={{fontSize: '24px', fontWeight: 'bold'}}>MICHAEL STEVENS SOLICITORS</h1>
            </Link>
            <p style={{fontSize: '14px', margin: '5px 0'}}>Professional Legal Services Since 1998</p>
          </div>
          <div style={{display: 'flex', gap: '10px', fontSize: '14px'}}>
            <span>📞 +44 (0) 20 7123 4567</span>
            <span>✉️ info@michaelstevenssolicitors.co.uk</span>
          </div>
        </div>
        <nav style={{marginTop: '20px'}}>
          <ul style={{display: 'flex', listStyle: 'none', gap: '0', flexWrap: 'wrap'}}>
            <li><Link href="/" className="btn" style={{marginRight: '5px', marginBottom: '5px'}}>HOME</Link></li>
            <li><Link href="/about" className="btn" style={{marginRight: '5px', marginBottom: '5px'}}>ABOUT</Link></li>
            <li><Link href="/services" className="btn" style={{marginRight: '5px', marginBottom: '5px'}}>SERVICES</Link></li>
            <li><Link href="/contact" className="btn" style={{marginRight: '5px', marginBottom: '5px'}}>CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
