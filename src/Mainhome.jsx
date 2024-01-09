const Mainhome = ({ onButtonClick }) => {
    return (
        <div className="mt-5  text-center row justify-content-center">
       
        <h1 className="text-dark display-5 fw-bold mt-2">Generation Thailand<br/>Home - User Sector</h1>
        <div className="row   col-5 justify-content-between mt-4">

       <div className="col-5 d-grid "> <button onClick={() => onButtonClick("User")}  className="shadow btn btn-light btn-lg">User Home Sector</button></div>
       <div className="col-5 d-grid "> <button onClick={() => onButtonClick("Admin")} className="shadow btn btn-light btn-lg">Admin Home Sector</button></div>
       
        </div>
      
        
        </div>
    )
}

export default Mainhome