import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    s : [{num:"번호", title:"제목", click : "클릭횟수(조회수)"}],
    board: [
     
      { id: 1,num:1, memo: "첫번째 제목" ,click:0,post:"첫번째 작성된목록입니다" },
      { id: 2,num:2, memo: "두번째 제목", click:0,post:"두번째 작성된목록입니다" },
  
    ],
    
  },
  getters: {},
  mutations: {
    addmemo: function (state, memo) {
      // memo값을 board에 추가하는 일
      // memo값은 store에서 추가할수 없기 때문에 받아와야한다.
      const id = state.board.length + 1;
      state.board.push({ id: id, memo: memo,click:0});
    },
    plus : function (state,click) {
      state.board[click-1].click++
    }
  },
  actions: {},
  modules: {},
});
