# Multiverso Spider-Man 🕷️  Web Experience

Bem-vindo ao projeto "Spider-Man: Multiverso"! 🕸️ Uma experiência web interativa que celebra as diferentes versões do Homem-Aranha através dos multiversos, combinando design moderno e animações dinâmicas.

## 🚀 Tecnologias Utilizadas
- HTML5
- CSS3 (com animations e transitions)
- JavaScript (ES6+)
- Responsive Design

## ✨ Características Principais

### 1. Design Responsivo 🎨
- Layout adaptativo para todos os dispositivos
- Animações fluidas de transição
- Efeitos visuais inspirados nos quadrinhos

### 2. Interatividade 🖱️
- Navegação intuitiva entre os universos
- Efeitos sonoros e visuais ao interagir
- Carrosséis de imagens interativos

### 3. Seções do Site 🌟
1. **Home**: Portal de entrada com animação principal
2. **Universos**: Galeria dos diferentes Spider-Man
3. **Personagens**: Cards informativos dos personagens
4. **História**: Timeline dos acontecimentos
5. **Galeria**: Imagens e momentos marcantes

## 🎯 Destaques do Código

### CSS Animations
```css
.spider-card {
    transform-style: preserve-3d;
    transition: transform 0.8s;
}

.spider-card:hover {
    transform: rotateY(180deg);
}
```

### JavaScript Interativo
```javascript
const changeUniverse = (universe) => {
    document.body.className = '';
    document.body.classList.add(`universe-${universe}`);
    playTransitionSound();
};
```

## 🎮 Funcionalidades
- **Transição entre Universos**: Navegue seamlessly entre diferentes realidades
- **Galeria Interativa**: Explore imagens com efeitos de zoom e transição
- **Cards Informativos**: Detalhes sobre cada versão do Spider-Man
- **Efeitos Sonoros**: Sons temáticos para cada interação
- **Easter Eggs**: Descubra segredos escondidos pela interface

## 📱 Responsividade
- Mobile First Design
- Breakpoints customizados
- Adaptação de conteúdo para diferentes telas