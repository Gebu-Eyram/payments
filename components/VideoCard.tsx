import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const VideoCard = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      <Text style={styles.live}>Live</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.darkGradientUnderlay} />
    </ImageBackground>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    marginTop: vs(10),
    borderRadius: s(16),
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  live: {
    color: "#fff",
    position: "absolute",
    top: vs(10),
    right: s(10),
    backgroundColor: "red",
    borderRadius: 20,
    fontSize: 13,
    paddingHorizontal: s(10),
    paddingVertical: vs(4),
    zIndex: 2,
  },
  title: {
    color: "#fff",
    fontSize: s(14),
    fontWeight: "bold",
    marginBottom: vs(5),
    marginLeft: s(10),
    zIndex: 2,
  },
  description: {
    color: "#fafeff",
    fontSize: s(12),
    marginLeft: s(10),
    marginBottom: vs(10),
    zIndex: 2,
    maxWidth: "80%",
    textShadowColor: "#000",
  },
  darkGradientUnderlay: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
