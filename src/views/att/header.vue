<template>
  <header>
    <div class="Header">
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
        <li class="active">
          <router-link to="/about/att_flow">
            <span>入驻流程</span>
          </router-link>
        </li>
        <li class="active">
          <router-link to="/about/att_ask">
            <span>资质要求</span>
          </router-link>
        </li>
        <li class="active">
          <router-link to="/about/att_faq">
            <span>常见问题</span>
          </router-link>
        </li>
        <li class="active">
          <router-link to="/about/att_brand">
            <span>热招品牌</span>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
    data(){
        return{
             active:true
        }
    },
    methods:{
    }
}
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
  .Header {
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
</style>