<template>
  <ElCard class="form-card">
    <ElForm
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      label-position="left"
    >
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <ElOption label="income" value="INCOME" />
          <ElOption label="outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput
          @keyup.native="submitDis()"
          id="value"
          v-model.number="formData.value"
          autocomplete="off"
        />
      </ElFormItem>
      <ElButton id="sub" type="primary" @click.prevent="onSubmit" disabled
        >Submit</ElButton
      >
    </ElForm>
  </ElCard>
</template>
<script>
export default {
  // eslint-disable-next-line
  name: "Form",
  data: () => ({
    formData: {
      type: "INCOME",
      comment: "",
      value: 0,
    },

    rules: {
      type: [
        { required: true, message: "Please select type", trigger: "blur" },
      ],
      comment: [
        { required: true, message: "Please input comment ", trigger: "change" },
      ],
      value: [
        { required: true, message: "Please input value ", trigger: "change" },
        {
          type: "number",
          message: "Value must be a number",
          trigger: "change",
        },
      ],
    },
  }),
  methods: {
    onSubmit() {
      const btn = document.getElementById("sub");
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit("submitForm", { ...this.formData });
          this.$refs.addItemForm.resetFields();
          btn.disabled = true;
          btn.classList.add("is-disabled");
        }
      });
    },
    submitDis() {
      const btn = document.getElementById("sub");
      if (this.formData.value == 0) {
        btn.disabled = true;
        btn.classList.add("is-disabled");
      }
      if (this.formData.value != 0) {
        btn.disabled = false;
        btn.classList.remove("is-disabled");
      }
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.form-card {
  max-width: 600px;
  margin: auto;
  .type-select {
    width: 100%;
  }
}
</style>
