import { useEffect, useState } from "react";

const Winner = () => {
    const [count, setCount] = useState(0);
    const [allStudents, setAllStudents] = useState([]);

    // Load students from localStorage when component mounts
    useEffect(() => {
        const students = JSON.parse(localStorage.getItem("All students")) || [];
        setAllStudents(students);
    }, [count]);

    // Function to calculate the score
    const calculateScore = (student) => {
        return (student.studentPushUp * student.studentWeight) / 20;
    };

    // Sort students by score
    const sortedStudents = [...allStudents].sort(
        (a, b) => calculateScore(b) - calculateScore(a)
    );

    return (
        <section className="bg-green-950 w-screen min-h-screen flex items-center justify-center flex-col">
            <h1 className="text-3xl text-white p-5">This is the page where points of all members are shown</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Refresh</button>

            <ul className="grid grid-cols-3 gap-4 pt-10">
                {sortedStudents.map((student, index) => (
                    <li key={index} className="p-2 text-center">
                        <p className="text-white">
                            <label className="font-bold text-black">Student name:</label> {student.studentName}
                        </p>
                        <p className="text-white">
                            <label className="font-bold text-black">Student weight:</label> {student.studentWeight}
                        </p>
                        <p className="text-white">
                            <label className="font-bold text-black">Student push ups count:</label> {student.studentPushUp}
                        </p>
                        <p className="text-white">
                            <label className="font-bold text-black">Student score:</label> {calculateScore(student).toFixed(2)}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Winner;