import React,{ useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home= () => {
   const{data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
          {error && <div>{error}</div>} 
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs = {blogs} title ="All Blogs!"/>}
       {/*{blogs && <BlogList blogs={blogs}title ="All Blogs!" handleDelete= {handleDelete}/>}*/}
        {/*<BlogList blogs={blogs.filter((blog)=> blog.author==='hania')}title ="hania's blogs!"/>
       <button
               onClick={() => setName("noor")}
               className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto my-5"
               type="button"
             >
               useEffect Dependency
              </button>*  
              <p>{name}</p>
              /}
      
       
            
          {/*{blogs.map((blog) => (
           <div className="blog-preview" key={blog.id}>
           <h2>{blog.title}</h2>
           <p>written by {blog.author}</p>
           </div>
          ))}*/}
        </div>
        
    );
}
 export default Home;