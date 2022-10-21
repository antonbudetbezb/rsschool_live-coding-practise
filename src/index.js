import { Article } from "./js/Article";

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: `It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of using
        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
        \'Content here, content here\', making it look like readable English.`,
        date: '01.01.2020',
    }
]

window.onload = function() {
    if(data) {
        renderArticlesToDom();
    }

    //Tags
    addTagsClickHanlder();
}

function addTagsClickHanlder() {
    document.querySelector('.strategies__tags').addEventListener('click', (event) => {
        if (event.target.classList.contains('tag')) {
            let clickedTarget = event.target;
            removeSelectedTags();
            selectClickedTag(clickedTarget);

            if (clickedTarget.innerText == 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTags(clickedTarget.innerText);
            }
        }
    })
}

function removeSelectedTags() {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

function selectClickedTag(clickedTag) {
    clickedTag.classList.remove('tag_bordered');
    clickedTag.classList.add('tag_selected');
}

function showAllStrategies() {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

function filterStrategyBySelectedTags(selectedTag) {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden')
            }
        })
    })
}

function renderArticlesToDom() {
    const strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(article => strategiesWrapper.prepend(article.generateArticle()))
}

function getStrategiesWrapper() {
    return document.querySelector('.strategy-wrapper');
}

function generateArticles (data) {
    let articles = [];
    data.forEach(article => {
        articles.push(new Article(article));
    })
    return articles;
}