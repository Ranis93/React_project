import React from 'react';

import './app-header.css';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
      font-size: 26px;
      :hover {
          color: lime;
          cursor: pointer;
      }}
  h2 {font-size: 1.2rem;
    color: grey;}
`

const AppHeader = (props) => {
    const {allPosts1, likedPosts1} = props;
    return (
        //Превратил в ссылку. Необязательный атрибут
        <Header as='a' href="https://github.com/Ranis93">     
            <h1>Ranis Iskhakov</h1>
            <h2>{allPosts1} записей, из них понравилось {likedPosts1}</h2>
        </Header>
    )
}

// const AppHeader = () => {
//     return (
//         <div className='app-header d-flex'>
//             <h1>Ranis Iskhakov</h1>
//             <h2>5 записей, из них понравилось 0</h2>
//         </div>
//     )
// }

export default AppHeader;