INSERT INTO departments (name)
VALUES
('Markerting'),
('Human Rescources'),
('Finance'),
('IT');

INSERT INTO roles (name, salary, dep_id)
VALUES
('Technical Specialist', 100, 4),
('Sales Associate', 70, 1),
('Accountant', 80, 3),
('Talent Aquisition', 80, 3);
SELECT roles.*, departments.name AS dep_name
FROM roles
LEFT JOIN departments ON roles.dep_id = departments.id;