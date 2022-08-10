INSERT INTO departments (name)
VALUES
('Markerting'),
('Human Rescources'),
('Finance'),
('IT');

INSERT INTO roles (title, salary, dep_id)
VALUES
('Technical Specialist', 100.00, 4),
('Sales Associate', 70.50, 1),
('Accountant', 85.99, 3),
('Talent Aquisition', 80.00, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Harry', 'Potter', 1, NULL),
('Capri', 'Sun', 4, NULL),
('Green', 'Tea', 4, 2),
('Kouign', 'Aman', 4, 2),
('Freddie', 'Bensen', 1, NULL),
('Tori', 'Vega', 2, NULL),
('Lunchable', 'Pizza', 3, NULL),
('Spongebob', 'Squarepants', 1, 1);