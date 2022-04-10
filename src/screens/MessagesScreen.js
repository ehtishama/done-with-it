import { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListSeparator from "../components/ListSeparator";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
const dummyMessages = [
    {
        id: 1,
        title: `Mosh Hamedani lorem `,
        subTitle: `A random text? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales lorem dapibus, sagittis felis sit amet, pellentesque dolor. Duis tincidunt euismod diam. Nulla ut risus auctor, porta purus nec, mollis nulla. Nulla malesuada dui eu justo egestas, id consequat ligula pulvinar. Praesent tristique lorem lectus, non fringilla lacus malesuada sed. Donec ut imperdiet purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mauris felis, mollis fermentum massa eget, vehicula rhoncus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam quis felis varius, fringilla dolor ac, pellentesque ante. Pellentesque semper imperdiet arcu, eget bibendum nunc. Duis a pretium nulla. Suspendisse ut enim non odio rutrum molestie vitae in magna. Nunc ac ultricies nisl. Etiam tristique blandit mauris, ac condimentum lorem.

        Mauris vitae lorem vulputate, posuere eros nec, faucibus nisi. Vestibulum fringilla neque sit amet mauris mollis mattis. Maecenas scelerisque turpis ac nisi hendrerit, venenatis consectetur lectus blandit. Phasellus aliquam condimentum gravida. Donec porttitor, lorem vel aliquet rhoncus, nisi ligula accumsan nisi, eget rhoncus dui neque quis justo. Sed tellus eros, eleifend quis blandit in, malesuada tincidunt nulla. Aliquam ut magna pulvinar, elementum diam et, tincidunt ligula. Vivamus imperdiet nisi venenatis tempor fringilla.
        
        In vitae vestibulum nibh, et molestie est. Donec convallis varius ligula, vel varius elit bibendum lacinia. Proin ac viverra mauris. Integer nec lacus eget velit eleifend egestas. Praesent tincidunt ligula sit amet enim euismod lacinia. Maecenas ultrices tellus id malesuada consectetur. Sed ac metus tellus. Vivamus posuere orci sed tempus volutpat. Integer id ornare turpis. Fusce posuere quis mauris et sodales. Donec sollicitudin ante odio, sit amet dictum lectus commodo sed.
        
        Nulla volutpat lacus vitae lacus tincidunt condimentum. Suspendisse potenti. Aliquam non sapien ac tortor mollis pellentesque et sed sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean suscipit, lacus a ultricies varius, massa metus hendrerit erat, vitae molestie erat felis a ante. Aenean gravida justo id mauris porttitor pulvinar. Etiam non arcu augue. Ut pretium maximus ex et feugiat. Suspendisse dignissim, leo eget maximus vehicula, ex arcu ullamcorper arcu, vitae placerat ligula ante eu ex. Aenean lobortis rhoncus quam, vulputate auctor lacus consequat quis.
        
        Donec a pellentesque nibh. In elementum hendrerit leo at scelerisque. Cras ultricies massa eget orci fringilla lacinia. Nulla mi odio, posuere in facilisis nec, tempor eget felis. Morbi ac urna lectus. Phasellus fermentum sem lorem, sit amet convallis turpis bibendum a. Cras ligula mi, pharetra a euismod ac, maximus sit amet enim.`,
        image: require("../../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "Ehtisham UL Hassan",
        subTitle: "OKay!",
        image: require("../../assets/ehtisham.png"),
    },
    {
        id: 3,
        title: "Mosh Hamedani",
        subTitle: "D1",
        image: require("../../assets/mosh.jpg"),
    },
    {
        id: 4,
        title: "Mosh Hamedani",
        subTitle: "D1",
        image: require("../../assets/mosh.jpg"),
    },
];

export default function MessagesScreen() {
    const [messages, setMessages] = useState(dummyMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (messageId) => {
        setMessages(messages.filter((message) => message.id !== messageId));
    };
    const handleRefresh = () => {
        setRefreshing(true);
        setMessages(dummyMessages);
        setRefreshing(false);
    };

    return (
        <Screen>
            <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                style={styles.messages}
            >
                <FlatList
                    style={styles.messages}
                    data={messages}
                    renderItem={({ item: message }) => (
                        <ListItem
                            title={message.title}
                            subTitle={message.subTitle}
                            image={message.image}
                            onPress={(fn) => fn}
                            renderRightActions={() => (
                                <ListItemDeleteAction
                                    onPress={() => handleDelete(message.id)}
                                />
                            )}
                        />
                    )}
                    ItemSeparatorComponent={ListSeparator}
                    keyExtractor={(item) => item.id}
                />
            </RefreshControl>
        </Screen>
    );
}

const styles = StyleSheet.create({
    messages: {
        height: "100%",
    },
});
