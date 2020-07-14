<template>
  <div class="banner">
    <b-row class="mx-lg-4 py-lg-3">
      <b-col lg="9" class="mr-lg-3 px-0 slide">
        <b-carousel
          id="carousel-fade"
          fade
          controls
          indicators
          img-width="1024"
          img-height="400"
        >
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
      <b-col lg="auto" class="search">
        <div class="search-title">ค้นหาผลิตภัณฑ์</div>
        <div class="search-form">
          <div class="border-form">
            <b-form @submit="onSubmit">
              <b-input id="brand" size="sm" placeholder="ยี่ห้อ"></b-input>
              <b-input id="model" size="sm" placeholder="รุ่น"></b-input>
              <b-input id="year" size="sm" placeholder="ปี"></b-input>
              <b-input id="cc" size="sm" placeholder="ขนาดเครื่องยนต์"></b-input>
              <b-input id="mileage" size="sm" placeholder="เลขไมล์"></b-input>
              <b-button>ค้นหา</b-button>
            </b-form>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          brand: '',
          model: '',
          year: '',
          cc: '',
          mileage: ''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.carousel-item{
  height: 335px;
}
.search{
  padding: 0;
  background-color: #A2CED1;
  color: #ffffff;
}
.search-title{
  background-color: #000;
  padding: 1px;
  font-size: 24px;
  font-weight: bold;
}
.border-form{
  border: 1px solid #d9d9d9;
  padding: 15px 25px;
  box-shadow: 4px 4px 5px -4px #666666;
}
.search-form{
  padding: 10px;
}
.search-form input{
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 8px 5px -7px #525252;
  border: none;
  border-bottom: 2px solid #ffffff;
}
.search-form input::placeholder{
  text-align: center;
  font-size: 13px;
  color: #ffffff;
}
.search-form button{
  margin-top: 5px;
  padding: 3px 20px;
  font-size: 17px;
  font-weight: bold;
  background-color: #000000;
}
@media only screen and (max-width: 991px){
  .slide{
    margin: 10px 15px 0;
  }
  .carousel-item{
    height: auto !important;
  }
  .search{
    margin: 15px 30px;
  }
}
</style>
