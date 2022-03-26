import React, { Component } from "react";
import {
    View,
    Text
} from "react-native";
import firebase from "firebase";

export default class Profile extends Component {
    componentDidMount() {
        firebase.auth().signOut()
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Logout</Text>
            </View>
        )
    }
}