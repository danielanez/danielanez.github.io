import{d as b,r as l,o as P,c as k,w as a,u as o,a as W,b as C,e as r,I as f,f as h,g as y,h as w,i,t as s,j as x,k as M,l as B,m as D}from"./index-BnNFpJhp.js";import{G as H,C as N,g as V,a as S,_ as G}from"./_plugin-vue_export-helper-D-Ou92d2.js";const j={id:"container"},z={key:0},A=b({__name:"Tab1Page",setup(E){const d=l(""),m=l(""),_=l(0),g=l(0),v=l(0),c=l(0),I=async()=>{try{const t=await H.getCurrentPosition();console.log("Current Position:",t),await T(t.coords.latitude,t.coords.longitude)}catch(t){console.error("Could not get current position",t)}},T=async(t,n)=>{const u={url:"https://api.open-meteo.com/v1/forecast",params:{latitude:String(t),longitude:String(n),current:"temperature_2m,apparent_temperature,relative_humidity_2m,is_day,precipitation,weather_code"}},p=await N.get(u);console.log("meteo:",p.data),console.table(p.data);const e=p.data.current;console.log("Current Meteo:",e),console.table(e),console.log("Temperature:",e.temperature_2m,"°C"),console.log("Apparent Temperature:",e.apparent_temperature,"°C"),console.log("Relative Humidity:",e.relative_humidity_2m,"%"),console.log("Is Day:",e.is_day),console.log("Precipitation:",e.precipitation,"mm"),console.log("Weather Code:",e.weather_code),d.value=V(e.weather_code,e.is_day),m.value=S(e.weather_code,e.is_day),_.value=e.temperature_2m,g.value=e.apparent_temperature,v.value=e.relative_humidity_2m,c.value=e.precipitation};return P(()=>{I()}),(t,n)=>{const u=W("ion-img");return C(),k(o(D),null,{default:a(()=>[r(o(w),null,{default:a(()=>[r(o(f),null,{default:a(()=>[r(o(h),null,{default:a(()=>n[0]||(n[0]=[y("Current Weather")])),_:1})]),_:1})]),_:1}),r(o(B),{fullscreen:!0},{default:a(()=>[r(o(w),{collapse:"condense"},{default:a(()=>[r(o(f),null,{default:a(()=>[r(o(h),{size:"large"},{default:a(()=>n[1]||(n[1]=[y("Current Weather")])),_:1})]),_:1})]),_:1}),i("div",j,[r(u,{src:d.value,alt:"Weather Icon"},null,8,["src"]),i("p",null,s(m.value)+" : "+s(_.value)+"°C",1),i("p",null,"Feels like: "+s(g.value)+"°C",1),i("p",null," Humidity: "+s(v.value)+"%",1),c.value?(C(),x("p",z,"Precipitation: "+s(c.value)+"mm",1)):M("",!0)])]),_:1})]),_:1})}}}),q=G(A,[["__scopeId","data-v-123acab0"]]);export{q as default};
