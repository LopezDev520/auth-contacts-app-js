-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema auth-contacts-app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema auth-contacts-app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `auth-contacts-app` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `auth-contacts-app` ;

-- -----------------------------------------------------
-- Table `auth-contacts-app`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `auth-contacts-app`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `auth-contacts-app`.`contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `auth-contacts-app`.`contacts` (
  `contact_id` INT NOT NULL AUTO_INCREMENT,
  `contact_name` VARCHAR(255) NULL,
  `contact_email` VARCHAR(255) NULL,
  `contact_number` VARCHAR(255) NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`contact_id`),
    FOREIGN KEY (`user_id`)
    REFERENCES `auth-contacts-app`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
