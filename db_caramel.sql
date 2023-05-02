-- phpMyAdmin SQL Dump
-- version 5.2.1-1.fc38
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 02 mai 2023 à 13:01
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
(194319521, 0, 'SL', 'Roubaix', 1, 'Appartement', 18.3, 463),
(194958353, 4, 'SL', 'Valenciennes', 8, 'Appartement', 140, 350),
(195261379, 0, 'SL', 'Roubaix', 1, 'Appartement', 20, 380),
(195406641, 4, 'SL', 'Villeneuve-d Ascq', 5, 'Appartement', 82, 400),
(196828907, 0, 'SL', 'Lille', 1, 'Appartement', 20, 532),
(196869893, 4, 'SL', 'Lille', 5, 'Appartement', 83, 515),
(197167427, 0, 'SL', 'Roubaix', 1, 'Appartement', 17.3, 439),
(197421331, 2, 'SL', 'Mouvaux', 3, 'Appartement', 200, 2100),
(197744369, 1, 'SL', 'Armentières', 2, 'Appartement', 68.02, 670),
(197842363, 2, 'SL', 'Cambrai', 3, 'Appartement', 72, 710),
(198029819, 3, 'SL', 'Lille', 4, 'Appartement', 94, 540),
(198212815, 0, 'SL', 'Lille', 1, 'Appartement', 12.15, 440),
(198500757, 1, 'SL', 'Roubaix', 2, 'Appartement', 61.3, 836),
(198618101, 0, 'SL', 'Lambersart', 1, 'Appartement', 24.49, 588),
(198737261, 0, 'SL', 'Roubaix', 1, 'Appartement', 18.3, 461),
(198888903, 2, 'SL', 'Lille', 3, 'Appartement', 71.05, 1084),
(198996569, 1, 'SL', 'Bailleul', 2, 'Appartement', 37.87, 548),
(199245061, 0, 'SL', 'Lille', 1, 'Appartement', 11.34, 440),
(199677669, 3, 'SL', 'Lille', 4, 'Appartement', 135, 1720),
(199897253, 4, 'SL', 'Lille', 5, 'Appartement', 110, 1390),
(199921933, 2, 'SL', 'Lille', 3, 'Appartement', 79, 1195),
(200597851, 1, 'SL', 'Saint-Saulve', 2, 'Appartement', 48, 533),
(201002355, 1, 'SL', 'Lille', 2, 'Appartement', 78, 1350),
(201004953, 4, 'SL', 'Tourcoing', 5, 'Appartement', 150, 420),
(201013349, 1, 'SL', 'Lille', 2, 'Appartement', 35.43, 762),
(201094811, 4, 'SL', 'Lille', 5, 'Appartement', 127, 2050),
(201231951, 0, 'SL', 'Lille', 1, 'Appartement', 16, 585),
(201334803, 1, 'SL', 'Cambrai', 2, 'Appartement', 44, 660),
(201375155, 1, 'SL', 'Valenciennes', 2, 'Appartement', 25, 450),
(201375159, 1, 'SL', 'Valenciennes', 2, 'Appartement', 20, 415),
(201382435, 1, 'SL', 'Lille', 2, 'Appartement', 17.71, 850),
(201482951, 1, 'SL', 'Lille', 2, 'Appartement', 19, 525),
(201557213, 0, 'SL', 'Lille', 1, 'Appartement', 28.63, 539),
(201579603, 0, 'SL', 'Cambrai', 1, 'Appartement', 20, 450),
(201622427, 1, 'SL', 'Lille', 2, 'Appartement', 39.74, 910),
(201633721, 1, 'SL', 'Lille', 2, 'Appartement', 46.47, 859),
(201637617, 2, 'SL', 'Lille', 3, 'Appartement', 50.2, 1350),
(201666523, 1, 'SL', 'Lille', 2, 'Appartement', 49.57, 662),
(201666529, 4, 'SL', 'Lille', 5, 'Appartement', 124.64, 2427),
(201680721, 0, 'SL', 'Lille', 1, 'Appartement', 26.42, 650),
(201680723, 4, 'SL', 'Lille', 5, 'Appartement', 121.18, 2170),
(201686645, 2, 'SL', 'Lille', 3, 'Appartement', 80.71, 1254),
(201733923, 0, 'SL', 'Lille', 1, 'Appartement', 18.1, 477),
(201739567, 1, 'SL', 'Wambrechies', 2, 'Appartement', 45.2, 770),
(201773603, 2, 'SL', 'Valenciennes', 3, 'Appartement', 75, 799),
(201774261, 0, 'SL', 'Armentières', 1, 'Appartement', 26.98, 372),
(201785207, 1, 'SL', 'Lille', 2, 'Appartement', 53.81, 940),
(201790937, 2, 'SL', 'Lille', 3, 'Appartement', 37, 1095),
(201790939, 3, 'SL', 'Lille', 4, 'Appartement', 166.91, 4420),
(201798323, 0, 'SL', 'Roubaix', 1, 'Appartement', 9.7, 485);

-- --------------------------------------------------------

--
-- Structure de la table `updates`
--

CREATE TABLE `updates` (
  `id` int NOT NULL,
  `timestamp` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `updates`
--

INSERT INTO `updates` (`id`, `timestamp`) VALUES
(1, 1683031849678),
(2, 1683031917017),
(3, 1683032248504);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `caramel`
--
ALTER TABLE `caramel`
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `updates`
--
ALTER TABLE `updates`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `updates`
--
ALTER TABLE `updates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
