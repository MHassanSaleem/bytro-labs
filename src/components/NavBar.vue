<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/bytro_logo.png" alt="Bytro">
      </div>
    </nav>
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

// Navbar
.navbar {
  @include flex-center;
  justify-content: space-around;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.499);

  .logo img {
    height: 4rem;
  }
}

</style>