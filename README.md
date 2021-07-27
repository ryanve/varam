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

- URL params are read
- CSS var are updated
- async optional

### performant updating

```js
varam(location.search)
```

### varam returns boolean

- `true` when update was made
- `false` when update needless

### seed at your own risk

```html
<script>window.varam = "?"</script>
<script async src="varam.js"></script>
```

## technology

- [`URLSearchParams`](https://mdn.io/URLSearchParams)
- [`location`](https://mdn.io/window-location)
- [`script`](https://mdn.io/the-script-element)
- [`style`](https://mdn.io/CSSStyleDeclaration)
- [`html`](index.html) [`data-`](https://mdn.io/data-attributes)
- [`css`](www.css) [`var`](https://mdn.io/css-var)
