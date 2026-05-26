<script setup lang="ts">
import { routes } from '@/router'
import { SETTINGS } from '@/config/settings.ts'
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import HeadingTitle from '@/components/HeadingTitle.vue'

useHead({ title: `Not Found - ${SETTINGS.title}` })
</script>

<template>
  <div class="container-fluid">
    <HeadingTitle fa="fa-regular fa-circle-question text-danger"> Not Found</HeadingTitle>
    <p class="lead">The page you were looking for could not be found.</p>

    <ul>
      <template v-for="{ meta, path } in routes" :key="path">
        <li v-if="meta?.name">
          <RouterLink :to="path" class="text-decoration-none link-body-emphasis" active-class="fw-bold">
            {{ meta?.name }}
          </RouterLink>
        </li>
      </template>
    </ul>

    <p class="lead text-center mt-5">
      <RouterLink to="/" class="text-decoration-none link-body-emphasis">Home Page</RouterLink>
    </p>
  </div>
</template>
