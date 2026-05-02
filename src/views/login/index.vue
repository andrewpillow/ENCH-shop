<template>
  <div class="login">
    <!-- 导航栏部分 -->
    <div class="head">
      <van-nav-bar
        title="会员登录"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <div class="body">
       <div class="title">
          <span>手机号登录</span><br>
          <span style="font-weight: 100;font-size: 15px;">未注册的手机号登录后将自动注册</span>
       </div>
       <!-- 登录表单 -->
       <div class="loginForm" style="margin-bottom: 30px;">
          <div class="phoneNumber">
             <input type="text" placeholder="请输入手机号码" v-model="phoneNumber">
          </div>
          <div class="validateCode">
             <input type="text" v-model="picCode" placeholder="请输入图形验证码">
             <img :src="picUrl" @click="getPostPic">
          </div>
          <div class="messageCode">
             <input type="text" placeholder="请输入短信验证码" v-model="smsCode">
             <a href="javascript:;" @click="getcode">{{ totalSecond === countDown ? '获取验证码' : countDown + 's后重新获取验证码'}}</a>
          </div>
       </div>
       <div class="submit">
          <button @click="login">登录</button>
       </div>
    </div>
  </div>
</template>

<script>

import { getmsgCode } from '@/api/login'
import request from '@/utils/request'

export default {
  name: 'loginPage',
  data () {
    return {
      picUrl: '', // 图片链接
      picKey: '', // 验证码的key
      picCode: '', // 验证码
      phoneNumber: '18917286702', // 验证码
      smsCode: '246810',
      totalSecond: 5,
      countDown: 5,
      timer: null
    }
  },
  created () {
    this.getPostPic()
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {

    // 获取图形验证码
    async getPostPic () {
      const res = await request.get('/captcha/image')
      // console.log(res.data)
      const { base64, key } = res.data.data
      this.picUrl = base64
      this.picKey = key
    },
    // 验证手机号码及验证码是否符合要求
    valid () {
      if (!/^1[3-9]\d{9}$/.test(this.phoneNumber)) {
        this.$toast('请输入正确的手机号码')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    },

    // 获取验证码
    async getcode () {
      if (!this.timer && this.totalSecond === this.countDown && this.valid()) {
        // const msgCode =
        await getmsgCode(this.picCode, this.picKey, this.phoneNumber)
        // console.log(msgCode)
        this.$toast('验证码已发送，注意查收')
        this.timer = setInterval(() => {
          this.countDown--
          // console.log(1)
          if (this.countDown < 1) {
            clearInterval(this.timer) // 清除定时器
            this.timer = null
            this.countDown = this.totalSecond
          }
        }, 1000)
      }
    },
    // 登录功能
    async login () {
      if (!/^\d{6}$/.test(this.smsCode) || !this.valid()) {
        return false
      }
      const res = await request.post('/passport/login', {
        form: {
          isParty: false,
          mobile: this.phoneNumber,
          partyData: {},
          smsCode: this.smsCode
        }
      })
      this.$toast(res.data.message)
      // console.log(res.data.data)
      this.$store.commit('user/getUserInfo', res.data.data)
      if (res.data.data.token) {
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style scoped>
  button{
    border: 0;
    border-radius: 45px;
    height: 45px;
    width: 100%;
    color: white;
    background-color: #f6ad2c;
  }
  a{
    display: inline-block;
    width: 40%;
    text-align: right;
    font-size: 12px;
    color: orange;
  }
  input{
    border: 0;
    font-size: 15px;
    height: 50px;
    width: 60% ;
  }
  img{
    width: 40%;
  }
  .title{
    display: inline-block;
    margin: 40px 0;
    font-size: 30px;
    font-weight: 400;
  }
  .body{
    margin: 0 20px;
  }
</style>
