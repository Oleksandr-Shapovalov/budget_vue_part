<template>
  <div id="app">
    <div></div>
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="listOfOperations" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList.vue";
import TotalBalance from "@/components/TotalBalance.vue";
import Form from "@/components/Form.vue";
import { mapGetters } from "vuex";

console.log(mapGetters("users", ["usersList"]));

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
    list: JSON.parse(localStorage.getItem("list")) || {},
    //  {
    //   1: {
    //     type: "INCOME",
    //     value: 100,
    //     comment: "Some coment",
    //     id: 1,
    //   },
    //   2: {
    //     type: "OUTCOME",
    //     value: -50,
    //     comment: "Some outcome coment",
    //     id: 2,
    //   },
    // },
  }),
  computed: {
    ...mapGetters("operations", ["listOfOperations"]),

    totalBalance() {
      return Object.values(this.listOfOperations).reduce((acc, item) => {
        if (item.type === "OUTCOME") return acc - item.value;
        return acc + item.value;
      }, 0);
    },
  },
  methods: {
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      let listARR = Object.entries(this.list);
      listARR.unshift([newObj.id, newObj]);
      this.list = JSON.parse(JSON.stringify(Object.fromEntries(listARR)));
      localStorage.setItem("list", JSON.stringify(this.list));
      // this.$set(this.list, newObj.id, newObj);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
