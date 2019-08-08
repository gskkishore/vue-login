<template>
  <div>
    <label>Username</label>
    <input v-model="Name" v-on:change="change"  placeholder="name">
    <p>Name Is: {{ this.Name1 }} </p>
    <label>password</label>
    <input type="password" v-model="password" >
    <input type="button" v-on:click="submit" value="Login" >
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: { 
    msg: String
  },
  data() {
    return {
      Name :"",
      Name1 :"",
      password : ""

    }
  },
  methods: {
    change(){
      this.Name1 = this.Name
    },
    submit(){
      if((this.Name1 === "kishore" && this.password==="kishore")){
        console.log("Matched");
        this.$router.push({name:'Login'});
      }
      else if((this.Name1 === "vijay" && this.password==="vijay")){
          console.log("Matched");
          this.$router.push({name:'Login'});
        }
      else
        console.log("Username wrong");
    }
  }
}
</script>