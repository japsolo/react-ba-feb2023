import { Link } from 'react-router-dom'
import { items } from "./utils/helper.js";

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>
                Discover Our <em>Work</em> &amp; <span>Projects</span>
              </h2>
              <div className="line-dec" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doers eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-wrap">
            {
              items.map((item) => {
                return (
                  <div className="item col-4" key={item.id}>
                    <img src={`assets/images/${item.image}`} alt="item" />
                    <div className="down-content">
                      <h4>{item.content}</h4>
                      <Link to={`/services/${item.id}`}><i className={item.icon} /></Link>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
