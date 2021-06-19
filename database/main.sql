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

CREATE TABLE IF NOT EXISTS `services`(
    `id_service` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(25) NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `price` DECIMAL(9, 2) NOT NULL,
    `image` VARCHAR(225) NOT NULL,
    PRIMARY KEY(`id_service`)
);

CREATE TABLE IF NOT EXISTS `orders` (
    `id_order` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_user` INT UNSIGNED NOT NULL,
    `id_service` INT UNSIGNED NOT NULL,
    `order_date` DATETIME DEFAULT UTC_TIMESTAMP() NOT NULL,
    `details` VARCHAR(120) NOT NULL,
    `total_price` DECIMAL(9, 2) NOT NULL,
    PRIMARY KEY(`id_order`)
);

CREATE TABLE IF NOT EXISTS `users` (
    `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `email` VARCHAR(25) NOT NULL,
    `password` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_user`)
);


CREATE TABLE IF NOT EXISTS `plans`(
    `id_plan` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_detail` INT UNSIGNED NOT NULL,
    `type` VARCHAR(25) NOT NULL,
    `price` DECIMAL(9, 2) NOT NULL,
    PRIMARY KEY(`id_plan`)
);

CREATE TABLE IF NOT EXISTS `plan_details`(
    `id_detail` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_plan` INT UNSIGNED NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    PRIMARY KEY(`id_detail`),
    FOREIGN KEY(`id_plan`) REFERENCES `plans`(`id_plan`)
);

CREATE TABLE IF NOT EXISTS `partners`(
    `id_partner` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `image` VARCHAR(225) NOT NULL,
    PRIMARY KEY(`id_partner`)
);

CREATE TABLE IF NOT EXISTS `areas`(
    `id_area` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    PRIMARY KEY(`id_area`)
);

CREATE TABLE IF NOT EXISTS `chats`(
    `id_chat` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_message` INT UNSIGNED NOT NULL,
    PRIMARY KEY(`id_chat`)
);

CREATE TABLE IF NOT EXISTS `messages`(
    `id_message` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_user` INT UNSIGNED NOT NULL,
    `message` VARCHAR(225) NOT NULL,
    `message_created` DATETIME DEFAULT UTC_TIMESTAMP() NOT NULL,
    PRIMARY KEY(`id_message`),
    FOREIGN KEY(`id_user`) REFERENCES `users`(`id_user`)
);





-- information of the database

INSERT INTO `services` (`title`,`type`,`description`,`price`,`image`) 
VALUES 
(
    'Google Advertising','Advertising','Also called Google Ads, Adwords, SEM or PPC. They are ads on Google with keywords and you pay per click.',0,''
),(
    'SEO','SEO','Organic SEO to appear in Google in the first places without ads and without paying per click.',0,''
),(
    'Community Management','Management','Content creation and management, calendar planning and results monitoring.',0,''
),(
    'Instagram Advertising','Advertising','We use the Facebook Ads ad manager to maximize the performance of your campaigns.',0,''
),(
    'Web Design','Design','We create modern, self-manageable, multi-device and conversion-optimized websites.',0,''
),(
    'Email Marketing','SEM','Customized campaigns for each segment of your audience with modern templates.',0,''
);

INSERT INTO `plans`(
    `type`,
    `price`,
) VALUES (
    'basic',25
),(
    'standard',99
),(
    'pro',199
);

CREATE TABLE IF NOT EXITS `details`(
    `id_plan`,
    `name`,
) VALUE (
    '1','Custom Charts'
),(
    '1', '5 Mailboxes, 10 Gb Storage'
),(
    '1', 'Unlimited Free Dashboards'
),(
    '1', 'Acces to all APIs'
),(
    '2','All Basic features'
),(
    '2','15 Mailboxes, 50 Gb Storage'
),(
    '2','Interactive Screen Sharing'
),(
    '2','Full Reports History'
),(
    '3','All Standar Features'
),(
    '3','50 Mailboxes,90 Gb Storage'
),(
    '3','Dedicated Account Manager'
),(
    '3','24/7 Prority Support'
);

CREATE TABLE IF NOT EXISTS `partners`(
    `name`,
    `image`
) VALUES (
    '',''
),(
    '',''
),(
    '',''
),(
    '',''
),(
    '',''
),(
    '',''
),(
    '',''
),(
    '',''
),(
    '',''
);

    
    


