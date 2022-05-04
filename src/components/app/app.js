import React, {Component} from "react";
import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {id:1, label: 'Значит, доктор Хэнк считает дневник — лекарством от всех болезней.', important: true, like: false},
                {id:2, label: 'Дневник — это возможность взглянуть на себя со стороны со временем.', important: false, like: false},
                {id:3, label: 'Жизнь каждого человека — это дневник, где он собирался писать одну историю, а пишет другую.', important: false, like: true},
                {id:4, label: 'Когда человек пишет, он начинает думать больше... или просто острее.', important: false, like: false},
                {id:5, label: 'Человек вечно копается в прошлом или заглядывает в будущее, а просто спокойно побыть в настоящем — такая редкость.', important: false, like: false},
                {id:6, label: 'Как прекрасен мир, являющийся к нам во снах. От загадочных глубин океана до сверкающих звёзд Вселенной…', important: false, like: false},
                {id:7, label: 'Все люди, посланные нам — это наше отражение.', important: false, like: false}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.maxId = 8;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            id: this.maxId++,
            label: body,
            important: false
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important}               //изменение like в новой строке
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like}               //изменение like в новой строке
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state
        const likedPosts = data.filter(item => item.like).length;
        const allPosts = data.length;

        return (
            <div className="app">
                <AppHeader 
                likedPosts1={likedPosts}
                allPosts1={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter/>                
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete1={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}