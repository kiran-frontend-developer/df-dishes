import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const[title,setTitle] = useState('');
  const[body,setBody] = useState('');
  const[author,setAuthor] = useState('noor');
  const[isPending,setisPending]= useState(false);
  const history = useHistory();
  const handleSubmit =(e) => {
   e.preventDefault();
   const blog = {title,body,author};
   setisPending(true);
   fetch('http://localhost:8000/blogs',{
    method:'Post',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(blog)
   }).then(()=>{
    console.log('new blog added');
    setisPending(false);
    //history.go(1);
    history.push('/')
   });
  
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
        value={body}
        onChange={(e)=> setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select 
         value={author}
         onChange={(e)=> setAuthor(e.target.value)}
         >
          <option value="noor">noor</option>
          <option value="aqsa">aqsa</option>
          <option value="hania">hania</option>
        </select>
        {!isPending &&<button
          //onClick={() => {
           // console.log("add blog is working");
            //alert("add blog");
          //}}
          className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
          type="submit"
        >
          Add Blog
        </button>}
        {isPending &&<button
          className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
          type="submit"
          disabled
        >
          Adding Blog...
        </button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create
