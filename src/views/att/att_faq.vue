<template>
  <div>
    <H />
    <main>
      <div class="faq">
        <div class="faq_left">
          <ul
            @click="change(index)"
            :class="activeIndex == index ? 'active' : ''"
            :key="item.id"
            v-for="(item, index) in question_item"
          >
            <li class="faq_item faq_select">{{ item.title }}</li>
          </ul>
        </div>
        <div
          class="faq_cont"
          v-for="(item, index) in question_item"
          @click="change(index)"
          v-show="activeIndex == index"
          :key="index"
        >
          <div class="title">
            {{ item.title }}
            <span class="faq_faq">
              共
              <span style="color: rgb(255, 84, 84); margin: 0 2px">{{
                item.num
              }}</span>
              个问题
            </span>
          </div>
          <div>
            <div class="question_item">
              <div class="question">
                {{ item.question }}
              </div>
              <div class="answer">
                {{ item.answer }}
              </div>
            </div>
            <div class="question_item">
              <div class="question">{{ item.question2 }}</div>
              <div class="answer">
                {{ item.answer2 }}
              </div>
              <div class="answer">
                {{ item.answer3 }}
              </div>
              <img :src="item.img" style="margin-top: 11px" width="100%" />
            </div>
            <div class="question_item">
              <div class="question">{{ item.question3 }}</div>
              <div class="answer">{{ item.answer4 }}</div>
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
  data() {
    return {
      activeIndex: 0,
      question_item: [
        {
          title: "店铺类型",
          num: "3",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "主营类目",
          num: "4",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "命名规则",
          num: "2",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "资质相关",
          num: "10",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "保证金",
          num: "6",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "0元入驻",
          num: "2",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "店铺后台",
          num: "2",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "售后问题",
          num: "7",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
        {
          title: "其他",
          num: "4",
          question: "1、多多国际、一般贸易和普通入驻有什么区别？",
          answer:
            "多多国际仅支持境外企业（港澳台及海外企业）入驻，且只支持售卖境外直邮直供商品，不可售卖境内产品；一般贸易和普通入驻仅支持境内企业入驻，一般贸易只支持售卖进口产品。",
          question2: "2、入驻企业和个人的区别？",
          answer2:
            "个人店有个人、个体工商户两种店铺类型：个人店：需要上传大陆身份证原件人像面和国徽面照片、并进行实人认证。个体工商户：还需上传属于入驻人本人的个体工商户营业执照。",
          answer3:
            "企业店有普通店、专营店、专卖店、旗舰店四种店铺类型：普通店：上传三证合一的营业执照（非三证合一的营业执照除营业执照外还需要上传税务登记证、组织机构代码证）。专营店、专卖店、旗舰店：还需上传品牌信息",
          img: "//commimg.pddpic.com/mms_static/2020-04-30/a1733119-7042-4fd1-8109-82376ad79ef5.png",
          question3: "3、个体工商户可以开设什么类型的店铺？",
          answer4: "个体工商户只可以开设个体工商户的店铺",
        },
      ],
    };
  },
  methods: {
    change: function (index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
ul,li{
  list-style: none;
}
main {
  width: 100%;
  height: 100%;
  // background: aqua;
  .faq {
    margin-top: 172px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    .faq_left {
      display: inline-block;
      width: 200px;
      height: 360px;
      border: 1px solid #ebebeb;
      position: fixed;
      top: 175px;
      li {
        width: 200px;
        height: 40px;
        padding-left: 24px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.8);
        line-height: 40px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .active {
        width: 197px;
        height: 40px;
        background: #fff6f6;
        border-right: 3px solid #ff5454;
        color: #ff5454;
      }
    }
    .faq_cont {
      vertical-align: top;
      margin-left: 220px;
      width: 975px;
      display: inline-block;
      margin-top: 148px;
      .title {
        height: 24px;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 24px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.8);
      }
      .faq_faq {
        vertical-align: top;
        display: inline-block;
        margin-left: 8px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        height: 24px;
        line-height: 24px;
      }
      .question_item {
        margin-bottom: 40px;
        .question {
          height: 16px;
          font-size: 16px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.8);
          line-height: 16px;
          margin-bottom: 11px;
        }
        .answer {
          color: rgba(0, 0, 0, 0.6);
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>