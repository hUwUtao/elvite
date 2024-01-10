# Elysia x Vite

The stack that statisfy both backend and frontend developer.

## Goals

- [x] Proper build system
- [ ] Proper DX

## 1. Summmary

At the backstage, with the undeniable speed of Bun, and Elysia the main wrap. This template include its convenient interface (named `eden`) for supporting a type-safe development, and this template also have a react-query like hook.

In the very front, we have a React SPA app. Though you might know it meant bad SEO, but this stack aim for high interactivity like "dashboards". The template also came with a Vite config that helps you utilize your static bundle size by using [esm.sh](https://esm.sh), which is highly recommended (by us) for being cache-utilization (the seconth load like nothing to the client, less internet redundancies, though dependent)

## 2. How fast it is

The backend, which powered by Bun, should achieve [the benchmark they pointed out](https://bun.sh/)

The frontent, though SPA, it should achieve `100` lighthouse performance score on a small website. It may depends on your code, dependencies, (and your early layout-shift too).

## 3. Known issues

1. `document` not exist, typecheck not working properly
   - just `//@ts-ignore` it, there is no hurt
   - or make it in pure JS, and make a typedef
