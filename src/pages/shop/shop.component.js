import { React, Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'; //Importamos componente CollectionPreview que contendrá Componente individual para los items de cada colección 

import './shop.styles.scss';

class ShopPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      collections: SHOP_DATA
    }
  } 

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        } 
      </div>
    );
  }
}

export default ShopPage;