<template>
  <div class="about">
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
      <div class="mallentry_subnav">
        <ul class="mallentry_subnav_container">
          <li class="active">
            <router-link to="/about">
              <span>招商首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="about/att_flow">
              <span>入驻流程</span>
            </router-link>
          </li>
          <li>
            <router-link to="about/att_ask">
              <span>资质要求</span>
            </router-link>
          </li>
          <li>
            <router-link to="about/att_faq">
              <span>常见问题</span>
            </router-link>
          </li>
          <li>
            <router-link to="about/att_brand">
              <span>热招品牌</span>
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <div class="main_top">
        <div class="lucky_mall">
          <img
            src="https://t00img.yangkeduo.com/goods/images/2020-09-12/4d97553e-6139-4f46-b1b7-a102f40ffc57.jpeg"
            alt=""
          /><span>店铺 江******店1秒前收到来自用户180********的拼单订单 </span>
        </div>
        <div class="main_banner">
          <div class="banner">
            <div class="banner_01">
              <div class="banner_car">
                <img
                  src="https://commimg.pddpic.com/mms_static/2019-06-20/22852818-e089-4723-bb3a-a198ddf969d6.png"
                />
              </div>
            </div>
          </div>
          <div class="login">
            <div class="login_con">
              <div class="title">境内商家入驻</div>
              <div class="oversea_guide">
                <span class="oversea_guide_text"> 境外商家入驻 </span>
              </div>
              <div class="phone">
                <p class="osp1">中国+86</p>
                <p class="osp2">
                  <input type="text" placeholder="   请输入手机号码" />
                </p>
              </div>
              <div class="phone">
                <input type="text" placeholder="    请设置密码" />
              </div>
              <div class="phone">
                <p class="osp2">
                  <input type="text" placeholder=" 请输入短信验证码" />
                </p>
                <p class="osp3">
                  |
                  <a href="">获取验证码</a>
                </p>
              </div>
              <div
                class="phone"
                style="
                  border-color: #e33333;
                  color: #fff;
                  background-color: #e33333;
                  text-align: center;
                "
              >
                0元入驻
              </div>
              <div class="opone">
                <p>
                  <span>已有账号?</span>
                  <span><a href="">立即登录</a></span>
                </p>
                <p style="margin-left: 145px"><a href="">入驻手册</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_guide">
        <div class="home_guide_item" v-for="(item,index) in home_guide" :key="(item,index)">
          <img
            class="icon"
            :src="item.icon"
          />
          <p class="name">{{item.name}}</p>
          <p class="desc">{{item.desc}}</p>
          <button
            class="
              BTN_outerWrapper_16ygfxx
              BTN_danger_16ygfxx
              BTN_medium_16ygfxx
              BTN_outerWrapperBtn_16ygfxx
            "
            type="button"
            data-testid="beast-core-button"
          >
            <span>{{item.check}}</span>
          </button>
        </div>
      </div>
      <div class="title_part">
        <img
          class="icon"
          src="//commimg.pddpic.com/mms_static/2020-05-11/9b38ae77-9372-4617-bc57-ae7cf28fc5f4.png"
          alt=""
        />
        <p class="title_doc">未来你将成为他们</p>
        <img
          class="icon"
          src="//commimg.pddpic.com/mms_static/2020-05-11/6a98d77c-c21d-4cca-8098-e7d9a6a422ad.png"
          alt=""
        />
        <p class="introduction_doc">创业新平台，让你走上致富之路</p>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data(){
    return{
      home_guide:[
        {
          icon:'https://commimg.pddpic.com/mms_static/2020-05-11/f35b6bad-7c61-41b3-9a7c-3ebbe8eeccfd.png',
          name:'入驻流程',
          desc:'入驻前先看，新手开店不用慌',
          check:'立即查看'
        },
        {
          icon:'https://commimg.pddpic.com/mms_static/2020-05-11/88a8ae84-16cf-40e5-889a-d88b49cecf25.png',
          name:'资质要求',
          desc:'入驻资料',
          check:'立即查看'
        },
        {
          icon:'https://commimg.pddpic.com/mms_static/2020-05-11/05238261-d457-4f1e-95f4-3f2162fdcc8d.png',
          name:'常见问题',
          desc:'帮你解决入驻过程中的各类问题',
          check:'立即查看'
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
ul li {
  list-style: none;
}
/* 头部 */
header {
  .H_top {
    position: fixed;
    width: 100%;
    height: 100px;
    z-index: 999;
    top: 0;
    // margin: auto;
    background: #fff;
    .H_T {
      height: 100px;
      width: 1200px;
      background: #fff;
      margin: auto;
      overflow: hidden;
      line-height: 100px;
      position: relative;
      .logo {
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        height: 100px;
        img {
          float: left;
          margin: 20px 0;
          height: 60px;
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
  .mallentry_subnav {
    position: fixed;
    top: 100px;
    left: 0;
    height: 48px;
    background-color: #d8374d;
    z-index: 25;
    width: 100%;
    .mallentry_subnav_container {
      margin: 0 auto;
      width: 1200px;
      height: 48px;
      background-color: #d8374d;
      padding: 0;
      li {
        float: left;
        display: inline-block;
        height: 48px;
        line-height: 48px;
        text-align: center;
        width: 144px;
        color: #fff;
        font-size: 18px;
        cursor: pointer;
        span {
          margin-left: 0 !important;
          font-weight: 500;
          position: relative;
          display: inline-block;
          margin-right: 15px;
        }
      }
      .active {
        background: #c92f44;
      }
    }
  }
}
main {
  width: 100%;
  height: 100%;
  // background: pink;
  .main_top {
    width: 100%;
    height: 466px;
    // background: pink;
    margin-top: 148px;
    .lucky_mall {
      position: fixed;
      top: 170px;
      left: 100px;
      z-index: 500;
      font-size: 15px;
      color: #fff;
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.6);
      height: 42px;
      line-height: 42px;
      border-radius: 21px;
      padding: 0 10px 0 10px;
      animation: go 3s infinite;
      img {
        width: 32px;
        height: 32px;
        vertical-align: top;
        border-radius: 50%;
        margin: 5px 5px 5px -3px;
      }
    }
  }
  .main_banner {
    width: 100%;
    height: 466px;
    position: relative;
    .banner {
      height: 466px;
      .banner_01 {
        width: 100%;
        height: 100%;
        display: block;
        position: relative;
        box-sizing: border-box;
        touch-action: pan-y;
        // -moz-user-select: none;
        background-color: rgba(0, 0, 0, 0.24);
        .banner_car {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          position: absolute;
          background-color: transparent;
          img {
            width: 100%;
            height: 466px;
          }
        }
      }
    }
    .login {
      position: absolute;
      left: 50%;
      margin-left: 200px;
      top: 19px;
      .login_con {
        position: relative;
        width: 315px;
        padding: 0 40px 0 24px;
        height: 384px;
        background: #fff;
        border-radius: 6px;
        .title {
          // margin-left: 10px;
          font-size: 20px;
          line-height: 76px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.8);
        }
        .oversea_guide {
          padding: 0 32px;
          line-height: 44px;
          position: absolute;
          top: 15px;
          left: 200px;
          height: 44px;
          border-radius: 0px 0px 6px 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            font-weight: 400;
            color: #26a;
            font-size: 14px;
          }
        }
        .phone {
          float: left;
          width: 295px;
          height: 40px;
          border: 1px solid rgba(0, 0, 0, 0.4);
          // margin-left: 10px;
          margin-bottom: 10px;
          font-size: 18px;
          line-height: 40px;
          border-radius: 5px;
          input {
            width: 295px;
            height: 28px;
            outline: none;
            border: none;
          }
          .osp1 {
            float: left;
            width: 83px;
            height: 38px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.8);
            line-height: 35px;
            background: rgba(0, 0, 0, 0.04);
            border: 1px solid #dadada;
            overflow: visible;
            text-align: center;
          }
          .osp3 {
            float: left;
            width: 83px;
            height: 38px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.8);
            line-height: 38px;
            overflow: visible;
            text-align: center;
            a {
              color: #0c4c82;
            }
          }
          .osp2 {
            float: left;
            width: 210px;
            height: 40px;
            input {
              float: left;
              width: 200px;
              height: 40px;
              outline: none;
              border: none;
              margin-left: 10px;
            }
          }
        }
        .opone {
          float: left;
          width: 285px;
          height: 30px;
          margin-left: 10px;
          p {
            float: left;
            font-size: 12px;
            a {
              color: #0c4c82;
            }
          }
        }
      }
    }
  }
  .home_guide {
    width: 876px;
    margin: 48px auto 46px;
    text-align: center;
    .home_guide_item {
      display: inline-block;
      width: 274px;
      height: 208px;
      margin-right: 18px;
      box-shadow: 0px 4px 16px 2px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      img {
        width: 48px;
        height: 48px;
        margin-top: 24px;
        margin-bottom: 16px;
      }
      .name {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.8);
        line-height: 1;
        margin: 0;
        padding: 0;
      }
      .desc {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
        margin: 8px 0 24px 0;
        line-height: 1;
      }
      button {
        width: 81.6px;
        height: 28px;
        outline: none;
        border: none;
        background: #fc475d;
        span {
          color: #fff;
        }
      }
    }
  }
  .title_part{
    text-align: center;
    .icon{
      margin-top: 30px;
      vertical-align: top;
    }
    .title_doc{
      display: inline-block;
      font-size: 25px;
      margin:27px 11px 9px 11px;
      color: #2f2f36;
    }
    .introduction_doc{
      font-size: 17px;
      color:#777781;
      margin-top: 0;
      margin-bottom: 38px;
    }
  }
}
</style>
