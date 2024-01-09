const Userpanel = ({ employees }) => {
  return (
    <div className="mt-5 container-fluid row justify-content-center">
      <div className=" mt-3 col-6 ">
        <table className="table table-hover shadow border border-black">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Lastname</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userpanel;
