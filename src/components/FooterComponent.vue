<template>
    <footer class="footer">
      <p>
        Designed and developed by 
        <a href="https://mhassansaleem.netlify.app/" target="_blank" rel="noopener noreferrer">Hassan <font-awesome-icon :icon="['fas', 'globe']"/></a>
      </p>
      <a href="https://github.com/MHassanSaleem/bytro-labs" target="_blank" rel="noopener noreferrer" class="github-link">
        View Code <font-awesome-icon :icon="['fas', 'code']"/>
      </a>
    </footer>
</template>

<script>
export default {
}
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

// Footer
.footer {
  @include flex-center;
  justify-content: space-between;
  padding: 0rem 2rem;
  background-color: rgba(0, 0, 0, 0.499);
  color: $white-color;
  font-size: 0.9rem;
  a {
    color: #1E90FF;
    text-decoration: none;
    @include transition(color, 0.3s);
    &:hover {
      color: $white-color;
    }
  }
}

</style>