

const Content = (props) => {
    let text= 'false';
    return (
        <div>
            <div style={{textAlign:"center",margin:'150px auto'}}>
                
                <button onClick={()=>{
                    text = props.contentText;
                    //console.log(text);
                }}  style={{padding:'10px 15px', width:'200px',margin:'0 auto'}}>Show Content</button>


                <div className="contentText">
                    <p>{text}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Content;