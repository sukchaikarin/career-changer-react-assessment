import Createuser from "./Createuser";

const Adminpanel = ({ employees, removeData ,submitHandler }) => {
  return (
    <div className="mt-5 container-fluid row justify-content-center">
     <Createuser submitHandler={ submitHandler }/>

      <div className="mt-3 col-6">
        <table className="table table-hover shadow border border-black">
          <thead>
            <tr className="text-center">
              <th scope="col">Name</th>
              <th scope="col">Lastname</th>
              <th scope="col">Position</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr className="text-center" key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>
                  <button className="btn btn-outline-danger" id={employee.id} onClick={() => removeData(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminpanel;