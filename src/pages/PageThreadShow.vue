<template>
  <div class="col-large push-top" >
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

          <a href="#">
            <img
              class="avatar-large"
              :src="userById(postById(postId).userId).avatar"
              alt=""
            />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-else class="col-large push-top">
    <h1>This thread does not exist</h1>
    <router-link :to="{name: 'Home'}">find some good threads</router-link> -->

  <!-- </div> -->
</template>

<script>
import sourceData from "@/data.json";
export default {
  created() {},
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
  computed: {
    thread() {
      return this.threads.find(thread => thread.id === this.id)
    }
  }
};
</script>

<style lang="scss" scoped></style>