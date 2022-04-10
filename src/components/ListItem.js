import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
} from "react-native";
import {
    GestureHandlerRootView,
    Swipeable,
} from "react-native-gesture-handler";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ListItem({
    style,
    title,
    subTitle,
    image,
    onPress,
    renderRightActions,
    IconComponent,
}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight onPress={onPress}>
                    <View style={[styles.container, style]}>
                        {image && <Image style={styles.image} source={image} />}
                        {IconComponent}
                        <View style={styles.details}>
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            {subTitle && (
                                <Text style={styles.subTitle} numberOfLines={1}>{subTitle}</Text>
                            )}
                        </View>

                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={25}
                            style={styles.chevron}
                            color={colors.medium}
                        />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 8,
        backgroundColor: colors.white,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    details: {
        flex: 1
    },
    title: {
        fontWeight: "700",
    },
    subTitle: {
        color: "gray",
    },
    chevron: {
        marginLeft: "auto",
    },
});
