import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from '../../data/MockDataAPI';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import IngredientsDetails from '../IngredientsDetails/IngredientsDetailsScreen';
import {Overlay, Button} from 'react-native-elements';

const {width: viewportWidth} = Dimensions.get('window');

const RecipeScreen = ({navigation, route}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visible, setVisible] = useState('');

  let slider1Ref = useRef();

  const renderImage = ({item}) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item}} />
      </View>
    </TouchableHighlight>
  );

  const onPressIngredient = (item) => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    toggleOverlay();
    navigation.navigate('Ingredient', {ingredient, name});
  };

  const toggleOverlay = () => {
    setVisible('');
  };

  const {item} = route.params;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category?.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={(c) => {
              slider1Ref = c;
            }}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={item.photosArray.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref}
            tappableDots={!!slider1Ref}
          />
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate('RecipesList', {category, title})
            }>
            <Text style={styles.category}>
              {getCategoryName(item.categoryId).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require('../../../assets/icons/time.png')}
          />
          <Text style={styles.infoRecipe}>{item.time} minutes </Text>
        </View>

        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              setVisible(item);
            }}
          />
        </View>
        <Overlay
          isVisible={visible ? true : false}
          onBackdropPress={toggleOverlay}>
          <IngredientsDetails
            ingredient={visible.ingredients}
            title={'Ingredients for ' + visible.title}
            onPressIngredient={onPressIngredient}
          />
          <Button title="Done" onPress={toggleOverlay} />
        </Overlay>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

/*cooking steps
<View style={styles.infoContainer}>
  <Image style={styles.infoPhoto} source={require('../../../assets/icons/info.png')} />
  <Text style={styles.infoRecipe}>Cooking Steps</Text>
</View>
<Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
*/

export default RecipeScreen;
