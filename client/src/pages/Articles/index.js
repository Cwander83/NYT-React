import React, {Component} from "react";
import API from "../../utils/api";
import {Row, Container} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SearchBox from "../SearchBox";
import ResultBox from "../ResultsBox";

class Articles extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: [],
        saved: []
    };

    componentDidMount() {
        this.loadAllArticles()
    }
    loadAllArticles = () => {
        API
            .getArticles()
            .then(res => this.setState({articles: res.data}))
            .catch(err => console.log(err));
    };

    handleTopicChange = (event) => {
        this.setState({topic: event.target.value});
    }

    handleStartYearChange = (event) => {
        this.setState({startYear: event.target.value});
    }

    handleEndYearChange = (event) => {
        this.setState({endYear: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.topic);
        API
            .getArticles(this.state.topic, this.state.startYear, this.state.endYear)
            .then((res) => {
                this.setState({articles: res.data.response.docs});
                console.log("this.state.articles: ", this.state.articles);
            });
    }

    handleSaveButton = (id) => {
        const findArticleByID = this
            .state
            .articles
            .find((element) => element._id === id);
        console.log("findArticleByID: ", findArticleByID);
        const newSave = {
            title: findArticleByID.headline.main,
            date: findArticleByID.pub_date,
            url: findArticleByID.web_url
        };
        API
            .saveArticle(newSave)
            .then(this.getSavedArticles());
    }

    renderArticles = () => {
        return this
            .state
            .articles
            .map(article => (<ResultBox
                _id={article._id}
                key={article._id}
                title={article.headline.main}
                date={article.pub_date}
                url={article.web_url}
                handleSaveButton={this.handleSaveButton}
                getSavedArticles={this.getSavedArticles}/>));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Jumbotron>
                        <SearchBox
                            handleTopicChange={this.handleTopicChange}
                            handleStartYearChange={this.handleStartYearChange}
                            handleEndYearChange={this.handleEndYearChange}
                            handleFormSubmit={this.handleFormSubmit}
                            renderArticles={this.renderArticles} />
                        
                    </Jumbotron>
                </Row>
                <Row>
                
                </Row>
            </Container>
        )
    }
}

export default Articles;