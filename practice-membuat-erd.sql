1. STUDI KASUS DAN REQUIREMENT GATHERING 
Member bisa meminjam buku
Memiliki banyak buku
Satu buku bisa punya lebih dari dua penulis 
Satu buku punya satu kategory
Ketika pinjam buku ada batas pengembalian
Ketika pinjam buku, ada batas berapa banyak buku yang bisa dipinjam (yaitu 2)

2. IDENTIFIKASI ENTITAS
Buku, Kategori, Penulis, Peminjaman, Member

3. TENTUKAN ATRIBUT TIAP ENTITAS
Buku -> id_buku, judul, id_kategori, id_penulis
Kategori -> id_kategori, nama
Penulis -> id_penulis, nama
Member -> id_member, nama, email, no_telp
Peminjaman -> id_peminjaman, id_member, tanggal_pinjam, tanggal_kembali
Detail_Peminjaman (Junction Table) -> id_buku_peminjaman, id_peminjaman, id_buku

4. TENTUKAN RELASI ANTAR TABEL
Buku - Kategori = 1 to 1
Buku - Penulis = 1 to Many
Buku - Peminjaman = Many to Many (Junction Table -> Detail_Peminjaman)
Member - Peminjaman = 1 to Many

5. GAMBAR ERD
Buat di draw.io, dbdiagram, lucidchart, dsb

6. PHYSICAL DESIGN
Terjemahkan dari ERD menjadi script SQL yang bisa dijalankan

