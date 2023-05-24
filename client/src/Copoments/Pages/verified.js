import React, { useEffect, useState } from 'react';
import './verified.css';
import {Container,Col,Row} from 'react-bootstrap';
import { FaFileAlt,FaQuestionCircle } from 'react-icons/fa'
import Header from '../header/Header';
function Verified() {
 const [isStatus, setStatus] = useState({});
 let userData= localStorage.getItem('ApplicationData');

 useEffect(() => {
  if(userData){
    const parseData = JSON.parse(userData);
  setStatus(parseData);
  }
 },[userData]);
console.log('userData', userData);
    return(
        <div className="back">
                               <Header />

           
           <center>
          
           
             <div className="Container" >

                <div className="row rbody">
               
                   <div className="column cols" style={{width: "70%"}}>
                     <h5 className="left">User Address</h5> 
                     <h6 className="left">{isStatus?.Name || ''}</h6> 
                     <p className="left">{isStatus?.Address || ''}</p> 
                       <h6 className="left">Phone number  : {isStatus?.Phone || ''}</h6>
                   </div>
{/* 
                   <div className="column cols" className="left" style={{width: "15%"}}>
                     <br></br>
                     <h5>More actions</h5>
                     <br></br>
                   
                   
                     <div style={{color: "orange"}}>
                   <FaFileAlt   size={32}  />  Download Invoice
                    </div>
                  
                    
                   </div> */}

                   {/* <div className="column cols" className="left" style={{width: "15%"}}>
                   <button class="btn btns"> <b>Download</b></button>
                   </div> */}
          
            </div>



                <div className="row Rbody">

                <div className="column cols" style={{width: "8%"}}>
                    <img src={require('../Images/loaan.jfif')} style={{width: "65px"}}  className="img" />
                    </div>

                 <div className="column " style={{width: "20%"}}>
                   <h6 className="text">Application ID: {isStatus?.AppID || '-'}</h6>
                    <p className="text colo">Date: 24-05-2023</p> 
                    <p className="text colo">State: {isStatus?.stateName || '-'}</p> 
                    <p className="text"><b> &#x20B9;{isStatus?.Amount || '-'} </b> <i className="icon ">
                   {/* <FaQuestionCircle size={20}  /> */}
                    </i></p> 

                     </div>
               <div className="column cols" style={{width: "14%"}}>
                 <h5  className="text cor">Approval</h5>
                
                 <input type="checkbox" className="le" name="vehicle3" value="Boat"/>
               </div>

             <div className="column cols " style={{width: "14%"}}>
              <h5  className="text corl">Pending</h5>
                
                 <input type="checkbox" className="le" name="vehicle3" value="Boat"/>
              </div>

           <div className="column cols" style={{width: "14%"}}>
              <h5  className="text corlo">Reject</h5>
                
                 <input type="checkbox" className="le" name="vehicle3" value="Boat"/>
              </div>






            <div className="column " className="left" style={{width: "30%"}}>
            <br></br>
            <h5>Returned</h5>
            <br></br>
                    <div style={{color: "dodgerblue"}}>
                   <FaQuestionCircle  size={23}  /> {'  '} NEED HELP?                                        
                    </div>
                        
           </div>


                </div>


            </div>
          </center> 

        </div>
    );
}
export default Verified;