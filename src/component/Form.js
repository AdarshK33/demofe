
import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import './style.scss';

const axios = require('axios');
export const Form = (props) => {
    // set Data
    const [data, setData] = useState({
        name: "",
        description: "",
        status: "",
    })

   //Call Axios Post
  let   submit = (e) => {
        console.log("submit")
        e.preventDefault();
        try { 
        axios.post("http://localhost:5000/movie",
            {
                //raw Data
            data: {
                    name: data.name,
                    description: data.description,
                    status: data.status
                 }
            }).then(res => {
                // console.log(res)
                window.location.reload(false);

            })
           }catch (err) {
                    // Handle Error Here
                console.error(err);
            }
        
    }
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        // console.log(newData)
    }
   
    return (
         <React.Fragment>    
            <form onSubmit={(e) => submit(e)}>
                 <Row >  
                     <Col md="6">
                        <input  className="mb-3" onChange={(e) => { handle(e) }} id="name" type="text" name="name" value={data.name} placeholder="name" required></input>
                    </Col>
                      <Col md="6">
                        <input  className="mb-3" onChange={(e) => { handle(e) }} id="description" type="text" name="description" value={data.description} placeholder="description" required ></input>
                        </Col> 
                         <Col md="6">
                        <input  className="mb-3" onChange={(e) => { handle(e) }} id="status" type="text" name="status" value={data.status} placeholder="status" required ></input>
                    </Col>
                        <br></br>
                        <button type="submit" name="Submit" className="submit"><b>Submit</b></button>
                </Row>
            </form>
               
             
        </React.Fragment>
    );
    
  
}
