import icons from "lib/icons"
import PanelButton from "../PanelButton"
import options from "options"

const { action } = options.bar.previouswallpaper

export default () => PanelButton({
    window: "previouswallpaper",
    on_clicked: action.bind(),
    child: Widget.Label("←"),
})
