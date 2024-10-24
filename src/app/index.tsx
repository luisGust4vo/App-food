import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { Trendingfoods } from "../components/trendingfoods";
import { Restaurants } from "../components/restaurants";
import { RestaurantsVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />

        <Section
          name="Comidas em alta"
          label="Veja mais"
          action={() => console.log("Clicou no botao")}
          size="text-2xl"
        />

        <Trendingfoods />

        <Section
          name="Famosos no Food"
          label="Veja Todos"
          action={() => console.log("Famosos")}
          size="text-xl"
        />
        <Restaurants />
        <Section
          name="Restaurantes"
          label="Veja Todos"
          action={() => console.log("Clicou rest")}
          size="text-xl"
        />
        <RestaurantsVerticalList />
      </View>
    </ScrollView>
  );
}
