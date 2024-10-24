import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { CardHorizontalFood } from "../food/index";
import { ip } from "../../config";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function Trendingfoods() {
  const [foods, setfoods] = useState<FoodProps[]>([]);
  useEffect(() => {
    async function getFood() {
      const response = await fetch(`http://${ip}:3000/foods`); //Se for rodar em sua maquina local substituir o localhost pelo seu ip
      const data = await response.json();
      setfoods(data);
    }
    getFood();
  }, []);

  return (
    <FlatList
      data={foods}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
    />
  );
}
