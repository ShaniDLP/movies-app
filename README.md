# Movies App

##  Summary
MoviesCity is a responsive, single-page web application that allows users to browse and discover movies based on filters like genre, rating, and release year. Users can also search by keyword and view detailed movie information in a modal.



##  Features

-  **Search** movies by keyword
-  **Filter** by genre, rating, and year
-  **Pagination** for browsing multiple results
-  **Expandable modal** for detailed movie info 




##  Tech Stack

- **React** + **TypeScript**
- **Redux Toolkit** & **Redux Toolkit Query**
- **Ant Design** (UI library)
- **Vite** 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=ant-design&logoColor=white)

##  How to Run

Clone or download this repository:
```bash
git clone https://github.com/ShaniDLP/movies-app/
cd movies-app
```
Create a .env file in the root of the project:
```bash
VITE_API_KEY=877a8244eab28ff3ee6007c4e5a5ddc9
```
Then run:

```bash
npm install
npm run dev
```

The application runs locally on:
http://localhost:5173/ (default Vite dev server)


## Possible Improvements
If given additional time, I would:
- Add error boundaries and retry logic
 - Add unit and integration tests with **Jest** and **React Testing Library**
- Add toast notifications for failed API calls
- Improve mobile responsiveness further 
- Add a theme switcher (dark/light toggle)
- Implement i18n support for multiple languages
- Make the movie detail modal accessible (ARIA roles, keyboard nav)

## Screenshots

<img width="1792" alt="Image" src="https://github.com/user-attachments/assets/7dea5778-2a95-4399-a816-32b47c3baf9e" />

<img width="1779" alt="Image" src="https://github.com/user-attachments/assets/a9ab36be-80e1-4c83-a0bf-a9d4bfc74e69" />

<img width="1178" alt="Image" src="https://github.com/user-attachments/assets/1cf1d202-74cf-4afb-9d3e-06bc65f6fef6" />

<img width="1147" alt="Image" src="https://github.com/user-attachments/assets/a6b4bd71-8514-423a-b863-63b62f9d835f" />

<img width="1764" alt="Image" src="https://github.com/user-attachments/assets/62af9067-bb89-4944-b8e7-498980be5930" />
