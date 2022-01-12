import { actionCreators, State } from "../../state";
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from "redux";
import { useState } from "react";


const CommentSection = () => {
    const dispatch = useDispatch();
  const {addComment, deleteComment} = bindActionCreators(actionCreators, dispatch); 

  const [comment, setComment] = useState("");

  const comms = useSelector((state: State) => state.comment);
  
  return (
    <div >
      <div className="CommentInput">
        <input 
          type= "string" 
          value={comment} 
          onChange={(e) =>{ if(e.target.value === '') 
              {setComment("");
              }else { 
                setComment(e.target.value)
              }
        }}
        />
        <button onClick={() => addComment(comment)}>Add comment</button>
        </div>
        {comms.length !== 0 && <div className="CommentList">
          
            {comms.map((comm : any) => (
            <div><p>{comm}</p>
            <div className="container">
              <div className="center">
            <button onClick={() => deleteComment(comm)} className="del-button" >Delete comment</button>
            </div>
            </div>
            <hr></hr>
            </div>
            ))}
          
        </div>}
    </div>

    
    
  );
}

export default CommentSection;