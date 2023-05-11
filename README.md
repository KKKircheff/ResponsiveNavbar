# ResponsiveNavbar

Built in:

- ReactJS
- TypeScript
- React Router v6
- SASS
- React-icons

Animated fully functional & responsive navigation drop-down with sub menus coded with React and typed with Typescript. The menu items are passed as props from the component above - App.tsx (React Contex could be integrated and used as well). 

App.tsx - The menu state lives in 'items' object in App.tsx. The 'items' object is passed through props to the Navigation component and dynamicaly rendered, so it's easy customize the menu names, urls and sub-menus. 'Item' is the Typescript interface typing 'items' - it could be refactored depending of the changes in 'items'. This makes easy to migrate 'Navigation.component.tsx' integration, in another component when needed and pass the state with props.

Navigation.component.tsx - Fully functional & responsive navigation drop-down component with sub menus.'Item' interface for 'items' types is imported from App.tsx. The component and the functions are typed according to the best coding practices - to be clear and readble.

Navigation.style.scss - the styling of the component is in SCSS so it is easy to customize the styles of the navbar even from a begginer.

Structure:

App.tsx
components/Navigation.component.tsx
components/Navigation.style.scss

Feel free to clone and use the code. Happy hacking! 

![image](https://github.com/KKKircheff/ResponsiveNavbar/assets/102865219/2f772222-6104-4ee9-bae7-d34cdb467357)

![image](https://github.com/KKKircheff/ResponsiveNavbar/assets/102865219/776107a9-c1fb-4172-88be-a88cffebb743)

