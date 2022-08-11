import { View, Text, FlatList } from "react-native";
import React from "react";
import HTMLparser from 'fast-html-parser';

const Post = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fef2c7",
              padding: 9,
              margin: 1,
              borderWidth: 0,
              borderColor: "black",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 15 }}>{HTMLparser.parse(item.content).text}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Post;
