import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const Details: React.FC<DetailsProps> = ({route}) => {
  const {product} = route.params;
  // console.log(route);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: product.imageUrl,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{product.rating} ★</Text>
          <Text style={styles.ratingContainer}>
            {product.ratingCount} ratings
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>Rs{product.originalPrice}</Text>
          <Text style={styles.discountPrice}>Rs{product.discountPrice}</Text>
          <Text style={styles.offerPercentage}>
            {product.offerPercentage}% off
          </Text>
        </View>
        {product.tags.map((tag: any, i) => {
          return (
            <View key={i}>
              <Text style={styles.tagContainer}>{tag}</Text>
            </View>
          );
        })}
      </View>
      <Pressable
        onPress={() => navigation.popToTop()}
        //  navigation.goBack()  also exist
        style={styles.btnContainer}>
        <Text style={styles.btnBack}>Go Back</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 20,
  },
  contentContainer: {
    // flex: 1,
    gap: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#65B741',
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
    color: '#65B741',
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#9ADE7B',
  },
  tagContainer: {
    borderColor: '#878787',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btnBack: {
    backgroundColor: '#65B741',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    alignSelf: 'flex-start',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
});
