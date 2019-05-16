import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";


export default class Veg extends React.Component {
    constructor(props) {
        super(props);
    }
    handleNaviagation = () => {
        this.props.navigation.navigate("Restaurants");
    };

    render() {
        return (
            <View style={Styles.container}>
                <Text style={styles.title}> Do you want Vegan Food? </Text>
            </View>
        )
    }
}

const syles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 8,
        marginBottom: 8
    },
    title: {
        fontSize: 18
    }
})