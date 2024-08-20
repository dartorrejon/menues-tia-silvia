import { View, Text, Image, ScrollView } from "react-native";
import { comidas } from "../comidas";

export function Main() {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#555",
          justifyContent: "center",
          width: "50%",
          alignItems: "center",
        }}
      >
        {comidas.map((ele) => (
          <View>
            <Text key={ele.nombre}>{ele.nombre}</Text>
            <Text>{ele.descripcion}</Text>
            <Image
              source={ele.foto}
              style={{ width: 180, height: 150, borderRadius: 10 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
