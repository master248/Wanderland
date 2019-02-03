import React from 'react';
// import ResultItem from './resultItem';
// import { removeWhere } from '../../utils';
import './resultsList.css';

const ResultsList = props => (
    <div id="results-list">
        {/* {props.places.map((place, i) => (
            <ResultItem
                // to get the accordian effect, we have to use key=index
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                eventKey={place}
                place={place}
                onRemove={() => {
                    props.setSelectedPlace(null);
                    props.setPlaces(removeWhere(props.places, 'name', place.name));
                }}
            />
        ))} */}
    </div>
);

export default ResultsList;
