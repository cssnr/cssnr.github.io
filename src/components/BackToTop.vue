<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { debounce } from '@/utils'

const backToTop = ref<HTMLElement | null>(null)

const onScroll = () => {
  // console.log('onScroll:', backToTop.value)
  if (!backToTop.value) return
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.value.style.display = 'block'
  } else {
    backToTop.value.style.display = 'none'
  }
}

const topClick = () => {
  if (window.location.hash) {
    // let vue router handle the scroll
    window.location.hash = ''
  } else {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}

onMounted(() => {
  // console.log('onMounted: window.addEventListener')
  window.addEventListener('scroll', debounce(onScroll))
})
</script>

<template>
  <button ref="backToTop" type="button" class="btn btn-outline-secondary back-to-top" @click="topClick">
    <i class="fa-regular fa-square-caret-up"></i>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 50px;
  right: 10px;
  display: none;
  z-index: 3;
}
</style>
