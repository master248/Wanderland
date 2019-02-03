import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Popover, Button, Tooltip } from 'react-bootstrap';
import './tooltip.css';

// const CustomPopover = place => (
//     <Popover id="popover-basic" title={place.title}>
//         <div className="tooltipdiv">
//             <img src={place.image} alt="" />
//             <a
//                 href={place.link}
//                 className="badge badge-info mx-auto"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Wiki
//             </a>
//             <hr />
//             <p>{place.summary}</p>
//         </div>
//     </Popover>
// );

// const Tooltip = ({ place }) => (
//     <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={CustomPopover(place)}>
//         <button type="button" className="anchor-like-button">
//             {place.title}
//         </button>
//     </OverlayTrigger>
// );

class Example extends React.Component {
    constructor(...args) {
        super(...args);

        this.attachRef = target => this.setState({ target });
        this.state = { show: false };
    }

    render() {
        const { show, target } = this.state;
        return (
            <>
                <Button ref={this.attachRef} onClick={() => this.setState({ show: !show })}>
                    Click me!
                </Button>
                <Overlay target={target} show={show} placement="right">
                    {props => (
                        <Tooltip id="overlay-example" {...props}>
                            My Tooltip
                        </Tooltip>
                    )}
                </Overlay>
            </>
        );
    }
}

export function insertTooltips(place, wrapClass) {
    const elements = document.getElementsByClassName(wrapClass);

    [].forEach.call(elements, (container) => {
        ReactDOM.render(<Example place={place} />, container);
    });
}
