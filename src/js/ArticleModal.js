import { Modal } from "./Modal";

export class ArticleModal extends Modal {
  constructor(classes, {id, title, urlToImage, tags, content, date}) {
    super(classes)
    this.id = id;
    this.title = title;
    this.urlToImage = urlToImage;
    this.tags = tags;
    this.content = content;
    this.date = date;
  }

  generateArticle() {
    let template = '';
    let article = document.createElement('div');
    article.className = 'article-modal__content';
    article.setAttribute('data-id', this.id);

    this.urlToImage &&
    (template += `<img class = "strategy__image" src = ${this.urlToImage} alt = "strategy">`);

    if (this.title || this.tags) {
        template += '<div class="strategy__content">'

        this.title &&
        (template += `<h3 class="startegy__header">${this.title}</h3>`);

        if (this.tags) {
            template += `<div class="tags">`

            this.tags.map( tag => {
                template+= `<span class="tag tag_colored"> ${tag} </span>`
            })

            template += '</div>'
        }

        template += '</div>'
    }

    article.innerHTML = template;
    return article;
}
}