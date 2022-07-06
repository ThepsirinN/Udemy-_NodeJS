-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2022 at 06:30 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node-complete`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `imgURL` varchar(1000) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `imgURL`, `description`) VALUES
(1, 'asdasd', 213, 'https://scontent.fbkk8-1.fna.fbcdn.net/v/t39.30808-6/241686184_1200765107067085_4517813535727281214_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4fgGvQexy2UAX9Dg2J2&_nc_ht=scontent.fbkk8-1.fna&oh=00_AT8oJ9atB6TFD-T9akxFeAcnoG76QU125-_H5Gc2rycO0Q&oe=62C167D0', 'eiei1234'),
(2, 'eiei1234', 1234, 'https://www.w3schools.com/html/img_girl.jpg', 'eiei1234'),
(3, 'stereophonic', 12345, 'https://www.nme.com/wp-content/uploads/2021/09/stereophonic_2021-1392x884.jpg', 'stereophonic_2021');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
