import {FlatList, StyleSheet} from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import {useEffect, useState} from "react";
import listingsApi from "../api/listings";
import {ActivityIndicator} from "react-native";
import colors from "../config/colors";

export default function ListingsScreen({navigation}) {

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getListings()
    }, [])


    const getListings = async () => {
        setLoading(true)
        const {data} = await listingsApi.getListings();
        setListings(data);
        setLoading(false)
    }

    const handlePress = (listing) => {
        navigation.navigate(routes.LISTING_DETAILS, listing);
    };

    return (
        <Screen style={[defaultStyles.screen, styles.container]}>
            {loading && <ActivityIndicator size={"large"} color={colors.primary}/>}
            <FlatList
                data={listings}
                renderItem={({item}) => (
                    <Card
                        title={item.title}
                        subTitle={`$${item.price}`}
                        image={item.images[0]}
                        onPress={() => handlePress(item)}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {paddingHorizontal: 0},
});
