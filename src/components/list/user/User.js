import PropTypes from "prop-types";

function User({ user }) {
return(
  <div className="col">
    <div className="card">
      <img src={user.avatar} className="card-img-top" alt={user.first_name} />
      <div className="card-body">
        <h5 className="card-title">{user.first_name} {user.last_name}</h5>
        <p className="card-text">{user.email}</p>
      </div>
    </div>
  </div>
    );
}

User.PropTypes = {
  user:PropTypes.object.isRequired,
};

export default User;