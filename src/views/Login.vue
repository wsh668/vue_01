<template>
    <div class=login_container>
        <div class="login_box">
          <div class="avatar_box">
              <img src="../assets/logo.png" />
          </div>
          <el-form label-width="0" class="login_from">
              <el-form-item>
                  <el-input name="" type="text"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-input name="" type="password"></el-input>
              </el-form-item>
              <el-form-item class="btns">
                  <el-button type="primary">登录</el-button>
                  <el-button type="info">重置</el-button>
              </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    // 这个的意思是移动自身长宽的50%，因为上面的两个移动是以盒子的左上角为中心来移动的，所以看到的盒子并不居中
    transform: translate(-50%,-50%);
    .avatar_box{
        height: 130px;
        width: 130px;
        border-radius: 50%;
        padding: 10px;
        // 这里给盒子绘制阴影 0 0表示x 和y轴偏移  10px表示向外延申10px
        position: absolute;
        left: 50%;
        top: -50%;
        transform: translate(-50%,50%);
        background-color: #fff;
        box-shadow: 0 0 10px #ddd;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

.login_from{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    // 通过使用这个把from表单的内容宽度和padding算在一起
    box-sizing: border-box;
}

.btns{
    // 设置为弹性布局
    display: flex;
    // 尾部对齐  只有设置了弹性布局才能使用justify-content   还有一个flex-start头部对齐
    justify-content: flex-end;
}
</style>
