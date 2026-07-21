-- Cari tau actor yang berperan dari setiap film
SELECT f.title, a.first_name, a.last_name FROM
film f
INNER JOIN film_actor fa ON f.film_id = fa.film_id
INNER JOIN actor a ON a.actor_id = fa.actor_id
ORDER BY f.title;