import React, { useContext } from "react";
import { People } from "./../component/People";
import { Comic } from "../component/Comic";
import { Context } from "./../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Pop = props => {
	const { store } = useContext(Context);

	// put an if is underfine to throw a message
	const character = store.people.find(p => props.match.params.id == p.id);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-6" />
				</div>
				<div className="card mb-3">
					<img
						src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{character.name}</h5>
						<p className="card-text">{character.description}</p>
						<p className="card-text">
							<small className="text-muted">
								Comics #:
								{character.comics.available}
							</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

Pop.propTypes = { history: PropTypes.object, match: PropTypes.object };
