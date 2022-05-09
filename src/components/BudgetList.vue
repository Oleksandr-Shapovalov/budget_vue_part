<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <ElButton class="all" @click="option = 'all'">All operations</ElButton>
        <ElButton class="INCOME" @click="option = 'INCOME'"
          >Only income</ElButton
        >
        <ElButton class="OUTCOME" @click="option = 'OUTCOME'"
          >Only outcome</ElButton
        >
        <BudgetListItem
          :list="list"
          :option="option"
          @deleteItem="onDeleteItem"
        />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget list",
    emptyTitle: "Empty list",
    // dialogVisible: false,
    option: "all",
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
      localStorage.setItem("list", JSON.stringify(this.list));
    },
  },
};
</script>

<style scoped lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
}
.budget-list-wrap {
  max-width: 600px;
  margin: auto;
}
.el-button {
  transition: all 0.3s ease-in-out;
}
.el-button:focus,
.el-button:hover {
  color: aliceblue;
}
.el-button:focus.all,
.el-button:hover.all {
  border-color: rgba(92, 92, 206, 0.699);
  background-color: rgba(92, 92, 206, 0.699);
}
.el-button:focus.INCOME,
.el-button:hover.INCOME {
  border-color: rgba(65, 155, 77, 0.699);
  background-color: rgba(65, 155, 77, 0.699);
}
.el-button:focus.OUTCOME,
.el-button:hover.OUTCOME {
  border-color: rgba(206, 92, 92, 0.699);
  background-color: rgba(206, 92, 92, 0.699);
}
</style>
