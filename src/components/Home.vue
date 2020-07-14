<template>
  <div class="home">
    <!-- ผลิตภัณฑ์แนะนำ -->
    <b-row class="p-3">
      <div class="title">
        <div class="title-circle">
          <img src="@/assets/image/car.png" />
        </div>
        <div class="title-text">
          ผลิตภัณฑ์แนะนำ
        </div>
      </div>
      <b-row class="rec-product">
        <b-col lg="4" style="padding: 22px 20px 0;">
          <div class="box-title">
            <div class="title">Bronze Standard</div>
          </div>
          <div class="box-detail">
            <div class="detail">Bronze Standard<br>Bronze Standard<br>Bronze Standard</div>
          </div>
          <img class="frame" src="@/assets/image/frame.png" />
          <img class="image" src="@/assets/image/car12.jpg" />
        </b-col>
        <b-col lg="4" style="padding: 22px 20px 0;">
          <div class="box-title">
            <div class="title">Standard</div>
          </div>
          <div class="box-detail">
            <div class="detail">Standard<br>Standard<br>Standard</div>
          </div>
          <img class="frame" src="@/assets/image/frame.png" />
          <img class="image" src="@/assets/image/car12.jpg" />
        </b-col>
        <b-col lg="4" style="padding: 22px 20px 0;">
          <div class="box-title">
            <div class="title">Bronze</div>
          </div>
          <div class="box-detail">
            <div class="detail">Bronze Standard<br>Bronze Standard<br>Bronze Standard</div>
          </div>
          <img class="frame" src="@/assets/image/frame.png" />
          <img class="image" src="@/assets/image/car12.jpg" />
        </b-col>
      </b-row>
      <b-col cols="12" class="button">
        <router-link to="/product" class="btn btn-more">เพิ่มเติม</router-link>
      </b-col>
    </b-row>
    <!-- ซื้อผลิตภัณฑ์ง่าย ๆ กับ SMART SURE -->
    <b-row class="p-3">
      <div class="title">
        <div class="title-circle">
          <img src="@/assets/image/car.png" />
        </div>
        <div class="title-text">
          ซื้อผลิตภัณฑ์ง่าย ๆ กับ SMART SURE
        </div>
      </div>
      <b-col lg="12">
        <b-row class="mx-lg-5 my-lg-4">
          <b-col cols="12" lg="6">
            <iframe
              width="100%"
              height="260"
              src="https://www.youtube.com/embed/jh9Tro9MXJg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </b-col>
          <b-col cols="12" lg="6">
            <div class="text-left">
              Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
              ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
              มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
              16
              เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
              Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
              แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
              และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
            </div>
            <b-col cols="11" class="btn-buy">
              <router-link to="/product">
                ซื้อผลิตภัณฑ์
              </router-link>
            </b-col>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- ผลิตภัณฑ์แนะนำ -->
    <b-row class="p-3">
      <div class="title">
        <div class="title-circle">
          <img src="@/assets/image/car.png" />
        </div>
        <div class="title-text">
          ชีวิตดี๊ดีเมื่อมี SMART SURE
        </div>
      </div>
      <b-col lg="12">
        <b-row class="mx-lg-5 my-lg-4">
          <b-col cols="12" lg="6">
            <iframe
              width="100%"
              height="260"
              src="https://www.youtube.com/embed/L8UUYfe6-UA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </b-col>
          <b-col cols="12" lg="6">
            <div class="text-left">
              Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
              ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
              มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
              16
              เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
              Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
              แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
              และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
            </div>
            <b-col cols="11" class="btn-buy">
              <router-link to="/product">
                ซื้อผลิตภัณฑ์
              </router-link>
            </b-col>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.rec-product {
  margin-left: -6px;
  padding: 0 50px;
  height: 350px;
}
.rec-product .box-title {
  display: flex;
  align-content: center;
  position: absolute;
  z-index: 2;
  top: 41px;
  width: 89%;
}
.rec-product .box-title .title {
  margin: 0 auto;
  padding: 0 12px;
  font-weight: 600;
  color: #000000;
  background-color: #f5f5f5;
  border: 2px solid #a2ced1;
  border-radius: 0 0 7px 7px;
}
.rec-product .box-detail{
  display: flex;
  align-content: center;
  position: absolute;
  z-index: 2;
  top: 243px;
  width: 89%;
}
.rec-product .box-detail .detail{
  margin: 0 auto;
  line-height: 19px;
}
.frame {
  z-index: 1;
  position: absolute;
  border-radius: 63px;
  box-shadow: 0 0 15px #b1b1b1;
}
.image {
  position: relative;
  padding-top: 35px;
  width: 300px;
}
.button {
  text-align: right;
  padding-right: 50px;
}
.btn-more {
  padding: 8px 12px 3px;
  font-weight: 600;
  color: #ffffff;
  background-color: #a2ced1;
  border: 2px solid #70b3b8;
  box-shadow: 2px 2px 3px #b1b1b1;
}
.text-left {
  padding-right: 10px;
}
.btn-buy {
  position: absolute;
  bottom: 0;
  margin-bottom: 8px;
  padding: 8px;
  background-color: #000000;
  border-bottom-right-radius: 15px;
}
.btn-buy a {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}
@media only screen and (max-width: 991px) {
  .rec-product {
    margin-left: -15px;
    padding: 0;
    height: 1050px;
  }
  .button {
    text-align: center;
    padding-right: 15px;
  }
}
</style>
