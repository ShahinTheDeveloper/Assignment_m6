import { useState } from "react";
const Content = (props)=> {
    const [description, setDescription] = useState(false);
    const descriptionHandler = () => {
        setDescription(!description);
    };
    
    return (
        <div>
            <div style={{textAlign:"center",margin:'150px auto'}}>
                <button onClick={descriptionHandler} style={{padding:'10px 15px', width:'200px',margin:'0 auto'}}>
                    Descriptions</button>

                    
                {description && (
                    <p style={{width:'50%', margin:'10px auto'}}>
                        {props.contentText}
                    </p>
                )}
            </div>
        </div>
    );
}
 
export default Content;