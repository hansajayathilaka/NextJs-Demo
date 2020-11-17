import React, { Component } from 'react';
import _ from 'lodash';


class Prices extends Component {
    constructor(props) {
        super(props);
        // console.log(props.bpi);
    }
    state = {
        currency: "USD"
    }

    priceCard = (data) => (
        <li className="list-group-item" key={data}>
            Bitcoin Rate for { this.props.bpi.[data].description }
            : <strong className='ml-3'>{ this.props.bpi.[data].rate }</strong>
            <span className="badge badge-primary m-2">{ this.props.bpi.[data].code }</span>
        </li>
    )


    render() {
        return(
            <div>
                <ul className="list-group">
                    {
                        _.map(this.props.bpi, item => {
                            return this.priceCard(item.code);
                        })
                    }
                </ul>
            </div>
        )

    }
}

export default Prices;
