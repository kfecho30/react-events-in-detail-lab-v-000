import React from 'react';

export default class DelayedButton extends React.Component{

  fun = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render(){
    return(
      <button onClick={this.fun}>Get Coordinates</button>
    )
  }
}