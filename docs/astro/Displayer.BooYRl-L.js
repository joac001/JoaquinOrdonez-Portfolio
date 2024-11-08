import{j as e,a as u}from"./pageStore.B5lhrC8U.js";import{r as i}from"./index.DhYZZe0J.js";function x(t,s,n){let r=new Set([...s,void 0]);return t.listen((o,a,l)=>{r.has(l)&&n(o,a,l)})}let d=(t,s)=>n=>{t.current=n,s()};function p(t,{keys:s,deps:n=[t,s]}={}){let r=i.useRef();r.current=t.get();let o=i.useCallback(l=>s?.length>0?x(t,s,d(r,l)):t.listen(d(r,l)),n),a=()=>r.current;return i.useSyncExternalStore(o,a,a)}const h=[{title:"Mercedes Benz",start_date:"07/2024",end_date:"presente",skills:[" ISO 27001 "," Information security "],description:"I work as an ISO Staff in the information security department making sure that the company complies with the ISO 27001 standard."},{title:"Argentina programa 4.0",start_date:"07/2023",end_date:"11/2023",skills:[" Team work "," Programming "," Education "],description:'I was a professor of the course "Introduction to programming" in the Argentina Program 4.0 initiative, which aims to teach programming to people who are not in the IT field.'},{title:"Coding Giants",start_date:"07/2023",end_date:"09/2023",skills:[],description:"I was a professor in the Coding Giants initiative, which aims to teach programming to kids arround 9 and 12 years old."},{title:"Ayudantía Algoritmos y programación II",start_date:"2022",end_date:"",skills:[],description:"I was a professor's assistant in the subject 'Algorithms and programming II' at the University of Buenos Aires."},{title:"Universidad Nacional de Hurlingham",start_date:"09/2022",end_date:"12/2022",skills:[],description:'I was a professor of the course "Introduction to web programming" in the National University of Hurlingham.'}],f=[{title:"Voluntariado de jardinería",start_date:"2023",end_date:"",skills:[],description:""},{title:"Hospice “Buen samaritano”",start_date:"2022",end_date:"",skills:[],description:""},{title:"Sociedad San Juan, centro apostólico — Líder de jóvenes",start_date:"2020",end_date:"",skills:[],description:""}];function c(){return e.jsx("div",{className:"relative w-full px-0 md:px-8",children:e.jsxs("div",{className:"flex flex-col gap-y-8 p-4 relative",children:[e.jsx("div",{className:"absolute left-4 top-0 bottom-0 w-1 bg-experience rounded-lg"}),e.jsx("div",{className:"border-b-4 border-experience w-fit",children:e.jsx("h2",{className:"text-2xl text-white font-mono font-bold ml-10",children:"Work Experiences"})}),h.map((t,s)=>e.jsx(m,{experience:t,index:s})),e.jsx("div",{className:"border-b-4 border-experience w-fit",children:e.jsx("h2",{className:"text-2xl text-white font-mono font-bold ml-10 ",children:"Volunteer Experiences"})}),f.map((t,s)=>e.jsx(m,{experience:t,index:s}))]})})}function m({experience:t,index:s}){return e.jsxs("div",{className:"w-full flex items-center text-white",children:[e.jsxs("div",{className:"flex items-center w-full",children:[e.jsx("div",{className:"w-8 h-8 rounded-full border-x-2 border-y-2 border-experience"}),e.jsx("div",{className:"w-full h-1 bg-experience rounded-lg flex items-center"})]}),e.jsx("div",{className:"p-4 min-w-46 rounded-md border-x-2 border-y-2 border-experience",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold pt-2",children:t.title}),e.jsxs("p",{className:"text-gray pb-2",children:[t.start_date," ",t.end_date?` - ${t.end_date}`:""]}),e.jsx("p",{className:"text-sm md:text-lg",children:t.description?t.description:""}),e.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:e.jsxs("span",{className:"py-2 rounded-full text-xs text-gray",children:[t.skills.length>0?"Skills: ":"",t.skills.map((n,r)=>e.jsx("span",{children:r==0?n:`- ${n}`},r))]})})]})})})]},s)}function g(){return e.jsx("span",{className:"flex gap-10 flex-wrap w-full text-white font-sans justify-center items-center p-4",children:e.jsx("img",{src:"/JoaquinOrdonez-Portfolio/public/assets/reactjs.webp",alt:""})})}function j(){return e.jsx("h1",{children:"PROJECTS"})}function w(){return e.jsx("h1",{children:"CONTACTS"})}function v(){const t=p(u),s={0:"shadow-experience",1:"shadow-technologies",2:"shadow-projects",3:"shadow-contact"},[n,r]=i.useState(s[0]),[o,a]=i.useState(e.jsx(c,{"client:load":!0}));return i.useEffect(()=>{switch(t){case 0:r(s[0]),document.title="Experiences - Portfolio",a(e.jsx(c,{}));break;case 1:r(s[1]),document.title="Technologies - Portfolio",a(e.jsx(g,{}));break;case 2:r(s[2]),document.title="Projects - Portfolio",a(e.jsx(j,{}));break;case 3:r(s[3]),document.title="Contact - Portfolio",a(e.jsx(w,{}));break}},[t]),e.jsx("div",{id:"content",className:"col-span-2 m-4 bg-secondary-background w-auto rounded-md",children:e.jsx("span",{className:`flex rounded-lg ${n} transition-all ease-in-out duration-300 p-8`,children:o})})}export{v as default};
