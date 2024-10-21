import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Header(){
    return(
        <View style = {styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"black",
        padding:"20px",
    },
    text: {
        
        textAlign:"center",
        fontSize: "150%",
        color:"white",
        fontWeight:"800",
        display: "flex",
        marginLeft: "20%",
    },
})