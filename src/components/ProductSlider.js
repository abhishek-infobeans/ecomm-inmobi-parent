import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles';

import {ProductStore} from '../store/product';
import {SDK} from 'react-native-inmobi_ad_sdk';

export const ProductSlider = ({navigation}) => {
  const {setProduct, getRandomProducts} = ProductStore;

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getRandomProducts());
  }, []);

  const ProductItem = prop => {
    const item = prop.product;
    return (
      <View style={styles.sliderItem}>
        <Pressable
          onPress={() => {
            setProduct(item);
            navigation.navigate('Product');
          }}
          key={prop.index}>
          <Image style={styles.sliderImg} source={{uri: item.imgs[0]}} />
          <Text style={styles.sliderText}>{item.name}</Text>
          <Text style={styles.sliderPrice}>${item.price}</Text>
        </Pressable>
      </View>
    );
  };

  const productId = id => {
    console.log('data received' + id);
  };

  const advertisementTapHandler = productId => {
    console.log('advertisement tapped with productId', productId);
  };

  const AdProductItem = () => {
    return (
      <SDK
        userId="b908f460957b11ed81e1c53095da88cf"
        apiKey="ODFiNmUxODItMmMyNS00NTg4LWEyZTAtZDI3ZDAyNTY3MmQ2"
        clientId="70891516"
        targetingType="CATEGORY"
        getData={productId}
        advertisementTapped={advertisementTapHandler}
        isProduct={true}
        adType="ProductItem"
        // sliderItemStyle={styles.sliderItem}
        // sliderImgStyle={styles.sliderImg}
        // sliderTextStyle={styles.sliderText}
        // sliderPriceStyle={styles.sliderPrice}
      />
    );
  };

  return (
    <ScrollView horizontal={true} style={styles.productSlider}>
      {data.map(
        (product, itemIndex) => (
          // itemIndex === 1 ? (
          //   <AdProductItem />
          // ) : (
          <ProductItem product={product} index={itemIndex} />
        ),
        // ),
      )}
    </ScrollView>
  );
};
