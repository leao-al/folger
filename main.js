function toggleSection(element) {
    const isExpanded = element.classList.contains('expanded');

    // Remove a classe "expanded" de todas as seções
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('expanded');
    });

    // Se o item clicado não estava expandido, expanda-o
    if (!isExpanded) {
        element.classList.add('expanded');
    }
}
