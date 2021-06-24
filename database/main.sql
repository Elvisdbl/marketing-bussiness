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
    `isAdmin` BOOLEAN DEFAULT 0,
    PRIMARY KEY(`id_user`)
);

CREATE TABLE IF NOT EXISTS `plans`(
    `id_plan` INT UNSIGNED NOT NULL AUTO_INCREMENT,
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
    'Google Advertising','Advertising','Also called Google Ads, Adwords, SEM or PPC. They are ads on Google with keywords and you pay per click.',100,'uploads/215794ac-c8b6-4a34-988b-c8f97f329386.png'
),(
    'SEO','SEO','Organic SEO to appear in Google in the first places without ads and without paying per click.',200,'uploads/b0c3d2c2-56e0-4d71-9817-cb40c803c3b5.png'
),(
    'Community Management','Management','Content creation and management, calendar planning and results monitoring.',30,'uploads/6086ae33-87f5-46d3-b531-c58d0143e650.png'
),(
    'Instagram Advertising','Advertising','We use the Facebook Ads ad manager to maximize the performance of your campaigns.',300,'uploads/4de610ed-3179-4b84-a25f-39dc3a3fb76e.png'
),(
    'Web Design','Design','We create modern, self-manageable, multi-device and conversion-optimized websites.',500,'uploads/10768de7-c12a-462a-b59e-ad55919cc48b.png'
),(
    'Email Marketing','SEM','Customized campaigns for each segment of your audience with modern templates.',200,'uploads/9c8502b7-625b-441c-8286-9df06e0e318c.png'
);

INSERT INTO `plans`(`type`,
    `price`
) VALUES (
    'basic',25
),(
    'standard',99
),(
    'pro',199
);

INSERT INTO `plan_details`(
    `id_plan`,
    `name`
) VALUE (
    1,'Custom Charts'
),(
    1, '5 Mailboxes, 10 Gb Storage'
),(
    1, 'Unlimited Free Dashboards'
),(
    1, 'Acces to all APIs'
),(
    2,'All Basic features'
),(
    2,'15 Mailboxes, 50 Gb Storage'
),(
    2,'Interactive Screen Sharing'
),(
    2,'Full Reports History'
),(
    3,'All Standar Features'
),(
    3,'50 Mailboxes,90 Gb Storage'
),(
    3,'Dedicated Account Manager'
),(
    3,'24/7 Prority Support'
);

INSERT INTO `partners`(
    `name`,
    `image`
) VALUES (
    'Pingdom','uploads/fd80afc7-dd13-41a2-a823-7db737f19ed1.jpg'
),(
    'Google','uploads/eb1fede7-a136-43e1-9828-489e9a9bf9f8.jpg'
),(
    'GTMetrix','uploads/e9f16c7f-ae24-40f0-b28d-fd14fb823695.jpg'
),(
    'Yahoo!','uploads/e48fc82e-f15c-40ac-93dd-52070fe827ba.jpg'
),(
    'Google Ads','uploads/43bf0525-6d2f-4f0a-8d3c-6ca187b48606.jpg'
);

    
    


