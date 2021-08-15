import refs from "./js/refs.js"
import theme from "./js/theme.js"
import cardTemplate from "./templates/card.hbs"
import cardsData from "./menu.json"
import onCheckboxChange from "./js/themeChange.js"

const markup = cardTemplate(cardsData)
refs.menu.insertAdjacentHTML('beforeend', markup)


function themeCurrent() {
    if (localStorage.getItem('theme') === theme.DARK) {

        return refs.checkbox.checked = 'true',
                refs.body.classList.add(theme.DARK)

    }
}
themeCurrent()



refs.checkbox.addEventListener('change', onCheckboxChange)

