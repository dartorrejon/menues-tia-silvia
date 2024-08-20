# menues-tia-silvia

Para crear un proyecto en blanco utilizamos el comando:

```bash
$npx create-expo-app@latest nombre-de-la-app --template blank
```
No olvidar modificar el script dentro del archivo package.json para correr Expo correctamente.
```json
"scripts":{
    "start": "npx expo start";
}
``` 
Luego ejecutar en la consola: 

```bash
$npm start
```
Paso seguido podemos instalar Eslint y Prettier de la siguiente manera:

```bash
$npx expo lint
```
```bash
$npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```
Por ultimo luego de instalar los paquetes configuramos el archivo .eslintrc.js:

```js
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
```

**Nota: No olvidar instalar las extensiones tanto de Eslint como de Prettier en VSCode**

1.  a tener en cuenta poder organizar las direcciones de las imagenes en un solo archivo
1. implementar FlatList
1. Ordenar bien los datos y ponerlos en la FoodCard 🍖
