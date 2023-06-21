import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import {ProductStore} from '../store/product';
import styles from '../styles';
import {observer} from 'mobx-react';
import {SDK} from 'react-native-inmobi_ad_sdk';

export const ProductGrid = observer(({searchText, navigation, byCategory}) => {
  const {
    state: {searchedProducts, category},
    setProduct,
    getSearchedProducts,
    getProductsByCategories,
  } = ProductStore;

  useEffect(() => {
    byCategory
      ? getProductsByCategories(category)
      : getSearchedProducts(searchText);
  }, [category]);

  const productId = productId => {
    console.log(productId);
  };

  const advertisementTapHandler = productId => {
    console.log('Ad tapped with SKUID', productId);
  };

  const VideoAd = () => {
    return (
      <SDK
        userId="b908f460957b11ed81e1c53095da88cf"
        apiKey="ODFiNmUxODItMmMyNS00NTg4LWEyZTAtZDI3ZDAyNTY3MmQ2"
        clientId="70891516"
        targetingType="CATEGORY"
        getData={productId}
        advertisementTapped={advertisementTapHandler}
        adType="TopVideoWithBottomProductDetails"
        style={{width: '100%', margin: 10}}
      />
    );
  };

  const ProductComp = props => {
    const {product, index} = props;
    console.log('props', props);
    return product.type == 'ad' ? (
      <VideoAd />
    ) : (
      // <></>
      <View>
        <Pressable
          onPress={() => {
            setProduct(product);
            navigation.navigate('Product');
          }}
          key={index}
          style={styles.sliderItem}>
          <Image style={styles.sliderImg} source={{uri: product.imgs[0]}} />
          <Text style={styles.sliderText}>{product.name}</Text>
          <Text style={styles.sliderPrice}>${product.price}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      {!byCategory && (
        <Text style={styles.searchText}>
          {searchedProducts.length === 0 && 'no'} search results for "
          {searchText}"
        </Text>
      )}
      <ScrollView contentContainerStyle={styles.productGrid}>
        {searchedProducts.map((x, i) => (
          <ProductComp product={x} index={i} />
        ))}
        <View style={{height: 350}}></View>
      </ScrollView>
    </View>
  );
});
