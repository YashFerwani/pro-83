import react, { Component} from "react";
import { Text, View } from "react-native-web";

export default class Profile extends Component {
    render() {
        return (
            <View
            Style = {{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Profile</Text>
            </View>
        )
    }
}