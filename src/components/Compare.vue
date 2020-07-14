<template>
  <div class="compare">
    <b-row class="p-3">
      <div class="title">
        <div class="title-circle">
          <img src="@/assets/image/car.png" />
        </div>
        <div class="title-text">
          ตารางเปรียบเทียบเพื่อหาผลิตภัณฑ์โดนใจ
        </div>
      </div>
    </b-row>
    <b-row>
      <b-col class="mx-5 mt-2">
        <table class="table table-striped">
          <thead>
            <tr style="background-color: #a2ced1;">
              <td
                width="25%"
                style="background-color: #000000; color: #ffffff; vertical-align: bottom;"
              >
                รายละเอียดผลิตภัณฑ์
              </td>
              <td width="20%">
                <div class="btnRadioCustom">
                  <input type="radio" name="select" id="select1" value="" />
                  <label for="select1"></label>
                </div>
                <div>Bronze</div>
                <img src="@/assets/image/car12.jpg" width="100%" />
              </td>
              <td width="20%">
                <div class="btnRadioCustom">
                  <input type="radio" name="select" id="select2" value="" />
                  <label for="select2"></label>
                </div>
                <div>Silver</div>
                <img src="@/assets/image/car12.jpg" width="100%" />
              </td>
              <td width="20%">
                <div class="btnRadioCustom">
                  <input type="radio" name="select" id="select3" value="" />
                  <label for="select3"></label>
                </div>
                <div>Gold</div>
                <img src="@/assets/image/car12.jpg" width="100%" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>เงื่อนไขการให้บริการ</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ระยะเวลาการรับผิดชอบ</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>รับผิดชอบสูงสุด</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>สิทธิพิเศษ</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>รถที่สามารถรับความคุ้มครอง</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ขนาดเครื่องยนต์</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-right mr-5">
        <router-link to="/customer-info" class="btn btn-buy">ซื้อผลิตภัณฑ์</router-link>
      </b-col>
    </b-row>

    <b-row class="p-3">
      <div class="title">
        <div class="title-circle">
          <img src="@/assets/image/car.png" />
        </div>
        <div class="title-text">
          ประวัติการค้นหา
        </div>
      </div>
    </b-row>
    <b-row class="mx-5 pb-4">
      <b-row class="box-content">
        <div class="btnCustom">
          <input type="checkbox" name="check" id="check1" value="" />
          <label for="check1"></label>
        </div>
        <b-col cols="3">
          <img src="@/assets/image/car12.jpg" width="100%" />
        </b-col>
        <b-col cols="4">
          <div class="title">รถยนต์</div>
          Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
          ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
          มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
          16
        </b-col>
        <b-col cols="4">
          <div class="title">ผลิตภัณฑ์แนะนำ</div>
          Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
          ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
          มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
          16
        </b-col>
      </b-row>
      <b-row class="box-content">
        <div class="btnCustom">
          <input type="checkbox" name="check" id="check2" value="" />
          <label for="check2"></label>
        </div>
        <b-col cols="3">
          <img src="@/assets/image/car12.jpg" width="100%" />
        </b-col>
        <b-col cols="4">
          <div class="title">รถยนต์</div>
          Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
          ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
          มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
          16
        </b-col>
        <b-col cols="4">
          <div class="title">ผลิตภัณฑ์แนะนำ</div>
          Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
          ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
          มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
          16
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<style scoped>
table {
  font-size: 15px;
  font-weight: 600;
  box-shadow: inset 0 0 10px -4px #555555;
}
td {
  border: none;
  border-right: 2px solid #ffffff;
}
.btn-buy {
  padding: 8px 12px 3px;
  font-weight: bold;
  color: #000000;
  background-color: #a2ced1;
  border-top: 2px solid #aaaaaa;
  border-bottom: 2px solid #ffffff;
  box-shadow: 2px 2px 3px #b1b1b1;
}
.box-content {
  margin: 10px auto;
  padding: 10px 0;
  border: 7px solid #000000;
}
.box-content .title {
  width: 150px;
  margin: 0 auto 7px;
  padding: 3px;
  font-weight: bold;
  background-color: #a2ced1;
  border-right: 5px solid #000000;
}
.btnRadioCustom {
  float: right;
  margin-top: -20px;
  margin-right: -12px;
}
.btnCustom {
  margin-top: -10px;
}
.btnRadioCustom input, .btnCustom input {
  display: none;
}
.btnRadioCustom label {
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 6px 8px;
  border-radius: 50px;
  color: #000000;
  background-color: #000000;
}
.btnCustom label {
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0 4px;
  color: #000000;
  background-color: #000000;
}
.btnRadioCustom label:hover, .btnRadioCustom label:hover::before, .btnCustom label:hover, .btnCustom label:hover::before {
  color: #ffffff;
  background-color: #000000;
}
.btnRadioCustom input[type="radio"] + label::before, .btnRadioCustom input[type="checkbox"] + label::before, .btnCustom input[type="radio"] + label::before, .btnCustom input[type="checkbox"] + label::before {
  content: "\2714\0020";
}
.btnRadioCustom input[type="radio"]:checked + label::before, .btnRadioCustom input[type="checkbox"]:checked + label::before, .btnCustom input[type="radio"]:checked + label::before, .btnCustom input[type="checkbox"]:checked + label::before {
  content: "\2714\0020";
  color: #ffffff;
}
</style>
