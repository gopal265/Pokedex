import generations from '../filterData/generations';
/**
 * Get pokemon image by id.
 *
 * @param {string} pokemonId
 *
 * @returns {string}
 */
export const getImageURL = ( pokemonId ) => {
	const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

	// Has only PNG.
	if ( parseInt( pokemonId ) >= 650 ) {
		return `${ baseURL }/official-artwork/${ pokemonId }.png`;
	}

	// Has SVG.
	return `${ baseURL }/dream-world/${ pokemonId }.svg`;
};

/**
 * Get generation object by pokemon ID.
 *
 * @param {number} id - Pokemon ID.
 *
 * @returns {Object}
 */
export const getGenerationByPokemonId = ( id ) => {
	return generations.find( ( { offset, limit } ) => {
		const firstId = offset + 1;
		const lastId = firstId + limit;

		return id >= firstId && id <= lastId;
	} );
};