<template>
  <div>
    <H />
    <main>
      <div class="att_flow_wrapper">
        <div class="title">入驻流程</div>
        <div class="flow">
          <div class="item">
            <div class="item_title">01<span>准备资料</span></div>
            <div class="item_divider"></div>
            <div class="item_detail">
              <div style="margin-top: 13px">
                <div>
                  1. 点击<a
                    data-testid="beast-core-button-link"
                    class="
                      BTN_outerWrapper_16ygfxx
                      BTN_textPrimary_16ygfxx
                      00000000000000000   
                      BTN_medium_16ygfxx
                      BTN_outerWrapperLink_16ygfxx
                    "
                    ><span>查询入驻所需资质</span></a
                  >（不同的店铺类型、主营类目所需的入驻资质不同）
                </div>
              </div>
              <div style="margin-top: 13px">
                <div>2. 建议您事先准备齐全资料，一次性通过审核</div>
              </div>
            </div>  
          </div>
          <img
            style="margin: 105px 16px; vertical-align: top"
            src="//commimg.pddpic.com/mms_static/2020-04-29/6b10f5df-a25a-42aa-8ce9-7ebca84e83f1.png"
            width="24"
            height="24"
          />
          <div class="item">
            <div class="item_title">02<span>入驻申请</span></div>
            <div class="item_divider"></div>
            <div class="item_detail">
              <div style="margin-top: 13px">
                <div>1. 选择店铺类型、主营类目</div>
              </div>
              <div style="margin-top: 13px">
                <div>2. 根据页面提示正确填写您的入驻信息、上传相关资质</div>
              </div>
              <div style="margin-top: 13px">
                <div>
                  3. 填写您的<a
                    data-testid="beast-core-button-link"
                    class="
                      BTN_outerWrapper_16ygfxx
                      BTN_textPrimary_16ygfxx
                      BTN_medium_16ygfxx
                      BTN_outerWrapperLink_16ygfxx
                    "
                    ><span>店铺命名规则</span></a
                  >
                </div>
              </div>
            </div>
          </div>
          <img
            style="margin: 105px 16px; vertical-align: top"
            src="//commimg.pddpic.com/mms_static/2020-04-29/6b10f5df-a25a-42aa-8ce9-7ebca84e83f1.png"
            width="24"
            height="24"
          />
          <div class="item">
            <div class="item_title">03<span>提交审核</span></div>
            <div class="item_divider"></div>
            <div class="item_detail">
              <div style="margin-top: 13px">
                <div>
                  1.
                  审核时效：个人店及普通企业店铺审核时效为2个工作日，旗舰店、专卖店、专营店审核时效为3个工作日（以实际审核为准）
                </div>
              </div>
              <div style="margin-top: 13px">
                <div>
                  2. 短信通知：无论是否审核通过，我们将通过短信通知您审核结果
                </div>
              </div>
            </div>
          </div>
          <img
            style="margin: 105px 16px; vertical-align: top"
            src="//commimg.pddpic.com/mms_static/2020-04-29/6b10f5df-a25a-42aa-8ce9-7ebca84e83f1.png"
            width="24"
            height="24"
          />
          <div class="item">
            <div class="item_title">04<span>开店成功</span></div>
            <div class="item_divider"></div>
            <div class="item_detail">
              <div style="margin-top: 13px">
                <div>1. 可以前往商家后台开始您的致富之旅</div>
              </div>
              <div style="margin-top: 13px">
                <div>
                  2.
                  商家后台：您可以登录<a>拼多多商家管理后台</a>，也可以下载拼多多商家版APP管理店铺
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <button type="button">
            立即入住
          </button>
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
  // background: blue;
  .att_flow_wrapper    { 
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
    .flow {
      margin-top: 24px;
      .item {
        box-sizing: border-box;
        display: inline-block;
        width: 258px;
        height: 234px;
        border: 1px solid #ebebeb;
        padding: 16px;
        vertical-align: top;
        .item_title {
          margin-top: 16px;
          height: 24px;
          font-weight: 600;
          font-size: 24px;
          color: #ff5454;
          display: flex;
          align-items: center;
          span {
            margin-left: 6px;
            font-size: 16px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.8);
          }
        }
        .item_divider {
          margin-top: 12px;
          width: 16px;
          height: 3px;
          background: #ff5454;
          opacity: 0.8;
        }
        .item_detail {
          font-size: 14px;
          margin-top: 21px;
          line-height: 20px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .bottom {
      margin-top: 40px;
      text-align: center;
      button{
        width: 120px;
        height: 40px;
        background: #ff5454;
        color: #fff;
        outline: none;
        border: none;    
        border-radius:5px ;
      }
    }
  }
}
</style>