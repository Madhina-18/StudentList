import { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";
import { Link } from "react-router-dom";

function FavouriteStudent() {
  const { students, removeFavourite } = useContext(StudentContext);

  return (
    <div>
      <div className="flex justify-between  bg-[#F5FF00]  text-[#27302C] p-5 ">
        <h1 className="text-2xl font-medium ">

             {/* Student List Link */}
          <Link to="/">Student List</Link>
        </h1>
        <h1 className="text-2xl font-medium">

             {/* Favourite Student List Link */}
          <Link to="/fav">Favourite Students List</Link>
        </h1>
      </div>
      {students
        .filter((student) => student.isFavourite)
        .map((student, index) => (
          <div className="flex justify-between items-center mx-5 my-2 text-xl" key={student.id}>
            <h1>
              {index + 1}. {student.name}
            </h1>
            <button
              onClick={() => removeFavourite(student.id)}
              className="bg-[#F5FF00] text-[#27302C] p-1 rounded-md border border-black"
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}

export default FavouriteStudent;