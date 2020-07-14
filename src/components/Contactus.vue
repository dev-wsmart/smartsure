<template>
  <div class="contactus pb-5">
    <div class="py-4">
      <div class="page-title">ติดต่อเรา</div>
    </div>
    <div class="mx-5">
      <b-row class="content">
        <b-col lg="7">
          <b-form> <!--  @submit="onSubmit" -->
            <b-input id="brand" class="my-1" size="sm" placeholder="Name"></b-input>
            <b-input id="model" class="my-1" size="sm" placeholder="Email address"></b-input>
            <b-input id="year" class="my-1" size="sm" placeholder="Subject"></b-input>
            <b-textarea id="mileage" class="my-1" size="sm" placeholder="Your message" rows="6"></b-textarea>
            <b-button class="btn-send mt-4">Send</b-button>
          </b-form>
        </b-col>
        <b-col lg="5">
          <div class="ss-logo">
            <img src="@/assets/image/logo.png" width="100%" />
          </div>
          <div class="bg-address">
            <table>
              <tr>
                <td><img src="@/assets/image/contact-h.png" width="16px" /></td>
                <td class="contact-text">1122 Wasutha Group 4floor Rama 9 Rd. Suanluang, Suanluang Bangkok 10250</td>
              </tr>
              <tr>
                <td><img src="@/assets/image/contact-f.png" height="16px" /></td>
                <td class="contact-text">SMART SURE</td>
              </tr>
              <tr>
                <td><img src="@/assets/image/contact-p.png" width="16px" /></td>
                <td class="contact-text">02-002-1234</td>
              </tr>
              <tr>
                <td><img src="@/assets/image/contact-m.png" width="16px" /></td>
                <td class="contact-text">info@smartsure.co.th</td>
              </tr>
              <tr>
                <td colspan="2" class="contact-map"><img src="@/assets/image/contact-map.png" width="85%" /></td>
              </tr>
            </table>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style scoped>
.content{
  margin-bottom: 140px;
  box-shadow: -80px 115px 20px -105px #5a5a5a;
}
.btn-send{
  background-color: #000000;
}
.btn-send:hover{
  box-shadow: 0 5px 10px -3px #757575;
}
.ss-logo {
  margin: 20px 60px;
  padding: 10px 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 5px 10px -2px #5a5a5a;
}
.bg-address{
  position: absolute;
  margin: 0 10%;
  padding: 40px 30px;
  font-weight: 600;
  text-align: left;
  color: #000000;
  background-color: #ffffff;
}
.bg-address table tr td{
  padding-bottom: 10px;
}
.contact-text{
  padding-left: 20px;
}
.contact-map{
  padding-top: 15px;
  text-align: center;
}
</style>
