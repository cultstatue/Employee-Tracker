DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (

  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL

);

CREATE TABLE roles (

  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL NOT NULL,
  dep_id INTEGER NOT NULL,
  CONSTRAINT fk_departments FOREIGN KEY (dep_id) REFERENCES departments(id)

);

CREATE TABLE employees (

  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id),
  CONSTRAINT fk_employees FOREIGN KEY (manager_id) REFERENCES employees(id)
);