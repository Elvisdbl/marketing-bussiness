--Creating tables and database
-- users
-- services
-- orders
-- message
-- chats
-- plans
-- areas
-- partners

CREATE DATABASE `marketing`;

USE `marketing`;

CREATE TABLE IF NOT EXISTS `users` (
    `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `email` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_user`)
);

CREATE TABLE IF NOT EXISTS `services`(
    `id_service` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(25) NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `description` VARCHAR(25) NOT NULL,
    `price` VARCHAR(25) NOT NULL,
    `details` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_service`)
);

CREATE TABLE IF NOT EXISTS `orders` (
    `id_order` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_user` INT UNSIGNED NOT NULL,
    `id_service` INT UNSIGNED NOT NULL,
    `order_date` DATETIME NOT NULL,
    `details` VARCHAR(25) NOT NULL,
    `total_price` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_order`)
);

CREATE TABLE IF NOT EXISTS `messages`(
    `id_message` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_user` INT UNSIGNED NOT NULL,
    `message` VARCHAR(25) NOT NULL,
    `message_date` DATETIME NOT NULL,
    PRIMARY KEY(`id_message`),
    FOREIGN KEY(`id_user`) REFERENCES `users`(`id_user`)
);

CREATE TABLE IF NOT EXISTS `chats`(
    `id_chat` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_message` INT UNSIGNED NOT NULL,
    PRIMARY KEY(`id_chat`)
);

CREATE TABLE IF NOT EXISTS `plans`(
    `id_plan` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_service` INT UNSIGNED NOT NULL,
    `name` VARCHAR(25) NOT NULL,
    `description` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_plan`),
    FOREIGN KEY(`id_service`) REFERENCES `services`(`id_service`)
);

CREATE TABLE IF NOT EXISTS `areas`(
    `id_area` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_area`)
);

CREATE TABLE IF NOT EXISTS `partners`(
    `id_partner` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_partner`)
);


--Creating information for my tables, just an several examples

