import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8ad2a',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    form:{
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: '#2a2a2a',
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: '90%',
        borderRadius: 10,
        height: 40,
        margin: 12,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
    buttonCalculator:{
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#2a54d5',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: '#fff',
    },
    errorMessage:{  
        color: '#ff0000',
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 20,
    }
   
});

export default styles;