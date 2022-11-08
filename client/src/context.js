import React, { Component } from 'react';
// import { blogData } from './BlogData';
import axiosInstance from './config';

export const Context = React.createContext();

export class ContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            portfolios: [],
            gdPortfolio: [],
            webPortfolio: [],
            fotoPortfolio: [],
            // category: [],
            categorySlide: [],
            itemPortfolio: [],
            slideStartNumber: 0,
            type: "",
            loading: true,
            blogData: [],
            blogDetailItem: []
        }
    }

    getData = async () => {
        await axiosInstance.get('/portfolio')
            .then((result) => {
                this.setState({ portfolios: result.data })

                let gdPortfolio = result.data.filter(item => item.category === 'graphic');
                let webPortfolio = result.data.filter(item => item.category === 'website');
                let fotoPortfolio = result.data.filter(item => item.category === 'photography');

                this.setState({
                    gdPortfolio, webPortfolio, fotoPortfolio, loading: false,
                })
            })
            .catch(error => console.log('Error Happen :', error))
    }

    getBlog = async () => {
        await axiosInstance.get('/blog')
        .then((blog) => {
            this.setState({blogData: blog.data})
        })
        .catch(error => console.log('Error Happen :', error))
    }

    componentDidMount() {
        this.getData()
        this.getBlog();
    }

    formatData = (items) => {
        let tempItems = items.map(temp => {
            let images = temp.fields.images.map(image => image.fields.file.url);
            let portfolio = { ...temp.fields, images }
            return portfolio
        })
        return tempItems
    }

    getItemPortfolio = (category, index) => {
        const tempPortfolio = this.state.portfolios
        const getPortfolio = tempPortfolio.filter(portfolio => portfolio.category === category)
        console.log('huhuh', category, index)
        this.setState({ categorySlide: getPortfolio, slideStartNumber: index })
    }

    getBlogId = (id) => {
        const tempBlog = this.state.blogData
        const blogItem = tempBlog.find(blog => blog._id === id)
        console.log('jht', (id), blogItem)
        this.setState({ blogDetailItem: blogItem })
    }


    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    getItemPortfolio: this.getItemPortfolio,
                    getBlogId: this.getBlogId
                }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ContextProvider



