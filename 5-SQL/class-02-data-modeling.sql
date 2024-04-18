DROP TABLE students;
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    id_course INTEGER NOT NULL, 
    FOREIGN KEY (id_course ) REFERENCES courses(id) ON DELETE CASCADE
    -- id_course INTEGER REFERENCES courses(id) ON DELETE CASCADE
);

DROP TABLE courses;
CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    workload VARCHAR CHECK (workload IN ('40h', '60h', '160h', '240h')) DEFAULT '160h'
);

SELECT * FROM students;
INSERT INTO students (id, name, email, id_course) VALUES 
    (1, 'Erick', 'erick@gmail.com', 1),
    (2, 'Pedro', 'pedro@gmail.com', 1),
    (3, 'Neemias', 'neemias@gmail.com', 2);
    
SELECT * FROM courses;
INSERT INTO courses (name, workload) VALUES 
    ('Web Developement', '40h'),
    ('Data Analysis', '40h'),
    ('Cyber Security', '240h');
    

SELECT students.name, courses.name AS course
FROM students FULL JOIN courses
ON students.id_course = courses.id;
