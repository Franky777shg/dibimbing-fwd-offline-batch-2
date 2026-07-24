-- create database dengan nama frengky book jika belum ada
CREATE DATABASE IF NOT EXISTS frengky_book;

-- menetapkan frengky_book sebagai default database
USE frengky_book;

-- drop semua table yang kita butuhkan terlebih dahulu untuk memastikan pembuatan table berjalan lancar
DROP TABLE IF EXISTS Buku;
DROP TABLE IF EXISTS Kategori;
DROP TABLE IF EXISTS Penulis;
DROP TABLE IF EXISTS Member;
DROP TABLE IF EXISTS Peminjaman;
DROP TABLE IF EXISTS Detail_Peminjaman;

-- create semua table yang kita butuhkan
CREATE TABLE Kategori (
  id_kategori int PRIMARY KEY AUTO_INCREMENT,
  nama varchar(50)
);

CREATE TABLE Penulis (
  id_penulis int PRIMARY KEY AUTO_INCREMENT,
  nama varchar(50)
);

CREATE TABLE Buku (
	id_buku INT AUTO_INCREMENT,
    judul VARCHAR(50) NOT NULL UNIQUE,
    id_kategori INT,
    id_penulis INT,
    PRIMARY KEY (id_buku),
    FOREIGN KEY (id_penulis) REFERENCES Penulis (id_penulis),
    FOREIGN KEY (id_kategori) REFERENCES Kategori (id_kategori)
);

CREATE TABLE Member (
  id_member int PRIMARY KEY AUTO_INCREMENT,
  nama varchar(50) UNIQUE NOT NULL,
  email varchar(50) UNIQUE NOT NULL,
  no_telp varchar(50)
);

CREATE TABLE Peminjaman (
  id_peminjaman int PRIMARY KEY AUTO_INCREMENT,
  id_member int,
  tanggal_pinjam datetime,
  tanggal_kembali datetime,
  FOREIGN KEY (id_member) REFERENCES Member (id_member)
);

CREATE TABLE Detail_Peminjaman (
  id_buku_peminjaman int,
  id_peminjaman int,
  id_buku int,
  FOREIGN KEY (id_peminjaman) REFERENCES Peminjaman (id_peminjaman),
  FOREIGN KEY (id_buku) REFERENCES Buku (id_buku)
);