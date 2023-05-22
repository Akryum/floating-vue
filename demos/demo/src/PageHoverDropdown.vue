<template>
  <div class="box">
    <VMenu
      :distance="16"
      placement="right"
    >
      <button class="tooltip-target b1 popover-btn">Target</button>

      <template #popper>
        Hello
      </template>
    </VMenu>

    <VDropdown
      :triggers="['hover']"
      :distance="16"
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
