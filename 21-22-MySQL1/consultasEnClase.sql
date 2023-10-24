CREATE TABLE borrar ( id INT NOT NULL , nombre VARCHAR(100) NOT NULL , email VARCHAR(100) NOT NULL , activo BOOLEAN NOT NULL )

drop table borrar

ALTER TABLE `usuarios` CHANGE `activo` `activo` BOOLEAN NOT NULL; 

describe usuarios

INSERT INTO usuarios VALUES (
    1,'Guido','mail@mail.com',true
)

INSERT INTO usuarios VALUES 
(2,'maria','mail2@mail.com',true),
(3,'Pedro','mail2@mail.com',false)


SELECT id,nombre,email FROM usuarios
SELECT * FROM usuarios

UPDATE usuarios SET email = 'mail3@mail.com' WHERE id = 3
SELECT * FROM usuarios

