<template>
  <div id="app">
    <div id="header">
      <h1>
        <router-link to="/" exact
          ><img
            src="@/assets/logo.jpeg"
            style="width:200px;vertical-align: middle;"
        /></router-link>
      </h1>

      <div v-if="signedIn" class="link">
        <router-link to="/profile" exact>My Profile</router-link>
      </div>
      <div v-else>
        <div class="link">
          <router-link to="/login" exact>Login/Register</router-link>
        </div>
      </div>
      <div class="link">
        <router-link to="/stats" exact>Statistics</router-link>
      </div>
      <div class="link"><router-link to="/map" exact>Map</router-link></div>
      <div class="link">
        <router-link to="/symptoms1" exact>Track Symptoms</router-link>
      </div>
    </div>
    <div id="photobar">
<<<<<<< HEAD
      <div class="titletext">Welcome {{ username }}!</div>
=======
      <div class="titletext">Welcome{{username}}.</div>
>>>>>>> master
    </div>
    <div style="width:100%">
      <router-view
        @toggleSignIn="toggleSignIn"
        @toggleSignOut="toggleSignOut"
        :signedIn="signedIn"
      ></router-view>
    </div>

    <div id="copyright">&#169; BT3103 Octopus 2020</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
<<<<<<< HEAD
      username: "",
      signedIn: false,
    };
=======
      signedIn: false,
      username: " to SafeTrack"
    }
>>>>>>> master
  },
  methods: {
    toggleSignIn(username) {
      this.signedIn = true;
      this.username = ", " + username;
      this.$router.push("/");
    },
    toggleSignOut() {
      this.signedIn = false;
<<<<<<< HEAD
      this.username = "";
    },
=======
      this.username = " to SafeTrack";
    }
>>>>>>> master
  },
};
</script>

<style>
#app {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
}

html,
body {
  margin: 0 !important;
  padding: 0 !important;
}

a {
  text-decoration: none;
  color: inherit;
}

b {
  font-weight: 600;
}

h1 {
  font-size: 30px;
}

.titletext {
<<<<<<< HEAD
  font-size: 80px;
  float: right;
  margin: 120px 10% 120px 120px;
  text-align: right;
=======
  font-size:80px;
  text-align:right;
  position:relative;
  left:calc(100% - 600px);
  top:20%;
  max-width:500px;
>>>>>>> master
}

#header {
  width: 100%;
  height: 100px;
  color: black;
  background: #20344a;
  text-transform: uppercase;
  font-size: 15px;
  overflow: auto;
  position: sticky;
  top: 0;
  z-index: 999;
}

#header h1 {
  display: inline-block;
  margin: 0;
  font-weight: bold;
  line-height: 100px;
  padding: 0 20px;
  color: white;
  float: left;
}

#header a {
  float: right;
  display: inline-block;
  padding: 0 40px;
  font-weight: bold;
  line-height: 100px;
  transition: 0.5s;
  color: white;
}

.link a:hover {
  background: #4e5e70;
  transition: 0.5s;
}

#photobar {
  background: url(https://static.tumblr.com/c1oapfr/2ysqip0tr/artboard_1.png)
    bottom;
  background-size: 100%;
  width: 100%;
  height: 380px;
}

#copyright {
  width: calc(100% - 100px);
  height: 10px;
  padding: 50px;
  background: #20344a;
  color: white;
  font-weight: lighter;
  font-size: 15px;
  line-height: 10px;
  bottom: 0;
}

#end {
  background-color: rgb(32, 52, 79);
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 8px 4px;
  cursor: pointer;
  border-radius: 8px;
}
</style>
