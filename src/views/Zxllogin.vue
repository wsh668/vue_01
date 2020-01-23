<template>
    <div class="box">
        <div class="content">
            <h1>欢迎登录</h1>
            <el-form>
                <el-form-item>
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginbtn" type="primary" size="mini">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.box{
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #060c21;
}
.box:before{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;

}
.box:after{
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px);
}
.box:before,
.box:after{
    background: linear-gradient(235deg,#89ff00,#060c21,#00bcd4);
}
.content{
    padding: 10px;
    box-sizing: border-box;
    color: #fff;
}
h1{
    text-align: center;
}
el-input{
    height: 35px;
}
button{
    width: 100%;
}
</style>
