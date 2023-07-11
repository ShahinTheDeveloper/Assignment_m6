const Header = (props) => {
    const items =['About Me', 'Portfolio','Contact'];
    return (
        <div>
            <ul style={{width:'70%', margin:'10px auto',listStyleType:'none', display:'flex', justifyContent:'space-between', fontSize:'30px'}}>
                <li>{props.title}</li>

                <li>
                    <ul style={{listStyleType:'none', display:'flex'}}>
                        {items.map((item,i)=>{
                            return <li key={i.toString()} style={{margin:'0 20px',cursor:'pointer'}}>{item}</li>
                        })}                    
                    </ul>
                </li>
            </ul>
            
        </div>
    );
};

export default Header;