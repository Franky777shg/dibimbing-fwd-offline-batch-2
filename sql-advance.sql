USE sakila;

-- Carilah 5 film dengan durasi terpanjang di masing masing rating PG-13 dan NC-17
(SELECT title, description, length, rating FROM film
WHERE rating = 'PG-13'
ORDER BY length DESC
LIMIT 5)
UNION
(SELECT title, description, length, rating FROM film
WHERE rating = 'NC-17'
ORDER BY length DESC
LIMIT 5);

-- Carilah film yang durasi nya di atas rata rata
select * from film
where length > (select avg(length) from film);

-- select * from film 
-- where length > 115.2720;

-- select avg(length) from film;

-- Cari customer yang tinggal di district California
select * from customer
where address_id in (select address_id from address
where district = 'California');

select * from customer
join address on customer.address_id = address.address_id
where address.district = 'California';

-- RANK
-- Kita mau memberi ranking pada film berdasarkan durasi nya dari yang terpanjang
select title, length, dense_rank() over (order by length desc) as ranking from film;

-- CASE WHEN
-- Tentukan Kategori sebuah film berdasarkan rental rate nya
-- Kalau rate nya kurang dari 2, maka dia kategori 'Rendah'
-- Kalau rate nya di antara 2 dan 4, maka dia kategori 'Bagus'
-- Kalau rate nya lebih dari 4, maka dia kategori 'Recommend'
-- Coba lakukan data cleaning
SELECT 
    title,
    rental_rate,
    CASE
        WHEN rental_rate < 2 THEN 'Rendah'
        WHEN rental_rate BETWEEN 2 AND 4 THEN 'Bagus'
        ELSE 'Recommend'
    END AS category
FROM
    film;

-- CTE
-- Carilah film yang durasi nya di atas rata rata
with rata_rata_durasi as (
	select avg(length) as rata_rata from film
)
select title, length from film, rata_rata_durasi rrd
where film.length > rrd.rata_rata;

-- EXPLAIN
show index from film;
explain select * from film where title = 'ZORRO ARK';
ALTER TABLE film DROP INDEX idx_title;
CREATE INDEX idx_title ON film(title);
