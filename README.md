# 🔍 Lost and Found Station
This `README.md` is for the fellow devs who contribute to this repo. Hope that it is clear enough 🔮

## 🏁 How to start the repo
First clone the repo to your local machine *(**Important**: Ensure that you have `git` already set up on your computer)*
```
git clone https://github.com/TheBluemist1404/lost-and-found-station-fe.git
cd lost-and-found-station-fe
```
Then initialize the project *(**Important**: Ensure that you have `npm` already set up on your computer)*
```
npm install
npm run dev
```

## 📚 Techstack

### 1. React TypeScript
We work with TypeScript since it is the industry standard, and provided with wide support from various libraries (including ones we use)

### 2. TailwindCSS
It is ok if you are not yet familiar with `TailwindCSS`, you may import plain `css` file as usual. But for those who have been used to the convention of `TailwindCSS`, it is setup for you

### 3. Tanstack Router
We are doing **MPA** (*Multi Page Application*) so Router is core. Here I decided to implement a *file-based router* with `Tanstack Router`, which means that the app routing would be identical to the *file-tree* of our project. Let's look at an example to makes thing clearer.
<img width="423" height="396" alt="image" src="https://github.com/user-attachments/assets/1a125457-2168-4769-84b3-bf1bb9f13926" />

At the moment the available routes are: `/`, `/login`, `/signup`, `/forum`, `/profile/:id` (admin is missing `index.tsx` at the moment). 

For the current setup:
- routes' file/ directory is prefixed with `~`
- No prefix means *ignored* file/directory
- `_` prefix means *layout route*, e.g `~_auth` is the layout route, so the return url is `/login`, not `/auth/login`

### 4. ESLint/ Husky
I have setup the linting so that the quality of each commit is guanranteed, which means that
- The code must be **well-structure** (don't worry if you don't know what does that mean, you would get it when encountering problems 🙈)
- The commit message must follow *conventional standard*, more detail at https://www.conventionalcommits.org/en/v1.0.0/
  - good commit message: `feat(forum): add filter by location`
  - bad commit message: `bad commit`, `fix: forum`
 
### 5. GitHub Branch Rules
Not quite a *techstack* but worth mentioned!. You are not allowed to push directly to main, but any changes must be merged through a **pull request**, and must be reviewed by the code owner (which is me *@TheBluemist1404*). We have not maxed out the safe guard since I want to keep it simple for you guys, but keep that in mind.

### 6. Git
I don't mean to mention it but please study `git` and use it well. The basic command like `git add`, `git commit`, `git push` should be some child plays, not ChatGPT plays 🍼
