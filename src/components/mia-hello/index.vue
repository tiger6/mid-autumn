<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      By the Ming and Qing Dynasties, it had become one of the traditional
      Chinese festivals, with the same name as the Spring Festival.
    </p>
    <p>
      译文：中秋节始于唐朝初年，盛行于宋朝，至明清时，已成为与春节齐名的中国传统节日之一。
    </p>
    <p>
      The Mid-Autumn Festival is influenced by Chinese culture and is also a
      traditional festival for overseas Chinese in East and Southeast Asia,
      especially in this region.
    </p>
    <p>
      译文：受中华文化的影响，中秋节也是东亚和东南亚一些国家尤其是当地的华人华侨的传统节日。
    </p>
    <p>
      Since 2008, the Mid-Autumn Festival has been listed as a national
      statutory festival.
    </p>
    <p>
      译文：自2008年起中秋节被列为国家法定节假日。
    </p>
    <p>
      On May 20, 2006, the State Council was listed in the first batch of
      national intangible cultural heritage lists.
    </p>
    <p>
      译文：2006年5月20日，国务院列入首批国家级非物质文化遗产名录。
    </p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
