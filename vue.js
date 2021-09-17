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
    // dans le JS modern: au lieu de "products: products", on peut écrire directement: "products"
    return {
      products,
      searchKey: "",
      // la data searchKey évolue en fonction de se qu'on tape à l'intérieur; connection des deux éléments (searchKey et data)
      // on a fini la recherche et l'affichage conditionel de nos éléments
      // maintenant on veut incrémenter une data qui va stocker tt ce que on a liké (mis un like), on doit créer un nouveau tableau vide []
      // on va passer ces données aux coockies ; comme ça au retour de l'utilisateur on pourra lui présenter ce qu'il a liké
      liked: [],
    };
  },
  // maintenant faire une recherche de nos éléments à travers un input
  // pr faire une recherche dans Vue c cette logique: on a 2 façon de faire : soit Computed, soit Method
  // la dif entre les 2: computed c comme un eventListener, comme si Vue surveiller les changements en permanence sur le DOM
  // method (en lui pass des fct aussi) mais c fct seront appelé si on click sur un button (ou on fait une action précise)
  // computed se contente de surveiller!
  computed: {
    // la recherche (filtre de recherche) on le met dans computed, on surveille en temps réel se que fait l'utilisateur
    // d'abord dans data on stocke une searchKey (var dynamique) autant products ne bouge pas (notre data) searchKey est dynamique
    // on fait filter pr comparer searchKey avec nos data (nom des montres); on crée fct filteredList
    // elle return this.product (products qui est dans Home), on va filterer chaque élement (on l'appelle ici "product" aprés le filter)
    // on filtre chaque élements et le compare avec le search input
    // avec le .includes se signifie ça doit inclure ce qu'il y a dans searchKey ; filteredList est une list d'éléments qui ont été filtrer
    filteredList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      // pr récupérer les produits likés par la personne; d'abord créer var cookieValue
      // il va chercher get de cookie dans l'entré "like" (voir tableau dans application)
      let cookieValue = JSON.parse($cookies.get("like"));
      // si cookieValue n'est pas vide alors on passe les éléments this.liked alors il peux nous montrer les coeurs qui sont checked!
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
      // getLikeCookie (qui est dans computed) ne se lance pas, il surveille; s'il ne se lance pas alors on doit faire...
      // on doit faire, aprés computed et aprés method, on doit faire: mounted (voir plus bàs)
    },
  },
  // computed, pr comparer avec se qu'on a sur le DOM
  // pr les cookies, on fait une method; car elle sera declenché uniquemet en cliquant sur les checkbox: setLikeCookie
  methods: {
    // cette fct a pour mission de mettre à jour la liste des cookiesselon ce qui est stockés dans likes
    // dans liked on a les id de tt les produits likés ; on prend les données de ce tableau et on fait un setLikeCookie à chaque fois qu'une checkbox sera actionée
    // on fait un setLikeCookie à chaque fois qu'une checkbox sera actionée; pr ça faut aller dans input de checkbox
    setLikeCookie() {
      // $cookie.set ; c ce que nous permet le CDN des cookies avec Vue
      // 1er param c "like", le 2eme c le contenu de this.liked mais on le passe d'abord en JSON avec stringify
      // il faut laisser le temps à like de s'incrémenter (quant on clique) ensuite on le traite en JSON
      // faut faire une fct assynchrone ; ici setTimeOut (il rend la fct assyncrone) (c pr pas mettre directement en place le cookie avant de voir que like a changé)
      // avec 3-10eme de secondes avec de te déclenché (ça suffit pr qu'il est le temps de prendre ttes les données)
      // dans application (voir console) on se récupère le json dans value (qui dans application) avec avec json.parse pr qu'il soir lisible
      // comme ça on arrive à injecter des cookies mais il faut les récupérer ; c avec get cookies
      document.addEventListener("input", () => {
        setTimeout(() => {
          $cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
    },
  },
  mounted() {
    // c ce qui monte des composants
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
