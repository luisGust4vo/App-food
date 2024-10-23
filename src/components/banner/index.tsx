import { View, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-xl mt-5 mb-4 overflow-hidden">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <View className="w-full h-36 rounded-xl overflow-hidden" key="1">
          <Pressable
            className="w-full h-36 md:h-60"
            onPress={() => console.log("Clicou no botao")}
          >
            <Image
              source={require("../../assets/banner1.png")}
              className="w-full h-36 md:h-60"
              resizeMode="cover"
            />
          </Pressable>
        </View>

        <View
          className="w-full h-36 md:h-60 rounded-xl overflow-hidden"
          key="2"
        >
          <Pressable
            className="w-full h-36"
            onPress={() => console.log("Clicou no botao")}
          >
            <Image
              source={require("../../assets/banner2.png")}
              className="w-full h-36 md:h-60"
              resizeMode="cover"
            />
          </Pressable>
        </View>
      </PagerView>
    </View>
  );
}
