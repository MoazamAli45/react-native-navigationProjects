import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import ProductCard from '../components/ProductCard';
import {PRODUCTS_LIST} from '../data/data';
import Separator from '../components/Separator';

//   FOR NAVIAGTION Type Safety
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../App';

//   TO create a stack navigator

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.push('Details', {
                product: item,
              })
            }>
            <ProductCard product={item} />
          </Pressable>
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
