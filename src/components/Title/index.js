import React from "react";
import { View, Text} from "react-native";
import styles from "./style.js";



export default function Title(props) {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.title}>Olá, {props.name}</Text>
    </View>
  );
}

