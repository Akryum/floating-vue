# [2.0.0-beta.10](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.13...v2.0.0-beta.10) (2022-03-23)

Included changes from `v1.0.0-beta.13`:


### Bug Fixes

* don't auto hide parent if contains click ([98d9449](https://github.com/Akryum/v-tooltip/commit/98d94492c5232c68d20498e9dca52eb79140f4c6))



# [2.0.0-beta.9](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.12...v2.0.0-beta.9) (2022-03-23)


### Bug Fixes

* don't use $el ([29e9992](https://github.com/Akryum/v-tooltip/commit/29e99924f681e2b77fdfd7c87da2e5ea62ab7a50))

---

Included changes from `v1.0.0-beta.12`:


### Features

* add aiming expiration delay ([01ef6f8](https://github.com/Akryum/v-tooltip/commit/01ef6f86aadc43488ade03cffd2158f2825cb416))
* handle diagonal submenu (aim) ([df5e9e9](https://github.com/Akryum/v-tooltip/commit/df5e9e9f65b2805a0e2d091deddefc02c9661216))
* nested poppers auto lock ([75694ae](https://github.com/Akryum/v-tooltip/commit/75694aefde5bf2442c219ecae7c5a767d7c525de))



# [2.0.0-beta.8](https://github.com/Akryum/v-tooltip/compare/v2.0.0-beta.7...v2.0.0-beta.8) (2022-03-11)


### Bug Fixes

* theme null on .v-popper ([25db8e8](https://github.com/Akryum/v-tooltip/commit/25db8e8d403a8991a911ebf725154bee3cb3e4ac))



# [2.0.0-beta.7](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.11...v2.0.0-beta.7) (2022-03-11)


### Bug Fixes

* restore nuxt 3 support, closes [#820](https://github.com/Akryum/v-tooltip/issues/820) ([f6397ea](https://github.com/Akryum/v-tooltip/commit/f6397ea2adcb54241393f928a239a4f8fe70f04e))

---

Included changes from `v1.0.0-beta.10` and `v1.0.0-beta.11`:


### Bug Fixes

* remove internal style on `.v-popper` ([2698d84](https://github.com/Akryum/v-tooltip/commit/2698d849807e19c001c5e2f11f9b6ae9d37028ca))
* don't compute position on scroll if hidden, closes [#835](https://github.com/Akryum/v-tooltip/issues/835) ([f2199da](https://github.com/Akryum/v-tooltip/commit/f2199da0f113dcdfb6a43382acf6bc17a8733727))
* duplicate hide events, closes [#376](https://github.com/Akryum/v-tooltip/issues/376) ([5a4ff05](https://github.com/Akryum/v-tooltip/commit/5a4ff05f6c15a2f9ea91b664c2322d047ce20554))
* silence popperNode() errors, closes [#828](https://github.com/Akryum/v-tooltip/issues/828) ([490600c](https://github.com/Akryum/v-tooltip/commit/490600c3fc0d90cfb5666c6ac26817a757acfb6c))


### Features

* autoMinSize => autoSize, autoMaxSize => autoBoundaryMaxSize, closes [#834](https://github.com/Akryum/v-tooltip/issues/834) ([b198353](https://github.com/Akryum/v-tooltip/commit/b198353f781a4a1552c2bf23b6fcf8ad48810536))


### BREAKING CHANGES

* The following internal style on `.v-popper` has been removed:
```css
.v-popper {
  width: max-content;
}
```
* `autoMinSize` is deprecated, use `autoSize="min"` instead
* `autoMaxSize` is deprecated, use `autoBoundaryMaxSize` instead



# [2.0.0-beta.6](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.9...v2.0.0-beta.6) (2022-02-09)

Included changes from `v1.0.0-beta.8` and `v1.0.0-beta.9`:

### Bug Fixes

* autoMaxSize - reset size to allow bestFit ([40dae98](https://github.com/Akryum/v-tooltip/commit/40dae98d01932beee568db0e071c6e77f2c83882))
* max-size on inner > div ([3699726](https://github.com/Akryum/v-tooltip/commit/3699726e214e5b5dcfaf027037f6a5280f9505e2))



# [2.0.0-beta.5](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.7...v2.0.0-beta.5) (2022-02-01)

Included changes from `v1.0.0-beta.7`:


### Features

* backdrop element to improve autohide on mobile ([803dcca](https://github.com/Akryum/v-tooltip/commit/803dcca0bb655ab6201a6ab6063308bae91842a6))



# [2.0.0-beta.4](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.6...v2.0.0-beta.4) (2022-02-01)

Included changes from `v1.0.0-beta.6`:

### Features

* positioningDisabled + mobile example ([433118a](https://github.com/Akryum/v-tooltip/commit/433118a54be7762941c1eb09fec1a8e8e39dc556))



# [2.0.0-beta.3](https://github.com/Akryum/v-tooltip/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2022-01-20)


### Bug Fixes

* some directive tooltips not working ([d3c3b3d](https://github.com/Akryum/v-tooltip/commit/d3c3b3d2d2d0c0cff3d50a0f643b4a922314f0d9))



# [2.0.0-beta.2](https://github.com/Akryum/v-tooltip/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2022-01-18)


### Features

* single app for v-tooltip directives ([649c38d](https://github.com/Akryum/v-tooltip/commit/649c38d650fe32a9f5433f9b0349fe6a588dde12))



# [2.0.0-beta.1](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.5...v2.0.0-beta.1) (2022-01-15)


### Features

* vue3 version ([872feef](https://github.com/Akryum/v-tooltip/commit/872feef42f01e44ce522b960b8eaf973b43649a3))



# [1.0.0-beta.13](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.12...v1.0.0-beta.13) (2022-03-23)


### Bug Fixes

* don't auto hide parent if contains click ([98d9449](https://github.com/Akryum/v-tooltip/commit/98d94492c5232c68d20498e9dca52eb79140f4c6))




# [1.0.0-beta.12](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.11...v1.0.0-beta.12) (2022-03-23)


### Features

* add aiming expiration delay ([01ef6f8](https://github.com/Akryum/v-tooltip/commit/01ef6f86aadc43488ade03cffd2158f2825cb416))
* handle diagonal submenu (aim) ([df5e9e9](https://github.com/Akryum/v-tooltip/commit/df5e9e9f65b2805a0e2d091deddefc02c9661216))
* nested poppers auto lock ([75694ae](https://github.com/Akryum/v-tooltip/commit/75694aefde5bf2442c219ecae7c5a767d7c525de))



# [1.0.0-beta.11](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.10...v1.0.0-beta.11) (2022-03-11)


### Bug Fixes

* remove internal style on `.v-popper` ([2698d84](https://github.com/Akryum/v-tooltip/commit/2698d849807e19c001c5e2f11f9b6ae9d37028ca))


### BREAKING CHANGES

* - The following internal style on `.v-popper` has been removed:
```css
.v-popper {
  width: max-content;
}
```



# [1.0.0-beta.10](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2022-03-11)

### BREAKING CHANGES

- `autoMinSize` is deprecated, use `autoSize="min"` instead
- `autoMaxSize` is deprecated, use `autoBoundaryMaxSize` instead


### Bug Fixes

* don't compute position on scroll if hidden, closes [#835](https://github.com/Akryum/v-tooltip/issues/835) ([f2199da](https://github.com/Akryum/v-tooltip/commit/f2199da0f113dcdfb6a43382acf6bc17a8733727))
* duplicate hide events, closes [#376](https://github.com/Akryum/v-tooltip/issues/376) ([5a4ff05](https://github.com/Akryum/v-tooltip/commit/5a4ff05f6c15a2f9ea91b664c2322d047ce20554))
* silence popperNode() errors, closes [#828](https://github.com/Akryum/v-tooltip/issues/828) ([490600c](https://github.com/Akryum/v-tooltip/commit/490600c3fc0d90cfb5666c6ac26817a757acfb6c))


### Features

* autoMinSize => autoSize, autoMaxSize => autoBoundaryMaxSize, closes [#834](https://github.com/Akryum/v-tooltip/issues/834) ([b198353](https://github.com/Akryum/v-tooltip/commit/b198353f781a4a1552c2bf23b6fcf8ad48810536))




# [1.0.0-beta.9](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2022-02-09)


### Bug Fixes

* autoMaxSize - reset size to allow bestFit ([40dae98](https://github.com/Akryum/v-tooltip/commit/40dae98d01932beee568db0e071c6e77f2c83882))



# [1.0.0-beta.8](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2022-02-04)


### Bug Fixes

* max-size on inner > div ([3699726](https://github.com/Akryum/v-tooltip/commit/3699726e214e5b5dcfaf027037f6a5280f9505e2))



# [1.0.0-beta.7](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2022-02-01)


### Features

* backdrop element to improve autohide on mobile ([803dcca](https://github.com/Akryum/v-tooltip/commit/803dcca0bb655ab6201a6ab6063308bae91842a6))



# [1.0.0-beta.6](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2022-02-01)


### Features

* positioningDisabled + mobile example ([433118a](https://github.com/Akryum/v-tooltip/commit/433118a54be7762941c1eb09fec1a8e8e39dc556))



# [1.0.0-beta.5](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2022-01-15)


### Bug Fixes

* strategy prop not taken into account ([ab840b2](https://github.com/Akryum/v-tooltip/commit/ab840b2c0ef78729455520fb988c8dc210b2a404))



# [1.0.0-beta.4](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2022-01-15)


### Bug Fixes

* typo in module entry ([1b972d8](https://github.com/Akryum/v-tooltip/commit/1b972d8939aaf7851408f830966a23b4010789ce))



# [1.0.0-beta.3](https://github.com/Akryum/v-tooltip/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2022-01-15)


### Bug Fixes

* inner content behind inner arrow ([3ed3d30](https://github.com/Akryum/v-tooltip/commit/3ed3d302a9c4ea5b32d88eba7d4acb9fb265e737))



# [1.0.0-beta.2](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.20...v1.0.0-beta.2) (2022-01-15)


### Bug Fixes

* arrow hidding ([d9644c2](https://github.com/Akryum/v-tooltip/commit/d9644c2cd5f24188d72e9cfa6fd5d6030e5d0812))
* remove applyModifier ([7064757](https://github.com/Akryum/v-tooltip/commit/70647574b817db0bf0e58008efa3c1291f82fb35))


### Features

* arrowOverflow prop ([0ed3801](https://github.com/Akryum/v-tooltip/commit/0ed3801863b4654ef89d438ecb2b016fe6aad9ee))
* switch to floating-ui ([e28f594](https://github.com/Akryum/v-tooltip/commit/e28f5946c83904763b222cf9f6c7b56c4720f3e2))



# [1.0.0-beta.1](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.19...v1.0.0-beta.1) (2022-01-13)

- Renamed from `v-tooltip` to `floating-vue`
- Switched to floating-ui
