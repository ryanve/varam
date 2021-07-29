# varam

[🟣 **online**](https://ryanve.dev/varam)

## change CSS var via URL param

### mention desired param

place `data-varam` on any scope to represent CSS `var`

```html
<samp data-varam="oil ink">
```

- only scoped mentions will change
- scope page via root


```html
<html data-varam="oil ink">
```

- combine data with URL params to update matching `var`
- combining `?oil=olive&ink=black` would style each `var`

```css
--oil: olive;
--ink: black;
```

### var your style

```css
background: var(--oil);
color: var(--ink);
```

### code sensible default style

```css
font-size: var(--size, 1em);
writing-mode: var(--mode, horizontal-tb);
```

### code hyperlinks with `&amp;`

```html
?oil=orange&amp;ink=black
```

## [javascript](varam.js)

### automagic

🚥 `varam` automagically runs when you load [varam.js](varam.js)

```html
<script async src="varam.js"></script>
```

- URL params are read and only read
- CSS var are updated where matching
- [async or defer to your desire](../../releases)

### updating

- performant updating
- we minimize reflow
- [just load the script](#automagic) to go with the flow with real URL
- [updaters](#updaters) return [boolean](#boolean) whether reflow expected
- update if you change dom (otherwise no need)

### updaters

- `varam.flow()` automagic does `varam(location.search)` with real URL
- `varam.reset()` to reset state like `varam("")`  but leave URL alone
- `varam.fresh(...)` is how varam performantly interacts with style

### boolean

- `true` when update was made
- `false` when update needless

### help

`varam.help()` for help in your console

### diagnostic

- `varam.meta` content interpreted
- `varam.state` latest state
- `varam.via` paramethod `"flow"` or `"meta"`

### [staging](../../pull/8)

- default checks `location.search` **not meta**
- staging meta simulates alternate search
- **omit meta** unless you're staging

```html
<meta name="varam" content="oil=purple">
```

## technology

- [`URLSearchParams`](https://mdn.io/URLSearchParams)
- [`location`](https://mdn.io/window-location)
- [`script`](https://mdn.io/the-script-element)
- [`style`](https://mdn.io/CSSStyleDeclaration)
- [`html`](index.html) [`data-`](https://mdn.io/data-attributes)
- [`css`](www.css) [`var`](https://mdn.io/css-var)
