import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>Disclosure</Text>
          <Text style={styles.text}>
            You will be taking a short test that
            <Text style={styles.boldtext}>
              {" "}
              can't be interrupted for approximately 5 minutes of your time.
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Survey")}
          >
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textFooter}>
            Don't have time?
            <Text styles={styles.textFooterCancel}> Click here to cancel</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  info: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginRight: 265,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#C5C5C6",
  },
  boldtext: {
    fontWeight: "bold",
  },
  text: {
    paddingBottom: 10,
  },

  button: {
    backgroundColor: "#11d1ab",
    borderRadius: 25,
    width: 375,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  footer: {
    justifyContent: "flex-end",
    paddingBottom: 15,
  },

  textFooter: {
    color: "#D6D6DA",
  },
  textFooterCancel: {
    color: "#7A7A7A",
    fontWeight: "bold",
  },
});
