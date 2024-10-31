import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { data } from "../Data/Collectio";

const Home = () => {
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [completedAppointments, setCompletedAppointments] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalAppointments(data.appointments.length);
      setCompletedAppointments(
        data.appointments.filter((appointment) => appointment.completed).length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="flex flex-col gap-2 justify-self-start items-center p-3"
        style={{ width: "100%", height: "100%" }}
      >
        <h1 className="text-3xl font-bold text-white"> Patient Appointments</h1>
        <div className="flex gap-6">
          <div className="flex text-xl font-semibold text-white ">
            <span className="font-semibold">Total appointments : </span>
            <span className="font-semibold ">{data?.appointments.length}</span>
          </div>
          <div className="flex text-xl font-semibold text-white ">
            <span className="font-semibold">
              Total Completed appointments :
            </span>
            <span className="font-semibold ">{completedAppointments}</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap p-3 gap-5 justify-center media"
        style={{ width: "100%", height: "100vh" }}
      >
        {data.appointments.map((appointment) => {
          return <Card key={appointment.id} id={appointment.id} />;
        })}
      </div>
    </>
  );
};

export default Home;
