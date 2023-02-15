import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";


export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje é: ${props.resultImc}`
        });
    }


    return (
        <View style={styles.containerResultImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc != null ?
                <TouchableOpacity style={styles.share} onPress={onShare}>
                    <Text style={styles.shareText}>Compartilhar</Text>
                </TouchableOpacity>
                : null}
            </View>
            <Text style={styles.titleResultImc}>Resultado</Text>
            <Text style={styles.textResult}>{props.messageResultImc}</Text>
        </View>
    );
    }