import React from 'react'
import '../../styles/contactcomponent/Customer.css'

const Customer = () => {
  return (
    <div className='customer'>
        <div className='customer-text'>
            <div className='customer-text-content1'>
                <h1>Customer Service</h1>
                <ul>
                    <li>Phone 123-456-7890</li>
                    <li>Email info@mysite.com</li>
                    <li>Monday-Friday 9:00am - 7:00pm EST</li>
                </ul>
            </div>
            <div className='customer-text-content2'>
                <h3>For questions regarding our products and services you can also contact us by filling out the form below.</h3>
            </div>
        </div>
        <div>
            <form>
                <div className='basic-details'>
                    <div>
                        <label>First Nme</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Second Name</label>
                        <input type='text'></input>
                    </div>
                </div>
                <div className='more-details'>
                    <div>
                        <label>Email*</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type='text'></input>
                    </div>
                </div>
                <div className='message'>
                    <label>Message*</label>
                    <input type='text'></input>
                </div>
                <div className='customer-button'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Customer
