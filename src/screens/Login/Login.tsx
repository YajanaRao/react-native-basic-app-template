import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, Keyboard, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Button, Input, Avatar, Text } from "react-native-elements";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { LoginManager } from 'react-native-fbsdk';
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


    function handleFacebookLogin() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled')
                } else {
                    console.log('Login success with permissions: ' + result.grantedPermissions.toString())
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error)
            }
        )
    }

    function login() {
        // if (!name) {
        //     Alert.alert("Error", "Please enter your email");
        // }

        navigation.navigate("App")

    }

    async function signIn() {
        try {
            setIsLoading(true);
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo);
            setIsLoading(false);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
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
                                <Text h5 style={{ textAlign: "center", color: secondaryText }}> or</Text>
                                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", marginVertical: 12 }}>
                                    <GoogleSigninButton
                                        size={GoogleSigninButton.Size.Icon}
                                        color={GoogleSigninButton.Color.Dark}
                                        onPress={signIn}
                                        disabled={isLoading} />
                                    <View style={{ width: 24 }} />
                                    <Avatar
                                        size="medium"
                                        // rounded
                                        icon={{ name: 'facebook', type: 'font-awesome' }}
                                        onPress={handleFacebookLogin}
                                        activeOpacity={0.7}
                                        containerStyle={{ backgroundColor: "#4267B2", borderRadius: 2, elevation: 4, height: 40, width: 40 }}
                                    />
                                </View>
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

