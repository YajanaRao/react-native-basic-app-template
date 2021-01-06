import React from 'react';
import {FlatList, Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {getAllIngredients} from '../../data/MockDataAPI';

const IngredientsDetails = ({ingredient, title, onPressIngredient}) => {
  const ingredientsArray = getAllIngredients(ingredient);

  const renderIngredient = ({item}) => (
    <TouchableHighlight
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item[0].photo_url}} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{color: 'grey'}}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{flex: 1, width: 300}}>
      <Text h1>{title}</Text>
      <FlatList
        // vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={ingredientsArray}
        renderItem={renderIngredient}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

export default IngredientsDetails;
