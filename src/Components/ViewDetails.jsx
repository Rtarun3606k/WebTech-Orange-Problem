import React from "react";

const ViewDetails = () => {
  return (
    <div
      className="flex flex-col gap-2 items-center justify-center text-white border-1 border-white backdrop-blur-sm shadow-lg"
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
        className="p-3 rounded-lg shadow-lg hover:shadow-gray-400 transition-all ease-in duration-150 hover:translate-y-2 gap-4 "
        style={{
          width: "50%",
          height: "70%",
          backgroundColor: "rgb(30 48 73)",
        }}
      >
        <p className="absolute p-2 transition-all duration-150 ease-out rounded-sm text-red-400 w-8 h-8 hover:bg-red-500 hover:text-white flex justify-center items-center">
          X
        </p>
        <div className="flex gap-4 justify-center">
          <img src="../profile.png" alt="" className="w-10 h-10" />
          <p className="text-2xl font-semibold">Jhoe Hough</p>
        </div>

        {/* data */}
        <div
          className="flex flex-col justify-center items-center"
          style={{ width: "100%", height: "95%" }}
        >
          <ul
            className="flex flex-col gap-2 items-start justify-center"
            style={{ width: "100%", height: "80%" }}
          >
            <li className="capitalize">regular Checkup</li>
            <li>25-04-2005</li>
            <li>
              <span className="font-semibold">Status :</span>{" "}
              <span className={`text-green-400`}>Scheduled</span>
            </li>
            <li className="overflow-y-scroll " style={{ height: "70%" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              placeat debitis, earum fugit eaque, iste ad distinctio assumenda
              possimus molestias nobis, aspernatur nostrum id repudiandae
              nesciunt officiis quas non amet est! Repellat optio ex non sequi
              laudantium in eum reprehenderit deserunt quisquam? Sunt eum at
              eligendi adipisci ullam est praesentium itaque nisi, suscipit
              sequi porro cum ab dignissimos repudiandae laudantium provident
              vitae pariatur a magni enim. Atque distinctio obcaecati deserunt
              animi voluptates! Amet ducimus reiciendis ipsam laborum distinctio
              voluptates id laboriosam nostrum molestiae excepturi,
              reprehenderit cumque odio? Similique itaque architecto modi,
              praesentium laborum perferendis asperiores minima. Ut molestiae
              impedit corrupti. Veritatis non numquam quo soluta voluptates
              facere nesciunt! Minus suscipit alias, quia voluptatibus similique
              nulla nostrum. Delectus explicabo maxime tempore exercitationem
              quisquam impedit soluta quod modi, nobis perferendis. Culpa
              recusandae consequatur quae mollitia maiores obcaecati dolorum
              eveniet accusamus iure exercitationem. Minima porro voluptas,
              repudiandae maxime minus eius id, a maiores, impedit soluta dicta
              ea sapiente reprehenderit! Dolorem labore sequi harum possimus
              deserunt fugit perferendis natus nostrum id fugiat, esse incidunt
              numquam asperiores ducimus ex quia. Libero, iusto. Reiciendis,
              odio ducimus veritatis, animi quod laborum similique consectetur
              officia libero adipisci iure velit? Expedita placeat numquam dicta
              dolorum natus quam ad dignissimos, atque quo sed adipisci voluptas
              libero nobis nam explicabo veritatis officia assumenda repudiandae
              sunt alias iure debitis ipsum deleniti? Ad, error optio?
            </li>
          </ul>
          <div className="flex justify-evenly gap-2">
            <button className="bg-yellow-600 p-2 rounded-sm hover:bg-yellow-500 transition-all duration-150 ease-out">
              View Details
            </button>
            <button className="bg-red-600 p-2 rounded-sm hover:bg-red-500 transition-all duration-150 ease-out">
              Cancel Schedule
            </button>
            <button className="bg-green-600 p-2 rounded-sm hover:bg-green-500 transition-all duration-150 ease-out">
              Mark As Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
