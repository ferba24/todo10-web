# Todo10 website

New website for [Todo10](https://www.todo10.com/en/).

## [See the live demo](https://todo10-web.vercel.app/pricing)!

Used for this project:
- React
- Nextjs
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Framer motion](https://www.framer.com/motion/)

## Start server

To run on your machine you can clone this repo and run:
```bash
npm i && npm run dev
```

To start storybook (optional), run
```bash
npm run storybook
```
You can have both next and storybook servers running at the same time

## Extending steps

There are a some steps alongside the app. The information about these steps is located in /data/steps.
If you want to extend it, note that each steps references its "successor". So all you have to do is add
your step object and chain it to an existing one. There are some comments among them to help you. All the logic
is handled in the components inside /components/Stepper

Feel free to contact me at [lucas@lucassaid.me](mailto:lucas@lucassaid.me) if you need anything.