import { useState,useEffect } from 'react';
import Blogs from './Blogs';
import useFetch from './usefetch';
const Home = () => {
   const{ data:blogs, isPending, error} = useFetch(' http://localhost:8000/blogs ');
   

    return (  
        <div className="home">
        {error && <div> { error }</div>}
        {isPending && <div>Loading.....</div>}
        {blogs && <Blogs blogs={ blogs } title ="The Blogs" />}
        
        </div>
    );
}
 
export default Home;