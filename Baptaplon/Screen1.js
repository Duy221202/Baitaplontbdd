import * as React from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function Screen1({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tiếng Việt</Text>
            <Image source={require('../Baptaplon/IMG/logomess.png')} style={styles.logo}/>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Số di động hoặc email"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                />
            </View>
            <Pressable
                style={styles.loginButton}
                onPress={() => navigation.navigate('Screen2')}
            >
                <Text style={styles.loginButtonText}>Đăng Nhập</Text>
            </Pressable>
            <Text style={styles.forgotPasswordText}>Bạn quên mật khẩu ư?</Text>
            <Pressable style={styles.signupButton}>
                <Text style={styles.signupText}>Tạo tài khoản mới</Text>
            </Pressable>
            <Text style={styles.signupText}>Tạo tài khoản mới</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        height: 75,
        width: 75,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 40,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        padding: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
    loginButton: {
        height: 55,
        width: '100%',
        borderRadius: 35,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        marginBottom: 10,
    },
    loginButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
    forgotPasswordText: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    signupButton: {
        height: 40,
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        textAlign: 'center',
    },
});
export default Screen1;
