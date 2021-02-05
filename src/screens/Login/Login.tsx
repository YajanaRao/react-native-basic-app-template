import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, Keyboard, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Button, Input, Avatar, Text } from "react-native-elements";
import { Container } from '../../components/Container';
import { styles } from './LoginStyles';
import { useTheme } from '@shopify/restyle';

export function LoginScreen({ navigation, params }) {
    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null);
    const theme = useTheme()
    const { mainButton, secondaryText } = theme.colors


    useEffect(() => {
        if (user) {
            console.log('user', user);
            // if ("error" in user) {
            //     // console.log(user.error.details);
            //     setIsLoading(false)
            //     Alert.alert("Failed to login", user.error.message);
            // } else if ("accessToken" in user) {
            //     setIsLoading(false)
            //     navigation.navigate("App");
            // }
        }
    }, [user])




    function login() {
        // if (!name) {
        //     Alert.alert("Error", "Please enter your email");
        // }

        navigation.navigate("App")

    }

    async function signIn() {
        try {
            setIsLoading(true);
            const userInfo = {};
            setUser(userInfo);
            setIsLoading(false);
        } catch (error) {
            console.log('error: ', error);
        }
    };




    return (
        <Container isLoading={isLoading}>
            <ImageBackground
                source={require("../../images/background/auth_background.png")}
                style={{
                    flex: 1, backgroundColor: "white", resizeMode: "cover",
                }}

            >
                <KeyboardAvoidingView style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View >
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Text h2 style={{ color: mainButton, fontFamily: 'Roboto', textAlign: 'center', fontWeight: "100" }}>Welcome</Text>
                                <Text style={{ textAlign: "center" }}>Hello there, Sign in to continue</Text>
                            </View>
                            <View style={{ flex: 3, width: 300, justifyContent: "flex-end" }}>
                                <Input
                                    placeholder={"Email Or Phone Number"}
                                    autoCapitalize='none'
                                    value={name}
                                    leftIcon={{ type: 'font-awesome', name: 'envelope', size: 20, color: secondaryText }}
                                    onChangeText={text => setName(text)}
                                />

                                <Button
                                    disabled={isLoading}
                                    title="Sign In"
                                    style={styles.signIn}
                                    onPress={login}
                                />
                                <Text
                                    style={[styles.forgotPassword, { color: mainButton }]}
                                    onPress={() => navigation.navigate("ForgotPassword")}>
                                    Forgot password ?
                            </Text>
                            </View>


                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[styles.signUpText, { color: secondaryText }]}>
                                    Don't have an account?
                                <Text
                                        style={[styles.signUp, { color: mainButton }]}
                                        onPress={() => navigation.navigate("Register")}>
                                        {' '}Sign Up
                                </Text>
                                </Text>
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground >
        </Container>
    );


}

