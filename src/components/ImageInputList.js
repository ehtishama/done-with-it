import { Text, StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";
import * as ImagePicker from "expo-image-picker";

export default function ImageInputList({ imageUris, onImageAdd }) {
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) onImageAdd(result.uri);
        } catch (error) {
            alert("An error has occurred while selecting the image.");
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            {imageUris.map((imageUri) => (
                <ImageInput key={imageUri} imageUri={imageUri} />
            ))}
            <ImageInput onPress={selectImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
