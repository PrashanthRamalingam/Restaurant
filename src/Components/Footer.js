

import React from 'react';
class Footer extends React.Component {
    constructor() {
        super();
        this.name = {
            rName: 'White Petals',
            rLoc: 'Bangalore',

        }
    }
    render = () => {

        return (
            <h5 style={{ color: 'Blue', textAlign: 'center', position: 'absolute' }}>Copyright - {this.name.rName} || {this.name.rLoc}  - PrivacyPolicies.com © 2002 - 2022 All rights reserved


            </h5>
        )
    }

}
export default Footer;

