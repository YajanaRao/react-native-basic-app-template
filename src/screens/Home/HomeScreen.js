import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card, Button, ListItem, Avatar} from 'react-native-elements';
import styles from './styles';
import {recipes} from '../../data/dataArrays';
import {getCategoryName} from '../../data/MockDataAPI';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://picsum.photos/200/300',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://picsum.photos/200/300',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Michel Jackson',
    avatar_url: 'https://picsum.photos/200/300',
    subtitle: 'Chief Technology officer',
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressRecipe = (item) => {
    this.props.navigation.navigate('Recipe', {item});
  };

  renderRecipes = ({item}) => (
    <Card
      key={item.recipeId}
      containerStyle={{
        flex: 1,
        padding: 0,
        marginHorizontal: 4,
      }}>
      <Card.Image source={{uri: item.photo_url}} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      <Button
        onPress={() => this.onPressRecipe(item)}
        // icon={<Icon name="arrow-right" color="#ffffff" />}
        buttonStyle={{
          marginHorizontal: 12,
          marginBottom: 4,
        }}
        title="VIEW NOW"
      />
    </Card>
    // </View>
  );

  render() {
    return (
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <View style={{marginTop: 12}}>
              {list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar rounded source={{uri: l.avatar_url}} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))}
            </View>
          )}
          vertical
          showsVerticalScrollIndicator={false}
          // numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
    );
  }
}
