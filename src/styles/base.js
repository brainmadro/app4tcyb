import { StyleSheet } from "react-native"
import colors from "../theme/colors" // /src/theme/colors

const base = StyleSheet.create({
	backgroundColor: colors.backgroundColor,
	color: colors.textPrimary
})

const input = StyleSheet.create({
	backgroundColor: colors.backgroundColor,
	color: colors.textPrimary
})

export default {
	base,
	input
}