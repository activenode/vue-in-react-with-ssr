import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import HelloReact from './HelloReact.jsx';

console.log('HelloReact', HelloReact);

console.log("@server", ReactDOMServer.renderToString(
    <div>
        <HelloReact name="foo bar" />
    </div>
))

ReactDOM.render(<HelloReact name="foo bar" />, document.getElementById('app'));