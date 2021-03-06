import { Doughnut } from 'vue-chartjs'
// Getting data from the json file //
import parsed from '../assets/parsed.json';

export default {
  mixins: [Doughnut],
  components: {
  },
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [
          '#79a7d3', '#8a307f',

          ],
          hoverBorderWidth: 8,
          hoverBorderColor: ['#79a7d3', '#8a307f'],
      }],
    },
    options: {
      responsive: true,
      title: {
        // false means no title //
          display: true,
        },
        // this tooltip is to convert the data and get a % //
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat((currentValue/total*100).toFixed(1));
              return ' '+ percentage + '%';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }, 
    },
    countries: [],
    count: [],
  }),
  // call the method to get data from the json file//
  async mounted() {
    this.getData();
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    getData() {
      // was initially used to count total number to get percentage //
      // let totalcount = 0;
      let currLength = Object.keys(parsed['gender']).length;
      for (let i = 0; i < currLength; i++) {
        // was initially used to count total number to get percentage //
        //totalcount ++;
        if (!this.countries.includes(parsed['gender'][i])) {
          //refer to the json file => {"age":{"0":66,"1":53... } //
          this.countries.push(parsed['gender'][i]);
          //initialise the count//
          this.count.push(1);
        } else {
          let index = this.countries.indexOf(parsed['gender'][i]);
          //if gender = male, then the male count increases! //
          this.count[index]++;
        }
      }
// -- Code to figure out to process the data to be used for % -- 
// remove the slashes and the tooltip to see the display with the name 
//      for (let i = 0; i < this.count.length; i++) {
//        this.count[i] = Math.round((this.count[i] / totalcount)*10000)/100;
//      }
//
      // for testing //
      console.log("countries: ", this.countries);
      console.log("count: ", this.count);

      // inserting the data into the respective labels and dataset above //
      this.chartdata.labels = this.countries;
      this.chartdata.datasets[0].data = this.count;
    }
  }
}
