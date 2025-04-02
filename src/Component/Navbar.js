import React, { useRef, useState } from "react";
import menu from "./menu.png";
import { Link } from "react-router-dom";
function Navbar() {
  const companies = [
    "Google", "Microsoft", "Amazon", "Apple", "Facebook", "Tesla", "Netflix", "Alibaba", "PayPal", "Adobe", 
    "Nike", "IBM", "Uber", "LinkedIn", "Airbnb", "Twitter", "Samsung", "Walmart", "Oracle", "Intel", "Spotify", 
     "Zomato", "Barclays", "GoldmanSachs", "Citadel",  "HCLTechnologies", "Deloitte", "Accenture", "JPMorgan", "Lyft", "Pinterest", "Snap", "Qualcomm", 
    "Dropbox","PhonePe","Groww"
]

  const [searchQuery, setSearchQuery] = useState(""); // State to store search input
  const filteredCompanies = companies.filter((company) =>
    company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ref = useRef();
  const refclose = useRef();
  return (
    <>
    <div className="nav">
      <div className="brand">
        <Link to="/" className="brandname">CodeWithCompany</Link>
      </div>
    <button
        className="navbutton"
        onClick={() => {
          ref.current.click();
        }}
      >
        <img src={menu} alt="" />{" "}
      </button>
    </div>
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
