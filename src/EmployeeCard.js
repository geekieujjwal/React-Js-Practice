const EmployeeCard = () => {
  const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000,
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000,
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000,
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500,
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700,
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900,
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500,
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200,
    },
  ];
  let totalSalary = 0;
  employees.map(({ salary }) => (totalSalary += salary));
  return (
    <div>
      {employees.map(({ name, level, dept, designation, salary }) => {
        return (
          <div
            style={{
              backgroundColor: level === 2 ? "orange" : "",
              border: designation === "President" ? "5px solid green" : "",
            }}
          >
            <h1>Name: {name}</h1>
            <h2>Level: {level}</h2>
            <h3>Department: {dept}</h3>
            <h4>Designation: {designation}</h4>
            <h5>Salary: {salary}</h5>
            <hr />
          </div>
        );
      })}
      <h1>Total Salary Expense: {totalSalary}</h1>
    </div>
  );
};

export default EmployeeCard;
