let l=[],s=0;const f=4;let a=o=>{let u=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},lc:0,listen(t){return e.lc=u.push(t),()=>{for(let i=s+f;i<l.length;)l[i]===t?l.splice(i,f):i+=f;let n=u.indexOf(t);~n&&(u.splice(n,1),--e.lc||e.off())}},notify(t,n){let i=!l.length;for(let r of u)l.push(r,e.value,t,n);if(i){for(s=0;s<l.length;s+=f)l[s](l[s+1],l[s+2],l[s+3]);l.length=0}},off(){},set(t){let n=e.value;n!==t&&(e.value=t,e.notify(n))},subscribe(t){let n=e.listen(t);return t(e.value),n},value:o};return e};const c=a(0);function g(o){c.set(o)}export{c as a,g as s};