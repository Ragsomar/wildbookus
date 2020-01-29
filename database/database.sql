DROP DATABASE IF EXISTS wildbookus;

CREATE wildbookus;

USE wildbookus;

CREATE TABLE wilder (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    picture VARCHAR (400) NOT NULL,
);

CREATE TABLE project (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) NOT NULL,
    link VARCHAR (400) NULL,
    screenshot VARCHAR (400) NULL,
);

CREATE TABLE comment (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nickname VARCHAR (100) NOT NULL,
    text VARCHAR (500) NOT NULL,
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES project (id),
);

CREATE TABLE wilder_has_project (
    wilder_id INT NOT NULL,
    project_id INT NOT NULL,
    CONSTRAINT PK_wilder_has_project PRIMARY KEY (wilder_id, project_id),
    FOREIGN KEY (wilder_id) REFERENCES wilder(id),
    FOREIGN KEY (project_id) REFERENCES project(id),
);