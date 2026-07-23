window.addEventListener("load",()=>{
 document.querySelectorAll("section").forEach((s,i)=>{
   s.style.opacity=0;
   s.style.transform="translateY(30px)";
   s.style.transition="all .6s ease";
   setTimeout(()=>{s.style.opacity=1;s.style.transform="translateY(0)";},200+i*120);
 });
});

