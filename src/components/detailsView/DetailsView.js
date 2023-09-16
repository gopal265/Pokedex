import ReactDOM from 'react-dom';
import { useCallback, useState } from 'react';
import { usePokemon } from '../../context/PokemonContextProvider';
import { useCurrentPokemon } from '../pokedex/Pokedex';
import BackButton from '../backButton/BackButton';
import  Card  from '../card/Card';
import  Details  from '../details/Details';
import Overlay  from '../overlay/Overlay';
import './DetailsView.css';

export default function DetailsView() {
	const {setCurrentPokemonId} = usePokemon()
	const [ isHidden, setIsHidden ] = useState( false );
    const currentPokemon = useCurrentPokemon()

	const closeModal = useCallback( () => {
		setIsHidden( true );
        setCurrentPokemonId(-1)
        setIsHidden(false)
	}, [] );


	if ( ! currentPokemon ) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className='details-view'>
			<Overlay hidden={ isHidden } onClick={ closeModal } />

			<div className={ `details-view-container ${ isHidden && 'hidden' }` } >
			    {console.log(currentPokemon)}
                <BackButton onClick={ closeModal } />
				<Card pokemon={currentPokemon} />
				<Details  pokemon={currentPokemon}/>
			</div>
		</div>, document.body,
	);
}