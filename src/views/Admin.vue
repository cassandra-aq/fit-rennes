<template>
  <div>
    <h1>Administration</h1>

    <v-card
      class="mx-auto"
      max-width="500"
      tile
    >
      <v-list nav="true">
        <v-list-item-group v-model="memberUsers" color="primary">
          <v-list-item v-for="user in memberUsers" :key="user.id" @click="openDetails(user)">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <div>
      <UserDetails v-if="user" :user="user"/>
    </div>
  </div>
</template>

<script>
import UserDetails from "@/components/UserDetails.vue";

export default {
  name: "Admin",

  components: {
    UserDetails
  },

  data: () => ({
    users: [],
    user: null
  }),

  async created() {
    const usersInDB = await this.axios.get(
      `${process.env.VUE_APP_API_SERVER}/users`
    );
    this.users = usersInDB.data;
  },

  computed: {
    memberUsers() {
      return this.users.filter(user => !user.admin)
    }
  },

  methods: {
    openDetails(user) {
      this.user = user
    }
  }
};
</script>

<style lang="scss" scoped>

</style>