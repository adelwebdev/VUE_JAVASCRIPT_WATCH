// ici vue.js   ici on va faire intervenir tout notre vue

// ici notre DB (prise de script.js)
// data
const products = [
  {
    id: 1,
    description: "Quarz Luxe",
    price: 12,
    img: "assets/img/quarz-luxe.JPG",
  },
  {
    id: 2,
    description: "Curren Business",
    price: 20,
    img: "assets/img/curren-business.JPG",
  },
  {
    id: 3,
    description: "Curren Sport",
    price: 5,
    img: "assets/img/curren-sport.JPG",
  },
  {
    id: 4,
    description: "Jaragar Racing",
    price: 8,
    img: "assets/img/jaragar-racing.JPG",
  },
  {
    id: 5,
    description: "Liges Hommes",
    price: 3,
    img: "assets/img/liges-hommes.JPG",
  },
  {
    id: 6,
    description: "Maserati Mechanical",
    price: 65,
    img: "assets/img/maserati-mechanical.JPG",
  },
  {
    id: 7,
    description: "Montre Mecanique",
    price: 25,
    img: "assets/img/montre-mecanique.JPG",
  },
  {
    id: 8,
    description: "Brand Designer",
    price: 28,
    img: "assets/img/brand-designer.JPG",
  },
  {
    id: 9,
    description: "Relogio Masculino",
    price: 4,
    img: "assets/img/relogio-masculino.JPG",
  },
  {
    id: 10,
    description: "Tissot Multifunction",
    price: 29,
    img: "assets/img/tissot-multifunction.JPG",
  },
  {
    id: 11,
    description: "Hip Hop Gold",
    price: 87,
    img: "assets/img/hiphop-gold.JPG",
  },
  {
    id: 12,
    description: "Mesh Genova",
    price: 6,
    img: "assets/img/mesh-genova.JPG",
  },
];

// on commence par créer une nouvelle variable: const vue = new Vue
// dans l'instance de Vue il y a le router (c lui qui nous emmène vers les pages du site) on peut mettre plus d'info que juste le router
// $mount("#app") veut dire on point se qui a été encadré dans la div : <div id="app"> for index.html
// c la doc pour faire une instance de Vue!
// on va faire un router de pages ; c pages seront des components (composants)
// on commence par faire le component Home (mettre les components avant const vue = new Vue)
// template: c quece que tu contiens à l'intérieur; on peut ajouter des méthodes, de la data ect...
// maintenant on veut que Vue nous dirige vers ces composants (quand on clique sur le router)
// pr faire routage sur Vue ; taper "vue router cdn" dans google et prendre le CDN car framework Vue ne comprend pas tt ce que peut faire vue
// copier le liens (cdn) dans index.html

const Home = {
  // template fait référence directement à #home (qui est sur le DOM ; voir index.html)
  template: "#home",
  name: "Home",
  // comment passer notre DB à notre component ; comme ça
  // faut pas oublier le return ; car c une fct! pr travailler avec cette data, on passe au html
  data: () => {
    //   dans le JS modern: au lieu de products: products, on peut écrire directement: products
    return {
      products,
    };
  },
};
const UserSettings = {
  template: "<h1>Options utilisateur</h1>",
  name: "UserSettings",
};
const WishList = {
  template: "<h1>Liste des souhaits</h1>",
  name: "WishList",
};
const ShoppingCart = {
  template: "<h1>Votre panier</h1>",
  name: "ShoppingCart",
};

// maintenant on crée un Objet qui gère le router; à faire comme ça ; avec les paths vers les pages web (bien recopier)
// aprés le router ;  on va dans index.html et on écrit la balise "router view"
// faut quant-même taper dans l'URL pr accés aux pages ; pr faire ça  avec click ; c router link
const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/user-settings", component: UserSettings, name: "UserSettings" },
    { path: "/wish-list", component: WishList, name: "WishList" },
    { path: "/shopping-cart", component: ShoppingCart, name: "ShoppingCart" },
  ],
});

const vue = new Vue({
  router,
}).$mount("#app");
