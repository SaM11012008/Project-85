import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PostCard from './PostCard'

let posts = require('./temp_posts.json')

export default class Feed extends Component { 

    renderItem = ({ item: posts }) => {
        return <PostCard posts={posts} />;
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/logo.png")}
                            style={styles.iconImage}>
                        </Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}> Spectagram </Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})