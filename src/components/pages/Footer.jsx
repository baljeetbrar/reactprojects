import React from 'react'


const Footer = () => {
  return (
    <>
    <footer className="footer_wrapper">
      
        <div className="footer-column">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio vel arcu hendrerit consectetur.</p>
        </div>
        <div className="footer-column">
            <h2>Quick Links</h2>
            <ul className='footer_list'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter to get updates on our latest projects and news.</p>
            <form action="#">
                <input id='footer-email' name='footer-email' type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        <div className="footer-column">
            <h2>Contact Us</h2>
            <address>
                123 Main Street<br/>
                City, State ZIP<br/>
                Email: example@example.com<br/>
                Phone: (123) 456-7890
            </address>
        </div>
        
    </footer>
    </>
  )
}

export default Footer