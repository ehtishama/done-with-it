import {
    TextInput,
    View,
    StyleSheet,
    Text,
    Touchable,
    Modal,
    Button,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useState } from "react";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

export default function AppPicker({
    iconName,
    placeholder,
    items,
    selectedItem,
    onSelectItem,
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {iconName && (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={20}
                            style={styles.icon}
                        />
                    )}
                    <Text style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </Text>
                    <MaterialCommunityIcons name="chevron-down" size={20} />
                </View>
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                icon={item.icon}
                                backgroundColor={item.backgroundColor}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgLight,
        margin: 10,
        paddingHorizontal: 25,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 5,
    },
    text: {
        flex: 1,
        padding: 14,
        fontSize: 15
    },
});
