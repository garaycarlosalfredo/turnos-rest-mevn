<template>
  <BarraPrincipal></BarraPrincipal>

  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Button label="Great"></Button>
  <Button2 label="Second"></Button2>
  <ListaPacientes></ListaPacientes>
</template>

<script>

import ListaPacientes from './components/ListaPaciente.vue'
import ListSize from './components/ListSize.vue'
import HelloWorld from './components/HelloWorld.vue'
import Button2 from 'primevue/button'
import BarraPrincipal from './components/layout/BarraPrincipal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button2,
    ListaPacientes,
    BarraPrincipal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
