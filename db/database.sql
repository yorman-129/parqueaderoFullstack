
  
CREATE DATABASE IF NOT EXISTS parqueadero;

USE parqueadero;

CREATE TABLE parqueo (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE parqueo;

INSERT INTO parqueo values 
  (1, 'jgk123', "Fri May 27 2022 10:40:07", 0),
  (2, 'Joe456', "Fri May 27 2022 10:40:07", 0),
  (3, 'Joh765',"Fri May 27 2022 10:40:07", 0);

SELECT * FROM employee;