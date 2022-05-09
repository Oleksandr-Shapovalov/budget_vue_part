<template>
  <div class="total-value">
    Balance <span :class="[totalColor(total)]"> {{ total }}</span>
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    totalColor(total) {
      if (!total) return "black";
      if (total > 0) return "green";
      else return "red";
    },
  }),
};
</script>

<style scoped lang="scss">
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  span {
    padding-left: 10px;
    font-weight: 600;
  }
}
.black {
  color: black;
}
.green {
  color: rgb(115, 201, 115);
}
.red {
  color: rgb(255, 137, 137);
}
</style>
