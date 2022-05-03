import React from "react";
import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'


const App = () => {

    const data = [
        {id:'as', label: 'Значит, доктор Хэнк считает дневник — лекарством от всех болезней.', important: true},
        {id:'df', label: 'Дневник — это возможность взглянуть на себя со стороны со временем.', important: false},
        {id:'gh', label: 'Жизнь каждого человека — это дневник, где он собирался писать одну историю, а пишет другую.', important: false},
        {id:'jk', label: 'Когда человек пишет, он начинает думать больше... или просто острее.', important: false},
        {id:'lz', label: 'Человек вечно копается в прошлом или заглядывает в будущее, а просто спокойно побыть в настоящем — такая редкость.', important: false},
        {id:'xc', label: 'Как прекрасен мир, являющийся к нам во снах. От загадочных глубин океана до сверкающих звёзд Вселенной…', important: false},
        {id:'vb', label: 'Все люди, посланные нам — это наше отражение.', important: false}
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>                
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;