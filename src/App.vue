<template>
  <div id="app">
    <b-container>
      <table cellspacing="0" cellpadding="0" class="d-none d-md-block">
        <tr>
          <td width="50%">
            <router-link to="/">
              <b-col md="7" lg="5" class="logo animate__animated animate__fadeInDown">
                <img alt="SmartSure" src="./assets/image/logo.png" width="100%">
              </b-col>
            </router-link>
          </td>
          <td width="50%" align="right" style="padding: 20px 20px 0;">
            <img alt="phone" src="./assets/image/phone.png" width="4%" class="pb-2">
            <span style="margin-left: 15px; color: #ffffff; font-size: 23px; font-weight: bold;">02-002-1234</span>
          </td>
        </tr>
      </table>
      <div id="nav">
        <router-link to="/">หน้าหลัก</router-link>
        <router-link to="/about">เกี่ยวกับเรา</router-link>
        <router-link to="/product">ซื้อผลิตภัณฑ์</router-link>
        <router-link to="/promotion">โปรโมชั่น</router-link>
        <router-link to="/news">ข่าวสารและกิจกรรม</router-link>
        <router-link to="/contact-us">ติดต่อเรา</router-link>
      </div>
      
      <div id="content">
        <router-view/>
      </div>
      
      <div id="footer">
        <b-row>
          <b-col cols="12" lg="6" class="footer-left">
            <div class="sitemap">
              <div class="sitemap-title">Site Map</div>
              <b-row>
                <b-col lg="6" class="sitemap-left">
                  <router-link to="/">หน้าหลัก</router-link>
                  <br>
                  <router-link to="/about">เกี่ยวกับเรา</router-link>
                  <br>
                  <router-link to="/product">ซื้อผลิตภัณฑ์</router-link>
                </b-col>
                <b-col lg="6" class="sitemap-right">
                  <router-link to="/promotion">โปรโมชั่น</router-link>
                  <br>
                  <router-link to="/news">ข่าวสารและกิจกรรม</router-link>
                  <br>
                  <router-link to="/contact-us">ติดต่อเรา</router-link>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" lg="6"  class="footer-right">
            <div class="map">
              <img alt="map" src="./assets/image/map.png" width="50%">
            </div>
            <div class="phone">
              <img alt="phone" src="./assets/image/phone.png" width="6%">
              <span style="margin-left: 15px;">02-002-1234</span>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<style>
  @import './assets/css/style.css';
  @import './assets/font/stylesheet.css';
  @import '../node_modules/animate.css/animate.min.css';
</style>
