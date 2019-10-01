CREATE DATABASE userReminders;
USE userReminders;

CREATE TABLE persons(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE reminders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    reminder VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    persons_id INT,
    FOREIGN KEY (persons_id) REFERENCES persons(id)
);