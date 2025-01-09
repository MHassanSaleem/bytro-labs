<template>
  <div class="game-page">    
    <!-- Navigation Bar -->
    <NavBar/>
    <!-- Games Container -->
    <div class="games-container">
      <!-- Game Card -->
      <GameCard 
      v-for="(game, index) in games" 
        :key="index" 
        :game="game"
      />
    </div>
    <!-- footer -->
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterComponent from './FooterComponent.vue';
import GameCard from './GameCard.vue';

export default {
  components: {
    NavBar,
    FooterComponent,
    GameCard
  },
  data() {
    return {
      games: [
        {
          image: require("../assets/Iron-order.png"),
          title: "Iron Order 1919",
          slogan: "Conquer, strategize, and reshape history!",
          description: "Iron Order 1919 is a dieselpunk strategy game set in a reimagined WWI era. Command mechs, forge alliances, and outwit opponents in real-time matches with up to 26 players.",
          maxplayers: 26,
          currplayers: "88k",
          detailsLink: "https://bytro.com/portfolio-item/iron-order-1919/",
          playLink: "https://apps.apple.com/us/app/iron-order-1919-mech-warfare/id1475646068?mt=8",
        },
        {
          image: require("../assets/COW.png"),
          title: "Call of War",
          slogan: "Rewrite history & become the ultimate superpower!",
          description: "Call of War is a real-time strategy game set in World War II, where you control nations, forge alliances, and engage in epic battles. Command troops, research secret weapons, and conquer the map in matches with up to 100 players.",
          maxplayers: 100,
          currplayers: "92k",
          detailsLink: "https://bytro.com/portfolio-item/call-of-war/",
          playLink: "https://www.callofwar.com/?id=304&r=977&shortlink=78fc7ac2&af_sub1=BBBrAAA977&pid=BytroCOM&source_caller=ui",
        },
        {
          image: require("../assets/Supermacy.png"),
          title: "Supermacy 1914",
          slogan: "Will you lead through diplomacy or brute force?",
          description: "Supremacy 1914 places you in command of a nation during WWI, where strategy and diplomacy are key to dominating Europe. Manage resources, forge alliances, and deploy historically accurate troops, including experimental tanks, in battles with up to 500 players.",
          maxplayers: 500,
          currplayers: "110k",
          detailsLink: "https://bytro.com/portfolio-item/supremacy-1914-2/",
          playLink: "https://www.supremacy1914.com/index.php?id=177&r=977&shortlink=4be6e2d7&af_sub1=BL_RN_977&c=PR%20Referral&pid=RevShare%20Partner&source_caller=ui",
        }
      ],
    };
  },
};

</script>

<style lang="scss">

// Variables
//$primary-color: #ff4500;
$red-color: #dd0917;
$grey-color: #2c2f33;
$white-color: white;
$background-color: #1c1c1e;
$transparent-color: rgba(0, 0, 0, 0.7);

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin transition($property, $duration) {
  transition: $property $duration ease-in-out;
}

// Global styles
html, body {
  margin: 0;
  padding: 0;
}

.game-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

// Games Container
.games-container {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
  
}

</style>