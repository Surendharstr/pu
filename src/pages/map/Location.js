
import React from "react";
import "./Location.css";

function Location() {
 

    // currentLocation
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords)
        })
    })

 
    return (
        <div>
            <div className="location">
                <form class="row g-3">
                <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden"></label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Orgin"/>
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden"></label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Destination"/>
                    </div>
                  
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary ">Calculate Route</button>
               
                    </div>
                </form>
                
                <div>
                <form class="row g-3">
                <div class="col-4">
                        <label for="inputPassword2" class="visually ">Destination:</label>
                        
                    </div>
                    <div class="col-4">
                        <label for="inputPassword2" class="visually ms-2">Duration:</label>
                        
                    </div>
                    <div class="col-4">
                        <button></button>
                      
                        
                    </div>
                  
                  
                </form>
                
              
             </div>

            </div>
       

         
            </div>
    )
}
export default Location