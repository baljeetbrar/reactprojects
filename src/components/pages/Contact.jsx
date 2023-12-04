import React, {useState} from 'react'

const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ company, setCompany ] = useState('')
    const [ message, setMessage ] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault();

      // Simulate a successful submission
      alert('Email sent successfully.');

     // Clear the form fields after submission
  setName('');
  setEmail('');
  setPhone('');
  setCompany('');
  setMessage('');

  window.location.href = '/contact';
  };
  return (
    <>
    <form className="contact_form" onSubmit={handleSubmit}>
      <fieldset>
          <legend>Contact Us</legend>
          <section>
          <div className="input-group">
              <div>
                <label htmlFor="username">Name:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder='Your Name....'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
            
              <div>
                <label  htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="useremail"
                  name="useremail"
                  placeholder='Your Email....'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
          </div>
          <div className="input-group">
            <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder='Your Phone....'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
            </div>
            <div>
                <label htmlFor="company">Company:</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder='Your Company....'
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
            </div>
          </div>
            <div >
                <label htmlFor="message">Message:</label>
                <textarea className='form_message'
                  id="message"
                  name="message"
                  placeholder='Write a message....'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
            
          </div>
            <div>
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
          </section>
          <section>
          <img className="form_img" src="images/braintech.jpeg" alt="programmer" />
          </section>
      </fieldset>
    </form>
    </>
  )
}

export default Contact