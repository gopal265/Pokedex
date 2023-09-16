import { memo, useState } from 'react';
import About from './tabs/About';
import BaseStats from './tabs/BaseStats';
import { getImageURL } from '../../utils';
import './Details.css';

const TAB_ABOUT = 'about';
const TAB_STATS = 'base-stats';
const TAB_EVOLUTION = 'evolution';
const TAB_DEFAULT = TAB_ABOUT;

const tabs = [
	{
		id: TAB_ABOUT,
		label: 'About',
	},
	{
		id: TAB_STATS,
		label: 'Base Stats',
	},

];

function Details( { pokemon } ) {
	const [ currentTab, setCurrentTab ] = useState( TAB_DEFAULT );
	const imgURL = getImageURL( pokemon?.id );

	if ( ! pokemon ) {
		return null;
	}

	// Return tab switch class name.
	const getClassName = ( tabName ) => {
		return `tab-switch ${ currentTab === tabName ? 'active' : '' }`;
	};

	
	return (
		<div className="details">

			<img src={ imgURL } className="pokemon-image" alt={ pokemon.name } />

			<div className="tabs-switch-container">
				{
					tabs.map( ( { id, label } ) => (
						<button key={ id } className={ getClassName( id ) } onClick={ () => setCurrentTab( id ) }>
							{ label }
						</button>
					) )
				}
			</div>

			{
				( () => {
					switch ( currentTab ) {
						case TAB_ABOUT:
							return <About pokemon={ pokemon } />;

						case TAB_STATS:
							return <BaseStats stats={ pokemon.stats } />;

						
						default:
							return null;
					}
				} )()
			}

		</div>
	);
}

export default memo( Details );