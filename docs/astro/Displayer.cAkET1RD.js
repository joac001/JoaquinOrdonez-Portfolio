import{j as t,a as m}from"./pageStore.D8NL-QDi.js";import{r as d}from"./index.DhYZZe0J.js";function j(e,s,i){let n=new Set([...s,void 0]);return e.listen((r,a,c)=>{n.has(c)&&i(r,a,c)})}let x=(e,s)=>i=>{e.current=i,s()};function f(e,{keys:s,deps:i=[e,s]}={}){let n=d.useRef();n.current=e.get();let r=d.useCallback(c=>s?.length>0?j(e,s,x(n,c)):e.listen(x(n,c)),i),a=()=>n.current;return d.useSyncExternalStore(r,a,a)}const o={0:{title:"Mercedes Benz",start_date:"07/2024",end_date:"presente",skills:[],description:"short description"},1:{title:"Argentina programa 4.0",start_date:"07/2023",end_date:"11/2023",skills:[],description:"short description"},2:{title:"Coding Giants",start_date:"07/2023",end_date:"09/2023",skills:[],description:"short description"},3:{title:"Ayudantía Algoritmos y programación II",start_date:"2022",end_date:"",skills:[],description:"short description"},4:{title:"Universidad Nacional de Hurlingham",start_date:"09/2022",end_date:"12/2022",skills:[],description:"short description"}},l={0:{title:"Voluntariado de jardinería",start_date:"2023",end_date:"",skills:[],description:"short description"},1:{title:"Hospice “Buen samaritano”",start_date:"2022",end_date:"",skills:[],description:"short description"},2:{title:"Sociedad San Juan, centro apostólico — Líder de jóvenes",start_date:"2020",end_date:"",skills:[],description:"short description"}};function u(){return t.jsxs("span",{className:"grid grid-cols-2 gap-4 w-full text-white font-sans p-4",children:[t.jsx("h1",{className:"text-2xl font-mono font-bold col-span-2 underline decoration-4 decoration-primary",children:"Working experience"}),Object.keys(o).map(e=>t.jsx(h,{title:o[e].title,start_date:o[e].start_date,end_date:o[e].end_date,skills:o[e].skills,description:o[e].description,children:t.jsx("img",{src:"../assets/placeholder.jpg",alt:"Placeholder",className:"w-24 h-24"})},e)),t.jsx("h1",{className:"text-2xl font-mono font-bold col-span-2 underline decoration-4 decoration-primary",children:"Volunteer experience"}),Object.keys(l).map(e=>t.jsx(h,{title:l[e].title,start_date:l[e].start_date,end_date:l[e].end_date,skills:l[e].skills,description:l[e].description,children:t.jsx("img",{alt:"Placeholder",className:"w-24 h-24"})},e))]})}function h({title:e,start_date:s,end_date:i,skills:n,description:r,children:a}){return t.jsxs("span",{id:"experience-card",className:"grid grid-cols-2 grid-rows-auto p-4",children:[t.jsx("h1",{className:"col-span-2 font-semibold text-lg",children:e}),t.jsxs("span",{className:"col-span-2 flex gap-2 text-sm",children:[t.jsxs("p",{children:[s," ",i?`- ${i}`:""]}),t.jsx("p",{children:n})]}),t.jsx("span",{className:"w-24 h-24 bg-background text-md"}),t.jsx("p",{children:r}),t.jsx("style",{children:`
                    #experience-card {
                        content-visibility: auto;
                    }
                `})]})}function w(){const e=f(m),s={0:"shadow-experience",1:"shadow-technologies",2:"shadow-projects",3:"shadow-contact"},[i,n]=d.useState(s[0]),[r,a]=d.useState(t.jsx(u,{}));return d.useEffect(()=>{switch(e){case 0:n(s[0]),document.title="Experiences - Portfolio",a(t.jsx(u,{}));break;case 1:n(s[1]),document.title="Technologies - Portfolio",a(t.jsx(p,{}));break;case 2:n(s[2]),document.title="Projects - Portfolio",a(t.jsx(p,{}));break;case 3:n(s[3]),document.title="Contact - Portfolio",a(t.jsx(p,{}));break}},[e]),t.jsx("div",{id:"content",className:"col-span-2 m-4 bg-secondary w-auto rounded-md",children:t.jsx("span",{className:`flex rounded-lg ${i} transition-all ease-in-out duration-200`,children:r})})}function p(){return t.jsx("span",{className:"grid grid-cols-2 gap-4 w-full text-white font-sans p-4",children:t.jsx("h1",{className:"text-2xl font-mono font-bold col-span-2 underline decoration-4 decoration-primary",children:"TECHNOLOGIES"})})}export{w as default};
