import Vue from 'vue'
import Router from 'vue-router'
import Stats from "@/components/Stats";
import Login from "@/components/Login";
import Default from "@/components/Default";
import Profile from "@/components/Profile";
import RiskAssessments from "@/components/RiskAssessments";
import Settings from "@/components/Settings";
import Account from "@/components/Account";
import SymptomsPage1 from "@/components/SymptomsPage1";
import SymptomsPage2 from "@/components/SymptomsPage2";
import Register from "@/components/Register";
import Map from "@/components/Map";
import ForgotPassword from "@/components/ForgotPassword";

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/map', name: "Map",component: Map},
        { path: '/symptoms1', name: "Symptoms1",component: SymptomsPage1},
        { path: '/symptoms2', name: "Symptoms2",component: SymptomsPage2},
        { path: '/profile', name: "Profile",component: Profile,
            children: [
                {path:'', component:Account},
                {path:'risk',component:RiskAssessments},
                {path:'settings',component:Settings}
            ]
        },
    { path: '/stats', name: "Stats",component: Stats},
    { path: '/login', component: Login},
    { path: '/', name: "Default", component: Default},
        { path: '/register', name: "Register", component: Register},
        {path:'/forgot', name:"Forgot", component: ForgotPassword}
    ]
});

