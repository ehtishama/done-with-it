import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import {Formik} from "formik";
import ErrorText from "../components/ErrorText";
import * as Yup from "yup";
import AppPicker from "../components/AppPicker";
import * as Permissions from "expo-permissions";
import {useEffect, useState} from "react";
import ImageInputList from "../components/ImageInputList";
import listingsApi from "../api/listings"
import ProgressModal from "../components/ProgressModal";

const validationSchema = Yup.object().shape({
    title: Yup.string().min(4).required().label("Title"),
    price: Yup.number().required().label("Price"),
    description: Yup.string().min(4).required().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

const categories = [{"id": 1, "label": "Furniture", "icon": "floor-lamp", "backgroundColor": "#fc5c65"}, {
    "id": 2, "label": "Cars", "icon": "car", "backgroundColor": "#fd9644"
}, {"id": 3, "label": "Cameras", "icon": "camera", "backgroundColor": "#fed330"}, {
    "id": 4, "label": "Games", "icon": "cards", "backgroundColor": "#26de81"
}, {"id": 5, "label": "Clothing", "icon": "shoe-heel", "backgroundColor": "#2bcbba"}, {
    "id": 6, "label": "Sports", "icon": "basketball", "backgroundColor": "#45aaf2"
}, {"id": 7, "label": "Media", "icon": "headphones", "backgroundColor": "#4b7bec"}, {
    "id": 8, "label": "Books", "icon": "book-open-variant", "backgroundColor": "#9A67E2"
}, {"id": 9, "label": "Other", "icon": "window-maximize", "backgroundColor": "#7C8CA1"}]

export default function ListingEditScreen() {
    const [imageUris, setImageUris] = useState([]);

    const [progress, setProgress] = useState(0)

    const [uploading, setUploading] = useState(false)

    const requestPermission = async () => {
        const {granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

        if (!granted) alert("You need to enable permissions to access this feature.");
    };

    const handleImageAdd = (newImageUri) => {
        setImageUris([...imageUris, newImageUri]);
    };

    const handleSubmit = async (values) => {
        setUploading(true)

        const result = await listingsApi.postListing(
            {...values, images: imageUris},
            setProgress
        )

        setUploading(false)

        if (!result.ok) return alert("Upload failed")

        // TODO:: reset form
        alert("Successfully uploaded")

    }

    useEffect(() => {
        requestPermission();
    }, []);

    return (<Screen>
        <ProgressModal progress={progress} visible={uploading}/>
        <ImageInputList imageUris={imageUris} onImageAdd={handleImageAdd}/>

        <Formik
            initialValues={{
                title: "", price: "", category: null, description: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({
                  handleChange, handleSubmit, handleBlur, errors, setFieldValue, values,
              }) => (<>
                <AppTextInput
                    placeholder="Title"
                    onChangeText={handleChange("title")}
                    onBlur={handleBlur("title")}
                />
                <ErrorText>{errors.title}</ErrorText>
                <AppTextInput
                    placeholder="Price"
                    onChangeText={handleChange("price")}
                    maxLength={8}
                    keyboardType={"decimal-pad"}
                />
                <ErrorText>{errors.price}</ErrorText>
                <AppPicker
                    iconName="apps"
                    items={categories}
                    placeholder={"Category"}
                    selectedItem={values.category}
                    onSelectItem={(item) => {
                        console.log(item);
                        console.log(values);
                        setFieldValue("category", item);
                    }}
                />
                <ErrorText>{errors.category}</ErrorText>
                <AppTextInput
                    placeholder="Description"
                    onChangeText={handleChange("description")}
                    multiline
                    numberOfLines={2}
                />
                <ErrorText>{errors.description}</ErrorText>
                <AppButton
                    title={"Post"}
                    color={colors.primary}
                    onPress={handleSubmit}
                />
            </>)}
        </Formik>

    </Screen>);
}
