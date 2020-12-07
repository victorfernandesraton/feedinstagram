LikeButton:

import React, { useState, useCallback } from "react";

import { View, Button, Text } from "react-native";
import { useLogin } from "../login/Login-context";

function LikeButton({postId}) {

    const [{user}] = useLogin();
    const [number, setNumber] = useState(false);

    const apertar = useCallback(() => setNumber(!number), [number]);

    return (
        <View>
            <Button title={!number ? "Curtir" : "Descurtit"} onPress={apertar} />
            <Text>{number}</Text>
        </View>
    );
}

export default LikeButton;