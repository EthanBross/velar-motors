const grid=document.getElementById('cars');
function render(filter='all'){
 grid.innerHTML='';
 vehicles.filter(v=>filter==='all'||v.type===filter).forEach(v=>{
  const card=document.createElement('article');card.className='car';
  const link='cars/'+v.slug+'.html';
  card.innerHTML=`<a class="car-image-wrap" href="${link}" aria-label="Explore ${v.name}"><img class="car-img" src="${v.image}" alt="${v.name}" loading="lazy" referrerpolicy="no-referrer"></a><div class="car-info"><div class="car-top"><div><h3>${v.name}</h3><span class="car-type">${v.label}</span></div><span class="car-type">${v.year}</span></div><div class="car-specs"><span>${v.power}</span><span>${v.transmission}</span><span>${v.drive}</span></div><div class="car-bottom"><span class="price">${v.price}</span><a class="detail-link" href="${link}">VIEW DETAILS ↗</a></div></div>`;
  grid.append(card);
 });
}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');btn.classList.add('active');render(btn.dataset.filter)}));
const menu=document.querySelector('.menu');menu.addEventListener('click',()=>{const open=document.getElementById('nav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('nav').classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const interest=new URLSearchParams(location.search).get('vehicle');if(interest){document.getElementById('message').value=`I'm interested in the ${interest}. Please share more information.`;}
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const subject=encodeURIComponent('VELAR MOTORS demo inquiry — '+f.elements.interest.value);const body=encodeURIComponent(`Name: ${f.elements.name.value}\nEmail: ${f.elements.email.value}\nInterest: ${f.elements.interest.value}\n\n${f.elements.message.value}`);document.getElementById('formNote').textContent='Opening your email app. This demo does not send messages directly.';window.location.href=`mailto:hello@velarmotors.example?subject=${subject}&body=${body}`});
