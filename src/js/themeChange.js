import refs from "./refs.js";
import theme from "./theme.js"

export default function onCheckboxChange(e) {

    

    const themeChecked = refs.checkbox.checked
    if (themeChecked) {
        refs.body.classList.add(theme.DARK)
        refs.body.classList.remove(theme.LIGHT)


            localStorage.setItem('theme', theme.DARK)
    } else {
        refs.body.classList.add(theme.LIGHT)
        refs.body.classList.remove(theme.DARK)

            localStorage.setItem('theme', theme.LIGHT)
    }


}