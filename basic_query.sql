USE sakila;

SELECT * FROM actor;

SELECT * FROM actor
ORDER BY first_name
LIMIT 10;

SELECT title, description, length FROM film
WHERE length = 120;

SELECT * FROM film
WHERE rating <> 'PG';

SELECT * FROM film
WHERE length <= 60;

SELECT * FROM film
WHERE length BETWEEN 60 AND 90;

SELECT * FROM film
WHERE length IN (60, 90, 120);

SELECT * FROM film
WHERE title LIKE '%GUN%';

-- Cari ada berapa film yang durasi nya 60, 90, dan 120 menit
SELECT COUNT(*) as jumlah_film FROM film
WHERE length IN (60, 90, 120);

-- Cari total durasi dari film film yang mempunyai kata GUN di judul nya
SELECT SUM(length) total_durasi FROM film
WHERE title LIKE '%GUN%';

-- Cari rata rata durasi dari film film yang mempunyai kata GUN di judul nya
SELECT 
    AVG(length) rata_rata_durasi
FROM
    film
WHERE
    title LIKE '%GUN%';
    
-- Cari minimum durasi dari film film yang mempunyai kata GUN di judul nya
SELECT MIN(length) minimum_durasi FROM film
WHERE title LIKE '%GUN%';

-- Cari maksimum durasi dari film film yang rating film nya PG-13 dan NC-17;
SELECT MAX(length) maksimum_durasi from film
WHERE rating IN ('PG-13', 'NC-17');

-- Cari rating apa saja yang total film nya berjumlah lebih dari 200
SELECT rating, COUNT(*) total_film FROM film
GROUP BY rating
HAVING total_film > 200;

-- Beri tambahan informasi pada film, jika film itu kurang dari 90 menit, maka kita kasih keterangan 'Sebentar'
-- Kalau lebih dari 90 menit dan kurang dari 180 menit, kita kasih keterangan 'Standard'
-- Kalau lebih dari 180 menit, kita kasih keterangan 'Lama'
SELECT title, description, length,
CASE
	WHEN length < 90 THEN 'SEBENTAR'
    WHEN length BETWEEN 90 AND 180 THEN 'STANDARD'
    ELSE 'LAMA'
END keterangan
FROM film;