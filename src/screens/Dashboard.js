import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  BackHandler,
  SafeAreaView,
} from 'react-native';

import {Header} from '../components/Header';
// import Products from '../components/Products';
import {Categories} from '../components/Categories';
import {ProductCarousel} from '../components/ProductCarousel';
import {ProductSlider} from '../components/ProductSlider';
import {ProductGrid} from '../components/ProductGrid';
import {LogEvents, SDK} from 'react-native-inmobi_ad_sdk';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles';

const Dashboard = ({navigation}) => {
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);

  const handleBackButtonClick = () => {
    setSearching(false);
    setSearchText('');
    setSearched(false);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  useEffect(() => {
    LogEvents({
      userId: '7aac8fb0c3c711ed8f3dd1a03e907612',
      eventCode: 'VIEW_HOME1',
    });
  }, []);

  const productId = id => {
    console.log('data received' + id);
  };

  const advertisementTapHandler = productId => {
    console.log('advertisement tapped with productId', productId);
  };

  return (
    <View>
      {/* <View style={styles.searchBar}>
          <TextInput
            value={searchText}
            onChangeText={e => setSearchText(e)}
            style={searching ? styles.searchInputFocused : styles.searchInput}
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
            selectionColor="#000"
          />
          <TouchableOpacity
            onPress={() => searchText.length > 0 && setSearched(true)}
            style={styles.searchBtn}>
            <FontAwesomeIcon
              style={{color: '#000', marginRight: 10}}
              icon={faSearch}
            />
          </TouchableOpacity>
        </View> */}
      <ScrollView style={{paddingTop: 0}}>
        {/* <Header heading="" navigation={navigation} /> */}

        {searched ? (
          <>
            <ProductGrid navigation={navigation} searchText={searchText} />
          </>
        ) : (
          <>
            {/* <Text style={styles.heading}>Explore</Text>
            <Categories /> */}
            <ProductCarousel navigation={navigation} />
            <SDK
              userId="fca2030259ea1d92327f54db84"
              apiKey="MTEyM2RhNWUtNTc3Ni00NjcwLWFiMDgtNzdmMzUyMjhiZGU1"
              clientId="4987041"
              targetingType="KEYWORD"
              getData={productId}
              advertisementTapped={advertisementTapHandler}
              style={{marginTop: 20}}
              adType="BrandAdView"
            />
            <Text style={styles.heading}>Popular Products</Text>
            <ProductSlider navigation={navigation} />
            <Text style={styles.heading}>Top Picks For You</Text>
            <ProductSlider navigation={navigation} />
            <View style={{height: 20}}></View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
