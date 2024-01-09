import Layout from './Layout';
import Mainhome from './Mainhome';
import Adminpanel from './Adminpanel';
import Userpanel from './Userpanel';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Home = () => {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    // ตรวจสอบการเปลี่ยนแปลงของ sector และทำการปรับ Component ที่จะแสดง
    if (sector === "User") {
      setSector("User");
    } else if (sector === "Admin") {
      setSector("Admin");
    } else {
      setSector(""); // ตัวแปร sector ไม่ตรงกับเงื่อนไขที่กำหนด
    }

    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );

      if (response.status === 200 && response.data) {
        setEmployees(response.data);
      }
    };

    getData();
  }, [sector, reload]);


  const createData = async (name, lastname, position) => {
    
    const requestData = {
      name: name,
      lastname: lastname,
      position:position
    };
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );

    if (response.status === 200) {
      setReload(!reload);
    }

    console.log(response);
  };

  const removeData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );

    if (response.status === 200) {
      setReload(!reload);
      console.log(response);
    }
  };

  const handleButtonClick = (selectedSector) => {
    setSector(selectedSector);
  };

  return (
    <Layout> 
      <Mainhome onButtonClick={handleButtonClick} />
      {sector === "User" && <Userpanel employees={employees} />}
      {sector === "Admin" && <Adminpanel employees={employees} removeData={removeData} submitHandler ={createData} />}
    </Layout>
  );
};

export default Home;