<script setup>
import Toast from '~/components/toast/Toast.vue';

const toast = ref(null);
const config = useRuntimeConfig();

const name = ref('');
const email = ref('');

const loadingButton = ref(false);
const fileSelected = ref(false);

// Validations
const validateEmail = computed(() => {
    return email.value.length > 0 && email.value.includes('@');
});

const validateName = computed(() => {
    const nameWithoutSpaces = name.value.replace(/\s/g, '');
    return nameWithoutSpaces.length >= 3;
});

// Methods
const formSubmit = () => {
    if (!validateEmail.value && !validateName.value) {
        toast.value.toastHandler(true, 'Preencha os campos "requeridos"', 'warning');
    } else if (!validateEmail.value) {
        toast.value.toastHandler(true, 'Preencha o campo "E-mail" corretamente', 'warning');
    } else if (!validateName.value) {
        toast.value.toastHandler(true, 'Preencha o campo "Nome" corretamente', 'warning');
    } else {
        sendSubscription();
    }
};

const sendSubscription = async () => {
    loadingButton.value = true;
    
    await $fetch(`${config.public.apiBase}/v1/subscribers`, {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            email: email.value,
        })
    })
    .then(() => {
        toast.value.toastHandler(true, 'Inscrição efetuada com sucesso!', 'success');
    })
    .catch(error => {
        toast.value.toastHandler(true, `Erro ao enviar mensagem: ${error?.data?.message}`, 'error');
    })
    .finally(() => {
        loadingButton.value = false;
    });
};  
</script>

<template>
    <Toast ref="toast"/>
    
    <div class="container d-flex mb-16">
        <v-row>
            <v-col cols="12" md="6" sm="12">
                <p class="main-title mb-5">Viva uma nova experiência de comunicação integrada com foco nos resultados.</p>
                <p class="main-subtitle">Escreva-nos sobre o seu projeto</p>
            </v-col>
            <v-col cols="12" md="6" sm="12">
                <div>
                    <label for="name" class="input-label ml-4 mb-4">
                        Seu nome (requerido)
                    </label>
                    <div class="d-flex align-center input-container">
                        <input id="name" v-model="name" class="input py-3 px-9 my-5" type="text" required/>
                        <v-icon v-if="validateName" class="input-icon" color="success">mdi-check-bold</v-icon>
                    </div>
                    <label for="email" class="input-label ml-4 my-4">
                        Seu E-mail (requerido)
                    </label>
                    <div class="d-flex align-center input-container">
                        <input id="email" v-model="email" class="input py-3 px-9 my-5" type="email" required/>
                        <v-icon v-if="validateEmail" class="input-icon" color="success">mdi-check-bold</v-icon>
                    </div>
                    <label for="subject" class="input-label ml-4 my-4">
                        Assunto
                    </label>
                    <input id="subject" class="input py-3 px-9 my-5" type="text"/>
                    <label for="message" class="input-label ml-4 my-4">
                        Mensagem
                    </label>
                    <textarea id="message" class="input text-area py-3 px-9 my-5"></textarea>
                    <label class="input-file-label">
                        Anexe um documento explicando seu projeto
                    </label>
                    <input class="input-file my-5" :class="{ 'file-selected': fileSelected }" @change="fileSelected = true" type="file" />
                    <v-btn class="text-none mt-4 submit-button" @click="formSubmit" :loading="loadingButton" variant="flat" color="#000" rounded="xl" >Enviar</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.container {
    margin-top: 7rem;
    padding: 0 150px;
}

.main-title {
    max-width: 415px;
    color: #080808;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.main-subtitle {
    max-width: 419px;
    color: #08111E;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.input-container {
    position: relative;
}

.input-icon {
    position: absolute;
    right: -30px;
}

.input-label {
    color: #101113;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.input {
    width: 100%;
    border-radius: 60px;
    background: #F1F4F9;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.input:focus {
    border: 2px solid #0999BA;
    background: #FFF;
}

.input:focus-visible {
    outline: none;
}

.text-area {
    border-radius: 10px;
    resize: none;
    height: 192px;
}

.input-file-label {
    color: #08111E;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.input-file {
    padding: 0 !important;
    color: #9BA2AE;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    width: 100%;
    border-radius: 10px;
    border: 2px dashed rgba(63, 63, 63, 0.40);
}

.input-file::-webkit-file-upload-button {
    width: 163.533px;
    height: 42.594px;
    color: rgba(16, 17, 19, 0.60);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    border-radius: 5px;
    background: #F1F4F9;
    border: none;
}

.file-selected {
    color: #000;
}

.submit-button {
    width: 122px;
    height: 52px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

/* Improved responsive design */
@media (max-width: 960px) {
}

@media (max-width: 600px) {
    .container {
        padding: 0 16px;
    }

    .input-icon {
        right: 10px;
    }
}
</style>