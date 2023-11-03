<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import Toast from '~/components/toast/Toast.vue';

const toast = ref(null);
const router = useRouter();
const config = useRuntimeConfig()

const headers = [
  { title: 'E-mail', value: 'email', align: 'start' },
  { title: 'Nome', value: 'name', align: 'start' },
  { title: 'Ações', value: 'actions', align: 'end'}
];
const itemsPerPage = ref(10);
const loading = ref(false);
const search = ref('');
const totalItems = ref(0);
const serverItems = ref([]);

const loadingSendEmail = ref(null);

// Methods
const getSubscribers = async () => {
  loading.value = true;

  await $fetch(`${config.public.apiBase}/v1/subscribers`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
  .then(response => {
    serverItems.value = response.data;
  })
  .catch(error => {
    toast.value.toastHandler(true, `Erro ao carregar inscritos: ${error.data.message}`, 'error');
  })
  .finally(() => {
    loading.value = false;
  });
};

const sendEmail = async (item) => {
  loadingSendEmail.value = item;

  await $fetch(`${config.public.apiBase}/v1/subscribers/welcome/${item}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  })
  .then(() => {
    toast.value.toastHandler(true, 'E-mail enviado com sucesso!', 'success');
  })
  .catch(error => {
    toast.value.toastHandler(true, `Erro ao enviar e-mail: ${error?.data?.message}`, 'error');
  })
  .finally(() => {
    loadingSendEmail.value = null;
  });
}

onBeforeMount(() => {
  if (!localStorage.getItem('token')) router.push('/login');
});

onMounted(() => {
  getSubscribers();
});
</script>

<template>
  <Toast ref="toast"/>

  <v-card class="ma-16">
    <v-img
      class="mx-auto my-6"
      max-width="114"
      src="/img/logo-lqdi-login.png"
    ></v-img>

    <v-card-title class="text-center text-h4">
      Lista de Inscritos
    </v-card-title>

    <v-divider></v-divider>

    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      fixed-header
      footer
      height="300px"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      :search="search"
      class="elevation-1"
      item-value="name"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
          v-if="loadingSendEmail !== item.id"
          class="mr-2"
          color="primary"
          @click="sendEmail(item.id)"
        >
          mdi-email
        </v-icon>
        <v-icon
          v-else
          class="mr-2"
          color="primary"
        >
          mdi-loading mdi-spin
        </v-icon>
      </template>
    </v-data-table-server>
  </v-card>
</template>

