const state = {
    views: {
        pokemons: document.querySelector('.pokemons'),
        pokemonPopup: null
    },
    values: {
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10'
    }
}
class Pokemon {
    id;
    name;
    dreamWorld;
    types = [];
    details = {};
    constructor(jp) {
        this.id = jp.id;
        this.name = jp.name;
        this.dreamWorld = jp.sprites.other.dream_world.front_default;
        jp.types.forEach(t => {
            this.types.push(t.type.name);
        });
        this.details['about'] = {
            'height': [jp.height],
            'weight': [jp.weight],
            'abilities': []
        };
        jp.abilities.forEach(a => {
            this.details.about.abilities.push(a.ability.name);
        });
        this.details['base stats'] = {};
        jp.stats.forEach(s => {
            this.details['base stats'][s.stat.name] = [s.base_stat];
        });
    }
}
function apiPokemon(url) {
    const options = {method: 'GET'}
    return fetch(url, options).then(response => {
        if(!response.ok) {
            return Promise.reject(response.status);
        }
        return response.json().catch(err => Promise.reject(err))
    }).catch(err => {
        return Promise.reject(err);
    });
}
function createPokemonItem(p) {
    const li = document.createElement('li'),
        id = document.createElement('h2'),
        title = document.createElement('h3'),
        types = document.createElement('ol'),
        dreamWorld = document.createElement('img');
    id.textContent = toOrder(p.id.toString());
    title.textContent = p.name;
    p.types.forEach(t => {
        const type = document.createElement('li');
        type.textContent = t;
        types.appendChild(type);
    });
    dreamWorld.src = p.dreamWorld;
    li.append(id, title, types, dreamWorld);
    li.classList.add('pokemon-item');
    li.classList.add(p.types[0]);
    li.onclick = (() => {createPokemonPopup(p, li)});
    state.views.pokemons.appendChild(li);
}
function createPokemonPopup(p, v) {
    removePokemonPopup();
    state.views.pokemonPopup = document.createElement('div');
    const close = document.createElement('div'),
        content = document.createElement('div'),
        view = document.createElement('div'),
        detail = document.createElement('div'),
        nav = document.createElement('ol'),
        body = document.createElement('table');
    for(let k in p.details) {
        const navItem = document.createElement('li');
        navItem.textContent = k;
        navItem.onclick = function() {
            this.style.opacity = '1';
            this.style.borderBottom = '1px inset #0000ff';
            for(let i = 0; i < nav.children.length; i++) {
                if(this !== nav.children[i]) {
                    nav.children[i].style.opacity = '0.3';
                    nav.children[i].style.borderBottom = 'none';
                }
            }
            while(body.firstChild) {
                body.firstChild.remove();
            }
            for(let ik in p.details[k]) {
                const bodyTr = document.createElement('tr'),
                    bodyTrTitle = document.createElement('th'),
                    bodyTrValues = document.createElement('td');
                bodyTrTitle.textContent = ik;
                bodyTrValues.textContent = p.details[k][ik].join(', ');
                bodyTr.append(bodyTrTitle, bodyTrValues);
                body.appendChild(bodyTr);
            }
        }
        nav.appendChild(navItem);
    }
    close.className = 'close';
    close.title = 'Close';
    close.textContent = 'X';
    close.onclick = removePokemonPopup;
    for(let i = 0; i < v.children.length; i++) {
        const c = v.children[i].cloneNode(true);
        view.appendChild(c);
    }
    view.classList.add('pokemon-view');
    detail.classList.add('pokemon-detail');
    nav.classList.add('pokemon-detail-nav');
    body.classList.add('pokemon-detail-body');
    detail.append(nav, body);
    content.append(close, view, detail);
    content.classList.add('pokemon-content');
    content.classList.add(p.types[0]);
    state.views.pokemonPopup.className = 'popup';
    state.views.pokemonPopup.appendChild(content);
    document.body.appendChild(state.views.pokemonPopup);
    nav.children[0].click();
}
function removePokemonPopup() {
    if(document.body.contains(state.views.pokemonPopup)) {
        document.body.removeChild(state.views.pokemonPopup);
    }
    state.views.pokemonPopup = null;
}
async function getPokemons(t) {
    const pokemons = await apiPokemon(state.values.next);
    state.values.next = pokemons.next;
    for(let p in pokemons.results) {
        createPokemonItem(new Pokemon(await apiPokemon(pokemons.results[p].url)));
    }
    if(t && state.values.next === null) {
        t.remove();
    }
}
function toOrder(n) {
    if(n.length === 1) {
        return '#00' + n;
    } else if(n.length === 2) {
        return '#0' + n;
    }
    return '#' + n;
}
getPokemons();