import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			< Navbar />
			<div className="container">
				<div className="row">
					<Jumbotron />
					<div className="container">
						<div className="row">
							<Card />
							<div className="col-3">
								<div className="card">
									<img
										src="https://picsum.photos/seed/picsum/500/325"
										class="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
									</div>
									<div className="card-body">
										<a href="#" class="card-link">Card link</a>
									</div>
								</div>
							</div>
							<div className="col-3">
								<div className="card">
									<img
										src="https://picsum.photos/seed/picsum/500/325"
										class="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
									</div>
									<div className="card-body">
										<a href="#" class="card-link">Card link</a>
									</div>
								</div>
							</div>
							<div className="col-3">
								<div className="card">
									<img
										src="https://picsum.photos/seed/picsum/500/325"
										class="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
									</div>
									<div className="card-body">
										<a href="#" className="card-link">Card link</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<p className="texto-footer">Copyright& Your Website 2023</p>
					</div>
				</div>
			</div>
		</>
	);
};





export default Home;






