import PropTypes from "prop-types";
import './resource.css'

function Resource({ resource }) {
    return(
      <div class="card text-white bg-primary mb-3" >
        <div className={resource.name} >
        <div className="card-header">{resource.year}</div>
        <div className="card-body">
          <h5 className="card-title">{resource.name}</h5>
          <p className="card-text">{resource.pantone_value}</p>
          <p className="card-text">{resource.color}</p>
          </div>
        </div>
      </div>
        );
    }
    
    Resource.PropTypes = {
      resource:PropTypes.object.isRequired,
    };

    export default Resource;