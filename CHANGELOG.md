# [3.0.0-beta.13](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2022-01-10)


### Bug Fixes

* default Dropdown padding too big ([a89155f](https://github.com/Akryum/v-tooltip/commit/a89155f0449aae2583598b552401d8e98a4d1704))



# [3.0.0-beta.12](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2022-01-07)


### Bug Fixes

* popperClass prop type ([9ffd7a4](https://github.com/Akryum/v-tooltip/commit/9ffd7a43683ce7c01de6e7c9dacdc495bf194a49))



# [3.0.0-beta.11](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2022-01-06)


### Features

* popperClass ([6e5b319](https://github.com/Akryum/v-tooltip/commit/6e5b3190457b4e1321a4de3ed47918637ee32add))



# [3.0.0-beta.10](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2022-01-06)


### Bug Fixes

* window not defined in non-browser envs ([4e12598](https://github.com/Akryum/v-tooltip/commit/4e125984b0e75dc18309461ad91ce340988c492d))



# [3.0.0-beta.9](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2022-01-06)


### Features

* hideAllPoppers ([a29afe5](https://github.com/Akryum/v-tooltip/commit/a29afe5cf3c4a39de7813e8d58e1907277fdbd1c))



# [3.0.0-beta.8](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2022-01-06)


### Bug Fixes

* better global close logic, fixes v-close-popper ([3939fe0](https://github.com/Akryum/v-tooltip/commit/3939fe0ef80d1c39c40b5478fa1ba1596bd977e5))


### Reverts

* Revert "fix: use global mouse down instead of click, closes #530" ([cfa740b](https://github.com/Akryum/v-tooltip/commit/cfa740b241a4c997ce043765b066ba9ab508bc6c)), closes [#530](https://github.com/Akryum/v-tooltip/issues/530)



# [3.0.0-beta.7](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2022-01-06)


### Bug Fixes

* bigger inner arrow to prevent visual seams between the arrow and the background ([5b2e76f](https://github.com/Akryum/v-tooltip/commit/5b2e76f5f787edffef8c37c6bf8b5bde721c073c))
* update popper position on window resize ([5f5aa5d](https://github.com/Akryum/v-tooltip/commit/5f5aa5d2014100e585f9a3b56fc8d841284f7917))
* use global mouse down instead of click, closes [#530](https://github.com/Akryum/v-tooltip/issues/530) ([fedfc9b](https://github.com/Akryum/v-tooltip/commit/fedfc9baa3ffe5263df633c3521b9649aa61dc1f))
* use passive: true for events, closes [#776](https://github.com/Akryum/v-tooltip/issues/776) ([6f9e7d1](https://github.com/Akryum/v-tooltip/commit/6f9e7d1823543c629e75bcf81a3b80d7ac372ac8))



# [3.0.0-beta.6](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2022-01-06)


### Features

* switch classes to v-popper__arrow-inner and v-popper__arrow-outer ([3f48173](https://github.com/Akryum/v-tooltip/commit/3f48173ca02202b8b500cc7060d8ef40ba5bfeb6))


### BREAKING CHANGES

- replace all `v-popper__arrow-border` to `v-popper__arrow-outer`
- replace all `v-popper__arrow` to `v-popper__arrow-inner`
- `v-popper__arrow-inner` (previously `v-popper__arrow`) is now hidden by default (tooltip or custom themes)
- `v-popper__arrow-outer` (previously `v-popper__arrow-border`) is now visible by default (tooltip or custom themes)



# [3.0.0-beta.5](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2022-01-06)


### Bug Fixes

* tooltip style with transparent background ([233af18](https://github.com/Akryum/v-tooltip/commit/233af18aa01d2b65c5425cd3bd968fa790ec4148))



# [3.0.0-beta.4](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2022-01-01)


### Features

* popper slot: hide prop ([14000eb](https://github.com/Akryum/v-tooltip/commit/14000eb2675414294a73c22547fb92a36ad9d8f6))



# [3.0.0-beta.3](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2022-01-01)


### Bug Fixes

* arrow regression ([067aa4b](https://github.com/Akryum/v-tooltip/commit/067aa4ba459a568af43f70f968dc64b8aa680076))



# [3.0.0-beta.2](https://github.com/Akryum/v-tooltip/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2022-01-01)


### Bug Fixes

* applyModifier ([6f54d1b](https://github.com/Akryum/v-tooltip/commit/6f54d1bd270b60e7666e4bc598a6b2745332dc1e))


### Features

* border + arrow border ([73c3a1e](https://github.com/Akryum/v-tooltip/commit/73c3a1e07a9b6f85757cf8b6cd5b6cf94c89035a))



# [3.0.0-beta.1](https://github.com/Akryum/v-tooltip/compare/v3.0.0-alpha.21...v3.0.0-beta.1) (2021-11-02)


### Bug Fixes

* babel not transpiling vue files ([9fb5723](https://github.com/Akryum/v-tooltip/commit/9fb5723dbfbdc599b47e93c02fb83dc260d37fb8))
* hide v-tooltip apps from vue-devtools 6 ([c21c8c8](https://github.com/Akryum/v-tooltip/commit/c21c8c8da16398cee6c697e82756a65ef34074e7))
* modifier.options undefined ([984b825](https://github.com/Akryum/v-tooltip/commit/984b825194a20abf928eb2c22adb0b1673c4a22b))



