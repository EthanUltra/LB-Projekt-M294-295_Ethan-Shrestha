import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

class forum extends Component {
    state = {
        username: '',
        password: '',
    };

    onForgotPassword = () => {
        alert('Forgot Password');
    };

    onSignupPress = () => {
        alert('Signup');
    };

    onLoginPress = () => {
        alert('Login');
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Forums</Text>

                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Username"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                />

                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    placeholder="Password"
                    returnKeyType="go"
                    ref={input => (this.passwordInput = input)}
                />

                <TouchableHighlight style={styles.button} onPress={this.onLoginPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button} onPress={this.onSignupPress}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onForgotPassword}
                >
                    <Text style={styles.buttonText}>Forgot Password</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
        alignSelf: 'center',
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec',
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
});

export default forum;