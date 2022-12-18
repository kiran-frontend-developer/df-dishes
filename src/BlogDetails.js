import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const{data:blog,error,isPending} = useFetch(`http://localhost:8000/blogs/${id}`);
    console.log(blog);

    //delete blog function
    const handleDelete =() =>{
      fetch(`http://localhost:8000/blogs/${blog.id}`,{
      method:"DELETE",
    }).then(()=>{
     history.push("/");
      console.log("blog deleted");
    })
    };
      return (
  <div className="blog-details">
    {isPending && <div> Loading...</div>}
    {error && <div>{error}</div>}
    {blog && (
      <article>
        <h2>{blog.title}</h2>
        <p>written by {blog.author}</p>
        <div>{blog.body}</div>
        <button
            onClick={handleDelete}
            className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
            // type="button"
          >
            Delete Blog
          </button>
      </article>
    )}
     </div>
  );
  
};

export default BlogDetails;
