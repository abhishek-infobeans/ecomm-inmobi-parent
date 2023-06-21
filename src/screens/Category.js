import {View, Text} from 'react-native';
import React from 'react';
import {Categories} from '../components/Categories';
import {ProductGrid} from '../components/ProductGrid';
import {SDK} from 'react-native-inmobi_ad_sdk';
import {observer} from 'mobx-react';
import {ProductStore} from '../store/product';

export const Category = observer(({navigation}) => {
  const productId = productId => {
    console.log(productId);
  };

  const advertisementTapHandler = productId => {
    console.log('Ad tapped with SKUID', productId);
  };

  const {
    state: {searchedProducts, category},
  } = ProductStore;

  console.log(category, ')_)_)_');

  return (
    <View>
      <View>
        <Categories />
      </View>
      {category === 1 ? (
        <SDK
          userId="b908f460957b11ed81e1c53095da88cf"
          apiKey="ODFiNmUxODItMmMyNS00NTg4LWEyZTAtZDI3ZDAyNTY3MmQ2"
          clientId="70891516"
          targetingType="CATEGORY"
          getData={productId}
          advertisementTapped={advertisementTapHandler}
          adType="VideoAdWithProductDetails"
          style={{marginTop: 0}}
        />
      ) : category === 2 ? (
        // <SDK
        //   userId="b908f460957b11ed81e1c53095da88cf"
        //   apiKey="ODFiNmUxODItMmMyNS00NTg4LWEyZTAtZDI3ZDAyNTY3MmQ2"
        //   clientId="70891516"
        //   targetingType="CATEGORY"
        //   getData={productId}
        //   advertisementTapped={advertisementTapHandler}
        //   adType="TopVideoWithBottomProductDetails"
        //   style={{marginTop: 20}}
        // />
        <></>
      ) : (
        <></>
      )}
      <ProductGrid byCategory={true} navigation={navigation} />
    </View>
  );
});
