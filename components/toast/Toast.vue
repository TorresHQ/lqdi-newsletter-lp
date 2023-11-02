<script setup>
const toast = ref({
  visible: false,
  timeout: 5000,
  text: '',
  color: '',
  rounded: 'pill',
});

const toastHandler = (visible, text, color) => {
  toast.value.visible = visible;
  toast.value.text = text;
  toast.value.color = color;
};

defineExpose({
  toastHandler,
});
</script>

<template>
  <v-snackbar
      v-model="toast.visible"
      location="top"
      :timeout="3000"
      :color="toast.color"
      rounded="pill"
  >
    {{ toast.text }}
  </v-snackbar>
</template>

