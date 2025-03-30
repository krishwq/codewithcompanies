import React, { useRef, useState } from "react";
import menu from "./menu.png";
import { Link } from "react-router-dom";
function Navbar() {
  const companies = [
    "Google", "Microsoft", "Amazon", "Apple", "Facebook (Meta)", "Tesla", "Netflix", "Alibaba", "PayPal", "Adobe", 
    "Nike", "IBM", "Uber", "LinkedIn", "Airbnb", "Twitter", "Samsung", "Walmart", "Oracle", "Intel", "Spotify", 
    "Shopify", "Zoom", "Adobe", "Barclays", "Goldman Sachs", "Citadel", "Uber", "Salesforce", "TikTok", "Walmart Labs", 
    "Oracle", "HCL Technologies", "Deloitte", "Accenture", "JPMorgan Chase", "Lyft", "Pinterest", "Snap", "ByteDance", 
    "Dropbox", "Square", "Stripe", "Workday", "Datadog", "Xiaomi", "Spotify", "TikTok", "Capital One","Groww"
]

  const [searchQuery, setSearchQuery] = useState(""); // State to store search input
  const filteredCompanies = companies.filter((company) =>
    company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ref = useRef();
  const refclose = useRef();
  return (
    <>
      <a
        className="btn btn-primary d-none"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
        ref={ref}
      >
        Link with href
      </a>
      <button
        className="navbutton"
        onClick={() => {
          ref.current.click();
        }}
      >
        <img src={menu} alt="" />{" "}
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Companies
          </h5>
          <button
            ref={refclose}
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <input
            type="text"
            placeholder="Search companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "8px",
              marginBottom: "10px",
              width: "100%",
              fontSize: "16px",
            }}
          />
          <div className="companies-name">
            <ul>
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company, index) => (
                  <li key={index}>
                    <Link
                      to={`/${company}`}
                      onClick={() => {
                        refclose.current.click();
                      }}
                      className="companylink"
                    >
                      {company}
                    </Link>
                  </li>
                ))
              ) : (
                <p>No companies found</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
