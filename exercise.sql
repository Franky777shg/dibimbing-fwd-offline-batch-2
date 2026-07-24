-- Tampilkan judul film (title) beserta nama kategorinya (name), dengan menghubungkan tabel film, 
-- film_category, dan category.

-- judul film, deskripsi film nya, nama kategori nya
select category.name, count(*) as total_film_per_category from category
join film_category on film_category.category_id = category.category_id
join film on film_category.film_id = film.film_id
group by category.name
having total_film_per_category >= 65;

