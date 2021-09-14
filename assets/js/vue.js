// ici vue.js   ici on va faire intervenir tout notre vue
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
  template: "<h1>Ceci est la page d'accueil</h1>",
  name: "Home",
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
