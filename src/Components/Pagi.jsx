import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pagi.css"

const Pagi = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setperPage] = useState(10);
  const idxOfLastItem = currentPage * rowsPerPage;
  const idxOfFirstItem = idxOfLastItem - rowsPerPage;
  const currentItems = data?.users?.slice(idxOfFirstItem, idxOfLastItem); //0 to 9
  const totalPages = Math.ceil(data?.total / rowsPerPage);
  useEffect(() => {
    const api = async () => {
      try {
        const respo = await axios.get("https://dummyjson.com/users?limit=0");
        console.log(respo?.data);
        setData(respo?.data);
      } catch (error) {
        console.error("Error aa rha h");
      }
    };
    api();
  }, []);
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlepageClick = (pageNumber) =>{
setCurrentPage(pageNumber);
  }


  return (
    <>
      <h2>This is a Pagination</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((detail, index) => (
            <tr key={index}>
              <td>{detail.firstName}</td>
              <td>{detail.email}</td>
              <td>{detail.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button className={currentPage ===index+1 ? "Activee": ''} onClick={()=>handlepageClick(index + 1)}>{index + 1}</button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>Nxt</button>
      </div>
    </>
  );
};

export default Pagi;
