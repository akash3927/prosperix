/** @format */

import React from 'react';
import { useGlobalContext } from '../context/context';
import '../Search/search.css';

const Search = () => {
	const { query, setQuery, isError } = useGlobalContext();

	return (
		<>
			<section className='search-section'>
				<h2>Search Your Favouraite Movie</h2>
				<form action='#' onSubmit={(e) => e.preventDefault()}>
					<div>
						<input
							type='text'
							placeholder='search here'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
				</form>
				<div className='card-error'>
					<p>{isError.show && isError.msg}</p>
				</div>
			</section>
		</>
	);
};

export default Search;
