
const Bloglist = (props) => {
 const blogs = props.blogs;
 //console.log(props.blog);
 
    return (
    <div className="blog-list">
      {blogs.map((blog) => (
           <div className="blog-priview" key={blog.id}>
           <h2>{blog.title}</h2>
           <p>written by: {blog.author}</p>
           </div>
          ))}
    </div>
  );
}

export default Bloglist
