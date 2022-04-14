<template>
  <div class="home">
    <table  v-for="(ss,i) in $store.state.s" :key="i">
      <tr>
        <th>{{ss.num}}</th>
        <th>{{ss.title}}</th>
        <th>{{ss.click}}</th>
      </tr>
      <tr v-for="board in $store.state.board"
      :key="board.id">
      <th>{{board.id}}</th>
    
      <th @click='plus(board.id)'>{{board.memo}}</th>
       
      <th>{{board.click}}</th>
      </tr>

    </table>



    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods : {
    plus : function (id) {
      this.$router.push(`/board/${id}`);
      this.$store.commit('plus', id)
    },

  }
}
</script>
