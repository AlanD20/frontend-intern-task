# Frontend Intern Task


**Here is [the task](TASK.md) instruction.**

Personally I believe sending an XHR request for every user input in the filter field is redundant. By taking advantage of caching, and then filtering in the client-side is better than sending requests upon every keystrokes to the server. Or, using a button also, fix the over-fetching problem. But, I did it with keystrokes as this solution is just a simple task.

I have implemented the local version for filtering, please refer to [commit #06687a6](https://github.com/AlanD20/frontend-intern-task/tree/06687a660b5174a090b839bb3fc08c0259d88749) as I used additional boolean property to track the filtered/unfiltered product but the down side was it only filtered the current page. Because current page was the only requested resource from the server.

## How To Use

Download or clone the repository
```bash
git clone https://www.github.com/AlanD20/frontend-intern-task.git
cd frontend-intern-task
```

Install and run the project
```
yarn install
yarn start
```

## Tools

I have used [Vitejs](https://vitejs.dev/) to create Reactjs App with Typescript, and using the following packages/tools as well.
- *Redux-toolkit* - State Management
- *Cypress* - Test Case
- *MUI* - UI Tool
- *axios* - Fetching data
- *React-Router-Dom v6* - URL Manipulation

## License
This repository is under [MIT LICENSE](LICENSE)
