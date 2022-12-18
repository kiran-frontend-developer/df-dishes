import { useState } from "react";
const Create = () => {
  const[title,setTitle] = useState('');
  const[body,setBody] = useState('');
  const[author,setAuthor] = useState('noor');
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      
      <form>
        <label>Blog title:</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <input 
        type="text"
        required
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
        <button
          onClick={() => {
           // console.log("add blog is working");
            alert("add blog");
          }}
          className="btn btn-outline-danger d-grid gap-2 col-6 mx-auto"
          type="button"
        >
          Add Blog
        </button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create
