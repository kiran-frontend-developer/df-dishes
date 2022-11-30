import React,{ useState } from "react";
import BlogList from "./BlogList";
const Home= () => {
   const [blogs,setBlogs]= useState([
    {
        
            id: 1,
               title: " Tandori Chiken Tika ",
               body: "The natural red colouring in my recipe comes from the paprika and chilli powder I use. To enhance the taste as well as the colour add a pinch of crushed saffron strands to the marinade. I prefer chicken thighs which are a more succulent cut though chicken breast works equally well.This is also the basic marinade that is commonly used to cook the chicken before making Butter Chicken (aka Chicken Tikka Masala).",
               author: "noor",
              },
              {
                id: 2,
                title: "Mutton Biryni",
                 body: "To make a delightful chicken biryani dish firstly soak saffron in water to prepare saffron water (One tsp saffron can be soaked in 1/4 cup water). Next, mix kewra drops in water and mix well to make kewra water. Set them aside for later usage. Now chop the onion and coriander leaves and keep them aside.',",
                author: "aqsa",
            },
           {
              id: 3,
                title: "Sheer Khurma ",
                body: "Sheer Khurma is a milky dessert cooked with vermicelli, dried dates and nuts. The word Sheer means milk in the Farsi language, and Khurma means dates = milk dates.Traditionally, dried dates are chopped and used in Sheer Khurma. Sheer Khurma is also known as Seviyan in some households (mine included!) and Shemai in Bangladesh, where it is often served alongside parathas. ",
                 author: "hania",
            },
        ])
          //console.log(blogs);

    return (
        <div className="home"> 
        <BlogList blogs={blogs}title ="All Blogs!"/>
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