import React, { useEffect, useState } from "react";
import { data as Data } from "../Data/Collectio";

const Card = ({ id }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState({});

  const handleCancel = () => {
    const updatedAppointments = Data.appointments.map((appointment) => {
      if (appointment.id === id) {
        appointment.status = !appointment.status;
        if (!appointment.status) handleCompleted();
      }
      return appointment;
    });
    setData({ ...data, appointments: updatedAppointments });
  };

  const handleCompleted = () => {
    const updatedAppointments = Data.appointments.map((appointment) => {
      if (appointment.id === id) {
        appointment.completed = !appointment.completed;
      }
      return appointment;
    });
    setData({ ...data, appointments: updatedAppointments });
  };

  useEffect(() => {
    const appointment = Data.appointments.find(
      (appointment) => appointment.id === id
    );
    if (appointment) setData(appointment);
  }, [id, data]);

  const ViewDetails = () => (
    <div
      className={`custome-animation flex flex-col gap-2 items-center justify-center text-white border-1 border-white backdrop-blur-sm shadow-lg ${
        data?.completed ? "text-gray-500" : ""
      }`}
      style={{
        width: "100vw",
        height: "100%",
        backgroundColor: "rgba(30, 48, 73, 0.7)",
        zIndex: "100",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <div
        className="p-3 rounded-lg shadow-lg hover:shadow-gray-400 transition-all ease-in duration-150 hover:translate-y-2 gap-4"
        style={{
          width: "50%",
          height: "70%",
          backgroundColor: "rgb(30 48 73)",
        }}
      >
        <p
          className="absolute p-2 transition-all duration-150 ease-out rounded-sm text-red-400 w-8 h-8 hover:bg-red-500 hover:text-white flex justify-center items-center"
          onClick={() => setShowDetails(false)}
        >
          X
        </p>
        <div className="flex gap-4 justify-center">
          <img src="../profile.png" alt="Profile" className="w-10 h-10" />
          <p className="text-2xl font-semibold">{data?.name}</p>
        </div>

        <div
          className="flex flex-col justify-center items-center"
          style={{ width: "100%", height: "95%" }}
        >
          <ul
            className="flex flex-col gap-2 items-start justify-center"
            style={{ width: "100%", height: "80%" }}
          >
            <li className="capitalize">
              <span className="font-semibold">Reason : </span>
              {data?.reason}
            </li>
            <li>
              <span className="font-semibold">Date : </span>
              {data?.date}
            </li>
            <li>
              <span className="font-semibold">Status :</span>{" "}
              <span
                className={data?.status ? `text-green-400` : "text-red-400"}
              >
                {data?.status ? "Scheduled" : "Not Scheduled"}
              </span>
            </li>
            <li className="overflow-y-scroll" style={{ height: "70%" }}>
              <span className="font-semibold">Description :</span>{" "}
              {data?.description}
            </li>
          </ul>
          <div className="flex justify-evenly gap-2">
            {data?.completed ? null : (
              <button
                className={` p-1 rounded-sm  ${
                  data?.status
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
                onClick={handleCancel}
              >
                {data?.status ? "Cancel Schedule" : "Reschedule"}
              </button>
            )}
            <button
              className={` p-1 rounded-sm  ${
                data?.completed
                  ? "bg-indigo-600 hover:bg-indigo-500 hover:text-black"
                  : "bg-green-600 hover:bg-green-500"
              }`}
              onClick={handleCompleted}
            >
              {data?.completed ? "Mark As Incomplete" : "Mark As Complete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showDetails && <ViewDetails />}
      <div
        className={`flex flex-col flex-wrap hover:translate-y-2 transition-all hover:shadow-gray-700 hover:border-1 ease-in duration-150 gap-2 items-center justify-center text-white border-1 border-white backdrop-blur-sm shadow-lg ${
          data?.completed ? "line-through text-gray-600 opacity-45" : ""
        }`}
        style={{
          width: "30%",
          height: "35%",
          backgroundColor: "rgb(30 48 73)",
        }}
      >
        <center
          className="flex items-center justify-center mb-2 -mt-2"
          style={{
            width: "100%",
            height: "auto",
            backgroundColor: "rgb(30 48 73)",
          }}
        >
          <li className="flex gap-3 items-center">
            <img src="../profile.png" alt="Profile" className="w-10 h-10" />
            <p className="text-2xl font-semibold capitalize">{data?.name}</p>
          </li>
        </center>
        <div className="flex justify-evenly" style={{ width: "100%" }}>
          <ul className="flex flex-col gap-2 items-start justify-center">
            <li className="capitalize">
              <span className="font-semibold">Reason : </span>
              {data?.reason}
            </li>
            <li>
              <span className="font-semibold">Date : </span>
              {data?.date}
            </li>
            <li>
              <span className="font-semibold">Status :</span>{" "}
              <span
                className={data?.status ? `text-green-400` : "text-red-400"}
              >
                {data?.completed
                  ? "Completed"
                  : data?.status
                  ? "Scheduled"
                  : "Not Scheduled"}
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <button
              className="bg-yellow-600 p-1 rounded-sm hover:bg-yellow-500"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
            {data?.completed ? null : (
              <button
                className={` p-1 rounded-sm  ${
                  data?.status
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
                onClick={handleCancel}
              >
                {data?.status ? "Cancel Schedule" : "Reschedule"}
              </button>
            )}
            <button
              className={` p-1 rounded-sm  ${
                data?.completed
                  ? "bg-indigo-600 hover:bg-indigo-500 hover:text-black"
                  : "bg-green-600 hover:bg-green-500"
              }`}
              onClick={handleCompleted}
            >
              {data?.completed ? "Mark As Incomplete" : "Mark As Complete"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
