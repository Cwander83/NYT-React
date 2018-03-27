import React, {Component} from "react";
import API from "../../utils/api";
import {Row, Container} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SearchBox from "../SearchBox";
import ResultBox from "../ResultsBox";
import SavedBox from "../SavedBox";

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
    };

    loadAllArticles = () => {
        API
            .getArticle()
            .then(res => this.setState({
                saved: res.data
            }))
            .catch(err => console.log(err));
    };

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        });
    };

    handleStartYearChange = (event) => {
        this.setState({
            startYear: event.target.value
        });
    };

    handleEndYearChange = (event) => {
        this.setState({
            endYear: event.target.value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        API
            .getArticles(this.state.topic, this.state.startYear, this.state.endYear)
            .then((res) => {
                this.setState({
                    articles: res.data.response.docs
                });
                
            });
    };

    handleSaveButton = (id) => {
        const findArticleByID = this
            .state
            .articles
            .find((element) => element._id === id);
        
        const newSave = {
            title: findArticleByID.headline.main,
            date: findArticleByID.pub_date,
            url: findArticleByID.web_url
        };
        API
            .saveArticle(newSave)
            .then(this.loadAllArticles());
    };

    handleDeleteButton = (id) => {
        API
            .deleteArticle(id)
            .then(this.loadAllArticles())
    };

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
                loadAllArticles={this.loadAllArticles}/>));
    };

    renderSaved = () => {
        return this
            .state
            .saved
            .map(save => (<SavedBox
                _id={save._id}
                key={save._id}
                title={save.title}
                date={save.date}
                url={save.url}
                handleDeleteButton={this.handleDeleteButton}
                loadAllArticles={this.loadAllArticles}/>));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Jumbotron>
                        <SearchBox
                            handleTopicChange={this.handleTopicChange}
                            handleStartYearChange={this.handleStartYearChange}
                            handleEndYearChange={this.handleEndYearChange}
                            handleFormSubmit={this.handleFormSubmit}
                            renderArticles={this.renderArticles}/>

                    </Jumbotron>
                </Row>

                <Row>
                    <Container>
                        <Row>
                            <Jumbotron>
                                <div className="col-lg-12">
                                    <div className="panel panel-muted">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">
                                                <strong>
                                                    <i className="fa fa-download" aria-hidden="true"></i>
                                                    Saved Articles</strong>
                                            </h3>
                                        </div>
                                        <div className="panel-body">
                                            <ul className="list-group">
                                                {this.renderSaved()}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Jumbotron>
                        </Row>
                    </Container>
                </Row>
            </Container>
        )
    }
}

export default Articles;