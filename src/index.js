import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Discover from "./pages/Discover/Discover";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="home" element={<App />} />
			<Route path="search" element={<Search />} />
			<Route path="discover" element={<Discover />} />
		</Routes>
		<Footer />
	</BrowserRouter>,
	document.getElementById("root")
);
