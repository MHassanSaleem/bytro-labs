<template>
  <div class="game-page">
    <!-- Navigation Bar -->
    <NavBar/>

    <div class="game-heading">
      <h2>{{ game?.title }}</h2>
    </div>


    <!-- Game Details -->
    <div class="tabs-container">
      <!-- Vertical Tabs -->
      <div class="tabs">
        <button class="tab-element"
          v-for="(tab, index) in tabs" 
          :key="index" 
          :class="{ active: activeTab === tab.name }"
          @click="activeTab = tab.name"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="tab-content">
        <div v-if="activeTab === 'intro'">
          <p>{{ game?.description }}</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

        <div v-if="activeTab === 'features'">
          <ul>
            <li v-for="(features, index) in game?.features" :key="index">{{ features }}</li>
          </ul>
        </div>

        <div v-if="activeTab === 'requirements'">
          <ul>
            <li v-for="(req, index) in game?.requirements" :key="index">{{ req }}</li>
          </ul>
        </div>

        <div v-if="activeTab === 'gallery'">
          <div class="gallery">
            <img 
              v-for="(image, index) in game?.gallery" 
              :key="index" 
              :src="image" 
              :alt="`Gallery image ${index + 1}`" 
            />
          </div>
        </div>
      </div>
    </div>

    <div class="play-social-button">
      <a href='#' class="play-btn">
          <font-awesome-icon :icon="['fas', 'play']" class="ml10" /> Play Now
      </a>
    </div>

    <!-- Footer -->
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  props: ['id'],
  components: {
    NavBar,
    FooterComponent,
  },
  data() {
    return {
      activeTab: 'intro', // Default tab
      tabs: [
        { name: 'intro', label: 'Intro' },
        { name: 'features', label: 'Features' },
        { name: 'requirements', label: 'Requirements' },
        { name: 'gallery', label: 'Gallery' },
      ],
      game: null, // Game details object
    };
  },
  mounted() {
    // Simulating fetching game details based on `id`
    const games = [
      {
        id: 1,
        title: "Iron Order 1919",
        requirements: ["OS: Windows 10", "RAM: 8 GB", "Graphics: GTX 1050 or better"],
        features: [
        "Up to 100 real opponents per map",
        "Units which move in real-time",
        "Many different maps and scenarios",
        "Historically accurate troops",
        "Huge Tech tree with over 120 different units",
        "Different terrain types",
        "Atomic bombs and secret weapons",
        "Regular updates with new content",
        ],
        gallery: [
          require("../assets/Iron-order.png"),
          require("../assets/iron-order-1.jpg"),
        ],
      },
      {
        id: 2,
        title: "Call of War",
        requirements: ["OS: Windows 8 or higher", "RAM: 4 GB", "Graphics: Integrated GPU"],
        features: [
          "Build your strategy around fantastic and historical units of the era!",
          "Long-term strategy in real time",
          "Weaponry based on popular Dieselpunk, Teslapunk, and Steampunk ideas featuring Mechs and Robots",
          "Every unit type is featuring a special 'Titan' class with incredible power and utility",
          "Play with up to 26 players per match",
          "Maps based on historical events and beyond",
        ],
        gallery: [
          require("../assets/cow-1.jpg"),
          require("../assets/cow-1.jpg"),
        ],
      },
      {
        id: 3,
        title: "Supremacy 1914",
        requirements: ["OS: Windows XP SP2, Windows Vista, or Windows 7", "Processor: Intel Core 2 Duo 1.6 GHz or equivalent", "RAM: 4 GB", "Graphics: Intel HD Graphics integrated chipset", "Network: Broadband Internet connection","Storage: 500 MB available space"],
        features: [
          "Real-time multiplayer with up to 500 players per map",
          "Historically accurate units and vehicles from WWI",
          "Multiple maps and scenarios, both historical and fictional",
          "Experimental weapons and units like the first tanks",
          "Forge alliances and play cooperatively with other players",
          "Compete in coalitions to achieve global domination",
          "Cross-platform play on multiple devices"
        ],
        gallery: [
          require("../assets/Supremacy.png"),
          require("../assets/Supremacy.png")
        ]
      }
    ];
    // Find the game by its ID
    this.game = games.find((g) => g.id == this.id);
  },
};
</script>


<style lang="scss">
  .game-heading{
    display: flex;
    justify-content: space-around;
    background-color: #dd0917;
    h2{
      color: white;
    }
  }

  .tabs-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    button {
      padding: 1rem;
      margin: 0.5rem 0;
      background-color: #2c2f33;
      color: #fff;
      border: none;
      cursor: pointer;
      text-align: left;
      font-size: 16px;

      &.active,.hover {
        background-color: white;
        color: #dd0917;
      }
    }
  }

  .tab-content {
    flex-grow: 1;
    padding: 1rem;
    background-color: #1c1c1ebd;
    color: white;
    
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      img {
        width: 200px;
        height: auto;
        border-radius: 4px;
        border: 2px solid #dd0917;
      }
    }
  }

  .play-social-button{
    display: flex;
    justify-content: space-around;
    margin: 3rem auto;
  }

  .play-btn {
      width: 10rem;
      height: 50px;
      background-color: #dd0917;
      color: white;
      display: flex;
      padding: 0px 5px;
      justify-content: center;
      align-items: center;
      cursor: url('../assets/cursor.png') 16 16, auto;
  }

  .ml10{
    margin-right: 10px;
  }

// Responsive adjustments for smaller devices
@media (min-width: 768px) {
  .tabs{
    display: flex;
    flex-direction: column;
  }
  .tabs-container{
    display: flex;
    flex-direction: row;
  }
}

</style>
