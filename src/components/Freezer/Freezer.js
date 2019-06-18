import React from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import Button from '../../components/Button/Button';


const Freezer = ({ flavors, temperature, onRestoreClick, onClickAddProduct }) => {
  
  const flavours = Object.keys(flavors).map(
    (flavorName) => <FreezerFlavor key={flavorName}
      flavorName={flavorName}
      scoops={flavors[flavorName]}
      onRestoreClick={() => onRestoreClick(flavorName)}
    />)
  return (
    <Panel title={`Freezer (°${temperature || 0}C)`}>
      <Button label={"Add Product"} onClick={onClickAddProduct} />
      {flavours}
    </Panel>
  );
}


export default Freezer;

