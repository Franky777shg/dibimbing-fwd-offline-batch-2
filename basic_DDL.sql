CREATE DATABASE toko_online;
USE toko_online;
SHOW DATABASES;
DROP DATABASE toko_online;

CREATE TABLE user (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    dibuat_pada TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (nama, email)
VALUES ('Budi', 'budi@email.com');

INSERT INTO users (nama, email)
VALUES ('Rudi', 'rudi@email.com'),
('Nia', 'nia@email.com'),
('Kiki', 'kiki@email.com');

UPDATE users
SET nama = 'Kancil'
WHERE id = 6;

DELETE FROM users
WHERE id = 1;



