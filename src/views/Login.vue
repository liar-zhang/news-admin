<!--  -->
<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="form">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
          name: '',
          password:'',
        },
      //表单的验证规则
      rules:{
        username:[
            {required:true, message: '请输入手机号码', trigger: 'blur'},
            {min :11, max: 12, message:'手机号码格式错误',tigger: 'blur'}
        ]
      }

    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    onSubmit() {
        this.$refs.form.validate(valid => {
          if(valid){
            this.$axios({
              url:'/login',
              methods:"POST",
              data:this.form
            }).then(res =>{
              const {data} =res.data;
              //转换成字符串
              const userStr = JSON.stringify(data);
              //保存到本地，可以给其他组件使用
              localStorage.setItem("userInfo",userStr)
            })
          }
        })
      }

  }
};
</script>
<style lang='less' scoped>
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .form{
      width: 500px;
    }
  }

</style>