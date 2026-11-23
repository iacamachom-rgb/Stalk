const form = document.getElementById('searchForm');
const input = document.getElementById('username');
const results = document.getElementById('results');
const savedList = document.getElementById('savedList');
const platforms = [
  {id:'instagram', name:'Instagram', url:u=>`https://www.instagram.com/${encodeURIComponent(u)}/`},
  {id:'tiktok', name:'TikTok', url:u=>`https://www.tiktok.com/@${encodeURIComponent(u)}`},
  {id:'x', name:'X', url:u=>`https://x.com/${encodeURIComponent(u)}`},
  {id:'facebook', name:'Facebook', url:u=>`https://www.facebook.com/${encodeURIComponent(u)}`}
];
let currentUser = '';

function getSaved(){ try{return JSON.parse(localStorage.getItem('stalkSaved')||'[]')}catch{return []} }
function setSaved(items){localStorage.setItem('stalkSaved',JSON.stringify(items))}
function renderSaved(){
  const items=getSaved();
  if(!items.length){savedList.innerHTML='<div class="empty-state">Aún no has guardado perfiles.<br><span>Haz una búsqueda y añade uno a tu lista.</span></div>';return}
  savedList.innerHTML=items.map((item,i)=>`<article class="saved-card"><button class="remove" data-remove="${i}" aria-label="Eliminar">×</button><strong>@${escapeHtml(item.user)}</strong><small>AGREGADO A TU LISTA</small><br><a href="${item.url}" target="_blank" rel="noopener">ABRIR PERFIL ↗</a></article>`).join('');
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
form.addEventListener('submit',e=>{
  e.preventDefault();
  currentUser=input.value.trim().replace(/^@/,'');
  if(!currentUser)return;
  const safe=escapeHtml(currentUser);
  results.innerHTML=`<div class="result-card"><div><strong>@${safe}</strong><small>ENLACES PÚBLICOS · ELIGE UNA RED</small></div><div class="actions">${platforms.map(p=>`<a class="small-btn" href="${p.url(currentUser)}" target="_blank" rel="noopener">${p.name} ↗</a>`).join('')}<button class="small-btn red" id="saveProfile">GUARDAR +</button></div></div>`;
  document.getElementById('saveProfile').addEventListener('click',()=>{
    const url=platforms[0].url(currentUser);
    const items=getSaved();
    if(!items.some(x=>x.user.toLowerCase()===currentUser.toLowerCase())){items.unshift({user:currentUser,url});setSaved(items);renderSaved()}
    document.getElementById('saveProfile').textContent='GUARDADO ✓';
  });
});
savedList.addEventListener('click',e=>{
  const btn=e.target.closest('[data-remove]');if(!btn)return;
  const items=getSaved();items.splice(Number(btn.dataset.remove),1);setSaved(items);renderSaved();
});
document.getElementById('clearSaved').addEventListener('click',()=>{setSaved([]);renderSaved()});
renderSaved();
