<template>
  <el-container>
    <el-aside class="menu" :width="menu.isCollapse?'60px':'200px'" style="background-color: rgb(238, 241, 246)">
      <div class="menu">
        <div class="row flex-center admin-title" v-if="!menu.isCollapse">
          <p>电商后台</p>
        </div>
        <div class="row flex-center admin-title"  v-else>
          <p>后台</p>
        </div>
        <el-menu default-active="1-1-1" class="el-menu-vertical-demo"
                 @open="handleOpen" @close="handleClose"
                 :collapse-transition="menu.collapseTransition"
                 :collapse="menu.isCollapse"
                 :background-color="menu.backgroundColor"
                 :text-color="menu.textColor"
        >
          <template v-for="(menu_item,menu_index) in menuList">
            <el-submenu :index="(menu_index+1).toString()">
              <template slot="title">
                <i :class="menu_item.icon"></i>
                <span slot="title">{{menu_item.title}}</span>
              </template>
              <template v-for="(fir_item,fir_index) in menu_item.children">
                <el-menu-item-group>
                  <template v-if="fir_item.children&&fir_item.children.length>0">
                    <el-submenu :index="(menu_index+1).toString()+'-'+(fir_index+1).toString()">
                      <template slot="title">
                        <i v-if="fir_item.icon" :class="fir_item.icon"></i>
                        <span slot="title">{{fir_item.name}}</span>
                      </template>
                      <template v-for="(sed_item,sed_index) in fir_item.children">
                        <el-menu-item
                          :index="(menu_index+1).toString()+'-'+(fir_index+1).toString()+'-'+(sed_index+1).toString()">
                          {{sed_item.name}}
                        </el-menu-item>
                      </template>
                    </el-submenu>
                  </template>
                  <template v-else>
                    <el-menu-item
                      :index="(menu_index+1).toString()+'-'+(fir_index+1).toString()">
                      {{fir_item.name}}
                    </el-menu-item>
                  </template>
                </el-menu-item-group>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </div>
    </el-aside>

    <el-container>

      <el-header class="row justify-between content-center nav-header"
                 style="border-bottom: #eee solid 1px;font-size: 12px;">
        <div class="row content-center">
          <div @click="handleCollapse" style="font-size:16px;line-height:16px;margin-right: 16px">
            <el-icon v-if="menu.isCollapse" class="el-icon-s-fold"></el-icon>
            <el-icon v-else class="el-icon-s-unfold"></el-icon>
          </div>
          <div class="row">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="row content-center">
          <el-icon class="el-icon-refresh" style="font-size:18px;margin-top: 4px;margin-right: 12px"></el-icon>
          <el-avatar style="margin-right: 12px" :size="sizeList[2]" :src="circleUrl"></el-avatar>
          <el-dropdown  style="margin-top: 4px">
            <span class="el-dropdown-link user-name">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import _ from 'loadsh'

  export default {
    data() {
      return {
        menu: {
          isCollapse: false,
          collapseTransition: true,
          backgroundColor: '#282C34',
          textColor: '#ffffff'
        },
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        drawer: false,
        menuList: [
          {
            title: '商品管理', icon: 'el-icon-document', children: [
              {
                name: '商品管理',
                icon: 'el-icon-document',
                children: [
                  {name: '商品列表', path: ''},
                  {name: '新增商品', path: ''},
                  {name: '商品评价', path: ''},
                  {name: '商品回收站', path: ''},
                ]
              },
              {
                name: '商品属性',
                icon: 'el-icon-document',
                children: [
                  {name: '商品分类', path: ''},
                  {name: '新增分类', path: ''},
                  {name: '商品品牌', path: ''},
                  {name: '新增品牌', path: ''},
                  {name: '商品规格', path: ''},
                ]
              },
            ]
          },
          {
            title: '订单管理', icon: 'el-icon-document',
            children: [
              {
                name: '订单管理', icon: 'el-icon-document',
                children: [
                  {name: '运单列表', path: ''},
                  {name: '订单设置', path: ''},
                  {name: '运单列表', path: ''},
                  {name: '取消原因', path: ''},
                ]
              },
              {
                name: '退换货管理', icon: 'el-icon-document',
                children: [
                  {name: '退货列表', path: ''},
                  {name: '换货列表', path: ''},
                  {name: '退换货原因', path: ''}
                ]
              },
            ]
          },
          {
            title: '物流管理', icon: 'el-icon-document',
            children: [
              {name: '运单列表', path: ''},
              {name: '订单设置', path: ''},
              {name: '运单列表', path: ''},
              {name: '取消原因', path: ''}
            ]
          },
          {
            title: '促销管理', icon: 'el-icon-document',
            children: [
              {
                name: '促销管理', icon: 'el-icon-document',
                children: [
                  {name: '限时购列表', path: ''},
                  {name: '新增限时购活动', path: ''},
                  {name: '优惠券列表', path: ''},
                  {name: '新增优惠券', path: ''},
                ]
              },
              {
                name: '广告管理', icon: 'el-icon-document',
                children: [
                  {name: '广告落地页', path: ''},
                  {name: '新增落地页', path: ''},
                  {name: 'Banner列表', path: ''},
                  {name: '新增Banner', path: ''}
                ]
              },
            ]
          },
          {
            title: '文章管理', icon: 'el-icon-document',
            children: [
              {name: '文章列表', path: ''},
              {name: '新增文章', path: ''},
              {name: '文章分类', path: ''},
              {name: '文章评论列表', path: ''}
            ]
          },
          {
            title: '权限管理', icon: 'el-icon-document',
            children: [
              {name: '账号管理', path: ''},
              {name: '新增账号', path: ''},
              {name: '角色管理', path: ''},
              {name: '功能管理', path: ''},
              {name: '组织管理', path: ''}
            ]
          }
        ]
      }
    },
    methods: {
      goBack() {
        console.log('wew');
      },
      handleOpen() {
        console.log('handleOpen');
      },
      handleClose() {
        console.log('handleClose');
      },
      handleCollapse() {
        console.log('temMenu');
        let temMenu = this.menu
        let isCollapse = this.menu.isCollapse
        temMenu.isCollapse = !temMenu.isCollapse;
        console.log('temMenu.isCollapse', temMenu.isCollapse);
        this.menu = temMenu
      }
    }
  }
</script>
<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
  }

  .admin-title{
    height: 62px;
    width: 100%;

    p{
      transition: width 0.2s;
      margin: 0;
      font-size: 22px;
      color: white;
    }
  }

  .admin-title {
    color: white;
  }

  .menu {
    height: 100vh;
    overflow-y: scroll;
    background-color: rgb(40, 44, 52);
    transition: width 0.5s;
  }

  .menu-icon {
    color: white;
  }

  .el-menu {
    border-right: none !important;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px; //宽度自己掌握
    height: 100%;
  }

  .nav-header {
    .user-name{
      font-size: 12px;
      line-height: 150%;
    }
  }

</style>
