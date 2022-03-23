import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Image,
    Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        };
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (!this.state.fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <TouchableOpacity
                    style={styles.container}
                    onPress={() =>
                        this.props.navigation.navigate("PostScreen", {
                            post: this.props.posts
                        })
                    }
                >

                    <View style={styles.container}>
                        <SafeAreaView style={styles.droidSafeArea} />
                        <View style={styles.cardContainer}>
                            <View style={styles.storyImage}>
                                <Image source={require("../assets/image_6.jpg")} style={{
                                    resizeMode: "contain", width: Dimensions.get("window").width - 60, height: 250, borderRadius: 10
                                }}></Image>

                            </View>
                            <View style={styles.titleContainer}>
                                <View style={styles.titleTextContainer}>
                                    <View style={styles.storyTitle}>
                                        <Text style={styles.storyTitleText}>
                                            {this.props.post.title}
                                        </Text>
                                    </View>
                                    <View style={styles.storyAuthor}>
                                        <Text style={styles.storyAuthorText}>
                                            {this.props.post.author}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.descriptionText}>
                                    {this.props.post.created_on}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <View style={styles.likeButton}>
                                    <View style={styles.likeIcon}>
                                        <Ionicons name={"heart"} size={30} color={"#ffffff"} style={{
                                            width: 30, marginLeft: 20, marginTop: 5
                                        }}></Ionicons>
                                    </View>
                                    <View>
                                        <Text style={styles.likeText}>
                                            12k
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    storyImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
    },
    storyTitleText: {
        fontSize: RFValue(25),
        fontFamily: "Bubblegum-Sans",
        color: "white"
    },
    storyAuthorText: {
        fontSize: RFValue(18),
        fontFamily: "Bubblegum-Sans",
        color: "white"
    },
    descriptionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});