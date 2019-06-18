import React, { Component } from 'react';
import { actions } from '../../ducks/freezer';

import * as FLAVORS from '../../constants/flavors';

import Freezer from './Freezer';
import { connect } from 'react-redux';

class FreezerContainer extends Component {


  componentDidMount() {

    setInterval(() => {
      let randomTemperature = -Math.round(Math.random() * 10)
      this.props.updateTemperature(randomTemperature)
    }, 2000)
  }

  handleOnClickRestock = (flavourName) => {

    let amount = parseInt(window.prompt(`Enter the amount to restock for ${flavourName}:`));

    if (!isNaN(amount)) {
      this.props.addProductToFreezer(flavourName, amount);
    }

  }

  handleOnClickAddProduct = () => {
    let availableFlavours = Object.keys(FLAVORS).join(',');
    let flavorName = window.prompt(`Chose the flavor to add. Choose from ${availableFlavours}`)

    if (FLAVORS[flavorName]) {
      this.handleOnClickRestock(flavorName);
    }
  }

  render() {
    debugger;
    return (
      <Freezer
        flavors={this.props.flavors}
        temperature={this.props.temperature}
        onRestoreClick={this.handleOnClickRestock}
        onClickAddProduct={this.handleOnClickAddProduct}
      />
    )
  }
}

const mapStateToProps = (state) => ({

  flavors: state.freezer.flavors,
  temperature: state.freezer.temperature,
});

const mapDispatchToProps = (dispatch) => ({
  updateTemperature: (temperature) => dispatch(actions.updateTemperature(temperature)),
  addProductToFreezer: (flavourName, amount) => dispatch(actions.addProductToFreezer(flavourName, amount))


});

export default connect(mapStateToProps, mapDispatchToProps)(FreezerContainer);

