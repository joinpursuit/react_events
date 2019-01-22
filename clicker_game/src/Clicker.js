import React, { Component } from 'react';

class Clicker extends Component{
  constructor(){
    super();
    this.state = {
      kpoints: 0,
      rate: 1,
      multiplier: 1,
      determination: 0,
      foreknowledge: 0,
      mindset: 0

    }

  };

  //BUTTON FUNCTIONS


//function that handles the click of main button adding to kpoints
  handleClick = () => {

    this.setState({
      kpoints: this.state.kpoints + Math.floor(this.state.rate * this.state.multiplier)
    })
  };

//
  buyDetermination = () =>{
    let {kpoints, rate, determination} = this.state;
      if(kpoints >= 10){
        this.setState({
          kpoints: kpoints - 10,
          rate: rate + 1,
          determination: determination + 1

        })
      }

  }

  buyForeknowledge = () => {
   let { kpoints, multiplier, foreknowledge } = this.state;

      if(kpoints > 1){
        this.setState({
          kpoints: Math.floor(kpoints / 2),
          multiplier: multiplier + 0.01,
          foreknowledge: foreknowledge + 1
        })
      }

  };

  buyMindset = () => {
  let {kpoints, rate, mindset } = this.state

    if( kpoints >= 100){
      this.setState({
        kpoints: kpoints - 100,
        rate: rate + 10,
        mindset: mindset + 1
      })
    }
  }

//RENDER
  render(){
console.log(this.state)

const { kpoints, determination, rate, foreknowledge, multiplier, mindset } = this.state

    return(

  <div>


      <button onClick= { this.handleClick }>
      Click Here + { Math.floor(rate * multiplier)}
      </button>
        <p>
        <strong>{ kpoints }</strong> Knowledge Points
        </p>


        <h3>Shop</h3>

      {determination} {" "} <button onClick ={this.buyDetermination}>
                            Buy Determination
                           </button>
        <br />
      {foreknowledge} {" "} <button onClick ={this.buyForeknowledge}>
                             Buy Foreknowledge
                           </button>

        <br />
        {mindset} {" "} <button onClick ={this.buyMindset}>
                       Buy Mindset
                      </button>


    </div>
    )
  }

};


export default Clicker;
