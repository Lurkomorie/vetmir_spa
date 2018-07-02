<script src="./App.js"></script>

<template>
  <div>
    <header-panel />
    <div class="app-body">
      <side-bar />

      <main class="main">
        <div class="container-fluid">
          <div id="ui-view">
            <router-view />
          </div>
        </div>
      </main>

      <aside-bar />
    </div>
  </div>
</template>
