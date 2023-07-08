
class Accordion {
    constructor(accordion) {
        this.accordion = accordion;
        this.head = this.accordion.querySelector(".accordion__head");
        this.content = this.accordion.querySelector(".accordion__content");
        
        this.head.onclick = () => {
            if (this.content.style.maxHeight) {
                this.closeAccordion();
            } else {
				// Можно убрать this.closeAllAccordions() если нет необходимости закрывать все при открытии нового
                this.closeAllAccordions();
                this.openAccordion();
            }
        };
    }

    openAccordion() {
        this.accordion.classList.add("accordion__active");
        this.content.style.maxHeight = this.content.scrollHeight + "px";
    }

    closeAccordion() {
        this.accordion.classList.remove("accordion__active");
        this.content.style.maxHeight = null;
    }

    closeAllAccordions() {
        accordions.forEach((accordion) => {
            const instance = accordion.Accordion;
            if (instance && instance !== this) {
                instance.closeAccordion();
            }
        });
    }
}

const accordions = document.querySelectorAll(".accordion");

let unclickedAccordions = []

accordions.forEach((accordion, index) => {
    accordion.Accordion = new Accordion(accordion);
	unclickedAccordions.push(index)
	accordion.addEventListener('click', () => {
		unclickedAccordions = unclickedAccordions.filter(item => item != index)
		if (unclickedAccordions.length == 0) {
			const button = document.getElementById('button')
			button.classList.remove("button_disabled")
		}
	})
});


