<template>
  <div class="box">
    <VDropdown
      :triggers="['hover']"
      :offset="[0, 16]"
      :auto-hide="false"
      placement="right"
    >
      <button class="tooltip-target b1 popover-btn">Target</button>

      <template #popper>
        Hello
      </template>
    </VDropdown>

    <VDropdown
      :triggers="['hover']"
      :offset="[0, 16]"
      :auto-hide="false"
      placement="right"
    >
      <span>Simple text</span>

      <template #popper>
        Hello
      </template>
    </VDropdown>
  </div>
</template>

<style lang="postcss" scoped>
.box {
  padding: 24px;
}

.v-popper {
  margin-left: 0;
  margin-right: 0;
}
</style>
