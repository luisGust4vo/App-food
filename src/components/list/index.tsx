import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { RestaurantItem } from "./item";
export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantsVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  useEffect(() => {
    async function getFood() {
      const response = await fetch("http://localhost:3000/restaurants"); //Se for rodar em sua maquina local substituir o localhost pelo seu ip
      const data = await response.json();
      setRestaurants(data);
    }
    getFood();
  }, []);
  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantItem item={item} key={item.id} />
      ))}
    </View>
  );
}
