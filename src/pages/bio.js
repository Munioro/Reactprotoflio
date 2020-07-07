import React from "react";
import Nav from "../components/nav"
import kayak from "../images/OnaKayak.jpg"


const Bio = () => {
  return (
    <div>
      <Nav />
      <div className="container">
            <div className="row">
                <div className="col-5">
                    <img src={kayak} className="img-fluid img-thumbnail img-hieght" alt="Me on a Kayak" />
                </div>
                <div className="col-lg-7">
                    <div className="row fontContent">
                        <h1 className="page-header fontBackground">A Little Somthing About Me</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic eligendi quisquam quae, reiciendis provident quod? Sequi dolores cumque reprehenderit rerum porro repellendus accusantium est, dolore culpa quasi deserunt libero.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi quaerat dignissimos architecto error voluptates ut quae magni dolore nihil corporis, veniam aliquid ducimus repellendus, dolor nostrum autem est. Impedit.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eius unde fuga quia harum perferendis tempora! Ratione, doloribus totam cumque quibusdam, aperiam reiciendis voluptatum nihil aliquid veniam, praesentium accusamus! Dolore?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora atque laboriosam, sit deleniti repellat odit. Adipisci tempore, quia excepturi dolore et dolorem delectus eos qui, libero voluptates aliquam! Illo, dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repellendus sequi. Expedita nihil cum natus perspiciatis quis architecto, quas harum maiores tenetur? Quibusdam explicabo libero sit omnis voluptatem, repellat tempora.
                        </p>
                        <a href="https://drive.google.com/file/d/108bymzqTKCBURt85xnKh9wVPNy3tSU0h/view?usp=sharing" target="_blank">Click on me to check out my resumé</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Bio;
