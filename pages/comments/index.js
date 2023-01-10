import { useState } from "react";

function CommentPages() {
    
    const [comments, setComments] = useState([]); 

    async function fetchComments() {
        const response = await fetch('/api/comments')
        const data = await response.json(response)
        setComments(data)
    }
    
    
    return(
        <>
        <button onClick={fetchComments}>Load Comments</button>
        {
            comments.map((comment) => {
                return(
                    <div key={comment.id}>
                       {comment.id} {comment.text}     
                    </div>
                )
            })
        }
        </>
    )
}


export default CommentPages; 