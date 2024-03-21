// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data using alert prompts
const collectEmployees = function() {
  const employees = [];
  
  while (true) {
    const firstName = prompt("Enter employee's first name:");
    if (firstName === null) break; // Exit loop if Cancel is clicked, at least 1 of these prompt should stop the loop on cancel

    const lastName = prompt("Enter employee's last name:");
    if (lastName === null) break; //This exits the loop if cancel is clicked, comment out to continue with the loop to the 3rd prompt


    const salaryInput = prompt("Enter employee's salary:");
    if (salaryInput === null) break; //This exits the loop if cancel is clicked, comment out to continue with the loop to the 1st request

    // For salary input, set to 0 if invalid
    const salary = isNaN(parseFloat(salaryInput)) ? 0 : parseFloat(salaryInput); 
    
    employees.push({ firstName, lastName, salary });
  }
  
  return employees;
};

// Display the average salary 
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
  console.log(`Number of Employees: ${employeesArray.length}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
