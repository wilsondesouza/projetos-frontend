# 🌟 Pokédex: Sua Enciclopédia Pokémon Digital

Bem-vindo à Pokédex! 🎮 Uma aplicação web interativa que permite explorar o vasto mundo dos Pokémon, oferecendo informações detalhadas sobre cada criatura e suas características únicas.

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- PokeAPI
- Responsive Design

## ✨ Funcionalidades Principais

### 1. Interface Intuitiva 🎨
- Design moderno e responsivo
- Navegação fluida entre Pokémon
- Sistema de busca avançado

### 2. Recursos Interativos 🔍
- Pesquisa por nome ou número
- Filtros por tipo de Pokémon
- Cards animados com informações detalhadas

### 3. Características Pokémon 📊
- Estatísticas base (HP, Ataque, Defesa, etc.)
- Tipos e fraquezas
- Habilidades especiais
- Evoluções

## 🎯 Destaques do Código

### Integração com PokeAPI
```javascript
async function getPokemonData(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
    }
}
```

### CSS Dinâmico para Tipos
```css
.pokemon-card {
    border-radius: 20px;
    transition: transform 0.3s ease;
}

.pokemon-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
```

## 🎮 Recursos
- **Listagem Dinâmica**: Carregamento automático de Pokémon
- **Sistema de Busca**: Encontre Pokémon por nome ou número
- **Filtros**: Organize por tipo, geração ou características
- **Detalhes Completos**: Visualize todas as informações importantes
- **Design Responsivo**: Funciona em qualquer dispositivo

## 📱 Responsividade
- Design adaptativo para todas as telas
- Layout otimizado para dispositivos móveis
- Grid system flexível

## 🔄 API Integration
- Conexão com PokeAPI
- Cache de dados para melhor performance
- Tratamento de erros e loading states