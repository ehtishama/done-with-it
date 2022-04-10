import {View, StyleSheet, Text, Image} from "react-native";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import {useRoute} from "@react-navigation/native";

export default function ListingDetailsScreen() {

    const {params} = useRoute()
    const {id, title, images, categoryId, userId, location, price} = params

    return (
        <View>
            <Image
                style={styles.image}
                source={{uri: images[0].url}}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            <ListItem
                image={require("../../assets/ehtisham.png")}
                style={styles.listingItem}
                title={"Ehtisham UL Hassan"}
                subTitle={"10K Listings"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        fontSize: 18,
        color: colors.secondary,
        fontWeight: "700",
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 15,
    },
    listingItem: {
        marginTop: 30,
    },
});
