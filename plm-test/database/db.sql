-- Creating database

CREATE DATABASE plm_form;
USE plm_form;
CREATE TABLE form (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(250) NOT NULL,
	last_name VARCHAR(250) NOT NULL,
	type_id ENUM('TI','CC','PA','CE') NOT NULL,
	user_id VARCHAR(250) UNIQUE NOT NULL,
	email VARCHAR(250) UNIQUE NOT NULL,
	phone VARCHAR(250) NOT NULL,
	birthday VARCHAR(250) NOT NULL
);
SHOW TABLES;
DESCRIBE form;
