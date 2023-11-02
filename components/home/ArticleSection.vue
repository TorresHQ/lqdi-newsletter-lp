<script setup>
const articles = [
    {
        title: 'Por que é importante ter um site de qualidade?',
        caption: 'Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...',
        image: '/img/Rectangle 113.png'
    },
    {
        title: '6 dicas para trabalhar com marketing digital com verba limitada',
        caption: 'Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...',
        image: '/img/Rectangle 114.png'
    }
];

const email = ref('');
const showEmailLabel = ref(false);

const turnOnEmailLabel = () => {
    showEmailLabel.value = true;
};
</script>

<template>
    <div class="container px-sm-12 d-flex">
        <v-row>
            <v-col 
                v-for="article in articles"
                :key="article.title"
                cols="12" md="3" sm="6" xs="12"
            >
                <v-card variant="flat">
                    <v-img :src="article.image" alt="Article Image" class="article-img" max-width="317px" />
                    <v-card-item>
                        <p class="article-title mb-2">
                            {{ article.title }}
                        </p>
                        <p class="article-caption">
                            {{ article.caption }}
                        </p>
                    </v-card-item>
                    <v-card-actions>
                        <v-btn variant="text" density="compact" class="text-none article-button">
                            <template v-slot:append>
                                <v-icon>mdi-arrow-right</v-icon>
                            </template>
                            Ir para o artigo
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" md="6" sm="12">
                <v-card color="#000000" class="email-card py-14 pl-10 pr-12">
                    <v-card-item>
                        <p class="email-card-title mb-2">
                            Receba os nossos artigos de interesse na sua caixa de entrada.
                        </p>
                        <div class="mt-10">
                            <p class="email-input-label ml-4 mb-4" v-if="showEmailLabel">
                                Seu E-mail (requerido)
                            </p>
                            <input v-model="email" class="email-input py-sm-7 px-sm-14" @focus="turnOnEmailLabel" type="email" placeholder="Escreva seu e-mail aqui..." />
                        </div>
                        <p class="email-card-footer mt-16 mb-6">
                            Siga-nos em nossas mídias sociais
                        </p>
                        <v-btn
                            class="mr-2"
                            color="white"
                            icon="mdi-instagram"
                        ></v-btn>
                        <v-btn
                            class="mr-2"
                            color="white"
                            icon="mdi-facebook"
                        ></v-btn>
                        <v-btn
                            class="mr-2"
                            color="white"
                            icon="mdi-linkedin"
                        ></v-btn>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.container {
    margin-top: 15rem;
}

.article-title {
    color: #08111E;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.article-caption {
    color: #08111E;
    font-family: 'Satoshi', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.article-img {
    border-radius: 19px !important;
}

.article-button {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.email-card {
    border-radius: 19px;
}

.email-card-title {
    max-width: 297px;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.email-input {
    color: #FFF;
    caret-color: #000;
    border-radius: 50px;
    border: 2px solid #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
}

.email-input:focus {
    background: rgba(255, 255, 255, 0.95);
    color: #000;
}

.email-input:focus-visible {
    outline: none;
}

.email-card-footer {
    max-width: 117px;
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

/* Improved responsive design */
@media (max-width: 960px) {
    .container {
        margin-top: 4rem;
    }
}

@media (max-width: 600px) {
    .container {
        padding: 0 16px;
    }

    .email-card {
        padding: 16px 16px 24px 16px !important;
    }

    .email-input {
        padding: 28px 14px;
    }
}
</style>