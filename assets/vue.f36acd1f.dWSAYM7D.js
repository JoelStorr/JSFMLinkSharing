import{i as f,r as u,f as o,g as d,h as v,j as l,k as i,l as h,m}from"./entry.mSSWXTj-.js";function U(t,a={}){const e=a.head||f();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});o(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),l()&&(i(()=>{r.dispose()}),h(()=>{s.value=!0}),m(()=>{s.value=!1})),r}export{U as u};
