// Arrays of colours should have pillar colors first
// e.g. for sport:
// const [sport300, sport400, sport500, sport600, sport800] = colors.blue
export const colors = {
	primary: [
		'#660505', //news-100
		'#8B0000', //news-200
		'#AB0613', //news-300
		'#C70000', //news-400, error-400
		'#FF5943', //news-500
		'#FF9081', //news-550, error-500
		'#FFBAC8', //news-600
		'#FFF4F2', //news-800
	],

	reds: [
		'#660505', //news-100
		'#8B0000', //news-200
		'#AB0613', //news-300
		'#C70000', //news-400, error-400
		'#FF5943', //news-500
		'#FF9081', //news-550, error-500
		'#FFBAC8', //news-600
		'#FFF4F2', //news-800
	],
	oranges: [
		'#672005', //opinion-100
		'#8D2700', //opinion-200
		'#C74600', //opinion-300
		'#E05E00', //opinion-400
		'#FF7F0F', //opinion-500
		'#FF9941', //opinion-550
		'#F9B376', //opinion-600
		'#FEF9F5', //opinion-800
	],
	blues: [
		'#003C60', //sport-100
		'#004E7C', //sport-200
		'#005689', //sport-300
		'#0077B6', //sport-400
		'#00B2FF', //sport-500
		'#90DCFF', //sport-600
		'#F1F8FC', //sport-800
		'#FFF', //brand-100 Yellow #FFF
		'#000', //brand-300 Orange #000
		'#ECEAE6', //brand-400 Purple #ECEAE6
		'#007ABC', //brand-500
		'#506991', //brand-600
		'#C1D8FC', //brand-800
		'#0093E0', //focus-400
	],
	browns: [
		'#2B2625', //culture-50
		'#3E3323', //culture-100
		'#574835', //culture-200
		'#6B5840', //culture-300
		'#866D50', //culture-350
		'#A1845C', //culture-400
		'#EACCA0', //culture-500
		'#E7D4B9', //culture-600
		'#EFE8DD', //culture-700
		'#FBF6EF', //culture-800
	],
	pinks: [
		'#510043', //lifestyle-100
		'#650054', //lifestyle-200
		'#7D0068', //lifestyle-300
		'#BB3B80', //lifestyle-400
		'#FFABDB', //lifestyle-500
		'#FEC8D3', //lifestyle-600
		'#FEEEF7', //lifestyle-800
	],
	yellows: [
		'#FFAA18', //brandAlt-200	Yellow
		'#F4F4F4', //brandAlt-300	Grey
		'#DEDEDE', //brandAlt-400 	Grey Border
	],
	greens: [
		'#185E36', //green-300
		'#22874D', //green-400, success-400
		'#58D08B', //green-500, success-500
		'#4B8878', //labs-200
		'#65A897', //labs-300
		'#69D1CA', //labs-400
	],
	grays: [
		'#F4F4F4', //neutral-0		Off-white
		'#C6C6C6', //neutral-7		Black Highlight
		'#A8A8A8', //neutral-10		Shell SHadow
		'#282828', //neutral-20		Charcoal (motion)
		'#333333', //neutral-46		Charcoal
		'#757575', //neutral-60		Dark Grey
		'#DCDCDC', //neutral-86
		'#EDEDED', //neutral-93
		'#F6F6F6', //neutral-97
		'#FFFFFF', //neutral-100
		'#222527', //specialReport-100
		'#303538', //specialReport-200
		'#3F464A', //specialReport-300
		'#595C5F', //specialReport-400
		'#9DA0A2', //specialReport-450
		'#ABC2C9', //specialReport-500
		'#E4E5E8', //specialReport-700
		'#EFF1F2', //specialReport-800
	],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/492a30-light-palette)
 *
 * Colour palette organised by type e.g. 'error', or pillar e.g. 'opinion'
 */

export const palette = {
	brand: {
		100: colors.blues[7],
		300: colors.blues[8],
		400: colors.blues[9],
		// 500: colors.blues[10],
		// 600: colors.blues[11],
		// 800: colors.blues[12],
	},
	support: {
		200: colors.yellows[0],
		300: colors.yellows[1],
		400: colors.yellows[2],
	},
	secondaryPalette: {
		0: colors.grays[0],
		7: colors.grays[1],
		10: colors.grays[2],
		20: colors.grays[3],
		46: colors.grays[4],
		60: colors.grays[5],
		86: colors.grays[6],
		93: colors.grays[7],
		97: colors.grays[8],
		100: colors.grays[9],
	},

	neutral: {
		0: colors.grays[0],
		7: colors.grays[1],
		10: colors.grays[2],
		20: colors.grays[3],
		46: colors.grays[4],
		60: colors.grays[5],
		86: colors.grays[6],
		93: colors.grays[7],
		97: colors.grays[8],
		100: colors.grays[9],
	},
	error: {
		400: colors.reds[3],
		500: colors.reds[5],
	},
	success: {
		400: colors.greens[1],
		500: colors.greens[2],
	},
	news: {
		100: colors.reds[0],
		200: colors.reds[1],
		300: colors.reds[2],
		400: colors.reds[3],
		500: colors.reds[4],
		550: colors.reds[5],
		600: colors.reds[6],
		800: colors.reds[7],
	},
	opinion: {
		100: colors.oranges[0],
		200: colors.oranges[1],
		300: colors.oranges[2],
		400: colors.oranges[3],
		500: colors.oranges[4],
		550: colors.oranges[5],
		600: colors.oranges[6],
		800: colors.oranges[7],
	},
	sport: {
		100: colors.blues[0],
		200: colors.blues[1],
		300: colors.blues[2],
		400: colors.blues[3],
		500: colors.blues[4],
		600: colors.blues[5],
		800: colors.blues[6],
	},
	culture: {
		50: colors.browns[0],
		100: colors.browns[1],
		200: colors.browns[2],
		300: colors.browns[3],
		350: colors.browns[4],
		400: colors.browns[5],
		500: colors.browns[6],
		600: colors.browns[7],
		700: colors.browns[8],
		800: colors.browns[9],
	},
	lifestyle: {
		100: colors.pinks[0],
		200: colors.pinks[1],
		300: colors.pinks[2],
		400: colors.pinks[3],
		500: colors.pinks[4],
		600: colors.pinks[5],
		800: colors.pinks[6],
	},
	labs: {
		200: colors.greens[3],
		300: colors.greens[4],
		400: colors.greens[5],
	},
	specialReport: {
		100: colors.grays[10],
		200: colors.grays[11],
		300: colors.grays[12],
		400: colors.grays[13],
		450: colors.grays[14],
		500: colors.grays[15],
		700: colors.grays[16],
		800: colors.grays[17],
	},
	focus: {
		400: '#007CC4',
	},
};

// Hover colours are snowflakes as they are manipulations of colours from the
// main palette.

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/9280ee)
 *
 * Default theme background colours
 *
 * @deprecated Use the `palette` export instead
 */
export const background = {
	primary: palette.neutral[100],
	secondary: palette.neutral[97],
	inverse: palette.neutral[10],
	ctaPrimary: palette.brand[400],
	ctaPrimaryHover: '#234B8A',
	ctaSecondary: palette.brand[800],
	ctaSecondaryHover: '#ACC9F7',
	ctaTertiaryHover: '#E5E5E5',
	input: palette.neutral[100],
	inputChecked: palette.brand[500],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/63cc10)
 *
 * Brand theme background colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandBackground = {
	primary: palette.brand[400],
	inputChecked: palette.neutral[100],
	ctaPrimary: palette.neutral[100],
	ctaPrimaryHover: '#E0E0E0',
	ctaSecondary: palette.brand[600],
	ctaSecondaryHover: '#234B8A',
	ctaTertiaryHover: palette.brand[300],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/743232)
 *
 * Alternative brand theme background colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandAltBackground = {
	primary: palette.support[400],
	ctaPrimary: palette.neutral[7],
	ctaPrimaryHover: '#454545',
	ctaSecondary: palette.support[200],
	ctaSecondaryHover: '#F2AE00',
	ctaTertiaryHover: '#FFD213',
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/69c92f)
 *
 * Default theme border colours
 *
 * @deprecated Use the `palette` export instead
 */
export const border = {
	primary: palette.neutral[60],
	secondary: palette.neutral[86],
	success: palette.success[400],
	error: palette.error[400],
	ctaTertiary: palette.brand[400],
	input: palette.neutral[60],
	inputChecked: palette.brand[500],
	inputHover: palette.brand[500],
	inputActive: palette.brand[500],
	focusHalo: palette.focus[400],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/04883b)
 *
 * Brand theme border colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandBorder = {
	primary: palette.brand[600],
	secondary: palette.brand[600],
	success: palette.success[500],
	error: palette.error[500],
	ctaTertiary: palette.neutral[100],
	input: palette.brand[800],
	inputChecked: palette.neutral[100],
	inputHover: palette.neutral[100],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/b/21c6cc)
 *
 * Alternative brand theme border colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandAltBorder = {
	ctaTertiary: palette.neutral[7],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/593cc9)
 *
 * Default theme line colours
 *
 * @deprecated Use the `palette` export instead
 */
export const line = {
	primary: palette.neutral[86],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/66455d)
 *
 * Brand theme line colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandLine = {
	primary: palette.brand[600],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/89955e)
 *
 * Alternative brand theme line colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandAltLine = {
	primary: palette.neutral[7],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/85d3b0)
 *
 * Default theme text colours
 *
 * @deprecated Use the `palette` export instead
 */
export const text = {
	primary: palette.neutral[7],
	supporting: palette.neutral[46],
	success: palette.success[400],
	error: palette.error[400],
	ctaPrimary: palette.neutral[100],
	ctaSecondary: palette.brand[400],
	ctaTertiary: palette.brand[400],
	anchorPrimary: palette.brand[500],
	anchorSecondary: palette.neutral[7],
	userInput: palette.neutral[7],
	inputLabel: palette.neutral[7],
	inputError: palette.neutral[7],
	inputLabelSupporting: palette.neutral[46],
	inputChecked: palette.brand[400], //choice card only
	inputHover: palette.brand[400], //choice card only
	groupLabel: palette.neutral[7],
	groupLabelSupporting: palette.neutral[46],
	newsInverse: palette.news[550],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/244480)
 *
 * Brand theme text colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandText = {
	primary: palette.neutral[100],
	supporting: palette.brand[800],
	success: palette.success[500],
	error: palette.error[500],
	ctaPrimary: palette.brand[400],
	ctaSecondary: palette.neutral[100],
	ctaTertiary: palette.neutral[100],
	anchorPrimary: palette.neutral[100],
	anchorPrimaryHover: palette.support[400],
	userInput: palette.neutral[100],
	inputLabel: palette.neutral[100],
	inputLabelSupporting: palette.brand[800],
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/packages-source-foundations-palette--page) ???
 * [Design System](https://theguardian.design/2a1e5182b/p/1377a6-tokens/t/11d5fd)
 *
 * Alternative brand theme text colours
 *
 * @deprecated Use the `palette` export instead
 */
export const brandAltText = {
	primary: palette.neutral[7],
	supporting: palette.neutral[60],
	ctaPrimary: palette.neutral[100],
	ctaSecondary: palette.neutral[7],
	ctaTertiary: palette.neutral[7],
	anchorPrimary: palette.neutral[7],
};

export const {
	brand,
	support,
	neutral,
	error,
	success,
	news,
	opinion,
	sport,
	culture,
	lifestyle,
	labs,
	specialReport,
	focus,
} = palette;
