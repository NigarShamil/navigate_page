import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TextsmsIcon from '@mui/icons-material/Textsms';

const ContactUs = () => {
  return (
    <div className='contact_field'>
      <div className="text">
        <p>Contact Us</p>
        <p>Contact Support</p>
      </div>
      <div className="support">
        <div className="chat">
          <span><ChatIcon /></span>
          <h3>Chat</h3>
          <p>What's supported?</p>
          <p>All things related to our company</p>
          <div className="input">
            <input type="text" placeholder='Chat: Closed' />
          </div>
        </div>
        <div className="chat">
          <span><TextsmsIcon /></span>
          <h3>Text Message</h3>
          <p>What's supported?</p>
          <p>All things related to our company</p>
          <div className="input">
            <input type="text" placeholder='Text: Closed' />
          </div>
        </div>
        <div className="chat">
          <span><PhoneIcon /></span>
          <h3>Phone</h3>
          <p>What's supported?</p>
          <p>All products and servvices</p>
          <div className="input">
            <input type="text" placeholder='Phone: Closed' />
          </div>
        </div>
        <div className="chat">
          <span><EmailIcon /></span>
          <h3>Help Ticket</h3>
          <p>What's supported?</p>
          <p>Varies by topic selected</p>
          <div className="input">
            <select name="topic" id="topic">
              <option value="topics">Select topic</option>
              <option value="topics">topic2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs