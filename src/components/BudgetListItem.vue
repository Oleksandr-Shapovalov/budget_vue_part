<template>
  <div>
    <div class="list-item" v-for="(item, prop) in listOption(list)" :key="prop">
      <span class="budget-comment"> {{ item.comment }} </span>
      <i :class="iconItem(item.type)"></i>
      <span class="budget-value">
        {{ item.type === "INCOME" ? item.value : -item.value }}
      </span>
      <ElButton
        type="danger"
        size="mini"
        @click="(id = item.id), (dialogVisible = true)"
        >Delete</ElButton
      >
    </div>
    <ElDialog title="Delete" :visible.sync="dialogVisible" width="30%">
      <span>Do you want to delete {{ itemMsg() }}?</span>
      <span slot="footer" class="dialog-footer">
        <ElButton @click="dialogVisible = false">Cancel</ElButton>
        <ElButton
          type="primary"
          @click="(dialogVisible = false), deleteItem(id)"
          >Confirm</ElButton
        >
      </span>
    </ElDialog>
  </div>
</template>
<script>
export default {
  name: "BudgetListItem",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
    option: {
      type: String,
      default: "all",
    },
  },
  data: () => ({
    dialogVisible: false,
    id: "",
    //listSave: JSON.parse(JSON.stringify(this.list)),
  }),
  methods: {
    itemMsg() {
      //console.log(this.list || {});
      if (!this.list[this.id]) return "this item";
      return this.list[this.id].comment;
    },
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    iconItem: (income) => {
      if (income === "INCOME") return "el-icon-top";
      return "el-icon-bottom";
    },
    listOption(list) {
      if (this.option === "all") return list;
      const showList = Object.entries(list).reduce((acc, line) => {
        if (line[1].type === this.option) acc[line[0]] = line[1];
        return acc;
      }, {});
      return showList;
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  .budget-value {
    font-weight: 700;
    margin-right: 40px;
  }
  i {
    margin-left: auto;
    margin-right: 20px;
  }
}
</style>
