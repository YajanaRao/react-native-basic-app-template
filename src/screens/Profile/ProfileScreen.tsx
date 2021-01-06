import React from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Card, Input, ListItem, Text } from 'react-native-elements';

export interface ProfileProps {
}

function ProfileScreen({ navigation }: ProfileProps) {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: 12 }}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                            'https://picsum.photos/200',
                    }}
                />
                <Text h4 style={{ textAlign: "center" }} >Alexa</Text>

            </View>
            <Card>
                <Card.Title h4>Profile Details</Card.Title>
                <Card.Divider />
                <Input
                    value="29-04-1998"
                    label="Date of Birth"
                    disabled={true}
                    rightIcon={{ type: 'font-awesome', name: 'pencil' }}
                />
                <Input
                    value="12345678"
                    label="Account Number"
                    disabled={true}
                    rightIcon={{ type: 'font-awesome', name: 'pencil' }}
                />
            </Card>
            <ListItem bottomDivider onPress={() => navigation.navigate("Auth")}>
                <ListItem.Content>
                    <ListItem.Title style={{ color: "red" }}>{"Logout"}</ListItem.Title>
                    <ListItem.Subtitle>{"Logout of the application"}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <View>
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;