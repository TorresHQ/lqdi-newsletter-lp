<script setup>
import Toast from '~/components/toast/Toast.vue';

const toast = ref(null);
const router = useRouter();
const config = useRuntimeConfig();

const email = ref('');
const password = ref('');

const visible = ref(false);
const loadingButton = ref(false);

// Validations
const validateEmail = computed(() => {
  return email.value.length > 0 && email.value.includes('@');
});

const validatePassword = computed(() => {
  const passwordWithoutSpaces = password.value.replace(/\s/g, '');
  return passwordWithoutSpaces.length >= 3;
});

// Methods
const login = async () => {
  loadingButton.value = true;
  
  await $fetch(`${config.public.apiBase}/v1/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
        email: email.value,
        password: password.value,
    })
  })
  .then(response => {
    const { token } = response.data;
    localStorage.setItem('token', token);
    router.push('/admin');
  })
  .catch(error => {
    toast.value.toastHandler(true, `Erro ao enviar mensagem: ${error?.data?.message}`, 'error');
  })
  .finally(() => {
    loadingButton.value = false;
  });
};

const formSubmit = () => {
  if (!validateEmail.value && !validatePassword.value) {
    toast.value.toastHandler(true, 'Preencha os campos "requeridos"', 'warning');
  } else if (!validateEmail.value) {
    toast.value.toastHandler(true, 'Preencha o campo "E-mail" corretamente', 'warning');
  } else if (!validatePassword.value) {
    toast.value.toastHandler(true, 'Preencha o campo "Senha" corretamente', 'warning');
  } else {
    login();
  }
};
</script>

<template>
  <Toast ref="toast"/>

  <div>
    <v-img
      class="mx-auto my-6"
      max-width="114"
      src="/img/logo-lqdi-login.png"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">E-mail (requirido)</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Senha (requirido)
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        :loading="loadingButton"
        @click="formSubmit"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>