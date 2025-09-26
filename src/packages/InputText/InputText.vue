<template>
  <div class="chart-render" ref="refChartRender">
    当前是{{ props.chartType }}，主题色是{{ props.params.color }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  chartType: {
    type: String,
    required: true,
    default: "柱状图",
  },
  params: {
    type: Object,
    default() {
      return {
        color: "red",
      };
    },
  },
});

</script>
<script lang="ts">
export default {
  name: "InputText",
};
</script>
