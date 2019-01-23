import './tooltip.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import './tippy-light-theme.css';
import { Col, Grid, Row } from 'react-bootstrap';
import HoverMap from './hovermap';

export function initializeTooltip(data, linkClass) {
    const tooltipNode = `
    <Grid class = "tooltipdiv">
        <Row>
            <Col xs={7}>
                <img src="${data.image}"/> 
                <h6 class="text-center">${data.search}</h6>
                <a href="${data.link}" class="badge badge-info mx-auto">Wiki</a>
            </Col>
            <Col xs={4} xsOffset={1}>
                <HoverMap
                    lat={data.lat}
                    lng={data.lng}
                    name={data.search}
                />
                HELLO HOVER!
            </Col> 
        </Row>
    </Grid>`;
    tippy(`.${linkClass}`, {
        content: tooltipNode,
        theme: 'light',
        interactive: true,
    });
}
