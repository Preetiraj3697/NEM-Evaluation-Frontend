import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllPost = () => {
    const [posts, setPosts] = useState("");
    
    useEffect(() => {
        fetch("https://sore-rose-dolphin-tam.cyclic.app/posts", {
            method: "GET",
            headers: {
                "Authorization": localStorage.getItem("token")
            },
        }).then(res => res.json()).then(res => {
            console.log(res)
            setPosts(res)
        }).catch(err => console.log(err));
    }, []);
  
    const deleteNode=(postID)=>{
        fetch(`https://sore-rose-dolphin-tam.cyclic.app/delete/${postID}`,{
            method:"DELETE",
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    // const updateNode=(postID)=>{
    //     const payload={
    //         title,
    //         body,
    //         device
    //     }
    //     fetch(`https://sore-rose-dolphin-tam.cyclic.app/update/${postID}`,{
    //         method:"PATCH",
    //         body: JSON.stringify(payload),
    //         headers: {
    //           "Content-type": "application/json",
    //           "Authorization":localStorage.getItem("token")
    //         },
    //     })
    // }


    return (
        <div>
            <h3>Posts Page</h3>
            {
                posts? posts.map((ele)=>{
                    return(
                        <>
                        <div >
                            <h3>Title : {ele.title}</h3>
                            <p>Body : {ele.body}</p>
                            <p>Device : {ele.device}</p>
                            <button onClick={()=>deleteNode(ele._id)}>Delete</button>
                            <Link to={"/update"}><button>Update</button></Link>
                        </div>
                        </>
                    )
                }):<h1>Not Notes are there!😔</h1>
            }
        </div>
    );
}

export default AllPost