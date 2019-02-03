import React from 'react';
import Card from 'react-bootstrap/Card';
import ResultItemBody from './resultItemBody';
import './resultItem.css';

const ResultItem = ({ eventKey, place, onRemove }) => (
    <Card eventKey={eventKey} key={place.name}>
        <Card.Heading>
            <button type="button" className="icon-button remove-button" onClick={onRemove}>
                <span className="glyphicon glyphicon-remove-circle" />
            </button>
            <Card.Title>
                {' '}
                {place.name}
            </Card.Title>
        </Card.Heading>
        <Card.Body>
            <ResultItemBody place={place} />
        </Card.Body>
    </Card>
);

export default ResultItem;
