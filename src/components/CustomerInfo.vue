<template>
  <div class="customerinfo">
    <b-row class="p-3 pb-5">
      <div class="title">
        <div class="title-circle">
          <img src="@/assets/image/car.png" />
        </div>
        <div class="title-text">
          กรุณาฝากข้อมูลติดต่อกลับ
        </div>
      </div>
      <div class="mx-5 my-3 w-100">
        <b-form>
          <b-row>
            <b-col lg="6" class="form-left">
              <b-input placeholder="รุ่น"></b-input>
              <b-input placeholder="ยี่ห้อ"></b-input>
              <b-input placeholder="ปี"></b-input>
              <b-input placeholder="ขนาดเครื่องยนต์"></b-input>
              <b-input placeholder="เลขไมล์"></b-input>
            </b-col>
            <b-col lg="6" class="form-right">
              <b-input placeholder="ชื่อ"></b-input>
              <b-input placeholder="นามสกุล"></b-input>
              <b-input placeholder="เบอร์โทร"></b-input>
              <b-input placeholder="อีเมล์"></b-input>
              <div class="button">
                <router-link to="/success" class="btn btn-submit">ติดต่อกลับ</router-link>
              </div>
            </b-col>
          </b-row>
        </b-form>
      </div>
      <div class="mt-2 mx-auto">
        <div style="font-size: 25px; font-weight: 600;">Thank You</div>
        <div><img src="@/assets/image/logo.png" width="25%" /></div>
      </div>
    </b-row>
  </div>
</template>

<style scoped>
form {
  padding: 15px;
}
.form-left {
  padding: 10px 20px;
  background-color: #a2ced1;
  border-right: 15px solid #ffffff;
}
.form-right {
  padding: 10px 20px;
  background-color: #a2ced1;
  border-left: 15px solid #ffffff;
}
input[type="text"] {
  margin-top: 10px;
  margin-bottom: 10px;
}
.button {
  display: flex;
  justify-content: flex-end;
}
.btn-submit {
  margin-top: 5px;
  color: #ffffff;
  background-color: #000000;
}
</style>
