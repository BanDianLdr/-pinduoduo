<template>
  <div>
    <H />
    <main>
      <div class="pdd_brand">
        <h2 class="part1">拼多多热招品牌榜</h2>
        <div class="part2">什么是拼多多热招品牌榜？</div>
        <div class="part3">
          拼多多从消费者的需求角度出发建立热招品牌榜，目的是寻找有好商品和好品牌的商家，共同为消费者提供优质的商品和服务。
        </div>
        <div class="part3">诚邀热招品牌榜的商家入驻，快速入驻通道。</div>
        <div class="part2">品牌商家在拼多多都有哪些玩法？</div>
        <div class="part3">品牌馆、断码清仓、品牌特卖及其他所有常规玩法。</div>
        <div class="part2">热招品牌列表：</div>
      </div>
    </main>
  </div>
</template>
<script>
import H from "@/views/att/header.vue";
export default {
  components: {
    H,
  },
};
</script>
<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
  .pdd_brand {
    margin-top: 148px;
    width: 1200px;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    .part1 {
      font-size: 24px;
      color: #000;
      font-weight: 600;
      line-height: 50px;
    }
    .part2 {
      font-size: 16px;
      font-weight: 600;
      color: #000;
      line-height: 36px;
      margin-top: 15px;
    }
    .part3 {
      font-size: 16px;
      color: #333;
      line-height: 30px;
    }
  }
}
</style>