<template>
  <div class="game-page">    
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/bytro_logo.png" alt="Bytro">
      </div>
    </nav>

    <!-- Games Container -->
    <div class="games-container">
      <!-- Game Card -->
      <div class="game-card" v-for="(game, index) in games" :key="index">
        <div class="card-image-container">
          <img :src="game.image" :alt="game.title" class="game-image" />
          <div class="game-overlay">
            <!-- Typing Effect for Description -->
            <p class="slogan">{{ game.slogan }}</p>
            <p class="game-description">{{game.description}}</p>
            <div class="player-stats">
              <p class="max-players">max. players: {{ game.maxplayers }}</p>
              <p class="cur-players">total players: {{ game.currplayers }}</p>
            </div>
          </div>
        </div>
        <div class="game-title-section">
          <button class="details-btn"></button>
          <h2 class="game-title">{{ game.title }}</h2>
          <button class="play-btn"></button>
        </div>
      </div>
    </div>

    <!-- footer -->
    <footer class="footer">
      <p>
        Designed and developed by 
        <a href="https://mhassansaleem.netlify.app/" target="_blank" rel="noopener noreferrer">Hassan</a>
      </p>
      <a href="https://github.com/MHassanSaleem/bytro-labs" target="_blank" rel="noopener noreferrer" class="github-link">
        <i class="fab fa-github"></i> View Code
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          image: require("../assets/Iron-order.png"),
          title: "Iron Order 1919",
          slogan: "Conquer, strategize, and reshape history!",
          description: "Iron Order 1919 is a dieselpunk strategy game set in a reimagined WWI era. Command mechs, forge alliances, and outwit opponents in real-time matches with up to 26 players.",
          maxplayers: 26,
          currplayers: "1.5k",
          detailsLink: "",
          playLink: "",
        },
        {
          image: require("../assets/COW.png"),
          title: "Call of War",
          slogan: "Rewrite history & become the ultimate superpower!",
          description: "Call of War is a real-time strategy game set in World War II, where you control nations, forge alliances, and engage in epic battles. Command troops, research secret weapons, and conquer the map in matches with up to 100 players.",
          maxplayers: 100,
          currplayers: "3.1k",
          detailsLink: "",
          playLink: "",
        },
        {
          image: require("../assets/Supermacy.png"),
          title: "Supermacy 1914",
          slogan: "Will you lead through diplomacy or brute force?",
          description: "Supremacy 1914 places you in command of a nation during WWI, where strategy and diplomacy are key to dominating Europe. Manage resources, forge alliances, and deploy historically accurate troops, including experimental tanks, in battles with up to 500 players.",
          maxplayers: 500,
          currplayers: "0.8k",
          detailsLink: "",
          playLink: "",
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
  height: 100%; // Ensure the body takes full height
}

.game-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
}

// Navbar
.navbar {
  @include flex-center;
  justify-content: space-around;
  padding: 1rem;

  .logo img {
    height: 5rem;
  }
}

// Games Container
.games-container {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
  .game-card {
    width: 30%;
    background-color: $grey-color;
    color: $white-color;
    text-align: center;
    margin: 1rem;
    overflow: hidden;
    position: relative;
    .card-image-container {
      position: relative;
      .game-image {
        width: 100%;
        display: block;
        @include transition(transform, 0.3s);
      }
      .game-overlay {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $transparent-color;
        opacity: 0;
        @include flex-center;
        @include transition(opacity, 0.3s);
        .slogan{
          //color: #2196F3;
          color: #FF5722;
        }
        .game-description {
          font-size: 1rem;
          margin-bottom: 1rem;
          padding: 0 1rem;
          overflow: hidden; /* Ensures smooth appearance */
        }
        .max-players{
          font-size: 0.8rem;
          color: #FFC107;
        }
        .cur-players{
          font-size: 0.8rem;
          color: #4CAF50;
        }
      }
    }
    &:hover .card-image-container .game-overlay {
      opacity: 1;
    }

    .game-title-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 1rem; /* Add space between title and buttons */
      padding: 1rem;
      color: $white-color;
      transition: all 0.3s ease-in-out;
        h2.game-title {
          font-size: 1rem; /* Bold and slightly larger font */
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .play-btn {
        width: 50px; /* Full width button */
        height: 50px; /* Full height button */
        background-color: $red-color; /* Red background */
        color: $white-color;
        border-radius: 50%; /* Make it round */
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .play-btn:hover {
        background-color: $white-color; /* White background on hover */
        color: $red-color; /* Red text color on hover */
      }
      .play-btn::before {
        content: "▶"; /* Play icon */
        font-size: 1.5rem; /* Increase the size of the play icon */
      }
      .details-btn {
        width: 50px; /* Full width button */
        height: 50px; /* Full height button */
        background-color: $grey-color; /* Red background */
        color: $red-color;
        border-radius: 50%; /* Make it round */
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .details-btn:hover {
        background-color: $red-color; /* White background on hover */
        color: $white-color; /* Red text color on hover */
      }

    }
  }
}

// Footer
.footer {
  @include flex-center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: $background-color;
  color: $white-color;
  font-size: 0.9rem;
  a {
    color: $red-color;
    text-decoration: none;
    @include transition(color, 0.3s);
    &:hover {
      color: $white-color;
    }
  }
  .github-link {
    @include flex-center;
    font-size: 1rem;
    i {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
  }
}

</style>