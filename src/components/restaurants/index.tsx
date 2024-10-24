import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { RestaurantsItem } from "../food/horizontal/index";
import { ip } from "../../config";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  useEffect(() => {
    async function getFood() {
      const response = await fetch(`http://${ip}:3000/restaurants`); //Se for rodar em sua maquina local substituir o localhost pelo seu ip
      const data = await response.json();
      setRestaurants(data);
    }
    getFood();
  }, []);

  return (
    <FlatList
      data={restaurants}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
    />
  );
}
