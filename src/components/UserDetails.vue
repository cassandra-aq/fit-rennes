<template>
    <div>
        {{ user.days }}
        <v-form>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                    <v-text-field 
                        type="text"
                        v-model="message"
                        label="Message personnalisé"
                        >
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-btn 
                        @click="sendMessage"
                        color="success"
                        class="mr-4"
                        :text="user.message"
                        >
                        Envoyer
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>

export default {
  props: {
    user: {
      type: Object,
      default: null
    }
  },

  data() {
      return {
          message: this.user.message
      }
  },

  methods: {
      sendMessage() {
        this.user.message = this.message;
        console.log(this.user);
        this.axios.put(
            `${process.env.VUE_APP_API_SERVER}/users/${this.user.id}`,
            this.user
        );
      }
  }
};
</script>

<style lang="scss" scoped>
</style>