import { useState } from "react";
const Createuser = ({ submitHandler }) => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [position, setPosition] = useState();

    return (
        <div className="col-11">
        <h4 className="mb-3">Create User Here</h4>
        <div className="row gap-4">
          <div className="col">
            <label htmlFor="Name" className="visually-hidden">Name</label>
            <input type="text" className="form-control shadow" id="Name" placeholder="Name"
             value={name}
             onChange={(ev) => setName(ev.target.value)}/>
          </div>
          <div className="col">
            <label htmlFor="Lastname" className="visually-hidden">LastName</label>
            <input type="text" className="form-control shadow" id="Lastname" placeholder="Lastname"
            value={lastname}
            onChange={(ev) => setLastname(ev.target.value)}/>
          </div>
          <div className="col">
            <label htmlFor="Position" className="visually-hidden">text</label>
            <input type="text" className="form-control shadow" id="Position" placeholder="Position"
            value={position}
            onChange={(ev) => setPosition(ev.target.value)}/>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3 shadow"
            onClick={() => submitHandler(name, lastname, position)}>Save</button>
          </div>
        </div>
      </div>
       
    )
}

export default Createuser