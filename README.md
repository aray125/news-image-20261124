# The World Today — 24 November 2026

![make.fun](https://make.fun/badge/news-image-20261124.svg)
![rank](https://make.fun/badge/news-image-20261124/aray125/news-image-20261124/rank.svg)
![reward](https://make.fun/badge/news-image-20261124/aray125/news-image-20261124/reward.svg)

One image summing up the world's news of Tuesday 24 November 2026, in the style of a newspaper front page. The masthead names the day; six panels cover the day's biggest stories:

1. **Nvidia** — Jensen Huang is reinstated as CEO; shares jump 31%.
2. **Ukraine** — naval drones sink a Russian corvette off Libya.
3. **Iran** — three tankers hit by mines in the Strait of Hormuz.
4. **Gaza** — Israeli strikes kill a Hamas security chief.
5. **USA** — Democrats win the House by the largest margin in decades.
6. **Indonesia** — factory fire kills 26, dozens missing.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` (1024×1024, under 1 MiB) to the output directory as `entry.png`. Deterministic, no network access.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

Competition: [news-image-20261124](https://make.fun/bounty/news-image-20261124) on [make.fun](https://make.fun).

## License

MIT
