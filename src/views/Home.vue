<template>
  <div class="wrap">
    <!-- 头部 -->
    <header>
      <div class="H_top">
        <div class="H_T">
          <a class="logo">
            <img
              src="https://cdn.pinduoduo.com/upload/home/img/common/pdd_logo_v2.png"
              alt="logo"
            />
          </a>
          <ul class="menu">
            <li>
              <a>
                <router-link to="/">
                  <span>首页</span>
                </router-link>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <router-link to="/about">
                  <span>商家入驻</span>
                </router-link>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <span>热点资讯</span>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <span>社会招聘</span>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <span>校园招聘</span>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <span>招采平台</span>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <span>帮助中心</span>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <span>举报平台</span>
              </a>
            </li>
            <li>
              <a>
                <span>|</span>
              </a>
            </li>
            <li>
              <a>
                <span>分享赚钱</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!-- 中间 -->
    <main>
      <div class="Ban">
        <a href="">
          <img
            src="https://cdn.pinduoduo.com/upload/2020-12-14/7531b9a5-e242-4124-89df-254df0862ab5.jpg"
            alt=""
          />
        </a>
      </div>
      <div class="M_top">
        <div class="GD">
          <span class="os1">精彩活动</span>
          <span class="os2">更多></span>
        </div>
        <div class="conter_group">
          <a
            class="cat_wrap"
            href=""
            v-for="(item, index) in cart"
            :key="(item, index)"
          >
            <img class="cat" :src="item.img" alt="cat" />
          </a>
        </div>
        <div class="GD">
          <span class="os1"> 精选专题</span>
          <span class="os2">更多></span>
        </div>
        <div class="conter_group">
          <a
            class="subject_wrap"
            href=""
            v-for="(item, index) in list"
            :key="(item, index)"
          >
            <img class="subject" :src="item.img1" alt="logo" />
            <div class="goods_group">
              <div class="goods">
                <img :src="item.img2" alt="logo" class="img" />
                <div class="title">
                  {{ item.title1 }}
                </div>
                <div class="price">
                  ￥
                  <span class="group_price">{{ item.group_price1 }}</span>
                  <span class="market_price">{{ item.market_price1 }}</span>
                </div>
              </div>
              <div class="goods">
                <img :src="item.img3" alt="logo" class="img" />
                <div class="title">
                  {{ item.title2 }}
                </div>
                <div class="price">
                  ￥
                  <span class="group_price">{{ item.group_price2 }}</span>
                  <span class="market_price">{{ item.market_price2 }}</span>
                </div>
              </div>
              <div class="goods">
                <img :src="item.img4" alt="logo" class="img" />
                <div class="title">{{ item.title3 }}</div>
                <div class="price">
                  ￥
                  <span class="group_price">{{ item.group_price3 }}</span>
                  <span class="market_price">{{ item.market_price3 }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- 二维码 -->
      <div class="SM">
        <div class="SM-container">
          <img
            class=""
            alt=""
            src="https://cdn.pinduoduo.com/upload/e48dac21-db3b-4801-b047-6f14d0805614.png.slim.png"
          />
          <div class="SM-container-desc">
            <div>微信扫码下载</div>
            <div>App专享优惠</div>
          </div>
        </div>
      </div>
    </main>
    <!-- 底部 -->
    <footer>
      <div class="foot_head">
        <div class="qrcode_group">
          <div class="qrcode">
            <img
              src="//cdn.pinduoduo.com/upload/home/img/common/pdd_foot_wechat.png"
              alt="wechat_code"
            />
            <p>扫描二维码微信关注</p>
          </div>
          <div class="qrcode">
            <img
              src="https://cdn.pinduoduo.com/upload/e48dac21-db3b-4801-b047-6f14d0805614.png.slim.png"
              alt="wechat_code"
            />
            <p>扫描二维码下载App</p>
          </div>
          <div class="qrcode">
            <img
              src="//cdn.pinduoduo.com/upload/home/img/common/pdd_foot_service.png"
              alt="wechat_code"
            />
            <p>微信扫码免费领取拼多多店铺</p>
          </div>
        </div>
        <div class="conter_info">
          <p class="title">联系我们</p>
          <p class="detail">
            客服&amp;举报电话：021-53395288（推荐）或400-8822-528
          </p>
          <p class="detail">商家热线：021-5339-5088</p>
          <p class="detail">商家客服服务时间：8:00-20:30</p>
          <p class="detail">消费者客服服务时间：8:00-21:30</p>
          <p class="detail">
            消费者客服外呼号码显示：9541366（仅呼出，不支持呼入）
          </p>
          <p class="detail">上海寻梦信息技术有限公司</p>
        </div>
        <div class="pdd_bottom_nav">
          <ul class="pd_nav_list">
            <li class="pd_nav_list_item">
              <a href="https://ims.pinduoduo.com/overSea" target="_blank"
                ><span>入驻多多国际</span></a
              >
            </li>
            <li class="pd_nav_list_item">
              <a href="//careers.pinduoduo.com/campus/"
                ><span>校园招聘</span></a
              >
            </li>
            <li class="pd_nav_list_item">
              <a href="/home/about/"><span>关于我们</span></a>
            </li>
            <li class="pd_nav_list_item">
              <a href="/home/help/"><span>帮助中心</span></a>
            </li>
            <li class="pd_nav_list_item">
              <a href="/home/download/"><span>下载App</span></a>
            </li>
            <li class="pd_nav_list_item">
              <a href="/home/customer/"><span>消费者保障</span></a>
            </li>
            <li class="pd_nav_list_item">
              <a href="/home/tousu/"><span>维权投诉指引</span></a>
            </li>
            <li class="pd_nav_list_item">
              <a href="https://jubao.pinduoduo.com/" target="_blank"
                ><span>廉正举报</span></a
              >
            </li>
            <li class="pd_nav_list_item">
              <a
                href="//www.pinduoduo.com/pdd_user_services_agreement.pdf"
                target="_blank"
                ><span>服务协议</span></a
              >
            </li>
            <li class="pd_nav_list_item">
              <a
                href="//www.pinduoduo.com/pdd_privacy_policy.pdf"
                target="_blank"
                ><span>隐私政策</span></a
              >
            </li>
            <li class="pd_nav_list_item">
              <a href="/home/advice/"><span>征求意见</span></a>
            </li>
            <li class="pd_nav_list_item">
              <a href="http://investor.pinduoduo.com/" target="_blank"
                ><span>Investor Relations</span></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="foot_bottom">
        <div class="copyright">
          <div class="pdd_foot_cr">
            <span>Copyright 2015-2021 pinduoduo.com 版权所有</span
            ><a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              >(增值电信业务经营许可证：沪B2-20170215)</a
            >
          </div>
          <div class="pdd_foot_medicine">
            <a
              href="https://cdn.pinduoduo.com/upload/8a1f8507-c170-4b6e-a46a-8a47d0253dcc.png"
              target="_blank"
              >互联网药品信息服务资格证书：（沪）-经营性-2019-0052</a
            >
          </div>
          <div class="pdd_foot_record">
            <a
              class="img_wrap"
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502000392"
              ><div class="record_img"></div>
              <span
                >沪公网安备<!-- -->
                <!-- -->31010502000392<!-- -->号</span
              ></a
            ><span class="record_num">（沪）网械平台备字[2018]第00003号</span
            ><span class="record_num"
              ><a
                target="_blank"
                rel="noopener noreferrer"
                href="https://beian.miit.gov.cn/"
                >沪ICP备15010535号-13</a
              ></span
            ><span class="divider arvin-doudou">|</span
            ><a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cdn.pinduoduo.com/upload/3f48fe97-618e-4570-a21d-1f752290c291.png"
              >营业执照</a
            >
          </div>
          <div class="pdd_foot_medicine">全国旅游服务热线：12301</div>
        </div>
      </div>
      <div class="FOO">
        <div class="foot_ft">
          <a target="_blank" href="http://www.shjbzx.cn"
            ><img
              src="//cdn.pinduoduo.com/upload/home/img/common/wgxxjb_v2.png" /></a
          ><a target="_blank" href="http://www.12377.cn"
            ><img
              src="//cdn.pinduoduo.com/upload/home/img/common/yhxxjb.jpg" /></a
          ><a target="_blank" href="/home/weiquan/"
            ><img
              src="//cdn.pinduoduo.com/upload/home/img/common/pdd_weiquan_entry.png" /></a
          ><a target="_blank" href="/home/food_trade/"
            ><img
              class="big-width"
              src="//cdn.pinduoduo.com/upload/home/img/common/pdd_food_trade_entry.jpg" /></a
          ><a target="_blank" href="/home/wangjing/"
            ><img
              src="//cdn.pinduoduo.com/upload/home/img/common/pdd_wangjing_tip.jpg" /></a
          ><a
            target="_blank"
            href="https://scjgj.sh.gov.cn/platform/survey/step1_phone"
            ><img
              src="//cdn.pinduoduo.com/upload/home/img/common/pdd_foot_shop_comment.png" /></a
          ><a
            target="_blank"
            href="https://newsxmwb.xinmin.cn/special/mljbzsjs/index.html"
            ><img
              src="//cdn.pinduoduo.com/upload/home/img/common/pdd_foot_competition.png"
          /></a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [
        {
          img: "https://cdn.pinduoduo.com/upload/home/img/index/seckill_v2.jpg",
        },
        {
          img: "https://cdn.pinduoduo.com/upload/home/img/index/sale_v2.jpg",
        },
        {
          img: "https://cdn.pinduoduo.com/upload/home/img/index/supermarket_v2.jpg",
        },
        {
          img: "https://cdn.pinduoduo.com/upload/home/img/index/download.jpg",
        },
      ],
      list: [
        {
          img1: "https://cdn.pinduoduo.com/upload/home/img/subject/girlclothes.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/home/img/subject/boyshirt.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/home/img/subject/medical.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "//cdn.pinduoduo.com/upload/home/img/subject/food.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/shoes.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/home/img/subject/home.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/d53138e1-6b23-440c-9e69-69e7dbfa6794.png.slim.png",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/d53138e1-6b23-440c-9e69-69e7dbfa6794.png.slim.png",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/home/img/subject/baby.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/home/img/subject/furniture.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/home/img/subject/sports.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
        {
          img1: "https://cdn.pinduoduo.com/upload/overseas.jpg",
          img2: "https://t00img-c.yangkeduo.com/goods/images/2020-07-09/77133351c13aa2575723b27ec8877871.jpeg",
          title1:
            "雪中飞羽绒服女正品短款2020年新款小个子冬季品牌面包服白鸭绒潮",
          group_price1: "268",
          market_price1: "￥869",
          img3: "https://img.pddpic.com/gaudit-image/2021-10-20/de9e11e88117b22f23e4ca12459299d9.jpeg",
          title2: "拉夏贝尔毛呢网纱半身裙女秋冬2021新款高腰中长款a字百褶长裙",
          group_price2: "51.99",
          market_price2: "￥199",
          img4: "https://t00img-c.yangkeduo.com/goods/images/2020-12-07/4a048eb4bd87d8ad8c80fce689335aa6.jpeg",
          title3: "三彩新款甜美木耳边圣诞红编织针织连衣裙",
          group_price3: "116",
          market_price3: "￥739",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
.wrap {
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
}
// 头部
header {
  .H_top {
    position: fixed;
    width: 100%;
    height: 107px;
    z-index: 999;
    top: 0;
    // margin: auto;
    background: #fff;
    border-bottom: 4px solid #ed435b;
    .H_T {
      height: 106.5px;
      width: 1200px;
      background: #fff;
      margin: auto;
      overflow: hidden;
      position: relative;
      .logo {
        float: left;
        height: auto;
        margin: 0.21rem 0 0.21rem 0;
        max-width: 1.8rem;
        width: 15%;
        img {
          display: block;
          border: none;
          height: 100%;
          width: 100%;
          margin-top: -15px;
        }
      }
      .menu {
        height: 30px;
        line-height: 30px;
        text-align: right;
        color: #6c6c6c;
        position: absolute;
        top: 50%;
        left: 230px;
        li {
          cursor: pointer;
          display: inline-block;
          height: 20px;
          line-height: 20px;
          border-right: 1px soild #6c6c6c;
          font-size: 18px;
          a > span:hover {
            color: #fc475d;
            margin-left: 0 !important;
            font-weight: 500;
            position: relative;
            display: inline-block;
            margin-right: 15px;
          }
          span {
            margin-left: 0 !important;
            font-weight: 500;
            position: relative;
            display: inline-block;
            margin-right: 15px;
          }
        }
      }
    }
  }
}
// 主体
main {
  width: 100%;
  height: 100%;
  // background: pink;
  .Ban {
    width: 100%;
    height: 100%;
    text-align: center;
    img {
      // display: block;
      border: none;
      // height: 100%;
      margin-top: 111px;
      width: 100%;
    }
  }
  .M_top {
    overflow: hidden;
    border-bottom: 1px solid #c1c1c1;
    padding-bottom: 17px;
    margin-top: 55px;
    margin-bottom: 45px;
    margin: auto;
    .GD {
      width: 1200px;
      // height: 44px;
      // background: #fff;
      margin: auto;
      overflow: hidden;
      border-bottom: 1px solid #c1c1c1;
      padding-bottom: 17px;
      margin-top: 55px;
      margin-bottom: 45px;
      .os1 {
        float: left;
        color: #363636;
        font-size: 20px;
        margin-left: 5px;
      }
      .os2 {
        float: right;
        color: #868686;
        font-size: 18px;
        line-height: 22px;
        margin-right: 5px;
        cursor: pointer;
      }
    }
    .conter_group {
      width: 1200px;
      // height: 500px;
      margin: auto;
      overflow: hidden;
      .cat_wrap {
        float: left;
        background-color: #fff;
        padding: 12px;
        margin-right: 17px;
        margin-bottom: 17px;
        img {
          display: block;
          border: none;
        }
        .cat {
          width: auto;
          height: auto;
        }
      }
      .subject_wrap {
        float: left;
        background-color: #fff;
        padding: 10px 8px 10px 9px;
        // s y x z
        margin-right: 24px;
        margin-bottom: 45px;
        .subject {
          width: 556px;
          height: 276px;
        }
        .goods_group {
          border: 1px solid #f6f6f6;
          overflow: hidden;
          .goods {
            background-color: #fff;
            float: left;
            margin: 0 12px;
            width: 160px;
            // position: relative;
            .img {
              width: 125px;
              height: 125px;
              margin: 7px auto;
            }
            .title {
              color: #111;
              font-size: 12px;
              line-height: 18px;
              height: 36px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .price {
              font-size: 12px;
              line-height: 30px;
              text-align: center;
              .group_price {
                color: #111;
                font-size: 16px;
              }
              .market_price {
                color: #cbcbcb;
                font-size: 14px;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
}
// 尾部
footer {
  background-color: #fff;
  padding-top: 60px;
  width: 100%;
  height: 100%;
  .foot_head {
    color: #4d4d4d;
    margin: 0 auto;
    width: 1200px;
    // height: 240px;
    // background: red;
    .qrcode_group {
      float: left;
      width: 666px;
      padding-left: 70px;
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      .qrcode {
        color: #4d4d4d;
        font-size: 0;
        img {
          width: 162px;
          height: 162px;
        }
        p {
          width: 162px;
          margin: 8px auto;
          color: #4d4d4d;
          font-size: 16px;
          text-align: center;
        }
      }
    }
    .conter_info {
      float: left;
      padding-left: 45px;
      width: 410px;
      border-left: 1px solid #4d4d4d;
      .title {
        font-size: 24px;
        color: #4d4d4d;
        line-height: 24px;
      }
      .detail {
        font-size: 15px;
        color: #4d4d4d;
        line-height: 16px;
        margin-top: 20px;
      }
    }
  }
  .pdd_bottom_nav {
    margin-bottom: 58px;
    margin-top: 60px;
    max-width: 1200px;
    position: relative;
    text-align: center;
    width: 100%;
    .pd_nav_list {
      display: inline-block;
      .pd_nav_list_item {
        cursor: pointer;
        display: inline-block;
        span {
          color: #6c6c6c;
          font-size: 16px;
          margin-left: 6px;
          margin-right: 6px;
        }
      }
    }
  }
  .foot_bottom {
    background-color: #3f3e3e;
    padding-top: 30px;
    width: 100%;
    height: 100%;
    .copyright {
      width: 1200px;
      margin: auto;
      background-color: #3f3e3e;
      font-size: 14px;
      line-height: 1;
      text-align: center;
      color: #b1b1b1;
      .pdd_foot_cr {
        padding-top: 27px;
      }
      .pdd_foot_medicine {
        padding: 17px 0;
      }
      .pdd_foot_record {
        text-indent: 25px;
        .record_num {
          margin-left: 25px;
          .divider {
            margin: 0 15px 0 15px;
          }
        }
      }
    }
  }
  .FOO {
    width: 100%;
    height: 100%;
    .foot_ft {
      text-align: center;
      img {
        display: inline-block;
        width: auto;
        height: auto;
        max-height: 50px;
        line-height: 50px;
        vertical-align: middle;
        margin: 10px;
      }
    }
  }
}
// 二维码
.SM {
  position: fixed;
  bottom: 143px;
  left: 0px;
  z-index: 1000;
  width: 162px;
  background-color: #fff;
  .SM-container {
    margin: 8px;
    padding: 20px 15px 8px;
    border: 2px solid #ffedf1;
    img {
      min-height: 112px;
    }
    .SM-container-desc {
      margin-top: 10px;
      color: #666;
      text-align: center;
      line-height: 20px;
      font-size: 14px;
    }
  }
  img {
    display: block;
    border: none;
    height: 100%;
    width: 100%;
  }
}
</style>