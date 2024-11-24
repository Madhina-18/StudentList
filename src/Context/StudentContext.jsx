import { createContext, useState } from "react"; // Create UseState and UseContext

export const StudentContext = createContext(); // Create StudentContext

export const StudentProvider = ({ children }) => { // Create Component

    const [students, setStudents] = useState([     // Create UseState in Array of Objects
        {
            id: 1,
            name: "Sheik",
            isFavourite: false
        },

        {
            id: 2,
            name: "Ibrahim",
            isFavourite: false
        },
        {
            id: 3,
            name: "Umar",
            isFavourite: false
        },
        {
            id: 4,
            name: "Abuthahir",
            isFavourite: false
        },
        {
            id: 5,
            name: "Mohammed",
            isFavourite: false
        },
    ]);

    // Add Favourite
    const addFavourite = (id) => {
        const updatedStudents = students.map((student) => {
            if (student.id === id) {
                return { ...student, isFavourite: true };
            }
            return student;
        });
        setStudents(updatedStudents);
    };

    // Remove Favourite
    const removeFavourite = (id) => {
        const updatedStudents = students.map((student) => {
            if (student.id === id) {
                return { ...student, isFavourite: false };
            }
            return student;
        });
        setStudents(updatedStudents);
    };

    return (
        // Context Provider
        <StudentContext.Provider value={{ students, addFavourite, removeFavourite }}> 
            {children}
        </StudentContext.Provider>
    );
};