<template>
  <div class="game-page">
    <!-- Navigation Bar -->
    <NavBar/>

    <div class="game-heading">
      <h2>{{ game?.title }}</h2>
    </div>


    <!-- Game Details -->
    <div class="game-details-container">
      <div class="tabs-container">
        <!-- Vertical Tabs -->
        <div class="tabs">
          <button 
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

          <div v-if="activeTab === 'requirements'">
            <ul>
              <li v-for="(req, index) in game?.requirements" :key="index">{{ req }}</li>
            </ul>
          </div>

          <div class="features-tab-content" v-if="activeTab === 'features'">
            <ul class="features-list">
              <li v-for="(feature, index) in game.features" :key="index">
                  {{ feature }}
              </li>
            </ul>
          </div>

          <div v-if="activeTab === 'history'">
            <p>{{ game?.history }}</p>
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
        { name: 'facts', label: 'Facts' },
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
        image: require("../assets/Iron-order.png"),
        title: "Iron Order 1919",
        description: "A dieselpunk strategy game set in a reimagined WWI era.",
        requirements: ["OS: Windows 10", "RAM: 8 GB", "Graphics: GTX 1050 or better"],
        history: "Iron Order 1919 was released in 2021 and reimagines WWI with mech warfare.",
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
        facts: [],
        gallery: [
          require("../assets/Iron-order.png"),
          require("../assets/iron-order-1.jpg"),
        ],
      },
      {
        id: 2,
        image: require("../assets/COW.png"),
        title: "Call of War",
        description: "Real-time WWII strategy game with epic battles.",
        requirements: ["OS: Windows 8 or higher", "RAM: 4 GB", "Graphics: Integrated GPU"],
        history: "Call of War was released in 2016 and has been popular for its strategic depth.",
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
        image: require("../assets/Supremacy.png"),
        title: "Supremacy 1914",
        description: "Real-time WWI strategy game with historical accuracy and tactical depth.",
        requirements: [
          "OS: Windows XP SP2, Windows Vista, or Windows 7",
          "Processor: Intel Core 2 Duo 1.6 GHz or equivalent",
          "RAM: 4 GB",
          "Graphics: Intel HD Graphics integrated chipset",
          "Network: Broadband Internet connection",
          "Storage: 500 MB available space"
        ],
        history: "Supremacy 1914 was released in 2009 and has become one of the most popular WWI strategy games with over 10 million players.",
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
  h2{
    color: white;
    background-color: #dd0917;
    padding: 15px 40px;
  }
}

.game-details-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;

  .tabs-container{
    display: flex;
    width: 100%;
    overflow: hidden;
  }
  .tabs {
    display: flex;
    flex-direction: column;
    width: 200px;

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
        background-color: #dd0917;
      }
    }
  }

  .tab-content {
    flex-grow: 1;
    padding: 1rem;
    background-color: #1c1c1ebd;
    color: white;

    h2 {
      margin-top: 0;
    }

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
}
</style>
