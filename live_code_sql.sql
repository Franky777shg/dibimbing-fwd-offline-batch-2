-- Tampilkan nama depan dan nama belakang customer (first_name, last_name) beserta kota tempat tinggalnya (city).
-- Hubungkan tabel customer → address → city.
select first_name, last_name,city from customer
join address on address.address_id = customer.address_id
join city on city.city_id = address.city_id;

-- Tampilkan nama lengkap aktor (first_name, last_name) beserta judul film yang pernah mereka bintangi (title).
select concat(first_name, ' ', last_name) as nama_lengkap, title from actor
join film_actor on film_actor.actor_id = actor.actor_id
join film on film.film_id = film_actor.film_id;

-- Tampilkan judul film (title) beserta jumlah unit yang tersedia di inventory (tampilkan inventory_id dan store_id-nya).
select film.title, count(*) as jumlah_unit from film
join inventory on film.film_id = inventory.film_id
group by (film.title);

-- Hitung berapa jumlah film untuk masing-masing kategori.
-- Tampilkan nama kategori dan jumlah filmnya, urutkan dari yang paling banyak.
select category.name, count(*) as jumlah_film from category
join film_category on film_category.category_id = category.category_id
join film on film_category.film_id = film.film_id
group by category.name
order by jumlah_film desc;

-- Tampilkan customer_id beserta total jumlah rental yang pernah dilakukan, tapi hanya customer yang sudah rental lebih dari 30 kali.

-- Hitung rata-rata rental_rate untuk setiap kategori film. Urutkan dari rata-rata tertinggi ke terendah.

-- Tampilkan customer_id, first_name, last_name, dan total uang yang sudah mereka bayarkan lewat tabel payment. Urutkan dari total pembayaran terbesar.

-- Tampilkan judul-judul film yang rental_rate-nya lebih besar dari rata-rata rental_rate seluruh film (gunakan subquery, bukan angka manual).

-- Tampilkan nama customer (first_name, last_name) yang pernah melakukan pembayaran (customer_id-nya muncul di tabel payment), menggunakan subquery dengan IN — bukan JOIN.

-- Hitung berapa banyak film berbeda (pakai syntax distinct) yang pernah disewa oleh masing-masing customer (satu customer bisa menyewa film yang sama lebih dari sekali di transaksi berbeda, jadi harus dihitung distinct). Tampilkan customer_id dan jumlahnya, urutkan dari yang paling banyak.

-- Hitung total pendapatan (SUM(amount)) dari tabel payment untuk setiap bulan di tahun 2005 (gunakan MONTH(payment_date) untuk mengelompokkan).

-- Tampilkan kategori film yang memiliki rata-rata panjang film (length) lebih dari 115 menit, beserta rata-ratanya.

-- Dari tabel customer, hitung berapa jumlah customer aktif (active = 1) di setiap store_id.