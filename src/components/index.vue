<template>
    <div>
        <header>
            <Header />
        </header>
        <main>
            <Swiper />
            <LinkBlock />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Swiper from '@/components/swiper'
import LinkBlock from '@/components/LinkBlock'
import Footer from '@/components/Footer'
export default {
  name: 'index',
  components: {
    Header,
    Swiper,
    LinkBlock,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
