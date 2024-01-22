import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <ProductCard
        product={{
          id: '1',
          name: 'APPLE iPhone 14 (Blue, 128 GB)',
          imageUrl:
            'https://rukminim1.flixcart.com/image/300/400/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg',
          originalPrice: 79990,
          discountPrice: 65999,
          offerPercentage: 17,
          rating: 4.7,
          ratingCount: 8794,
          tags: [
            '12MP Front Camera',
            '12MP Dual Rear Camera',
            '15.49 cm (6.1 inch) Super Retina XDR Display',
          ],
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
