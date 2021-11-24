<template>
  <div>
    <H />
    <main>
      <div class="att_ask_wrapper">
        <div class="title">资质要求</div>
        <div class="ask">
          <div class="ask_title">
            <p class="op1">
              <span class="ospan">个人店</span>
              <span class="ospan">企业店</span>
            </p>
            <p class="op2">
              <span class="ospana"
                >适合个人/个体工商店户入驻，提供身份证等即可开店</span
              >
            </p>
          </div>
          <div class="ask_titlea">
            <p style="font-size: 14px; padding-left: 16px">快速筛选入驻资质</p>
            <p
              style="
                font-size: 12px;
                color: rgba(0, 0, 0, 0.6);
                margin-left: 8px;
              "
            >
              不同店铺类型，入驻所需资质不同，请根据您的实际情况进行选择
            </p>
          </div>
          <div class="ask_titlea_item">
            <div class="item">
              <span>店铺信息</span>
              <span class="item_span">个人店</span>
              <span class="item_span">个体工商户</span>
            </div>
          </div>
          <div class="unit">
            <div class="title">个人店</div>
            <div class="item">
              <span>店铺信息</span>
              <span class="item_span">个人店</span>
              <span class="item_span">个体工商户</span>
            </div>
          </div>
        </div>
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
  margin-top: 320px;
  width: 100%;
  height: 100%;
  .att_ask_wrapper {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    .title {
      width: 96px;
      height: 24px;
      font-size: 24px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.8);
      line-height: 24px;
    }
    .ask {
      margin-top: 24px;
      .ask_title {
        width: 1200px;
        height: 40px;
        float: left;
        border-bottom: 1px solid #ebebeb;
        .op1 {
          width: 144px;
          float: left;
          .ospan {
            width: 48px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.6);
            margin-right: 24px;
          }
          .ospan:hover {
            color: #ff5454;
          }
        }
        .op2 {
          width: 284px;
          height: 40px;
          float: left;
          margin-left: 770px;
          .ospana {
            width: 284px;
            height: 40px;
            font-size: 12px;
            line-height: 40px;
            text-align: center;
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
      .ask_titlea {
        width: 1200px;
        height: 40px;
        float: left;
        background: rgba(0, 0, 0, 0.04);
        p {
          float: left;
          line-height: 40px;
          text-align: left;
        }
      }
      .ask_titlea_item {
        width: 1200px;
        height: 84px;
        float: left;
        .item {
          width: 1162px;
          height: 36px;
          padding: 24px 18px;
          font-size: 12px;
          border: 1px solid #ebebeb;
          span {
            width: 200px;
            height: 36px;
            line-height: 36px;
            font-size: 12px;
          }
          .item_span {
            width: 96px;
            height: 28px;
            margin: 0 5px;
            border: 1px solid #000;
          }
          .item_span:hover {
            border: 1px solid #ff5454;
            color: #ff5454;
          }
        }
      }
      .unit {
        width: 1200px;
        float: left;
        .title {
          float: left;
          width: 1200px;
          font-size: 24px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.8);
          margin: 24px 0 12px 0;
          font-size: 14px;
        }
      }
    }
  }
}
</style>