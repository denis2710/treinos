<template>

  <v-layout row>
    <v-flex>
      <v-list two-line>
        <template v-for="(item, index) in items" >
          <router-link :to="getUrlTreino(item.diaSemana)" v-bind:key="item.id">
          <v-subheader
            v-if="item.header"
            :key="item.header"
          >
            {{ item.header }}
          </v-subheader>

          <v-divider
            v-else-if="item.divider"
            :inset="item.inset"
            :key="index"
          ></v-divider>

          <v-list-tile
            v-else
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          </router-link>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
</style>

<script>
export default {
  data () {
    return {
      items: [
        {
          avatar: 'http://www.iemily.com/images/triceps.jpg',
          title: 'Segunda Feira',
          subtitle: 'Deltóides/Tríceps',
          diaSemana: 'segunda',
          id: 1
        },
        { divider: true, inset: true },
        {
          avatar: 'https://www.musculacao.net/wp-content/uploads/2012/08/trapezios_romboides_grande-dorsal.jpg',
          title: 'Terça Feira',
          subtitle: 'Dorsais/Antebraço/Abdômen',
          diaSemana: 'terca',
          id: 2
        },
        { divider: true, inset: true },
        {
          avatar: 'https://www.fisioterapiaparatodos.com/p/wp-content/uploads/2015/03/Tend%C3%A3o-de-Aquiles-400x576.jpg',
          title: 'Quarta Feira',
          subtitle: 'Pernas/Panturrilhas',
          diaSemana: 'quarta',
          id: 3
        },
        { divider: true, inset: true },
        {
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pectoralis_major.png/500px-Pectoralis_major.png',
          title: 'Quinta Feira',
          subtitle: 'Peitorais/Abdômen',
          diaSemana: 'quinta',
          id: 4
        },
        { divider: true, inset: true },
        {
          avatar: 'http://www.hong.com.br/wp-content/uploads/2016/05/anatomia-biceps.jpg',
          title: 'Sexta Feira',
          subtitle: 'Bíceps',
          diaSemana: 'sexta',
          id: 5
        },
        { divider: true, inset: true },
        {
          avatar: 'http://blogeducacaofisica.com.br/wp-content/uploads/2017/07/abdominal-730x456.jpg.pagespeed.ce.5DaVppSbz3.jpg',
          title: 'Sabado',
          subtitle: 'Abdômen',
          diaSemana: 'sabado',
          id: 6
        }
      ]
    }
  },
  methods: {
    getUrlTreino (diaSemana) {
      return `/treinodia/${diaSemana}`
    }
  }
}
</script>
