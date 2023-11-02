<script setup>
</script>

<template>
    <div class="container px-sm-12 pt-12 mt-16">
        <v-row>
            <v-col cols="12" md="5" sm="12">
                <p class="title mb-8">Construímos estratégias, design e tecnologia de ponta para o seu negócio</p>
                <p class="subtitle mb-8">Converse com nossa equipe sobre o seu projeto.</p>
                <v-btn class="text-none start-button" variant="flat" size="large" color="#0AB2B7" rounded="xl">Começar</v-btn>
            </v-col>
            <v-col cols="12" md="7" sm="12" class="image-box">
                <div class="image-container">
                    <img class="image1" src="/img/Rectangle 109.png" />
                    <img class="image2" src="/img/Rectangle 112.png" />
                    <img class="image3" src="/img/Rectangle 111.png" />
                    <img class="image4" src="/img/Rectangle 110.png" />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>

.container {
    background-color: #F1F4F9;
    min-height: 40rem;
}

.title {
    color: #08111E;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.subtitle {
    color: #08111E;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.start-button {
    max-width: 150px;
    height: 52px;
    flex-shrink: 0;
}

.image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 400px
}

.image1, .image2, .image3, .image4 {
    position: absolute;
    width: 280px;
    height: 268px;
}

.image1 {
    left: 300px;
    top: 0;
}

.image2 {
    left: 0;
    top: 434px;
}

.image3 {
    height: 414px;
    left: 300px;
    top: 288px;
}

.image4 {
    left: 601px;
    top: 98px;
}

/* Improved responsive design */
@media (max-width: 960px) {
    .image-box {
        display: none;
    }
}

@media (max-width: 600px) {
   .container {
    padding: 0 16px;
   }
}
</style>
