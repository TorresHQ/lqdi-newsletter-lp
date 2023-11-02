<script setup>
</script>

<template>
    <v-layout class="ma-0">
        <v-footer class="d-flex flex-column pa-sm-12 bg-black">
            <div class="d-flex w-100 align-start">
                <img src="/img/logo-lqdi-positivo 2.png" class="mr-4"/>

                <v-spacer></v-spacer>

                <v-row class="d-flex justify-space-around ma-0">
                    <v-col cols="12" sm="6" md="6" class="info-container">
                        <p class="country-name">Brasil</p>
                        <p class="country-address">Rua da Consolação, 439 3º andar, Consolação São Paulo</p>
                        <p class="country-phone my-5">+55 11 3280-0283</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="info-container">
                        <p class="country-name">Portugal</p>
                        <p class="country-address">Av. República Nº6 - 1º Andar Lisboa</p>
                        <p class="country-phone  my-5">+351 916 029 443</p>

                        <p class="country-name">Holanda</p>
                        <p class="country-address">Jasykoffstraat 63 1506AT Zaandam, The Netherlands</p>
                        <p class="country-phone my-5">+31 622 333 744</p>
                    </v-col>
                </v-row>
            </div>
        </v-footer>
    </v-layout>
</template>

<style scoped>

.info-container {
    max-width: 227px;
    padding: 0 !important;
}

.country-name {
    color: #FFF;
    font-family: 'Satoshi', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.country-address {
    color: #FFF;
    font-family: 'Satoshi', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.country-phone {
    color: #FFF;
    font-family: 'Satoshi', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
</style>
