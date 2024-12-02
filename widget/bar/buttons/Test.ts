import PanelButton from "../PanelButton"
import icons from "lib/icons"

export default () => PanelButton({
	window: "test",
	on_clicked: bash("waypaper-engine next-image"),
	child: Widget.Icon(icons.powermenu.shutdown),
})
