import { Link } from "react-router-dom"

const NotFound =  () => {
    return(
        <div className="not-found">
            <h2>404 Error</h2>
            <p>That Page Cannot Be Found</p>
            <Link
        to="/"
        className="text-decoration-none text-danger text-uppercase font-weight-bolder"
      >
        Back to the Home Page...
      </Link>
        </div>
    );
};
export default NotFound;

