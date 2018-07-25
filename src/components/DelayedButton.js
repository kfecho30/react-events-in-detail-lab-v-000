import React from 'react';

export default class DelayedButton extends React.Component{

  delayed = (event) => {
    setTimeout = () => {
      this.props.onDelayedClick(event);
      },
      this.props.delay);
    }
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render(){
    return(
      <button onClick={this.delayed}>Delayed</button>
    )
  }
}
