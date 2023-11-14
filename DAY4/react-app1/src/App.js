import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      department: 'HR'
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Engineering'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      department: 'Finance'
    },
    {
      id: 4,
      name: 'Alice Brown',
      department: 'Marketing'
    }
  ];

  return (
    <div className="App">
      <motion.table
        
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({ id, name, department }) => (
            <motion.tr
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <td>{id}</td>
              <td>{name}</td>
              <td>{department}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}

export default App;
