<template>
<div id="container">
    <div id="tab">
        <h1>My Profile</h1> <br>

        <router-link style="text-decoration: none;" to="/profile">
        <button>Profile Info</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/profile/risk">
        <button>Risk Assessments</button>
        </router-link>

        <router-link style="text-decoration: none;" to="/profile/settings">
        <button>Settings</button>
        </router-link>

        <button type="submit" @click="logOut">Sign Out</button>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$emit('toggleSignOut')
          this.$router.push('/login')
          this.$router.go(0)
        })
      })
    }
  }
}
</script>

<style scoped>

#container {
  background: #20344a;
  display: flex;
}
#tab {
  display: inline-block;
  border: 1px solid rgb(32,52,79);
  background-color: rgb(32,52,79);
  width: 20%;
  vertical-align: top;
  padding-bottom: 20px;
  padding-top: 25px;
}
#tab h1 {
    color: white;
    margin: 35px
}
#tab button {
  display: block;
  background-color: inherit;
  color: white;
  padding: 15px;
  padding-left: 30px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size:18px
}
#tab button:hover {
  background-color:rgb(117, 155, 204);
}
#tab button:focus {
  background-color: rgb(117, 155, 204);
}
#tab button:active {
  background-color: rgb(117, 155, 204);
}

.content {
  display: inline-block;
  text-align: left;
  vertical-align: top;
  padding: 40px;
  padding-left: 80px;

  background:white;
  overflow:auto;
  flex-grow: 1;
    /* float: left;
    padding-left: 50px;
    text-align: left; */
    
}
input {
    float: right;
    margin-left: 100px;
    width: 250px
}
select {
    float: right;
    clear: both;
    width: 100px
}


.matches p {
  font-size: 1.1em;
  text-align: center;
  background:whitesmoke;

}
.hints {
	max-width:300px;
	padding:1em;
	background:whitesmoke;
	margin: 1.5em 0;
	font-size: 1em;
}
.hints p {
	margin: 0;
	padding-left: 1em;
}
/* label {
    display: inline-block;
    text-align: right;
} */

#fitb {
  width:500px
}
</style>
