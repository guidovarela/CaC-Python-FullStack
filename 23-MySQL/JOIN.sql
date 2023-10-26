
INNER JOIN - LEFT JOIN - RIGHT JOIN

select nombre, fecha_ingreso, aula, nivel 
FROM alumnos INNER JOIN aulas
ON alumnos.id_aula = aulas.id

select nombre, fecha_ingreso, aula, nivel 
FROM alumnos LEFT JOIN aulas
ON alumnos.id_aula = aulas.id

select nombre, fecha_ingreso, aula, nivel 
FROM alumnos LEFT JOIN aulas
ON alumnos.id_aula = aulas.id WHERE alumnos.id_aula IS NULL

select nombre, fecha_ingreso, aula, nivel 
FROM alumnos RIGHT JOIN aulas
ON alumnos.id_aula = aulas.id