import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type productProps = PropsWithChildren<{
  product: Product;
}>;
const ProductCard: React.FC<productProps> = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.imageUrl,
        }}
        style={styles.image}
      />
      {/*   CONTENT */}
      <View style={styles.contentContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            {product.rating.toLocaleString()} *{' '}
          </Text>

          <Text style={styles.ratingCount}>
            ({product.ratingCount.toLocaleString()})
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.originalPrice}>Rs{product.originalPrice}</Text>
          <Text style={styles.discountPrice}>
            Rs{product.originalPrice - product.discountPrice}
          </Text>
          <Text style={styles.offerPercentage}>
            %{product.offerPercentage}off
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  image: {
    width: 90,
    height: 150,
    resizeMode: 'contain',
  },
  contentContainer: {
    // flex: 1,

    gap: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rating: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#8e3c',
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
  ratingCount: {
    color: '#878787',
  },
  originalPrice: {
    color: '#878787',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  offerPercentage: {
    color: '#8e3c',
    fontWeight: 'bold',
  },
});
