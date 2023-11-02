<script setup>
const handleScroll = () => {
    const topBar = document.querySelector('.top-bar');
    window.addEventListener('scroll', () => {
        window.scrollY > 0 ? topBar.classList.add('bg-white') : topBar.classList.remove('bg-white');
    });
};

onMounted(handleScroll);
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <v-layout>
      <v-app-bar class="px-sm-12 top-bar" elevation="0">
        <template v-slot:prepend>
            <img src="/img/logo-lqdi-positivo 1.png" alt="Company Logo"/>
        </template>

        <template v-slot:append>
            <span class="schedule-text">Agende uma reunião conosco</span>
            <v-btn class="text-none ml-5 start-button" variant="flat" color="#000000" rounded="xl">Começar</v-btn>
        </template>
      </v-app-bar>
    </v-layout>
</template>

<style scoped>
.top-bar {
    background-color: #F1F4F9 !important;
    transition: background-color 0.5s;
}

.schedule-text {
    color: rgba(0, 0, 0, 0.70);
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.start-button {
    width: 119px;
    height: 42px;
}

.bg-white {
    background-color: #FFF !important;
}

/* Improved responsive design */
@media (max-width: 600px) {
    .top-bar {
        padding: 0 16px;
    }

    .schedule-text {
        display: none;
    }
}
</style>
