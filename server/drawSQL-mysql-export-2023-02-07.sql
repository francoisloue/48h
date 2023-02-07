CREATE TABLE `User`(
    `idUser` CHAR(36) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `pwd` VARCHAR(255) NOT NULL,
    `type` ENUM('admin','customer','retailer') NOT NULL
);
ALTER TABLE
    `User` ADD PRIMARY KEY `user_iduser_primary`(`idUser`);
CREATE TABLE `Product`(
    `idProduct` CHAR(36) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` BIGINT NOT NULL,
    `content` VARCHAR(255) NULL
);
ALTER TABLE
    `Product` ADD PRIMARY KEY `product_idproduct_primary`(`idProduct`);
