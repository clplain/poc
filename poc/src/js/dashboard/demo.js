require('./demo.css');
import React from 'react';
import App from './app';
class Demo extends React.Component {
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <App/>
        </div>
      </div>
    );
  }
}
export default Demo;
