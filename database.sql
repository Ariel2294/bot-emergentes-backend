-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: srv-captain--mariadb-server-db
-- Tiempo de generación: 30-08-2020 a las 19:07:54
-- Versión del servidor: 10.4.13-MariaDB-1:10.4.13+maria~focal
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bot`
--
DROP DATABASE IF EXISTS `bot`;
CREATE DATABASE IF NOT EXISTS `bot` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bot`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `mensaje` text DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL COMMENT '1 bot 2 usuario',
  `create_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `pregunta` text NOT NULL,
  `respuesta` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `respuesta`) VALUES
(1, 'Hola', 'Hola, mi nombre es Viernes estoy para ayudarte.'),
(6, 'Quien te creo', 'Estudiantes de ingeniería en la cátedra de tecnologías emergentes '),
(14, 'Quien eres', 'Soy Viernes y estoy para ayudarte'),
(21, 'como estas', 'Estoy muy bien por estar ayudandote.'),
(26, 'Cual es tu función', 'Mi función es ayudarte, respondiendo tus dudas.'),
(27, 'Quieres ser mi amigo', 'Por supuesto que sii, eso sería genial!!!'),
(28, 'Te gusta leer', 'Si me gusta mucho, los libros de Harry Potter son mis favoritos.'),
(29, 'Cuando fuiste creado', 'Fui creado el Sábado 29 de agosto del 2020.'),
(30, 'En que me puedes ayudar', 'A responder tus dudas sobre mi y de mi trabajo.'),
(31, 'Te gusta tu trabajo', 'Si me encanta!!!');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
