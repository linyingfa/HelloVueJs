<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <!--<h2>执行顺序</h2>-->
    <!--<h2>Ecosystem</h2>-->
  </div>
</template>

<script>
export default {
  name: 'HeaderId',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
