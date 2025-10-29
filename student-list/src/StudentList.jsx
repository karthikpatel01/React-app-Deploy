function StudentList() {
  const students = ["Arya", "Rahul", "Aisha", "Kiran"];

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {students.map((student, index) => (
        <li 
          key={index} 
          style={{ 
            margin: "10px 0", 
            fontSize: "18px", 
            backgroundColor: "#f0f0f0", 
            padding: "8px", 
            borderRadius: "8px" 
          }}
        >
          {student}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
