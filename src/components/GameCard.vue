<template>
    <div class="game-card">
        <div class="card-image-container">
          <img :src="game.image" :alt="game.title" class="game-image" />
          <div class="game-overlay">
            <!-- Typing Effect for Description -->
            <p class="slogan"><b>{{ game.slogan }}</b></p>
            <p class="game-description">{{game.description}}</p>
            <div class="player-stats">
              <p class="max-players">max. players: {{ game.maxplayers }}</p>
              <p class="cur-players">total players: {{ game.currplayers }}</p>
            </div>
          </div>
        </div>
        <div class="game-title-section">
            <!-- Details Button -->
             <RouterLink :to="{ name: 'GameDetails', params:{id:game.id}}" class="details-btn"> 
              <font-awesome-icon :icon="['fas', 'circle-info']" size="2xl"/>
             </RouterLink>
            <!-- Game Title -->
            <h2 class="game-title">{{ game.title }}</h2>
            <!-- Play Button -->
            <a :href="game.playLink" target="_blank" rel="noopener noreferrer" class="play-btn">
              <font-awesome-icon :icon="['fas', 'play']" class="ml10" /> Play
            </a>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        game: {
            type: Object,
            required: true,
        },
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
$transparent-color: rgba(0, 0, 0, 0.8);

@mixin transition($property, $duration) {
  transition: $property $duration ease-in-out;
}

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

a{
    text-decoration: none;
}

.game-card {
    width: 30%;
    background-color: $grey-color;
    color: $white-color;
    text-align: center;
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
          overflow: hidden; 
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
      padding: 1rem;
      color: $white-color;
      transition: all 0.3s ease-in-out;
        h2.game-title {
          font-size: 1rem; 
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .play-btn {
          width: 70px;
          height: 50px;
          background-color: #dd0917;
          color: white;
          display: flex;
          padding: 0px 5px;
          justify-content: center;
          align-items: center;
          cursor: url('../assets/cursor.png') 16 16, auto;
      }
      .play-btn:hover {
        background-color: $white-color; /* White background on hover */
        color: $red-color; /* Red text color on hover */
      }

      .details-btn {
        width: 50px; 
        height: 50px;
        background-color: $grey-color;
        color: #a7a7a7;
        border-radius: 50%; /* Make it round */
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: url('../assets/cursor.png') 16 16, auto;
      }
      .details-btn:hover {
        background-color: $grey-color; /* White background on hover */
        color: $white-color; /* Red text color on hover */
      }
      .ml10{
        margin-right: 10px;
      }
    }
  }

</style>