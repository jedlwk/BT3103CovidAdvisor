<template>
  
  <div id="default">
    
    <div id="textbox">
    <h1 id="start">Welcome to SafeTrack</h1>
    <h3>A COVID-19 Symptoms Tracker</h3>

    <p id="middle">
      Take our risk assessment to find out your risk of having COVID-19, view latest statistics and monitor locations visited by COVID-19 patients, all on one platform.<br><br>
      Register an account to keep track of your symptoms and more or simply take the assessment now — it's fast, free and anonymous.
    </p>
      <br><br>
    Simply follow the steps below to take the assessment:
    <ol>
      <li>Enter your symptoms information.</li>
      <li>Enter your brief medical history.</li>
      <li>Done! Your risk of contracting COVID-19 will be revealed and you will be advised on the next steps to take.</li>
    </ol>

      <br><br>

      <button id="end" style="font-size:18px;font-weight:bold;margin:10px"><router-link to="/symptoms1">Start your Assessment Now</router-link></button>
    </div>

    <div id="wrapper">
      <h2 id="title">Stay Updated with Tweets from the World Health Organization</h2>
    <div id="twitter">

      <Timeline id="WHO" sourceType="profile" style="width:350px;" :options="{ tweetLimit: '10' }"/>
    </div>
      <br>
      <h2 id="title2">For more latest information and updates, visit the links below:</h2>
      <a class="news" target="_blank" href="https://www.channelnewsasia.com/news/topics/coronavirus-covid-19">
      <img border="0" src="@/assets/cnn.jpg" width="105" height="55">
      </a>
      <a class="news" target="_blank" href="https://www.moh.gov.sg/covid-19">
      <img border="0" src="@/assets/moh.jpg" width="105" height="55">
      
      </a>
    </div>
    

  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'


export default {
  name: "Default",
  components: {
     Timeline
}
}
</script>

<style scoped>
#default {
  padding: 20px 40px 60px;
}

#start {
  font-size: 40px;
}
#middle {
  font-size: 18px;
}
ol {
  font-size:18px;
  line-height:30px;
}
#textbox {
  display:inline-block;
  width:calc(100% - 550px);
  vertical-align:top;
  text-align:justify;
  margin: 30px 100px 30px 30px;
  font-size: 18px;
}

#wrapper {
  width:400px;
  display:inline-block;
  height:500px;
  margin-top:40px;
}
#twitter {
  width:400px;
  height:425px;
  overflow:auto;
  right: 35px;
  top: 750px
}
#title {
  position: sticky;
  top:0;
  width:400px;
  background:white;
}

.news {
padding: 20px;
}
</style>

