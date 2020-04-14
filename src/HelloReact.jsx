import React from 'react';

import HelloVue from './HelloVue.vue';

export default (props) => {
    return <HelloVue name={props.name} />;
}