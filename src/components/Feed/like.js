import React from 'react';
import { 
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const btliked = Dimensions.get("botao");

export default class App extends React.Component {
    state = {
        liked: false
    };

    toggleLike = () => this.setState(state => ({ liked: !state.liked }));

    render() {
        return (
            <View style={style.containerliked}>
                <Image 
                    source={{ uri: `  {btliked.width}`  }}
                    style={{ width: btliked, height: btliked  }}
                    resizeMode="cover"
                />
                <View style={style.iconRow}>
                    <TouchableOpacity onPress={this.toggleLike}>
                        <Image 
                            source={
                                this.state.liked ? require(".images/heart.png") : require("./images/heart-outline.png")}
                                style={style.heartIcon} resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    iconRow: {
      flexDirection: "row",
      alignSelf: "stretch",
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 15
    },
    heartIcon: {
      width: 20,
      height: 20
    }
});