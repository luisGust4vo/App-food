import { View, Pressable, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";
export function Banner() {
  return (
    <View className="w-full h36 rounded-2x1 mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h36 rounded-2x1"
          key="1"
          onPress={() => console.log("Clicou no botao")}
        >
          <Image />
        </Pressable>
      </PagerView>
    </View>
  );
}
