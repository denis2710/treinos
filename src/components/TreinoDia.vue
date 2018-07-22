<template>
<div>
  <v-layout row wrap v-for="treino in treinos" :key="treino.id">
    <v-flex >
      <v-card>
        <v-card-media
          :src="treino.img"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{treino.titulo}}</h3>
            <div>{{treino.descricao}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</div>
</template>

<style scoped>
.row{
  margin-bottom: 2%
}

</style>

<script>
export default {
  data () {
    return {
      treinos: [
        {
          id: 1,
          titulo: 'Elevação lateral em pé',
          descricao: '4 x 8',
          img: 'http://saudenocorpo.com/wp-content/uploads/2016/09/latraise.gif'
        },
        {
          id: 2,
          titulo: 'Desenvolvimento com barra por trás',
          descricao: '15-12-10-10-8',
          img: 'http://muscul.az.free.fr/pt/md16p.gif'
        },
        {
          id: 3,
          titulo: 'Elevação lateral sentado',
          descricao: '12-10-10-8',
          img: 'http://www.zanuto.com/wp-content/uploads/2016/11/15-Ombro-Eleva%C3%A7%C3%A3o-Lateral-sentado.gif'
        },
        {
          id: 4,
          titulo: 'Elevação frontal alternado em pegada martelo',
          descricao: '4 x 10',
          img: 'http://muscul.az.free.fr/pt/mbra02h.gif'
        },
        {
          id: 5,
          titulo: 'Extensão de tríceps na corda',
          descricao: '12-10-10-8',
          img: 'http://muscul.az.free.fr/pt/mtri14.gif'
        },
        {
          id: 6,
          titulo: 'Extensão de tríceps testa',
          descricao: '10-10-8',
          img: 'https://www.domyos.com.br/sites/domyos/files/conseils-sculpt-exercice-6-exercices-banc-de-musculation-triceps-barre-au-front.gif'
        },
        {
          id: 6,
          titulo: 'Mergulho',
          descricao: '2 x 20',
          img: 'https://www.feitodeiridium.com.br/wp-content/uploads/2017/08/Parallettes-mergulho.gif'
        }
      ]
    }
  }
}
</script>
