import { router } from "expo-router";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/welcome-image.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Discover Your Dream Job here</Text>

      <Text style={styles.description}>
        Explore all the existing job roes based on your interest and study major
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text style={styles.btnLogin}>Login</Text>
        </TouchableOpacity>
        <Button title="Register" onPress={() => router.push("/login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    marginLeft: 42,
    marginRight: 42,
    fontWeight: "500",
    color: "#1F41BB",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 42,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 52,
    marginRight: 52,
    marginTop: 23,
    fontWeight: "400",
    color: "#666666",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 88,
  },
  btnLogin: {
    backgroundColor: "#1F41BB",
    width: 160,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
