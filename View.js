import React, {useEffect ,useState} from 'react'
import "bootstrap//dist/css/bootstrap.css"




function View(){

    const [detail,Setdetail] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5001/view')
        .then(data => data.json())
        .then(res => {
            console.log(res);
            Setdetail(res)
    })
    },[]) 
    return(
        <>
        {
            detail.map((val,ind)=>{
                return(
                    <div className='text-center m-3 p-3 shadow'>
                        <h1>{val.ProductName}</h1>
                        <h2>{val.Productprice}</h2>
                        
                        <button className='btn btn-danger'>Delete</button>
                    </div>
                    
                )
            })
        }
        </>
    )
    
}




export default View;