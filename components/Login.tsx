import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from "../App";
import {StackScreenProps} from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Login">

const Login = ({navigation}: Props) => (
  <View style={styles.container}>
    <Text>Login</Text>

    <Button
      title="Sign Up"
      onPress={() => navigation.navigate('Registration')}
    />
  </View>
)

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});