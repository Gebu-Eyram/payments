import PaymentScreen from "@/components/screens/PaymentScreen";
import { View } from "react-native";
import { PaystackProvider } from "react-native-paystack-webview";

export default function Index() {
  return (
    <PaystackProvider
      debug={true}
      publicKey="pk_test_1da202e23e64afbc47d2963d6eee72b6b4507f81"
    
    >
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <PaymentScreen />
      </View>
    </PaystackProvider>
  );
}
