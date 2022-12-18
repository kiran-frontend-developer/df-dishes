  import {Link} from "react-router-dom";
 const Bloglist = ({blogs,title}) => {
  {/*const Bloglist = ({blogs,title,handleDelete}) => */}

  //const blogs = props.blogs;
  //const title = props.title;
  //console.log(props,blogs);
  return (
    <div className="blog-list">
         <h2>{title}</h2>
         {blogs.map((blog) => (
           <div className="blog-preview" key={blog.id}>
           <Link to={`/blogs/${blog.id}`}className="text-decoration-none"><h2>{blog.title}</h2>
           <p>written by {blog.author}</p></Link>
           {/*<button
            onClick={() =>
              handleDelete(blog.id)}
            className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
            type="button">
            Delete Blog</button>*/}
           </div>
          ))}

    </div>
  )
}

export default Bloglist;
