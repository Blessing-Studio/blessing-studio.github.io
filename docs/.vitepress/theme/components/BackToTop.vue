<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import '@fortawesome/fontawesome-svg-core/styles.css'
import {debounce} from 'lodash-es'
const scrollTop = ref(0)
const props = defineProps({
  threshold: {
    type: Number,
    default: 100
  }
})

const getScrollTop = () => {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  scrollTop.value = 0
}

const show = computed(() => scrollTop.value > props.threshold)

onMounted(() => {
  scrollTop.value = getScrollTop()
  window.addEventListener(
    'scroll',
    debounce(() => {
      scrollTop.value = getScrollTop()
    }, 50)
  )
})
</script>

<template>
  <Transition name="fade"
  enter-active-class="animate__animated animate__bounceInRight"
  leave-active-class="animate__animated animate__bounceOutRight"
  >
    <div class="back-to-top" v-show="show" @click="scrollToTop">
      <!--<FontAwesomeIcon icon="fa-solid fa-chevron-up" />-->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
        />
      </svg>
    </div>
  </Transition>
</template>
<style lang="scss" scoped>
.back-to-top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: rgb(219, 219, 219);
  box-shadow: rgba(162, 162, 162, 0.3) 0px 0px 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  &:hover {
    animation: heartBeat 1s infinite;
    cursor: pointer;
  }
  svg {
    font-size: 16px;
    width: 16px;
    fill: var(--vp-c-text-1);
  }
}

.dark {
  .back-to-top {
    background-color: rgb(48, 48, 48);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
  }
}
</style>
