import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";
import colors from "../config/colors";

export default function Card({title, subTitle, image, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={{uri: image.url}}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        backgroundColor: colors.white,
        overflow: "hidden",
        elevation: 1,
        shadowColor: "lightgray",
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 15,
    },
    image: {
        width: "100%",
        height: 200,
    },
    content: {
        padding: 12,
        paddingHorizontal: 16,

    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 14,
        color: colors.secondary,
    },
});
