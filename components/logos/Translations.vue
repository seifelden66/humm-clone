<template>
  <div class="circle">
    <p>{{$t('translate')}}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "IcSharpTranslate",
};
</script>
<style lang="scss" scoped>
.circle{
    border: 1px black solid;
    width: 1.25em;
    height: 1.25em;
    padding: 0;
    display: grid;
    place-items: center;
    text-align: center;
    border-radius: 50%;
p{
    margin: 0 auto;
    font-size: 12px;
}

}

</style>
