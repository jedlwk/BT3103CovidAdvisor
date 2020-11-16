<template>
    <div id="map">
        <div id="title">
            <h1>Public Places Visited by Cases during Infectious Period</h1>
            <p>These public places had been visited for more than 30 minutes by the confirmed cases in the community. 
                Those who had been identified as close contacts of confirmed cases would already have been notified by MOH. 
                Click <a target="_blank" href="https://wereyouthere.safeentry.gov.sg/"> here</a> to check if you have been to these places.
            </p>
            <p> If you have been at these locations during these specified timings:</p>
                <ul>
                    <li>Monitor your health closely for 14 days from the date of visit</li>
                    <li>See a doctor promptly if you develop symptoms and inform the doctor of your exposure history</li>
                </ul>

            <button type="button" class="end" @click="showModal">View Locations as List</button>
                <modal-map-list id="modal" v-show="isModalVisible" @close="closeModal"/>
        </div>
        <div id="large-container">
<!-- This is the Map below the above text!  -->
            <div id="map-container">
                <gmap-map 
                    :center="center"
                    :zoom="zoom"
                    style="width:100%; height:400px;"
                    ref="map"
                >
                <!-- There are 3 different marker denoting the 3 diff icons (green,red,yellow) -->
                <gmap-marker
                    :key="index"
                    v-for="(location, index) in locations1"
                    :position="{ lat: location.lat, lng: location.lng }"
                    :clickable="true"
                    @click="openInfoWindow(location);"
                    icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                />
                <gmap-marker
                    :key="index"
                    v-for="(location, index) in locations2"
                    :position="{ lat: location.lat, lng: location.lng }"
                    :clickable="true"
                    @click="openInfoWindow(location);"
                    icon="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                />
                <gmap-marker
                    :key="index"
                    v-for="(location, index) in locations3"
                    :position="{ lat: location.lat, lng: location.lng }"
                    :clickable="true"
                    @click="openInfoWindow(location);"
                    icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                />

                <!-- The Pop-up when you click on the icon! -->
                <gmap-info-window
                    v-if="selectedLocation !== null"
                    :position="{ lat: selectedLocation.lat, lng: selectedLocation.lng }"
                    :opened="infoBoxOpen"
                    @closeclick="infoBoxOpen = false;"
                >
                <!-- info from the data -->
                    <div class="infoWindow" style="width: 270px; height: 120px;">
                        <p class="infoW-location" style="text-align:center">{{ selectedLocation.name }}</p>
                        <p class="infoW-shop" style="text-align:left"> - {{ selectedLocation.shop }}</p>
                        <p class="infoW-date" style="text-align:left">{{ selectedLocation.date }}</p>
                        <p class="infoW-time" style="text-align:left">{{ selectedLocation.time }}</p>
                        <button class="closebutton" @click="closeInfoWindow();">Close</button>
                    </div>
                </gmap-info-window>
                </gmap-map>
            </div>
            <div id="legend-container">
                <img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" width="25" height="25" alt="Red Marker Image">
                <p>: place visited by confirmed case less than 7 days ago </p>
                <img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" width="25" height="25" alt="Yellow Marker Image">
                <p>: place visited by confirmed case between 7 to 14 days ago </p>
                <img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png" width="25" height="25" alt="Yellow Marker Image">
                <p>: place visited by confirmed case more than 14 days ago </p>
            </div>
        </div>    
    </div>
</template>

<script>
import ModalMapList from './ModalMapList.vue';

    export default {
         components: {
            'modal-map-list': ModalMapList,
        },
        data: () => ({
            isModalVisible: false,
            showList: false,
            selectedLocation: null,
            infoBoxOpen: false,
            map: null,
            myCoordinates: {
                lat: 0,
                lng: 0
            },
            zoom: 11,
            center: {lat: 1.350, lng: 103.810},
            locations1: [
                {
                    Id: 1,
                    name: "Star Vista",
                    shop: "iSteaks",
                    lat: 1.307,
                    lng: 103.788,
                    date: "Last Contact Date: 16th November 2020",
                    time: "Last Contact Time: 2pm - 4pm"
                },
                {
                    Id: 2,
                    name: "Sunshine Plaza",
                    shop: "Victor's Kitchen",
                    lat: 1.3,
                    lng: 103.851,
                    date: "Last Contact Date: 15th November 2020",
                    time: "Last Contact Time: 7pm - 9pm"
                },
                {
                    Id: 3,
                    name: "Velocity@Novena",
                    shop: "Cold Storage",
                    lat: 1.320,
                    lng: 103.844,
                    date: "Last Contact Date: 14th November 2020",
                    time: "Last Contact Time: 6pm - 9pm"
                },
                ],
            locations2:[ 
                {
                    Id: 4,
                    name: "Jewel",
                    shop: "Puma",
                    lat: 1.336,
                    lng: 103.99,
                    date: "Last Contact Date: 20th November 2020",
                    time: "Last Contact Time: 10am - 11am"
                },
                {
                    Id: 5,
                    name: "Causeway Point",
                    shop: "BreadTalk",
                    lat: 1.436,
                    lng: 103.786,
                    date: "Last Contact Date: 21st November 2020",
                    time: "Last Contact Time: 8am - 9am"
                },
                {
                    Id: 6,
                    name: "Sun Plaza",
                    shop: "Guardian",
                    lat: 1.448,
                    lng: 103.820,
                    date: "Last Contact Date: 22nd November 2020",
                    time: "Last Contact Time: 11am - 12pm"
                }
            ],
            locations3:[ 
                {
                    Id: 11,
                    name: "Robertson Walk",
                    shop: "Kanpai 789",
                    lat: 1.292,
                    lng: 103.841,
                    date: "Last Contact Date: 26th November 2020",
                    time: "Last Contact Time: 9pm - 11pm"
                },
                {
                    Id: 12,
                    name: "ORTO",
                    shop: "Quench! Bistro & Bar",
                    lat: 1.413,
                    lng: 103.829,
                    date: "Last Contact Date: 29th November 2020",
                    time: "Last Contact Time: 8pm - 10.30pm"
                },
                {
                    Id: 13,
                    name: "JCube",
                    shop: "Astons",
                    lat: 1.333,
                    lng: 103.74,
                    date: "Last Contact Date: 28th November 2020",
                    time: "Last Contact Time: 7pm - 8.30pm"
                }
            ]
            }
        ),
        
        methods: {
            openInfoWindow(location) {
                console.log(location);
                this.selectedLocation = location;
                this.infoBoxOpen = true;
            },
            closeInfoWindow() {
                this.infoBoxOpen = false;
            }, 
            onClickEvent() {
                this.showList =!this.showList;
            },
            showModal() {
                this.isModalVisible = true;
            },
                closeModal() {
                this.isModalVisible = false;
            }
        },
    }
    
</script>
<style scoped>
#title {
    text-align: left;
    padding-left: 40px;
    font-size: 18px;
}
.vue-map-container,
.vue-map-container .vue-map {
    height: 100%;
  width:calc(100% - 40px);
  margin: 0 20px;
}
/* labelled properly under infowindow what css apply to which! */
.infoWindow {
    text-align: center;
}
.infoW-location {
  line-height: 1em;
  display: block;
  font-size: 1.6em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0em;
  font-weight: bold;
}
.infoW-shop {
    color:maroon;
  line-height: 0.5em;
  display: block;
  font-size: 1.2em;
  margin-left: 0.2em;
  font-weight: bold;

}
.infoW-date {
  line-height: 1.1em;
  display: block;
  font-size: 1.1em;
  margin-left: 2em;
}

.infoW-time {
  line-height: 0.3em;
  display: block;
  font-size: 1.1em;
  margin-left: 2em;
}

.closebutton {
  line-height: 1.3em;
}
a {
  color: blue;
}
a:hover {
    color:red;
    text-decoration: underline;
}

#map-container {
    display: inline-block;
  width:70%;
  margin:30px;
  vertical-align: top;
}

#legend-container {
    text-align: center;
    flex-grow: 1;
margin-left:30px;
  margin-top: 30px;
  width:20%;
    padding:10px;
	background:whitesmoke;
    display: inline-block;
    font-size: 16px;
  vertical-align: top;
}

img {
    float: left;
}

#large-container {
  width:100%;
  vertical-align: top;
}

button {
    display: inline-block;
}
table {
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height:400px;
  padding:20px;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 20px; 
}
tr:nth-child(odd) {
  background-color: #DCDCDC;
}

#modal {
    z-index: 999;
}

#large-container {
    z-index:0;
  display: inline-block;
}
.end {
    background-color: rgb(32,52,79);
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 8px 4px;
    cursor: pointer;
    border-radius: 8px;
}

#map {
  padding:50px;
}
</style>
