import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { s } from "react-native-size-matters";

export default function CreditCardAnimation() {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: s(150),
          height: s(150),
          backgroundColor: "#F7F8F9",
        }}
        source={require("../assets/creditcard.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
