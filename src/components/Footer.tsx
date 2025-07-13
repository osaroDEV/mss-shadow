import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#34495e', color: 'white', padding: '40px 0', marginTop: '40px'}}>
      <div className="container">
        <div className="grid grid-3">
          <div>
            <h3 style={{marginBottom: '15px'}}>MICHAEL STEVENS SOLICITORS</h3>
            <p>Professional legal services with over 25 years of experience serving our community.</p>
            <p style={{marginTop: '10px'}}>
              <strong>Licensed by:</strong> Solicitors Regulation Authority<br />
              <strong>SRA Number:</strong> 123456
            </p>
          </div>
          <div>
            <h3 style={{marginBottom: '15px'}}>QUICK LINKS</h3>
            <ul style={{listStyle: 'none'}}>
              <li style={{marginBottom: '8px'}}><Link href="/" style={{color: 'white', textDecoration: 'underline'}}>Home</Link></li>
              <li style={{marginBottom: '8px'}}><Link href="/about" style={{color: 'white', textDecoration: 'underline'}}>About Us</Link></li>
              <li style={{marginBottom: '8px'}}><Link href="/services" style={{color: 'white', textDecoration: 'underline'}}>Our Services</Link></li>
              <li style={{marginBottom: '8px'}}><Link href="/contact" style={{color: 'white', textDecoration: 'underline'}}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{marginBottom: '15px'}}>CONTACT INFO</h3>
            <p>123 Legal Street<br />London, UK SW1A 1AA</p>
            <p style={{marginTop: '10px'}}>
              <strong>Phone:</strong> +44 (0) 20 7123 4567<br />
              <strong>Email:</strong> info@michaelstevenssolicitors.co.uk
            </p>
            <p style={{marginTop: '10px'}}>
              <strong>Emergency 24/7:</strong> +44 (0) 20 7123 4567
            </p>
          </div>
        </div>
        <div style={{borderTop: '1px solid #4a5f7a', marginTop: '30px', paddingTop: '20px', textAlign: 'center'}}>
          <p>&copy; 2025 Michael Stevens Solicitors. All rights reserved.</p>
          <p style={{fontSize: '12px', marginTop: '10px'}}>
            <Link href="/privacy" style={{color: 'white', textDecoration: 'underline'}}>Privacy Policy</Link> | 
            <Link href="/terms" style={{color: 'white', textDecoration: 'underline'}}> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
