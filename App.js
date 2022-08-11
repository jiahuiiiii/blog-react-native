import { Text, View, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import Post from "./components/Post";

export default function App() {
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
      <View style={{}}>
        <Text
          style={{ fontSize: 24, paddingVertical: 10, paddingHorizontal: 2 }}
        >
          jiahuiiiii's blogggg :)
        </Text>
        <Post data={data} />
      </View>
    </View>
  );
}
