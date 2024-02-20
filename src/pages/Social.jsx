import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../components/post/Post';
import "../components/post/Post.css";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Social() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  
  const getPosts = async () => {
    const config = {
      headers: {
        projectId: "zyn0umnsp0rz",
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.get("https://academics.newtonschool.co/api/v1/quora/post?limit=100", config);
      setPosts(response.data.data);
      // console.log(response.data.data);
    } catch(error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getPosts();
  }, []);
  
  return  isLoading ? (
    <div className="loading"><FontAwesomeIcon icon={faSpinner} size="2xl" /></div>
  ) : ( <section className="social-container">
  {
    posts.length > 0 && posts.map((post) =>{
      return <Post data={post} key={post._id}/>
    })
  }
  </section> )
}

export default Social;