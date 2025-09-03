<script setup lang="ts">

  const articleService = useArticleService();
  const articles = await articleService.getArticles();
  const articlesRef = ref(articles);

</script>

<template>
  <template v-for="article in articlesRef" :key="article.id">
    <NuxtLink :to="`${article.id}`">
    <article class="card rounded-none mb-5">
      <figure>
        <img :src="article.imageUrl" alt="some image">
      </figure>
      <div class="card-body px-0 pt-3">
        <div class="card-title text-2xl font-[Domine] mb-2">{{ article.title }}</div>
        <p class="font-[Raleway]">{{ article.blurb }}</p>
        <div class="card-actions items-center justify-between">
          <div class="text-xs font-bold">{{
              `${article?.authors[0]?.lastName}, ${article?.authors[0]?.firstName}` +
              (article.authors.length > 1 ? " ..." : "") }}
          </div>
          <div>
            <span v-for="tag of article.tags" :key="tag.id" class="badge badge-sm badge-soft ms-1">{{ tag.name }}</span>
          </div>
        </div>
      </div>
    </article>
    </NuxtLink>
    <div class="divider"></div>
  </template>
</template>

<style scoped>

</style>