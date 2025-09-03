<script setup lang="ts">

  import { useRoute } from 'vue-router';

  const route = useRoute();
  const id = route.params.id;

  const articleService = useArticleService();
  const article = await articleService.getArticle(id as string);
  const data = ref(article);

</script>

<template>
  <article class="container prose mb-16">
    <h2>{{ data.title }}</h2>

    <figure>
      <img :src="data.imageUrl" alt="some image">
    </figure>
    <div class="flex justify-between mb-5">
      <div class="text-sm">{{ `${data.datePublished[1]}-${data.datePublished[2]}-${data.datePublished[0]}` }}</div>
      <div class="flex">
        <span v-for="tag in data.tags" :key="tag.id" class="badge badge-sm badge-soft badge-warning">{{ tag.name }}</span>
      </div>
    </div>
    <div class="flex mb-3">
      <div v-for="author in data.authors" :key="author.id" class="text-sm">{{ `${author.lastName}, ${author.firstName}.` }}</div>
    </div>

    <section v-html="data.content"></section>

    <div v-if="data.source !== null"><span class="font-bold">source:</span> {{ data.source }}</div>
  </article>
</template>

<style scoped>

</style>