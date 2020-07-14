<template>
  <div class="product">
    <b-row class="p-3">
      <div class="title">
        <div class="title-circle">
          <img src="@/assets/image/car.png" />
        </div>
        <div class="title-text">
          ผลิตภัณฑ์คุณภาพ
        </div>
      </div>
      <div class="mx-5 my-4">
        <b-row class="frame mb-3">
          <b-col lg="4">
            <div class="package-title">Bronze Package</div>
            <img src="@/assets/image/car12.jpg" width="100%" />
          </b-col>
          <b-col lg="8">
            <div class="details-title">
              รายละเอียดผลิตภัณฑ์
            </div>
            <div class="details">
              Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
              ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
              มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
              16
              เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
              Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
              แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
              และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
              มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960
            </div>
            <div class="button">
              <router-link to="/package-detail" class="btn btn-more">
                เพิ่มเติม
              </router-link>
            </div>
          </b-col>
        </b-row>
        <b-row class="frame mb-3">
          <b-col lg="4">
            <div class="package-title">Silver Package</div>
            <img src="@/assets/image/car12.jpg" width="100%" />
          </b-col>
          <b-col lg="8">
            <div class="details-title">
              รายละเอียดผลิตภัณฑ์
            </div>
            <div class="details">
              Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
              ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
              มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
              16
              เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
              Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
              แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
              และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
              มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960
            </div>
            <div class="button">
              <router-link to="/" class="btn btn-more">
                เพิ่มเติม
              </router-link>
            </div>
          </b-col>
        </b-row>
        <b-row class="frame mb-3">
          <b-col lg="4">
            <div class="package-title">Gold Package</div>
            <img src="@/assets/image/car12.jpg" width="100%" />
          </b-col>
          <b-col lg="8">
            <div class="details-title">
              รายละเอียดผลิตภัณฑ์
            </div>
            <div class="details">
              Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
              ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
              มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
              16
              เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
              Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
              แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
              และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
              มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960
            </div>
            <div class="button">
              <router-link to="/" class="btn btn-more">
                เพิ่มเติม
              </router-link>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<style scoped>
.frame {
  padding: 10px 0;
  border: 9px solid #a2ced1;
}
.package-title {
  font-size: 22px;
  font-weight: bold;
}
.details-title {
  background-color: #000000;
  color: #ffffff;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: bold;
}
.details {
  text-align: left;
}
.button {
  text-align: right;
}
.btn-more {
  padding: 4px 10px 1px;
  background-color: #000000;
  color: #ffffff;
}
</style>
