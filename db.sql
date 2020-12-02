SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema taller4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema taller4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `taller4` DEFAULT CHARACTER SET utf8 ;
USE `taller4` ;

-- -----------------------------------------------------
-- Table `taller4`.`INSTITUCION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `taller4`.`INSTITUCION` (
  `id_ins` INT NOT NULL AUTO_INCREMENT,
  `nombre_ins` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_ins`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `taller4`.`ESTUDIANTES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `taller4`.`ESTUDIANTES` (
  `id_est` INT NOT NULL AUTO_INCREMENT,
  `nombre_est` VARCHAR(120) NOT NULL,
  `apellido_est` VARCHAR(120) NOT NULL,
  `edad_est` INT NOT NULL,
  `semestre_est` VARCHAR(50) NULL,
  `correo_est` VARCHAR(250) NOT NULL,
  `INSTITUCION_id_ins` INT NOT NULL,
  PRIMARY KEY (`id_est`),
  CONSTRAINT `fk_ESTUDIANTES_INSTITUCION`
    FOREIGN KEY (`INSTITUCION_id_ins`)
    REFERENCES `taller4`.`INSTITUCION` (`id_ins`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
