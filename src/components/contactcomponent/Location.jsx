import React, { useState } from 'react'
import '../../styles/contactcomponent/Location.css'

const Location = () => {
  // Track active tab
  const [activeTab, setActiveTab] = useState("one");

  // Tab data with different content
  const tabs = [
    { 
      id: "one", 
      label: "Store 1", 
      content: (
        <div className='page1'>
          <img src="https://static.wixstatic.com/media/84770f_c466511693744344bd5ecc9a574157b2~mv2.jpeg/v1/fill/w_980,h_537,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/wixagency_Jewelry_store_interior_design_white_and_gold_color_sc_29b0c417-7f4b-4cd7-be05-f6.jpeg" alt="Store 1" />
          <div>
            <h3>San Francisco Store</h3>
            <p>500 Terry Francine Street, San Francisco, CA 94158</p>
            <p>📞 123-456-7890</p>
            <p><b>Opening Hours:</b> Mon-Fri 10:00am - 8:00pm</p>
          </div>
        </div>
      )
    },
    { 
      id: "two", 
      label: "Store 2", 
      content: (
        <div className='page1'>
          <img src="https://static.wixstatic.com/media/c837a6_9151948814c24b96bf212017dd6f4ea2~mv2.jpg/v1/fill/w_910,h_499,al_c,q_85,enc_avif,quality_auto/wixagency_Jewelry_store_interior_design_white_and_gold_color_sc_19ab478d-64c0-42f2-9481-4a.jpg" alt="Store 2" />
          <div>
                <h3>San Francisco Store</h3>
                <p>500 Terry Francine Street, San Francisco, CA 94158</p>
                <p>📞 123-456-7890</p>
                <p><b>Opening Hours:</b> Mon-Fri 10:00am - 8:00pm</p>
          </div>
        </div>
      )
    },
    { 
      id: "three", 
      label: "Store 3", 
      content: (
        <div className='page1'>
          <img src="https://static.wixstatic.com/media/c837a6_54619816f6234dd2a58e947187796788~mv2.jpg/v1/fill/w_936,h_513,al_c,q_85,enc_avif,quality_auto/wixagency_Jewelry_store_interior_design_white_and_gold_color_sc_5901434c-50a8-4cea-b6a9-bf.jpg" alt="Store 3" />
          <div>
            <h3>San Francisco Store</h3>
            <p>500 Terry Francine Street, San Francisco, CA 94158</p>
            <p>📞 123-456-7890</p>
            <p><b>Opening Hours:</b> Mon-Fri 10:00am - 8:00pm</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <main>
      <header className="clearfix">
        <nav className="container-fluid">
          <ul className="clearfix">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a
                  href="#"
                  className={activeTab === tab.id ? "activ" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.id);
                  }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
          <span
            style={{
              left: `${(tabs.findIndex((t) => t.id === activeTab) * 100) / tabs.length}%`,
              width: `${100 / tabs.length}%`,
            }}
          />
        </nav>
      </header>

      <section className="row">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`col-xs-12 content ${activeTab === tab.id ? "activ" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </section>
    </main>
  )
}

export default Location
