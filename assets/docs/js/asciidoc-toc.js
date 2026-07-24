(function () {
    const content = document.querySelector('.main-content');
    const targets = Array.from(document.querySelectorAll('[data-asciidoc-toc]'));

    if (!content || targets.length === 0) {
        return;
    }

    const headings = Array.from(content.querySelectorAll('h2, h3, h4, h5, h6'));

    if (headings.length === 0) {
        return;
    }

    const usedIds = new Set(
        Array.from(document.querySelectorAll('[id]'), (element) => element.id)
    );

    headings.forEach((heading, index) => {
        if (heading.id) {
            return;
        }

        const base = `asciidoc-heading-${index + 1}`;
        let candidate = base;
        let suffix = 2;

        while (usedIds.has(candidate)) {
            candidate = `${base}-${suffix}`;
            suffix += 1;
        }

        heading.id = candidate;
        usedIds.add(candidate);
    });

    function createList(isMobile) {
        const root = document.createElement('ul');
        const stack = [{ level: Number(headings[0].tagName.slice(1)), list: root }];

        if (isMobile) {
            root.classList.add('dropdown-menu');
        }

        headings.forEach((heading) => {
            const level = Number(heading.tagName.slice(1));

            while (stack.length > 1 && level < stack[stack.length - 1].level) {
                stack.pop();
            }

            if (level > stack[stack.length - 1].level) {
                const parentItem = stack[stack.length - 1].list.lastElementChild;

                if (parentItem) {
                    const nested = document.createElement('ul');
                    parentItem.appendChild(nested);
                    stack.push({ level, list: nested });
                }
            }

            const item = document.createElement('li');
            const link = document.createElement('a');

            link.href = `#${heading.id}`;
            link.textContent = heading.textContent.trim();

            if (isMobile) {
                link.classList.add('dropdown-item');
            }

            item.appendChild(link);
            stack[stack.length - 1].list.appendChild(item);
        });

        return root;
    }

    targets.forEach((target) => {
        target.replaceChildren(createList(target.dataset.asciidocToc === 'mobile'));
    });
})();
