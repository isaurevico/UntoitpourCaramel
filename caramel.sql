-- phpMyAdmin SQL Dump
-- version 5.2.1-1.fc38
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 02 mai 2023 à 08:14
-- Version du serveur : 8.0.32
-- Version de PHP : 8.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_caramel`
--

-- --------------------------------------------------------

--
-- Structure de la table `caramel`
--

CREATE TABLE `caramel` (
  `id` int NOT NULL,
  `bedrooms` int NOT NULL,
  `businessUnit` text NOT NULL,
  `city` text NOT NULL,
  `rooms` int NOT NULL,
  `title` text NOT NULL,
  `livingArea` float NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `caramel`
--

INSERT INTO `caramel` (`id`, `bedrooms`, `businessUnit`, `city`, `rooms`, `title`, `livingArea`, `price`) VALUES
(201375155, 1, 'SL', 'Valenciennes', 2, 'Appartement', 25, 450),
(201231951, 0, 'SL', 'Lille', 1, 'Appartement', 16, 585),
(201482951, 1, 'SL', 'Lille', 2, 'Appartement', 19, 525),
(199897253, 4, 'SL', 'Lille', 5, 'Appartement', 110, 1390),
(198888903, 2, 'SL', 'Lille', 3, 'Appartement', 71.05, 1084),
(201739567, 1, 'SL', 'Wambrechies', 2, 'Appartement', 45.2, 770),
(201773603, 2, 'SL', 'Valenciennes', 3, 'Appartement', 75, 799),
(201790939, 3, 'SL', 'Lille', 4, 'Appartement', 166.91, 4420),
(201680723, 4, 'SL', 'Lille', 5, 'Appartement', 121.18, 2170),
(201686645, 2, 'SL', 'Lille', 3, 'Appartement', 80.71, 1254),
(201680721, 0, 'SL', 'Lille', 1, 'Appartement', 26.42, 650),
(201785207, 1, 'SL', 'Lille', 2, 'Appartement', 53.81, 940),
(201790937, 2, 'SL', 'Lille', 3, 'Appartement', 37, 1095),
(198737261, 0, 'SL', 'Roubaix', 1, 'Appartement', 18.3, 461),
(194319521, 0, 'SL', 'Roubaix', 1, 'Appartement', 18.3, 463),
(197167427, 0, 'SL', 'Roubaix', 1, 'Appartement', 17.3, 439),
(201375159, 1, 'SL', 'Valenciennes', 2, 'Appartement', 20, 415),
(201733923, 0, 'SL', 'Lille', 1, 'Appartement', 18.1, 477),
(198029819, 3, 'SL', 'Lille', 4, 'Appartement', 94, 540),
(196869893, 4, 'SL', 'Lille', 5, 'Appartement', 83, 515),
(201004953, 4, 'SL', 'Tourcoing', 5, 'Appartement', 150, 420),
(198500757, 1, 'SL', 'Roubaix', 2, 'Appartement', 61.3, 836),
(196828907, 0, 'SL', 'Lille', 1, 'Appartement', 20, 532),
(199677669, 3, 'SL', 'Lille', 4, 'Appartement', 135, 1720),
(199921933, 2, 'SL', 'Lille', 3, 'Appartement', 79, 1195),
(197842363, 2, 'SL', 'Cambrai', 3, 'Appartement', 72, 710),
(198996569, 1, 'SL', 'Bailleul', 2, 'Appartement', 37.87, 548),
(199245061, 0, 'SL', 'Lille', 1, 'Appartement', 11.34, 440),
(201579603, 0, 'SL', 'Cambrai', 1, 'Appartement', 20, 450),
(197421331, 2, 'SL', 'Mouvaux', 3, 'Appartement', 200, 2100),
(195406641, 4, 'SL', 'Villeneuve-d Ascq', 5, 'Appartement', 82, 400),
(195261379, 0, 'SL', 'Roubaix', 1, 'Appartement', 20, 380),
(198618101, 0, 'SL', 'Lambersart', 1, 'Appartement', 24.49, 588),
(197744369, 1, 'SL', 'Armentières', 2, 'Appartement', 68.02, 670),
(198212815, 0, 'SL', 'Lille', 1, 'Appartement', 12.15, 440),
(194958353, 4, 'SL', 'Valenciennes', 8, 'Appartement', 140, 350),
(201382435, 1, 'SL', 'Lille', 2, 'Appartement', 17.71, 850),
(201334803, 1, 'SL', 'Cambrai', 2, 'Appartement', 44, 660),
(201002355, 1, 'SL', 'Lille', 2, 'Appartement', 78, 1350),
(201013349, 1, 'SL', 'Lille', 2, 'Appartement', 35.43, 762),
(201094811, 4, 'SL', 'Lille', 5, 'Appartement', 127, 2050),
(197836301, 3, 'SL', 'Roubaix', 2, 'Appartement', 100, 430),
(201599295, 0, 'SL', 'Lille', 1, 'Appartement', 22.38, 481),
(201014089, 2, 'SL', 'Lille', 3, 'Appartement', 63.87, 1500),
(201789265, 3, 'SL', 'Lille', 4, 'Appartement', 66, 1380),
(201679975, 1, 'SL', 'Roubaix', 3, 'Appartement', 53, 640),
(200498077, 2, 'SL', 'Lille', 3, 'Appartement', 48, 770),
(200791115, 1, 'SL', 'Lille', 2, 'Appartement', 36, 839),
(200911933, 0, 'SL', 'La Madeleine', 1, 'Appartement', 24, 585),
(200489463, 2, 'SL', 'Maubeuge', 3, 'Appartement', 55, 495);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
