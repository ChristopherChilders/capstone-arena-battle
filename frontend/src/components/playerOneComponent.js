import React from 'react';
// import {damageReceived} from './utils';
import Background from './Background';
class PlayerOne extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    // console.log(this.props)
    // console.log(state.state.damage)
    // let receivedHealth = this.props.damage/100
    // let currentHealth = (this.props.startHealth - receivedHealth)*450
      const healthStyleGREEN = {
          stroke:'black',
          strokeWidth: '2',
          fill: 'green',
          fillOpacity: '100',
      }
      // console.log(health)
    return (
      <svg width="100%" height="100%">
            <rect style={healthStyleGREEN}
          x="15"
          y="55"
          width="250"
          height="50"
          />
      </svg>
    )
  }

}

export default PlayerOne;