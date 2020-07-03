<template>
  <div>
    <!-- <v-alert type="info" v-if="user.message">
        <div class="title">Message de Fabien</div>
            {{ user.message }}
    </v-alert> -->
    <h1>Ma journée</h1>
    <v-form>
        <v-radio-group row="true">
            <template v-slot:label>
                <p><strong>Humeur :</strong></p>
            </template>
            <v-radio label="maussade"></v-radio>
            <v-radio label="normal"></v-radio>
            <v-radio label="bien"></v-radio>
            <v-radio label="très bien"></v-radio>
        </v-radio-group>
        <v-row>
            <v-col cols="11">
                <v-text-field type="number" label="mon poids"></v-text-field>
            </v-col>
            <v-col cols="1" align-self="center">
                Kg
            </v-col>
        </v-row>
        <h2 class="mt-5">Sport</h2>
        <div class="pr-5 pl-5 mt-2">
            <v-card>
                <v-card-text>
                    <v-text-field type="text" label="sport réalisé"></v-text-field>
                    <v-slider label="intensité" thumb-label="always" min="0" max="4"></v-slider>
                </v-card-text>
            </v-card>
        </div>
        <h2 class="mt-7">Repas</h2>
        <div class="pr-5 pl-5">
            <v-row>
                <v-col cols="12" md="4">
                    <v-card class="mx-auto" max-width="344">
                        <v-card-title>Petit-déjeuner</v-card-title>
                        <v-card-text>
                            J'ai mangé :
                            <v-select
                            :items="mealChoices"
                            item-text="text"
                            item-value="value"
                            filled
                            label="--"
                            ></v-select>
                            <v-checkbox v-model="collation" label="J'ai pris une collation"></v-checkbox>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="mx-auto" max-width="344">
                        <v-card-title>Déjeuner</v-card-title>
                        <v-card-text>
                            J'ai mangé :
                            <v-select
                            v-model="select"
                            :items="mealChoices"
                            item-text="text"
                            item-value="value"
                            filled
                            label="--"
                            ></v-select> 
                            <v-checkbox v-model="collation" label="J'ai pris une collation"></v-checkbox>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="mx-auto" max-width="344">
                        <v-card-title>Diner</v-card-title>
                        <v-card-text>
                            J'ai mangé :
                            <v-select
                            :items="mealChoices"
                            item-text="text"
                            item-value="value"
                            filled
                            label="--"
                            ></v-select> 
                            <v-checkbox v-model="collation" label="J'ai pris une collation"></v-checkbox> 
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <v-btn color="success" @click="saveData">Enregistrer</v-btn>
    </v-form>
  </div>
</template>
<script>

export default {
  name: "Member",

  components: {
  },

  data: () => ({
    user: null,
    mood: null,
    weight: null,
    sport: null,
    sportIntensity : null,
    mealChoices: [
        { text: "léger", value: 1},
        { text: "normalement", value: 2},
        { text: "beaucoup", value: 3},
    ]
  }),

  async created() {
        const user = await this.axios.get(
            `${process.env.VUE_APP_API_SERVER}/users/2`
        );
        this.user = user;
        console.log(this.user);
  },

  computed: {

  },

  methods: {
      saveData() {
        this.user.day = {
            
        }
        this.user.mood = this.mood;
        this.user.mood = this.weight;
        this.user.sport = this.sport;

        // console.log(this.user);
        
        // this.axios.put(
        //     `${process.env.VUE_APP_API_SERVER}/users/${this.user.id}`,
        //     this.user
        // );
      }
  }
};
</script>

<style lang="scss" scoped>

</style>