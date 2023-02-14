import React from "react";
import { View, Text } from "react-native";
import styles from "./style";


export default function ResultImc(props) {
    return (
        <View style={styles.containerResultImc}>
            <Text style={styles.titleResultImc}>Resultado</Text>
            <Text style={styles.textResult}>{props.messageResultImc}</Text>
        </View>
    );
    }