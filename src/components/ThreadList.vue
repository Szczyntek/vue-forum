<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <a href="thread.html"> {{ thread.title }}</a>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#"> {{ userById(thread.userId).name }} </a>, {{ thread.publishedAt }}
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} replies
          </p>
          <img :src="userById(thread.userId).avatar" class="avatar-medium" alt="">
          <div>
            <p class="text-xsmall">
              By <a href="#"> {{ userById(thread.userId).name }} </a>
            </p>
            <p class="text-faded text-xsmall">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  name: "Test",
  created() {},
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  props: {},
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
};
</script>

<style lang="scss" scoped></style>