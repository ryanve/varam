# `varam`

[**web sample**](https://ryanve.dev/varam)

## change CSS `var` via URL param

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

### `var` your style

```css
background: var(--oil);
color: var(--ink);
```

### code sensible default style

```css
font-size: var(--size, 1em);
```

### code hyperlinks with `&amp;`

```html
?oil=orange&amp;ink=black
```

### [javascript](varam.js)

loading [varam.js](varam.js) checks URL params and performantly updates `var` as needed

```html
<script async src="varam.js"></script>
```

## technology

- [`URLSearchParams`](https://mdn.io/URLSearchParams)
- [`style`](https://mdn.io/CSSStyleDeclaration)
- [`var`](https://mdn.io/css-var)
