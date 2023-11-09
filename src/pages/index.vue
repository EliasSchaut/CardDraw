<template>
  <div class="flex flex-row justify-center">
    <button
      @click="draw_card"
      type="button"
      class="mt-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Ziehe eine Karte
    </button>
    <Modal ref="modal" :value="card" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  methods: {
    draw_card() {
      useFetch('/api/draw').then((data) => {
        this.$refs.modal.show(data.data.value as string);
      });
    },
  },
  setup() {
    return { card: '??' };
  },
});
</script>
