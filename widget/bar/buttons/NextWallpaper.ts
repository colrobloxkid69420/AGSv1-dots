import icons from "lib/icons"
import PanelButton from "../PanelButton"
import options from "options"

const { action } = options.bar.nextwallpaper

export default () => PanelButton({
    window: "nextwallpaper",
    on_clicked: action.bind(),
    child: Widget.Label("→"),
})
