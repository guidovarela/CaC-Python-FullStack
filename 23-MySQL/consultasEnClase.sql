USE world;

/* CONSULTAR LOS 5 PRIMEROS REGISTROS 
DE CADA TABLA: country, city, countrylanguage */
SELECT * FROM country LIMIT 5;
SELECT * FROM city LIMIT 5;
SELECT * FROM countrylanguage LIMIT 5;

/* - CONTAR CUÁNTOS REGISTROS DISPONIBLES: */
SELECT COUNT(*) AS NRO_FILAS FROM country;
SELECT COUNT(*) AS NRO_FILAS FROM city;
SELECT COUNT(*) AS NRO_FILAS FROM countrylanguage;

/*  Listar código, nombre, continente y población de todos los países.*/
SELECT Code, Name, Continent, Population FROM country;

/* Listar toda la información de los países, ordenados por población de manera 
ascendente.*/
SELECT * FROM country ORDER BY Population;

/* Listar todos los datos de los países
 que no cuenten con habitantes.*/
SELECT * FROM country WHERE Population=0;

/* Listar el nombre, la cantidad de habitantes, la superficie y una columna llamada 
'Densidad' con el resultado de la densidad poblacional de todos los países.
densidad poblacional(cantidad de habitantes)/ superficie del 
pais  (Se esperan 4 columnas y 239 registros).*/
SELECT Name, Population, SurfaceArea, Population/SurfaceArea AS DENSIDAD FROM country;
SELECT COUNT(Population/SurfaceArea) AS FILAS FROM country;

/* CONTAR CUÁNTOS PAISES HAY POR CONTINENTE: */
SELECT Continent, COUNT(Name) AS NRO_PAISES FROM country GROUP BY Continent; 

/* Listar todos los datos de los países cuya expectativa de vida supere los setenta y 
cinco años, ordenados bajo este concepto de forma ascendente. */
SELECT * FROM country WHERE LifeExpectancy>75 ORDER BY LifeExpectancy;
SELECT * FROM country WHERE LifeExpectancy>75 ORDER BY LifeExpectancy DESC;

/* Listar todos los datos de los países del continente "Sur América"
cuya expectativa de vida supere los setenta y cinco años*/
SELECT * FROM country WHERE LifeExpectancy>75 AND Continent LIKE "SOUTH AMERICA";

/* Listar todos los datos de los países situados en Europa,
Asia o Sudamérica. */
SELECT * FROM country WHERE Continent IN ("Europe", "Asia", "South America");

/* Listar todos los datos de las ciudades entre 125 mil y 130 mil habitantes. (Se 
esperan 5 columnas y 138 registros). */
SELECT * FROM city LIMIT 3;
SELECT * FROM city WHERE Population >=125000 AND Population<=130000;
SELECT * FROM city WHERE Population BETWEEN 125000 AND 130000;

/* Listar todos los datos de los países cuyo nombre comience y termine con 'A'.*/
SELECT * FROM country WHERE Name LIKE 'A%' AND Name LIKE '%A';

/* Listar los nombres de los países sudamericanos junto a los nombres (alias 
'Capital') de sus capitales.*/
SELECT Name, Capital FROM country WHERE Continent LIKE 'SOUTH AMERICA'; 

SELECT country.Name AS PAIS, city.Name AS CIUDAD
FROM country, city
WHERE Continent LIKE 'SOUTH AMERICA' AND country.Capital=city.ID;


SELECT country.Name AS PAIS, city.Name AS CIUDAD
FROM country
INNER JOIN city ON country.Capital=city.ID;
WHERE Continent LIKE 'SOUTH AMERICA';