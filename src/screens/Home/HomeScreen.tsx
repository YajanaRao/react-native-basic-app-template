import React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar, Text } from 'react-native-elements';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atom';
import styles from './styles';
// import {recipes} from '../../data/dataArrays';

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

export default function HomeScreen() {

  const user = useRecoilState(userState);

  return (
    <View>
      <View style={{ margin: 12 }}>
        <Text h4>Welcome {user[0].name}!</Text>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </View>
  );
}
