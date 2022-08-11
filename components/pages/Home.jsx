import { Text, View, StatusBar, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import Post from "../Post";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.103:8787/list")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: "#fcd34d",
      }}
    >
      <StatusBar backgroundColor="#fbbf24" />
      <View style={{ flex: 1 }}>
        <Text
          style={{ fontSize: 24, paddingVertical: 10, paddingHorizontal: 2 }}
        >
          jiahuiiiii's blogggg :)
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ paddingVertical: 12 }}
        >
          <Text>bruh</Text>
        </Pressable>
        <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
        <Post data={data} />
      </View>
    </View>
  );
}
