import { Stack } from "expo-router";
import { PaystackProvider } from "react-native-paystack-webview";

export default function RootLayout() {
  return (
   <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Welcome",
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerShown: false,
          }}
        />
      </Stack>
  );
}
