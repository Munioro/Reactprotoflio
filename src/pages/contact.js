import React from "react";
import Nav from "../components/nav"


const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="card" style={{width: "25rem"}}>
                <div className="card-body contactColor">
                    <h3 className="card-title">Contact Info</h3>
                    <ul>
                        <li>
                            <h5 className="card-subtitle">Email</h5>
                            <p className="card-text">munioro27@gmail.com</p>
                        </li>
                        <li>
                            <h5 className="card-subtitle">Phone</h5>
                            <p className="card-text">(210) 929-3884</p>
                        </li>
                        <li>
                            <h5 className="card-subtitle">GitHub</h5>
                            <a href="https://github.com/Munioro" className="card-text" target="_blank">https://github.com/Munioro</a>
                        </li>
                        <li>
                            <h5 className="card-subtitle">Linked In</h5>
                            <a href="www.linkedin.com/in/hector-muniz-259b84178" className="card-text" target="_blank">www.linkedin.com/in/hector-muniz-259b84178</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Contact;
